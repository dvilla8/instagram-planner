import{I as s,S as r,z as $,L as b,H as c}from"./entry.DJsJfks3.js";import{d as P,a4 as o,a6 as i,aa as a,D as n,a1 as l,u as V,a7 as m,a5 as y,F as E}from"./swiper-vue.Dnu8qG6n.js";const g=P({__name:"UserSelectorMenuOptions",props:{user:{}},emits:["open","edit"],setup(C,{emit:p}){const{user:d}=C,f=p;function k(){d.remove()}function v(){d.reset()}return(e,t)=>(o(),i(c,{border:"",elevation:0},{default:a(()=>[n(s,{onClick:t[0]||(t[0]=u=>f("open")),target:"_blank"},{default:a(()=>[n(r,{textContent:l(e.$t("common.actions.openProfile"))},null,8,["textContent"])]),_:1}),("isPlannerFeatureEnabled"in e?e.isPlannerFeatureEnabled:V($))("profileEditor")?(o(),i(s,{key:0,onClick:t[1]||(t[1]=u=>f("edit"))},{default:a(()=>[n(r,{textContent:l(e.$t("common.actions.editProfile"))},null,8,["textContent"])]),_:1})):m("",!0),e.user.hasLocalChanges?(o(),y(E,{key:1},[n(b),e.user.isRemovable?(o(),i(s,{key:0,onClick:t[2]||(t[2]=u=>k()),class:"text-red"},{default:a(()=>[n(r,{textContent:l(e.$t("common.actions.remove"))},null,8,["textContent"])]),_:1})):m("",!0),e.user.isRemovable?m("",!0):(o(),i(s,{key:1,onClick:t[3]||(t[3]=u=>v()),class:"text-red"},{default:a(()=>[n(r,{textContent:l(e.$t("common.actions.reset"))},null,8,["textContent"])]),_:1}))],64)):m("",!0)]),_:1}))}});export{g as _};
