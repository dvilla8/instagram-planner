import D from"./UserSelectorBadgeChanges.DqKe4eBy.js";import B from"./UserSelectorAvatar.CRTt62hZ.js";import{_ as E}from"./UserSelectorMenuOptions.vue.BlgGOSuT.js";import $ from"./UserSelectorMenu.DgyWnQJO.js";import{_ as M}from"./InstagramUserEditorForm.vue.B9dliD8Q.js";import{_ as F}from"./UserEditorDialog.vue.DPzyGckU.js";import{D as N,d as O,y as P}from"./entry.DJsJfks3.js";import{d as w,r as z,a as A,a4 as s,a5 as c,F as I,ag as u,a6 as d,aa as l,D as n,a7 as f,a3 as R,a1 as L,u as i,a9 as T,k as X,al as Y,n as j}from"./swiper-vue.Dnu8qG6n.js";const q=["textContent"],G=["href"],te=w({__name:"UserSelector",props:{user:{},add:{type:Boolean}},setup(_){const m=_,g=N(),p=O(),o=z({enabled:!1,x:0,y:0}),a=A(!1);function C(){p.push(m.user.route)}function v(){a.value=!0}function U(e){if(g.mdAndUp.value){p.push(m.user.route);return}o.enabled=!0}function k(e){e.preventDefault(),o.enabled=!1,o.x=e.clientX,o.y=e.clientY,j(()=>{o.enabled=!0})}return(e,t)=>{const b=D,y=B,V=E,h=$,x=M,S=F;return s(),c("div",{class:Y(["ig-profile-selector",{"ig-profile-selector--add":e.add}])},[e.user?(s(),c(I,{key:0},[u("a",{class:"cursor-pointer",onClick:U,onContextmenu:k},[(s(),d(R,null,{default:l(()=>[n(y,{avatar:e.user.profile.avatar},{inner:l(()=>[e.user.hasLocalChanges?(s(),d(b,{key:0})):f("",!0)]),_:1},8,["avatar"])]),_:1})),u("h3",{class:"mt-4 text-truncate",textContent:L(e.user.profile.username)},null,8,q),n(h,{modelValue:i(o).enabled,"onUpdate:modelValue":t[0]||(t[0]=r=>i(o).enabled=r)},{default:l(()=>[n(V,{onOpen:C,onEdit:v,user:e.user},null,8,["user"])]),_:1},8,["modelValue"])],32),u("a",{class:"d-inline-block text-blue-grey-lighten-2 mt-n1",href:e.user.profile.public_profile,target:"_blank"},[n(P,{icon:"mdi-arrow-top-right",size:"14px"})],8,G)],64)):f("",!0),T(e.$slots,"default"),n(S,{title:"Edit profile",modelValue:i(a),"onUpdate:modelValue":t[2]||(t[2]=r=>X(a)?a.value=r:null)},{default:l(()=>[n(x,{user:e.user,onClose:t[1]||(t[1]=r=>a.value=!1)},null,8,["user"])]),_:1},8,["modelValue"])],2)}}});export{te as _};
