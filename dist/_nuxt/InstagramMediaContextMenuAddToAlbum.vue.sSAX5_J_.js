import{u as r}from"./index.BbN7YMFR.js";import{S as l,I as p}from"./entry.DJsJfks3.js";import{d as c,a4 as u,a6 as d,aa as f,D as g,a1 as C,u as _}from"./swiper-vue.Dnu8qG6n.js";const b=c({__name:"InstagramMediaContextMenuAddToAlbum",props:{media:{}},emits:["close"],setup(a,{emit:o}){const n=a,s=o,{files:x,open:i,reset:k,onChange:m}=r({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return m(e=>{if(!e)return;const t=e[0];n.media.addToAlbum(t),s("close")}),(e,t)=>(u(),d(p,{onClick:_(i)},{default:f(()=>[g(l,{textContent:C(e.$t("instagram.profile.menu.addToAlbum"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{b as _};
