import k from"./C7qmbt9M.js";import C from"./By9xg0EU.js";import{_ as $}from"./C2AGh1lB.js";import b from"./BEJs_2ql.js";import{e as w,r as a,n as B,N as T,au as F,o as m,f as n,w as c,$ as u,g as p,c as S,F as V,b as L,i as f,av as N,_ as P}from"./CZ8OrWeD.js";import{I as j}from"./DDloN_GV.js";import"./DbdEy-8v.js";import"./Dt3BXZqw.js";import"./CICXMCJv.js";import"./kj6G9enL.js";import"./D2576Hju.js";import"./D62RwWl1.js";import"./O83sjDX3.js";import"./CiT52j91.js";import"./BOMMOxyw.js";import"./9_2D0NQj.js";import"./Ca6G7tBk.js";import"./CEo_X5Fx.js";import"./D5VD3A-n.js";import"./i4wK8B8V.js";import"./CezezNTt.js";import"./DHhiJtFg.js";import"./CKchPU4C.js";import"./ChW4aRUC.js";import"./CbL56JZW.js";import"./DHIA13N8.js";import"./uBX6PR9z.js";import"./tEDXTZRy.js";import"./B6_JZYkr.js";import"./CXbCTDBj.js";import"./DdGJ1CBF.js";import"./Bi7tGMJh.js";import"./D6AIpVnE.js";import"./CXL15gE-.js";import"./KfZVIN5H.js";import"./uMtDjCZI.js";import"./o16tQUbs.js";import"./BYINqc6s.js";import"./DgtD3YWR.js";import"./DVZxm7VY.js";import"./DjCTQf3a.js";import"./Cd0m5BBb.js";import"./ui-G26n8.js";import"./D3j0TLhE.js";import"./N5QPGbJv.js";import"./U0fnErPe.js";import"./9K-FGA1f.js";import"./D3V3Ry5E.js";import"./D8P12WXU.js";import"./Bb-hTYoJ.js";import"./DkkypNY9.js";import"./CRnJge3H.js";import"./f77RelUe.js";const x=w({__name:"InstagramMediaVideo",props:{media:{},isFromDetail:{type:Boolean},coverSelector:{type:Boolean},playable:{type:Boolean}},setup(v){const t=v,r=a(!1),s=a(t.media.rawFilePath),o=a(null),l=a(0);async function _(e){e&&(t.media.from==="client"&&(t.media.fetch(),s.value=await N(t.media)),t.media.user.hasLocalChanges)}function y(e){o.value&&(o.value.currentTime=e,t.media.setCoverTime(e))}return B(()=>{o.value&&o.value.addEventListener("loadedmetadata",()=>{!o.value||typeof t.media.cover=="object"||t.media.cover||(o.value.currentTime=t.media.coverTime,l.value=o.value.duration)},!1)}),T(()=>r.value,e=>{if(!o.value||!t.playable)return!1;e?o.value.play():o.value.pause()}),(e,i)=>{const g=k,I=C,M=$,h=b;return F((m(),n(h,{type:"video",media:e.media},{actions:c(()=>[u(e.$slots,"actions",{},void 0,!0)]),default:c(()=>[!e.media.cover||e.media.coverTime||p(r)?(m(),S(V,{key:0},[L(g,{ref_key:"videoRef",ref:o,src:p(s),onPlaying:i[0]||(i[0]=d=>r.value=d)},null,8,["src"]),e.coverSelector?(m(),n(I,{key:0,media:e.media,"max-length":p(l),onUpdateCoverTime:y},null,8,["media","max-length"])):f("",!0)],64)):typeof e.media.cover=="object"?(m(),n(M,{key:1,media:e.media.cover,onMouseover:i[1]||(i[1]=d=>r.value=!0)},null,8,["media"])):f("",!0),u(e.$slots,"link",{},void 0,!0)]),_:3},8,["media"])),[[j,_]])}}}),xe=P(x,[["__scopeId","data-v-728f3cbf"]]);export{xe as default};
