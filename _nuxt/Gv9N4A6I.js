import{e as s,o as a,c as p,f as i,aU as l,a as c,t as r,a5 as m,_}from"./E5Lotu8k.js";const b=["textContent"],f=s({__name:"ProfileTab",props:{tab:{},active:{type:Boolean}},emits:["select"],setup(d,{emit:o}){const n=o;return(e,t)=>(a(),p("div",{class:m(["app-profile-tab py-2 py-md-4",{"app-profile-tab--active":e.active}]),onClick:t[0]||(t[0]=u=>n("select",e.tab))},[(a(),i(l(e.tab.icon.component),{icon:e.tab.icon.name},null,8,["icon"])),c("span",{textContent:r(e.tab.label)},null,8,b)],2))}}),C=_(f,[["__scopeId","data-v-43802271"]]);export{C as default};