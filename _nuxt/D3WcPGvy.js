import{_ as S}from"./jOQu9Q66.js";import v from"./CpfT2tfr.js";import F from"./BjBiRQp_.js";import{e as g,r as C,N as B,o as n,f as i,w as t,$ as o,b as f,g as _,c as I,F as M,a1 as D,_ as h,i as m,a2 as c}from"./C69fWWsL.js";import w from"./WmwLrzMA.js";import A from"./D-WoWwpw.js";import{S as E,a as x}from"./BHOWDXmv.js";const N=g({__name:"InstagramMediaAlbum",props:{media:{},user:{},isFromDetail:{type:Boolean}},setup(l){const e=l,u=C(!1);B(()=>e.media.list,()=>{let a=!1;for(const s of e.media.list)s.isEditing;u.value=a},{deep:!0});function r(a){e.media.listIndex=a.activeIndex}return(a,s)=>{const d=V,y=w,b=A;return n(),i(b,{type:"album",media:a.media},{actions:t(()=>[o(a.$slots,"actions",{},void 0,!0)]),default:t(()=>[f(_(E),{"initial-slide":a.media.listIndex,onSlideChange:r},{default:t(()=>[(n(!0),I(M,null,D(a.media.list,(p,$)=>(n(),i(_(x),{key:$},{default:t(()=>[(n(),i(d,{key:p.id,"context-menu":!1,media:p,user:a.user},{default:t(()=>[o(a.$slots,"single-post",{},void 0,!0)]),_:2},1032,["media","user"]))]),_:2},1024))),128))]),_:3},8,["initial-slide"]),f(y,{index:a.media.currentIndex,max:a.media.itemsCount},null,8,["index","max"]),o(a.$slots,"link",{},void 0,!0)]),_:3},8,["media"])}}}),k=h(N,[["__scopeId","data-v-2b0a7a9c"]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),V=g({__name:"InstagramMedia",props:{user:{},media:{},isFromDetail:{type:Boolean},contextMenu:{type:Boolean}},setup(l){return(e,u)=>{const r=S,a=v,s=k,d=F;return n(),I(M,null,[(n(),i(c,null,{default:t(()=>[e.media.type==="image"?(n(),i(r,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),(n(),i(c,null,{default:t(()=>[e.media.type==="video"?(n(),i(a,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,"cover-selector":""},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)]),_:3})),e.media.type==="album"?(n(),i(s,{key:0,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media,user:e.user},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media","user"])):m("",!0),e.media.type==="iframe"?(n(),i(d,{key:1,"is-from-detail":e.isFromDetail,"context-menu":e.contextMenu,media:e.media},{link:t(()=>[o(e.$slots,"link")]),_:3},8,["is-from-detail","context-menu","media"])):m("",!0)],64)}}});export{G as I,V as _};
