import m from"./mrF2AKiL.js";import{e as c,r as f,N as d,o as _,f as b,w as g,b as h,g as o,aK as E,a3 as P}from"./E5Lotu8k.js";import{_ as y}from"./BkNcS6cz.js";const k=c({__name:"InstagramUserProfileDescription",props:{user:{}},emits:["update"],setup(t,{emit:l}){const n=t,s=l,e=f(n.user.profile.biography??"");d(()=>n.user.profile.biography,a=>{e.value=a});function i(){s("update",e.value)}return(a,r)=>{const p=m;return _(),b(p,null,{default:g(()=>[h(o(y),{tag:"p",class:"ig-profile-page__header__biography",contenteditable:("isPlannerFeatureEnabled"in a?a.isPlannerFeatureEnabled:o(E))("profileEditor"),spellcheck:"false",modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>P(e)?e.value=u:null),"no-html":!0,onBlur:i},null,8,["contenteditable","modelValue"])]),_:1})}}});export{k as _};