import{_ as n}from"./InstagramUser.vue.Nw2G4wLU.js";import{_ as m}from"./LayoutInstagram.vue.Djn8FU_q.js";import{s as c}from"./entry.DJsJfks3.js";import{d as u,a4 as _,a6 as p,aa as f,D as i,u as s}from"./swiper-vue.Dnu8qG6n.js";const U=u({__name:"PagePlannerProfile",props:{username:{},platform:{}},setup(a){const r=a,e=c().getUser(r.username,r.platform);return e&&e.media.fetch(),(d,g)=>{const o=n,t=m;return _(),p(t,{user:s(e)},{default:f(()=>[i(o,{user:s(e)},null,8,["user"])]),_:1},8,["user"])}}});export{U as _};
