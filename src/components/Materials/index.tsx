import React, { Component } from 'react'
import styles from './index.module.scss'
import Icon from '../Icon'
import classNames from 'classnames';

const LIST = [
  { type: 'media', icon: 'perm_media', label: '库' },
  { type: 'caption', icon: 'subtitles', label: '字幕' },
  // { type: 'filter', icon: 'blur_circular', label: '滤镜' },
  { type: 'theme', icon: 'palette', label: '主题' }
]
export default class Title extends Component {
  state: { selectedType: string }
  constructor (props: object) {
    super(props)
    this.state = {
      selectedType: 'media',
    }
  }

  render() {
    const { selectedType } = this.state
    const getClassName = (item: { type: string }) => classNames({ [styles.selected]: selectedType === item.type })
    return (
      <section className={styles.materials}>
        <nav>
          {LIST.map(item => (
            <li
              key={item.type}
              className={getClassName(item)}
              onClick={() => this.setState({ selectedType: item.type })}
            >
              <Icon name={item.icon} />
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </nav>
        <div className={styles.list}>
          {selectedType}
        </div>
      </section>
    )
  }
}