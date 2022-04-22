import { us2px, CLIP_TYPE, OTHER_TRACK_HEIGHT, VIDEO_TRACK_HEIGHT, TRACK_TYPE } from '@/utils'
import { Track as TrackClass } from '@/utils/classes'
import { defineStore } from 'pinia'
import { Clip, Track, Timeline } from '@/types'
import mockTimeline from '@/mock/timeline'
export interface TimelineState {
  tlData: Timeline
  curClips: Set<Clip>
  curTracks: Set<Track>
  isDragging: boolean
}

export interface TimelineStore extends TimelineState {
  addCurClip: (clip: Clip) => void
  removeCurClip: (clip: Clip) => void
  clearCurClip: () => void
  addCurTracks: (track: Track) => void
  removeCurTracks: (track: Track) => void
  clearCurTracks: () => void
  setDragging: (isDragging: boolean) => void
  getSings: () => [number, number][]
  getMinMax: () => [number, number]
  moveCurClips: (offsetUs: number, offsetYPx: number) => void
  isSameTrack: () => boolean
}

export const useTimelineStore = defineStore('timeline', {
  state: (): TimelineState => ({
    tlData: mockTimeline(8),
    curClips: new Set(),
    curTracks: new Set(),
    isDragging: false
  }),
  actions: {
    setDragging(isDragging: boolean) {
      this.isDragging = !!isDragging
    },
    addCurClip(clip: Clip) {
      this.curClips.add(clip)
    },
    removeCurClip(clip: Clip) {
      this.curClips.delete(clip)
    },
    clearCurClip() {
      this.curClips.clear()
    },

    addCurTracks(track: Track) {
      this.curTracks.add(track)
    },
    removeCurTracks(track: Track) {
      this.curTracks.delete(track)
    },
    clearCurTracks() {
      this.curTracks.clear()
    },

    /**
     * 获取吸附点, 不关联滚动条位置！ TODO: 目前是全量计算
     * @returns [[us, px], [us, px]]所有的吸附点，point表示时刻，px表示位置
     */
    getSings(): [number, number][] {
      const { tracks } = this.tlData
      const sings = new Map()
      tracks.forEach(track => {
        track.clips.forEach(clip => {
          if (!this.curClips.has(clip)) {
            sings.set(clip.inPoint, us2px(clip.inPoint))
            sings.set(clip.outPoint, us2px(clip.outPoint))
          }
        })
      })
      return [...sings.entries()]
    },
    /**
     * 获取选中的clip中，最大、最小的point
     */
    getMinMax() {
      let res: [number, number] = [Infinity, -Infinity]
      this.curClips.forEach(clip => {
        const [min, max] = res
        if (clip.inPoint < min) res[0] = clip.inPoint
        if (clip.outPoint > max) res[1] = clip.outPoint
      })
      return res
    },
    getCurClipType() {
      let type: string = ''
      this.curClips.forEach(clip => {
        type = clip.type
      })
      return type
    },
    // 当前选中的clip是否为同轨道
    isSameTrack(): boolean {
      return [...this.curClips].every((clip, _, arr) => clip.trackId === arr[0].trackId)
    },
    // 移动当前选中的clips
    moveCurClips(offsetUs: number, offsetY: number) {
      this.curClips.forEach(clip => {
        clip.outPoint += Math.max(-clip.inPoint, offsetUs)
        clip.inPoint += Math.max(-clip.inPoint, offsetUs)
      })
      if (!offsetY) return
      // 不同类型的clip不支持多选跨轨道
      const trackHeight = this.getCurClipType() === CLIP_TYPE.VIDEO ? VIDEO_TRACK_HEIGHT : OTHER_TRACK_HEIGHT
      console.log(offsetY)
      console.log('移动到别的轨道')
      const indexDiff = offsetY / trackHeight // 向上/下移动几条轨道
      this.curClips.forEach(clip => {
        const oldTrack = this.getTrackFromClip(clip)
        if (!oldTrack) throw new Error('No track found')
        const oldTrackIndex = this.tlData.tracks.indexOf(oldTrack)
        const index = oldTrack.clips.indexOf(clip)
        oldTrack.clips.splice(index, 1)
        let newTrack: Track
        if (offsetY % trackHeight === 0) {
          // 移动到别的轨道
          newTrack = this.tlData.tracks[oldTrackIndex + indexDiff]
        } else {
          newTrack = new TrackClass(oldTrack.type)
          this.tlData.tracks.splice(oldTrackIndex + indexDiff + 0.5, 0, newTrack)
        }
        clip.trackId = newTrack.id
        newTrack.clips.push(clip)
      })
      this.clearTrackWithNoClip()
    },
    // 删除选中的clip
    deleteCurClips() {
      const deleted: Clip[] = []
      this.curClips.forEach(clip => {
        deleted.push(clip)
        const track = this.getTrackFromClip(clip)
        if (!track) throw new Error('No track found')
        const index = track.clips.indexOf(clip)
        track.clips.splice(index, 1)
      })
      return deleted
    },
    /**
     * 获取clip所在轨道
     * @param clip 
     * @returns { track, index } 所处的轨道， clip在轨道中的索引
     */
    getTrackFromClip(clip: Clip) {
      return this.tlData.tracks.find(t => t.id === clip.trackId)
    },
    // 清理没有clip的轨道
    clearTrackWithNoClip() {
      for (let i = 0; i < this.tlData.tracks.length; i++) {
        const track = this.tlData.tracks[i]
        if (track.clips.length === 0) {
          this.tlData.tracks.splice(i, 1)
          i--
        }
      }
    }
  }
})