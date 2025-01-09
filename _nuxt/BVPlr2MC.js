import{r as z,aA as A,aS as W,s as X,N as H,S as R,T as Y,U as j,a8 as q,W as D,ah as G,aE as J,a9 as K,ap as Q,az as y,B as o,aT as B,aH as Z,Y as p,b as a,ar as r,aU as ee,aR as ae}from"./DM9sX13V.js";import{m as te,u as le}from"./Bh1Jp9My.js";import{m as re,u as oe}from"./CTvpQmzu.js";function se(e,s){const t=z(),l=A(!1);if(W){const c=new IntersectionObserver(n=>{l.value=!!n.find(i=>i.isIntersecting)},s);X(()=>{c.disconnect()}),H(t,(n,i)=>{i&&(c.unobserve(i),l.value=!1),n&&c.observe(n)},{flush:"post"})}return{intersectionRef:t,isIntersecting:l}}const ne=R({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Y(),...te({location:"top"}),...re(),...j(),...q()},"VProgressLinear"),ie=D()({name:"VProgressLinear",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,s){var _;let{slots:t}=s;const l=G(e,"modelValue"),{isRtl:c,rtlClasses:n}=J(),{themeClasses:i}=K(e),{locationStyles:P}=le(e),{textColorClasses:N,textColorStyles:T}=Q(e,"color"),{backgroundColorClasses:x,backgroundColorStyles:w}=y(o(()=>e.bgColor||e.color)),{backgroundColorClasses:L,backgroundColorStyles:O}=y(o(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:S,backgroundColorStyles:k}=y(e,"color"),{roundedClasses:F}=oe(e),{intersectionRef:m,isIntersecting:I}=se(),f=o(()=>parseFloat(e.max)),u=o(()=>parseFloat(e.height)),b=o(()=>B(parseFloat(e.bufferValue)/f.value*100,0,100)),C=o(()=>B(parseFloat(l.value)/f.value*100,0,100)),v=o(()=>c.value!==e.reverse),V=o(()=>e.indeterminate?"fade-transition":"slide-x-transition"),g=Z&&((_=window.matchMedia)==null?void 0:_.call(window,"(forced-colors: active)").matches);function U(d){if(!m.value)return;const{left:E,right:M,width:h}=m.value.getBoundingClientRect(),$=v.value?h-d.clientX+(M-h):d.clientX-E;l.value=Math.round($/h*f.value)}return p(()=>a(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&I.value,"v-progress-linear--reverse":v.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},F.value,i.value,n.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?r(u.value):0,"--v-progress-linear-height":r(u.value),...e.absolute?P.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&U},{default:()=>[e.stream&&a("div",{key:"stream",class:["v-progress-linear__stream",N.value],style:{...T.value,[v.value?"left":"right"]:r(-u.value),borderTop:`${r(u.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${r(u.value/4)})`,width:r(100-b.value,"%"),"--v-progress-linear-stream-to":r(u.value*(v.value?1:-1))}},null),a("div",{class:["v-progress-linear__background",g?void 0:x.value],style:[w.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),a("div",{class:["v-progress-linear__buffer",g?void 0:L.value],style:[O.value,{opacity:parseFloat(e.bufferOpacity),width:r(b.value,"%")}]},null),a(ee,{name:V.value},{default:()=>[e.indeterminate?a("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>a("div",{key:d,class:["v-progress-linear__indeterminate",d,g?void 0:S.value],style:k.value},null))]):a("div",{class:["v-progress-linear__determinate",g?void 0:S.value],style:[k.value,{width:r(C.value,"%")}]},null)]}),t.default&&a("div",{class:"v-progress-linear__content"},[t.default({value:C.value,buffer:b.value})])]})),{}}}),ve=R({loading:[Boolean,String]},"loader");function ge(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ae();return{loaderClasses:o(()=>({[`${s}--loading`]:e.loading}))}}function me(e,s){var l;let{slots:t}=s;return a("div",{class:`${e.name}__loader`},[((l=t.default)==null?void 0:l.call(t,{color:e.color,isActive:e.active}))||a(ie,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}export{me as L,ge as a,ve as m,se as u};