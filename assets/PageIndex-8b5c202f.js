import{_ as d,o as s,c as p,p as k,a as w,b as o,d as f,e as v,r as n,f as t,w as c,t as P,g as C,h as m,i as $,u as S,F as B,j}from"./index-9e0a579a.js";import{_ as N}from"./ProfileAvatar.vue_vue_type_script_setup_true_lang-27b9a6cd.js";const V={},g=e=>(k("data-v-8d90e45e"),e=e(),w(),e),F={class:"igp-intro text-center"},M=g(()=>o("h2",null,"Plan your Instagram grid like a pro",-1)),O=g(()=>o("p",{class:"mt-2"},[o("a",{href:"https://github.com/dxlliv/ig-planner"},"dxlliv/ig-planner"),f(" let you preview what your profile grid will look like."),o("br"),f(" Clone the repository and build your definitive Instagram profile. ")],-1)),z=[M,O];function A(e,i){return s(),p("div",F,z)}const D=d(V,[["render",A],["__scopeId","data-v-8d90e45e"]]),E={class:"igp-profile"},L=["textContent"],T=["href"],q=v({__name:"Profile",props:{profile:Object},setup(e){return(i,h)=>{var a;const u=N,l=n("router-link");return s(),p("div",E,[t(l,{to:{name:"profile",params:{username:(a=e.profile)==null?void 0:a.fields.username}}},{default:c(()=>{var _,r;return[t(u,{size:120,avatar:(_=e.profile)==null?void 0:_.avatar},null,8,["avatar"]),o("h3",{class:"mt-4",textContent:P((r=e.profile)==null?void 0:r.fields.username)},null,8,L)]}),_:1},8,["to"]),o("a",{class:"text-blue-grey-lighten-4",href:`https://instagram.com/${e.profile.fields.username}`,target:"_blank"},"🡥",8,T)])}}});const G=d(q,[["__scopeId","data-v-e483bfdb"]]),H=v({__name:"PageIndex",setup(e){const i=C(()=>Object.values(j().profiles));return(h,u)=>{const l=G,a=n("v-col"),_=n("v-row"),r=n("v-divider"),x=D,b=n("v-container");return s(),m(b,{class:"text-left"},{default:c(()=>[t(_,{"no-gutters":""},{default:c(()=>[(s(!0),p(B,null,$(S(i),(y,I)=>(s(),m(a,{key:I,class:"text-center"},{default:c(()=>[t(l,{profile:y},null,8,["profile"])]),_:2},1024))),128))]),_:1}),t(r,{class:"mt-15 mb-10"}),t(x)]),_:1})}}});const Q=d(H,[["__scopeId","data-v-0ea6ba6d"]]);export{Q as default};
