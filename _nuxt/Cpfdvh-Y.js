import f from"./BU6O8S_K.js";import{u as _}from"./e82qsoU0.js";import{e as v,r as d,o,f as r,w as g,g as s,V as k}from"./C69fWWsL.js";import{V as C}from"./DrT2XDc6.js";const w=v({__name:"UserEditorFieldAvatar",props:{user:{}},emits:["update"],setup(i,{emit:c}){const n=i,p=c,e=d(n.user?n.user.profile.avatar:void 0),{files:x,open:m,reset:V,onChange:l}=_({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return l(async a=>{if(!a)return;const t=a[0];e.value={file:Promise.resolve(t)},p("update",t)}),(a,t)=>{const u=f;return o(),r(C,{class:"cursor-pointer",variant:"outlined",size:64,onClick:s(m)},{default:g(()=>[s(e)?(o(),r(u,{key:1,avatar:s(e),size:64},null,8,["avatar"])):(o(),r(k,{key:0,icon:"mdi-account"}))]),_:1},8,["onClick"])}}});export{w as _};
