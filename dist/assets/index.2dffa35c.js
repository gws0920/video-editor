var ge=Object.defineProperty,_e=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var z=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,X=(t,e)=>{for(var s in e||(e={}))xe.call(e,s)&&z(t,s,e[s]);if(Q)for(var s of Q(e))Te.call(e,s)&&z(t,s,e[s]);return t},ee=(t,e)=>_e(t,Ee(e));var p=(t,e,s)=>(z(t,typeof e!="symbol"?e+"":e,s),s);import{j as te,r as h,c as ye,G as A,I as Se,R as ne,a as Ie,T as Pe,b as ve,S as se,L as oe,d as Fe,e as Re,f as be}from"./vendor.4b48131c.js";const ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};ke();const Ce="_editor_15frr_1";var Oe={editor:Ce};const De="_title_19360_1",we="_label_19360_21";var ie={title:De,label:we};const Ne="_icon_yx0fb_1";var Le={icon:Ne};const o=te.exports.jsx,f=te.exports.jsxs;function I({className:t="",name:e,onClick:s}){return o("span",{className:`material-icons material-icons-outlined ${t} ${Le.icon}`,onClick:s,children:e})}class Me extends h.exports.Component{render(){return o("header",{className:ie.title,children:o("nav",{children:f("li",{children:[o(I,{name:"arrow_back"}),o("span",{className:ie.label,children:"\u8FD4\u56DE"})]})})})}}const Ge="_materials_18l9w_1",$e="_selected_18l9w_17",Be="_label_18l9w_23",Ae="_list_18l9w_26",Ue="_item_18l9w_37",Ve="_preview_18l9w_41";var N={materials:Ge,selected:$e,label:Be,list:Ae,item:Ue,preview:Ve},W;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE"})(W||(W={}));const je="http://localhost:3000";function He(t,e,s,i){return fetch(`${je}${t}`,{method:e||W.GET,body:s,headers:i}).then(n=>n.ok?n.json():Promise.reject(new Error("\u8FD4\u56DE\u6CA1\u6709ok"))).then(n=>n.code===200?n.data:(console.error(`\u8FD4\u56DE\u9519\u8BEF\uFF1A${n.code}`,n),Promise.reject(new Error(n.err||n.message)))).catch(n=>(console.error("\u51FA\u9519\u4E86",n),Promise.reject(new Error(n))))}const ze=(t,e)=>(s,i)=>He(t,e,s,i),re={test:ze("/test")};var P;(function(t){t.media="media",t.caption="caption",t.theme="theme"})(P||(P={}));var k;(function(t){t.VIDEO="videoTrack",t.AUDIO="audioTrack",t.CAPTION="captionTrack"})(k||(k={}));var L;(function(t){t.VIDEO="video",t.IMAGE="image"})(L||(L={}));const le=25,V=[{STEP:15,TIME:1e6/le,GROUP:10},{STEP:12,TIME:1e6/10,GROUP:10},{STEP:14,TIME:1e6,GROUP:10},{STEP:16,TIME:2e6,GROUP:10},{STEP:18,TIME:3e6,GROUP:10},{STEP:16,TIME:6e6,GROUP:10}],m=80,M=4,F=2,ce=["f2e779","f2d879","79f282","79f2b4"],ae="Thumbnail_Group";function We(t){const e=~~(t%1e6/1e6*le),s=Math.floor(t/1e6),i=Math.floor(s/60),n=Math.floor(i/60);return`${C(n)}:${C(i%60)}:${C(s%60)}:${C(e)}`}function Ye(t){const e=Math.floor(t/1e6),s=Math.floor(e/60),i=Math.floor(s/60);return`${C(i)}:${C(s%60)}:${C(e%60)}`}function C(t,e=2){return(Array(e).join("0")+t).slice(-e)}function Y(t,e=3){const{STEP:s,TIME:i}=V[e];return s/i*t}function q(t,e=3){const{STEP:s,TIME:i}=V[e];return~~(i/s*t)}function U(){function t(){return((1+Math.random())*65536|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}const qe=[{type:P.media,icon:"perm_media",label:"\u5E93"},{type:P.caption,icon:"subtitles",label:"\u5B57\u5E55"},{type:P.theme,icon:"palette",label:"\u4E3B\u9898"}];class Ke extends h.exports.Component{constructor(e){super(e);p(this,"state");p(this,"ref");p(this,"onChange",e=>{const{selectedType:s}=this.state,{type:i}=e;if(i===s)return;this.setState({selectedType:e.type});const{isGot:n}=this.state[i];n||(console.log("\u8FD8\u6CA1\u6709\u8BF7\u6C42\u8FC7"),re.test().then(r=>{const u={isGot:!0,total:r.length,list:r};this.setState({[i]:u})}))});this.ref=null,this.state={selectedType:P.media,height:0,[P.media]:{isGot:!1,total:0,list:[]},[P.caption]:{isGot:!1,total:0,list:[]},[P.theme]:{isGot:!1,total:0,list:[]}}}componentDidMount(){if(this.ref){const{height:e}=this.ref.getBoundingClientRect();this.setState({height:e})}re.test().then(e=>{const s={isGot:!0,total:e.length,list:e};this.setState({media:s})})}render(){const{selectedType:e,height:s}=this.state,i=n=>ye({[N.selected]:e===n.type});return f("section",{className:N.materials,ref:n=>this.ref=n,children:[o("nav",{children:qe.map(n=>f("li",{className:i(n),onClick:()=>this.onChange(n),children:[o(I,{name:n.icon}),o("span",{className:N.label,children:n.label})]},n.type))}),o("div",{className:N.list,style:{height:s+"px"},children:this.state[e].list.map(n=>f("div",{className:N.item,children:[f("div",{className:N.preview,children:[o("img",{src:n.url,alt:""}),o("time",{children:Ye(n.duration)})]}),o("span",{children:n.name})]},n.id))})]})}}const Je="_monitor_16bsz_1",Ze="_mCanvas_16bsz_7",Qe="_controls_16bsz_20",Xe="_handles_16bsz_26";var K={monitor:Je,mCanvas:Ze,controls:Qe,handles:Xe};class et extends h.exports.Component{constructor(e){super(e);p(this,"state");p(this,"ref");this.state={isPlaying:!1},this.ref=null}componentDidMount(){if(this.ref){const{height:e}=this.ref.getBoundingClientRect();this.ref.style.width=e/9*16+"px"}}render(){return this.state,f("section",{className:K.monitor,children:[o("div",{className:K.mCanvas,ref:e=>this.ref=e,children:o("canvas",{width:"960",height:"540"})}),o("div",{className:K.controls})]})}}const tt="_timeline_1yohp_1",nt="_rulerStage_1yohp_25",st="_trackItem_1yohp_38",ot="_container_1yohp_46",it="_trackListScroll_1yohp_52",rt="_stage_1yohp_55";var G={timeline:tt,rulerStage:nt,trackItem:st,container:ot,trackListScroll:it,stage:rt};const lt="_controls_1uilk_1",ct="_left_1uilk_7",at="_right_1uilk_7";var J={controls:lt,left:ct,right:at};function ut({changeRulerLevel:t,onTest:e}){return f("nav",{className:J.controls,children:[f("div",{className:J.left,children:[o("li",{children:o(I,{name:"undo"})}),o("li",{children:o(I,{name:"redo"})}),o("li",{children:o(I,{name:"delete"})}),o("li",{children:o(I,{name:"content_cut"})}),o("li",{onClick:e,children:o(I,{name:"bug_report"})})]}),f("div",{className:J.right,children:[o(I,{name:"remove",onClick:()=>t(-1)}),"\u65F6\u7801\u7EBF\u7F29\u653E\u6BD4\u7387",o(I,{name:"add",onClick:()=>t(1)})]})]})}function dt(t){const{level:e,clip:s}=t,[i,n]=h.exports.useState([]),{trimIn:r,trimOut:u,speed:_,duration:v,thumbnail:g,inPoint:O,outPoint:T}=s,E=(m-M-F*2)/9*16,l=Y(T-O,e),y=async()=>{let a=0;const S=[];let D=0;for(;a<l;){const $=g.replace("#color#",ce[D%ce.length])+(~~(q(a,e)/1e6)||"00"),j=await ht($);S.push({img:j,x:a}),a+=E,D++}return S};return h.exports.useEffect(()=>{y().then(a=>{n(a),console.log("\u66F4\u65B0\u7F29\u7565\u56FE",s.name)})},[s,e]),o(A,{clip:{x:F,y:F,width:l-F*2,height:m-F*2},name:ae,width:l-F*2,children:i.map(a=>o(Se,{image:a.img,x:a.x,y:0,width:E,height:m-M-F},a.x))})}const ht=t=>new Promise((e,s)=>{const i=new window.Image;i.src=t,i.onload=()=>{e(i)},i.onerror=()=>s(i)});class mt extends ne.Component{constructor(e){super(e);p(this,"groupRef");p(this,"transformerRef");p(this,"rectRef");p(this,"state");p(this,"onTransform",e=>{});p(this,"dragBoundFunc",(e,s)=>{const{offsetY:i}=s,n=Math.abs(i%m-m);if(n<m/4||n>m/4*3){const r=Math.round(i/m)*m-m/2;return this.props.setHorizontalLine(r+m/2),{x:e.x,y:r}}return this.props.setHorizontalLine(!1),{x:e.x,y:Math.floor(i/m)*m}});p(this,"onDragEnd",()=>{if(this.groupRef){const{level:e,clip:s,dragEndClip:i,trackIndex:n}=this.props,{x:r,y:u}=this.groupRef.attrs,_=q(r,e),v=ee(X({},s),{inPoint:_,outPoint:_+s.duration}),g=u/m;i(s,v,n,g)}this.props.setHorizontalLine(!1)});this.groupRef=null,this.transformerRef=null,this.rectRef=null,this.state={scale:{x:1,y:1}}}render(){const{selectedId:e,clip:s,trackIndex:i,level:n,scrollX:r}=this.props,{inPoint:u,outPoint:_,duration:v,id:g,name:O}=s,{scale:T}=this.state,E=Y(v,n);return f(A,{children:[f(A,{ref:l=>this.groupRef=l,draggable:!0,name:O,id:g,x:Y(u,n)-r,y:i*m+M/2,width:E,height:m-M,onTransform:this.onTransform,dragBoundFunc:this.dragBoundFunc,onDragEnd:this.onDragEnd,scale:T,offsetY:M/2,children:[o(Ie,{x:0,y:0,ref:l=>this.rectRef=l,width:E,height:m-M,cornerRadius:4,fill:"#999",strokeWidth:F,stroke:e===s.id?"red":"#666"}),o(dt,{clip:s,level:n}),o(A,{clip:{x:0,y:0,width:E-20,height:20},x:10,y:10,children:o(Pe,{text:s.name||"\u7247\u6BB5\u540D\u79F0",fontSize:15,x:0,y:0,fill:"white"})})]}),e===s.id&&o(ve,{ref:l=>this.transformerRef=l,nodes:[this.groupRef],rotateEnabled:!1,enabledAnchors:["middle-left","middle-right"],keepRatio:!1,borderEnabled:!1,anchorSize:20})]})}}function ft({x:t=0,y:e=0,rulerHeight:s,width:i,height:n=15,level:r=3,scrollX:u=0,className:_,style:v}){const{STEP:g,TIME:O,GROUP:T}=V[r],E=(l,y)=>{l.beginPath(),l._context.font="13px bold",l._context.fillStyle="rgba(255, 255, 255, 0.5)",l.moveTo(t,e+n),l.lineTo(i,e+n);let a=t+~~(u/g)*g;for(;a-u<i;){if(l.moveTo(a-u,e+n),(a-t)/g%T==0){l.lineTo(a-u,e);const D=q(u+a-u,r);l.fillText(We(D),a-35-u,e-10)}else l.lineTo(a-u,e+n/2);a+=g}l.closePath(),l.fillStrokeShape(y)};return o(se,{className:_,width:i-140,height:s,style:v,children:o(oe,{x:t,y:e,children:o(Fe,{stroke:"rgba(255, 255, 255, 0.5)",sceneFunc:E,strokeWidth:1,y:e+30,x:0})})})}const pt=[{type:k.VIDEO,id:U(),clips:[{inPoint:0,outPoint:2e6,duration:2e6,trimIn:0,trimOut:2e6,speed:1,id:"1",name:"\u7B2C\u4E00\u4E2A",thumbnail:"https://dummyimage.com/480x270/#color#/FFFFFF&text=",mediaType:L.VIDEO}]},{type:k.VIDEO,id:U(),clips:[{inPoint:0,outPoint:5e6,duration:5e6,trimIn:0,trimOut:5e6,speed:1,id:"2",name:"\u7B2C\u4E8C\u4E2A",thumbnail:"https://dummyimage.com/480x270/#color#/FFFFFF&text=",mediaType:L.VIDEO}]},{type:k.VIDEO,id:U(),clips:[{inPoint:0,outPoint:3e7,duration:3e7,trimIn:0,trimOut:3e7,speed:1,id:"3",name:"\u7B2C\u4E09\u4E2A",thumbnail:"https://dummyimage.com/480x270/#color#/FFFFFF&text=",mediaType:L.VIDEO}]},{type:k.VIDEO,id:U(),clips:[{inPoint:0,outPoint:8e6,duration:8e6,trimIn:0,trimOut:8e6,speed:1,id:"4",name:"\u7B2C\u56DB\u4E2A",thumbnail:"https://dummyimage.com/480x270/#color#/FFFFFF&text=",mediaType:L.VIDEO}]}],gt=50,_t=500;function Et(){const[t,e]=h.exports.useState(""),[s,i]=h.exports.useState(0),n=h.exports.createRef(),[r,u]=h.exports.useState(window.innerWidth-2),[_,v]=h.exports.useState(0),[g,O]=h.exports.useState(0),[T,E]=h.exports.useState(2),l=h.exports.createRef(),y=h.exports.createRef(),a=h.exports.createRef(),[S,D]=h.exports.useState(pt),[$,j]=h.exports.useState(!1),[Tt,ue]=h.exports.useState(!1);h.exports.useEffect(()=>{const d=n.current;d&&i(d.getBoundingClientRect().height-2)});const Z=d=>{if(!d)return;const{scrollLeft:c,scrollTop:x}=d.target;v(c),O(x),l&&l.current&&l.current!==d.target&&(l.current.scrollTop=x),y&&y.current&&y.current!==d.target&&(y.current.scrollTop=x)},de=d=>{let c=Math.min(T+d,V.length-1);c=Math.max(0,c),E(c)},he=(d,c,x,w)=>{const R=[...S],B=R[x],fe=B.clips.indexOf(d);if(B.clips.splice(fe,1),w%1==.5){const b={type:k.VIDEO,clips:[c],id:U()};R.splice(Math.ceil(w),0,b)}else{const b=R[w];let H=b.clips.findIndex(pe=>pe.inPoint>c.inPoint);H===-1&&(H=b.clips.length),b.clips.splice(H,0,c)}D(R.filter(b=>b.clips.length))},me=d=>{var w,R,B;let c=(w=d==null?void 0:d.target)==null?void 0:w.parent;((R=c==null?void 0:c.attrs)==null?void 0:R.name)===ae&&(c=c==null?void 0:c.parent),console.log(d);const x=(B=c==null?void 0:c.attrs)==null?void 0:B.id;e(x)};return f("section",{className:G.timeline,children:[o(ut,{changeRulerLevel:de,onTest:()=>console.log(S,a)}),o(ft,{className:G.rulerStage,rulerHeight:gt,style:{marginLeft:140+"px"},width:r,scrollX:_,level:T}),f("main",{ref:n,style:{width:r+"px"},children:[o("aside",{onScroll:Z,ref:l,style:{height:s+"px"},children:S.map((d,c)=>o("div",{className:G.trackItem,style:{height:m+"px"},children:c},c))}),o("div",{ref:y,className:G.container,style:{height:s+"px"},onScroll:Z,children:o("div",{className:G.trackListScroll,children:o(se,{className:G.stage,width:r-140+_t*2,height:S.length*m,style:{transform:`translate(${_}px, 0)`},onClick:me,ref:a,children:f(oe,{children:[$!==!1&&o(Re,{points:[0,+$,r,+$],stroke:"green",strokeWidth:2,lineJoin:"round",dash:[26,10]}),S.map((d,c)=>o(A,{children:d.clips.map(x=>o(mt,{selectedId:t,clip:x,trackIndex:c,level:T,scrollX:_,setHorizontalLine:j,setVerticalLine:ue,dragEndClip:he},x.id))},d.id))]})})})})]})]})}class xt extends h.exports.Component{render(){return f("div",{className:Oe.editor,children:[o(Me,{}),f("main",{children:[o(Ke,{}),o(et,{})]}),o(Et,{})]})}}be.render(o(ne.StrictMode,{children:o(xt,{})}),document.getElementById("root"));
