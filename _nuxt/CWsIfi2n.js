import{_ as m}from"./SMfrPFEP.js";import{e as v,r as a,N as f,g as n,o as l,c,a as d,Y as _,F as y,f as k,_ as g}from"./E5Lotu8k.js";import"./UDctBORl.js";import"./BdgofhbO.js";import"./BqFxQJAm.js";import"./ZRYFhDTm.js";import"./CL06THH1.js";import"./CJFQgAGB.js";const $=["src"],M=v({__name:"MediaVideo",props:{src:{},cover:{}},emits:["playing"],setup(B,{emit:i}){const u=i,o=a(!1),r=a(null);return f(()=>o.value,s=>{if(u("playing",s),!r.value)return!1;s?r.value.play():r.value.pause()}),(s,e)=>{const p=m;return!s.cover||n(o)?(l(),c(y,{key:0},[d("video",{ref_key:"videoRef",ref:r,src:s.src,autoplay:"",onClick:e[0]||(e[0]=t=>o.value=!n(o)),onMouseover:e[1]||(e[1]=t=>o.value=!0),onMouseleave:e[2]||(e[2]=t=>o.value=!1)},null,40,$),_(s.$slots,"default",{},void 0,!0)],64)):(l(),k(p,{key:1,src:s.cover,onMouseover:e[3]||(e[3]=t=>o.value=!0)},null,8,["src"]))}}}),P=g(M,[["__scopeId","data-v-7cca39fc"]]);export{P as default};