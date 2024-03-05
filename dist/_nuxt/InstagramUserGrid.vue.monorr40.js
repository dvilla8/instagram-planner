import W from"./InstagramPost.nyvDo-X5.js";import{_ as F}from"./InstagramMediaDropzone.vue.0_yPgj2_.js";import{z as V,y as K,A as z,V as X}from"./entry.DJsJfks3.js";import{d as v,f as T,a as L,a4 as y,a6 as b,aa as w,ag as Y,al as q,u as S,a5 as U,F as j,ak as J,D as O,a7 as Q}from"./swiper-vue.Dnu8qG6n.js";const Z=v({inject:["manager"],props:{index:{type:Number,required:!0},disabled:{type:Boolean,default:!1}},data(){return{}},watch:{index(t){this.$el&&this.$el.sortableInfo&&(this.$el.sortableInfo.index=t)},disabled(t){t?this.removeDraggable():this.setDraggable(this.index)}},mounted(){const{disabled:t,index:e}=this.$props;t||this.setDraggable(e)},beforeUnmount(){this.disabled||this.removeDraggable()},methods:{setDraggable(t){const e=this.$el;e.sortableInfo={index:t,manager:this.manager},this.ref={node:e},this.manager.add(this.ref)},removeDraggable(){this.manager.remove(this.ref)}}});class tt{constructor(){this.refs=[],this.active=null}add(e){this.refs||(this.refs=[]),this.refs.push(e)}remove(e){const i=this.getIndex(e);i!==-1&&this.refs.splice(i,1)}isActive(){return!!this.active}getActive(){return this.refs.find(({node:e})=>{var i,s;return((i=e==null?void 0:e.sortableInfo)===null||i===void 0?void 0:i.index)==((s=this===null||this===void 0?void 0:this.active)===null||s===void 0?void 0:s.index)})||null}getIndex(e){return this.refs.indexOf(e)}getRefs(){return this.refs}getOrderedRefs(){return this.refs.sort((e,i)=>e.node.sortableInfo.index-i.node.sortableInfo.index)}}const I=t=>t.touches!=null;function D(t,e){return!!t&&Object.prototype.hasOwnProperty.call(t,e)}function et(t,e,i){const s=t.slice(0);if(i>=s.length){let n=i-s.length;for(;n--+1;)s.push(void 0)}return s.splice(i,0,s.splice(e,1)[0]),s}function it(t,e){const i=t.slice(0);return e>=i.length||i.splice(e,1),i}function st(t,e,i){const s=t.slice(0);return e===s.length?s.push(i):s.splice(e,0,i),s}const m={start:["touchstart","mousedown"],move:["touchmove","mousemove"],end:["touchend","mouseup"],cancel:["touchcancel","keyup"]};function R(t,e){for(;t;){if(e(t))return t;t=t.parentNode}}function k(t,e,i){return i<t?t:i>e?e:i}function _(t){return t.substr(-2)==="px"?parseFloat(t):0}function P(t){const e=window.getComputedStyle(t);return{top:_(e.marginTop),right:_(e.marginRight),bottom:_(e.marginBottom),left:_(e.marginLeft)}}function C(t,e="page"){const i=`${e}X`,s=`${e}Y`;return{x:I(t)?t.touches[0][i]:t[i],y:I(t)?t.touches[0][s]:t[s]}}function B(t){const e=[t];for(;t;t=t.offsetParent)e.unshift(t);return e}function nt(t,e){const i=B(t),s=B(e);if(i[0]!=s[0])throw"No common ancestor!";for(let n=0;n<i.length;n++)if(i[n]!=s[n])return i[n-1]}function x(t,e,i={top:0,left:0}){if(t){const s={top:i.top+t.offsetTop,left:i.left+t.offsetLeft};return t.offsetParent!==e.offsetParent?x(t.offsetParent,e,s):s}return{top:0,left:0}}function G(t){const e=t.querySelectorAll("input, textarea, select"),i=t.cloneNode(!0);return[...i.querySelectorAll("input, textarea, select")].forEach((n,r)=>{n.type!=="file"&&e[r]&&(n.value=e[r].value)}),i}function ot(t,e,i){if(typeof t=="string"&&(t=+t),Array.isArray(t)||(t=[t,t]),t.length!==2)throw new Error(`lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ${t}`);const[s,n]=t;return[M(s,e,i),M(n,e,i)]}function M(t,e,i){let s=t,n=t,r="px";if(typeof t=="string"){const o=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);if(o===null)throw new Error(`lockOffset value should be a number or a string of a number followed by "px" or "%". Given ${t}`);s=n=parseFloat(t),r=o[1]}if(!isFinite(s)||!isFinite(n))throw new Error(`lockOffset value should be a finite. Given ${t}`);return r==="%"&&(s=s*e/100,n=n*i/100),{x:s,y:n}}function A(t=[]){for(let e=0,i=t.length;e<i;e++){const s=t[e],n=s.node;if(!n)return;s.edgeOffset=null,N(n)}}function N(t,e="",i=""){t&&(t.style.transform=e,t.style.transitionDuration=i)}const $=setTimeout,rt=v({inject:{SlicksortHub:{from:"SlicksortHub",default:null}},provide(){return{manager:this.manager}},props:{list:{type:Array,required:!0},axis:{type:String,default:"y"},distance:{type:Number,default:0},pressDelay:{type:Number,default:0},pressThreshold:{type:Number,default:5},useDragHandle:{type:Boolean,default:!1},useWindowAsScrollContainer:{type:Boolean,default:!1},hideSortableGhost:{type:Boolean,default:!0},lockToContainerEdges:{type:Boolean,default:!1},lockOffset:{type:[String,Number,Array],default:"50%"},transitionDuration:{type:Number,default:300},appendTo:{type:String,default:"body"},draggedSettlingDuration:{type:Number,default:null},group:{type:String,default:""},accept:{type:[Boolean,Array,Function],default:null},cancelKey:{type:String,default:"Escape"},block:{type:Array,default:()=>[]},lockAxis:{type:String,default:""},helperClass:{type:String,default:""},contentWindow:{type:Object,default:null},shouldCancelStart:{type:Function,default:t=>["input","textarea","select","option","button"].indexOf(t.target.tagName.toLowerCase())!==-1},getHelperDimensions:{type:Function,default:({node:t})=>({width:t.offsetWidth,height:t.offsetHeight})}},emits:["sort-start","sort-move","sort-end","sort-cancel","sort-insert","sort-remove","update:list"],data(){let t=!1;return this.group&&this.SlicksortHub&&(t=!0),{sorting:!1,hub:t?this.SlicksortHub:null,manager:new tt}},mounted(){this.hub&&(this.id=this.hub.getId()),this.container=this.$el,this.document=this.container.ownerDocument||document,this._window=this.contentWindow||window,this.scrollContainer=this.useWindowAsScrollContainer?{scrollLeft:0,scrollTop:0}:this.container,this.events={start:this.handleStart,move:this.handleMove,end:this.handleEnd};for(const t in this.events)D(this.events,t)&&m[t].forEach(e=>this.container.addEventListener(e,this.events[t]));this.hub&&this.hub.addContainer(this)},beforeUnmount(){for(const t in this.events)D(this.events,t)&&m[t].forEach(e=>this.container.removeEventListener(e,this.events[t]));this.hub&&this.hub.removeContainer(this),this.dragendTimer&&clearTimeout(this.dragendTimer),this.cancelTimer&&clearTimeout(this.cancelTimer),this.pressTimer&&clearTimeout(this.pressTimer),this.autoscrollInterval&&clearInterval(this.autoscrollInterval)},methods:{handleStart(t){const{distance:e,shouldCancelStart:i}=this.$props;if(!I(t)&&t.button===2||i(t))return!1;this._touched=!0,this._pos=C(t);const s=t.target,n=R(s,r=>r.sortableInfo!=null);if(n&&n.sortableInfo&&this.nodeIsChild(n)&&!this.sorting){const{useDragHandle:r}=this.$props,{index:o}=n.sortableInfo;if(r&&!R(s,l=>l.sortableHandle!=null))return;this.manager.active={index:o},s.tagName.toLowerCase()==="a"&&t.preventDefault(),e||(this.pressDelay===0?this.handlePress(t):this.pressTimer=$(()=>this.handlePress(t),this.pressDelay))}},nodeIsChild(t){return t.sortableInfo.manager===this.manager},handleMove(t){const{distance:e,pressThreshold:i}=this.$props;if(!this.sorting&&this._touched){const s=C(t);this._delta={x:this._pos.x-s.x,y:this._pos.y-s.y};const n=Math.abs(this._delta.x)+Math.abs(this._delta.y);!e&&(!i||i&&n>=i)?(this.cancelTimer&&clearTimeout(this.cancelTimer),this.cancelTimer=$(this.cancel,0)):e&&n>=e&&this.manager.isActive()&&this.handlePress(t)}},handleEnd(){if(!this._touched)return;const{distance:t}=this.$props;this._touched=!1,t||this.cancel()},cancel(){this.sorting||(this.pressTimer&&clearTimeout(this.pressTimer),this.manager.active=null,this.hub&&this.hub.cancel())},handleSortCancel(t){(I(t)||t.key===this.cancelKey)&&(this.newIndex=this.index,this.canceling=!0,this.translate={x:0,y:0},this.animateNodes(),this.handleSortEnd(t))},handlePress(t){t.stopPropagation();const e=this.manager.getActive();if(e){const{getHelperDimensions:i,helperClass:s,hideSortableGhost:n,appendTo:r}=this.$props,{node:o}=e,{index:l}=o.sortableInfo,f=P(o),a=this.container.getBoundingClientRect(),u=i({index:l,node:o});this.node=o,this.margin=f,this.width=u.width,this.height=u.height,this.marginOffset={x:this.margin.left+this.margin.right,y:Math.max(this.margin.top,this.margin.bottom)},this.boundingClientRect=o.getBoundingClientRect(),this.containerBoundingRect=a,this.index=l,this.newIndex=l;const g=G(o);this.helper=this.document.querySelector(r).appendChild(g),this.helper.style.position="fixed",this.helper.style.top=`${this.boundingClientRect.top-f.top}px`,this.helper.style.left=`${this.boundingClientRect.left-f.left}px`,this.helper.style.width=`${this.width}px`,this.helper.style.height=`${this.height}px`,this.helper.style.boxSizing="border-box",this.helper.style.pointerEvents="none",n&&(this.sortableGhost=o,o.style.visibility="hidden",o.style.opacity="0"),this.hub&&(this.hub.sortStart(this),this.hub.helper=this.helper,this.hub.ghost=this.sortableGhost),this.intializeOffsets(t,this.boundingClientRect),this.offsetEdge=x(o,this.container),s&&this.helper.classList.add(...s.split(" ")),this.listenerNode=I(t)?o:this._window,m.move.forEach(h=>this.listenerNode.addEventListener(h,this.handleSortMove)),m.end.forEach(h=>this.listenerNode.addEventListener(h,this.handleSortEnd)),m.cancel.forEach(h=>this.listenerNode.addEventListener(h,this.handleSortCancel)),this.sorting=!0,this.$emit("sort-start",{event:t,node:o,index:l})}},handleSortMove(t){if(t.preventDefault(),this.updatePosition(t),this.hub){const e=this.list[this.index];this.hub.handleSortMove(t,e)}(!this.hub||this.hub.isDest(this))&&(this.animateNodes(),this.autoscroll()),this.$emit("sort-move",{event:t})},handleDropOut(){const t=this.list[this.index],e=it(this.list,this.index);return this.$emit("sort-remove",{oldIndex:this.index}),this.$emit("update:list",e),t},handleDropIn(t){const e=st(this.list,this.newIndex,t);this.$emit("sort-insert",{newIndex:this.newIndex,value:t}),this.$emit("update:list",e),this.handleDragEnd()},handleDragOut(){this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),this.hub.isSource(this)?(this.translate={x:1e4,y:1e4},this.animateNodes()):(this.manager.getRefs().forEach(t=>{t.node.style.transform=""}),this.dragendTimer=$(this.handleDragEnd,this.transitionDuration||0))},handleDragEnd(){this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),A(this.manager.getRefs()),this.sortableGhost&&(this.sortableGhost.remove(),this.sortableGhost=null),this.dragendTimer&&(clearTimeout(this.dragendTimer),this.dragendTimer=null),this.manager.active=null,this._touched=!1,this.sorting=!1},intializeOffsets(t,e){const{useWindowAsScrollContainer:i,containerBoundingRect:s,_window:n}=this;this.marginOffset={x:this.margin.left+this.margin.right,y:Math.max(this.margin.top,this.margin.bottom)},this._axis={x:this.axis.indexOf("x")>=0,y:this.axis.indexOf("y")>=0},this.initialOffset=C(t),this.initialScroll={top:this.scrollContainer.scrollTop,left:this.scrollContainer.scrollLeft},this.initialWindowScroll={top:window.pageYOffset,left:window.pageXOffset},this.translate={x:0,y:0},this.minTranslate={},this.maxTranslate={},this._axis.x&&(this.minTranslate.x=(i?0:s.left)-e.left-this.width/2,this.maxTranslate.x=(i?n.innerWidth:s.left+s.width)-e.left-this.width/2),this._axis.y&&(this.minTranslate.y=(i?0:s.top)-e.top-this.height/2,this.maxTranslate.y=(i?n.innerHeight:s.top+s.height)-e.top-this.height/2)},handleDragIn(t,e,i){if(this.hub.isSource(this))return;this.dragendTimer&&(this.handleDragEnd(),clearTimeout(this.dragendTimer),this.dragendTimer=null);const s=this.manager.getRefs();this.index=s.length,this.manager.active={index:this.index};const n=this.container.getBoundingClientRect(),r=i.getBoundingClientRect();this.containerBoundingRect=n,this.sortableGhost=G(e),this.container.appendChild(this.sortableGhost);const o=this.sortableGhost.getBoundingClientRect();this.boundingClientRect=o,this.margin=P(this.sortableGhost),this.width=o.width,this.height=o.height,this.offsetEdge=x(this.sortableGhost,this.container),this.intializeOffsets(t,o),this.initialOffset.x+=o.x-r.x,this.initialOffset.y+=o.y-r.y,this.sorting=!0},handleSortEnd(t){this.listenerNode&&(m.move.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortMove)),m.end.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortEnd)),m.cancel.forEach(s=>this.listenerNode.removeEventListener(s,this.handleSortCancel)));const e=this.manager.getRefs();this.helper&&this.helperClass&&this.helper.classList.remove(...this.helperClass.split(" ")),this.autoscrollInterval&&clearInterval(this.autoscrollInterval),this.autoscrollInterval=null;const i=()=>{this.helper&&(this.helper.remove(),this.helper=null),this.hideSortableGhost&&this.sortableGhost&&(this.sortableGhost.style.visibility="",this.sortableGhost.style.opacity=""),A(e),this.hub&&!this.hub.isDest(this)?this.canceling?this.hub.cancel():this.hub.handleSortEnd():this.canceling?this.$emit("sort-cancel",{event:t}):(this.$emit("sort-end",{event:t,oldIndex:this.index,newIndex:this.newIndex}),this.$emit("update:list",et(this.list,this.index,this.newIndex))),this.manager.active=null,this._touched=!1,this.canceling=!1,this.sorting=!1};this.transitionDuration||this.draggedSettlingDuration?this.transitionHelperIntoPlace(e,i):i()},transitionHelperIntoPlace(t,e){if(this.draggedSettlingDuration===0||t.length===0||!this.helper)return Promise.resolve();const i=t[this.index].node;let s=0,n=0;const r={top:window.pageYOffset-this.initialWindowScroll.top,left:window.pageXOffset-this.initialWindowScroll.left};if(this.hub&&!this.hub.isDest(this)&&!this.canceling){const a=this.hub.getDest();if(!a)return;const u=a.newIndex,g=a.manager.getOrderedRefs(),h=u<g.length?g[u].node:a.sortableGhost,c=nt(i,h),d=x(i,c),p=x(h,c);s=p.left-d.left-r.left,n=p.top-d.top-r.top}else{const a=t[this.newIndex].node,u={left:this.scrollContainer.scrollLeft-this.initialScroll.left+r.left,top:this.scrollContainer.scrollTop-this.initialScroll.top+r.top};s=-u.left,this.translate&&this.translate.x>0?s+=a.offsetLeft+a.offsetWidth-(i.offsetLeft+i.offsetWidth):s+=a.offsetLeft-i.offsetLeft,n=-u.top,this.translate&&this.translate.y>0?n+=a.offsetTop+a.offsetHeight-(i.offsetTop+i.offsetHeight):n+=a.offsetTop-i.offsetTop}const o=this.draggedSettlingDuration!==null?this.draggedSettlingDuration:this.transitionDuration;N(this.helper,`translate3d(${s}px,${n}px, 0)`,`${o}ms`);const l=a=>{(!a||a.propertyName==="transform")&&(clearTimeout(f),N(this.helper),e())},f=setTimeout(l,o+10);this.helper.addEventListener("transitionend",l)},updatePosition(t){const{lockAxis:e,lockToContainerEdges:i}=this.$props,s=C(t),n={x:s.x-this.initialOffset.x,y:s.y-this.initialOffset.y};if(n.y-=window.pageYOffset-this.initialWindowScroll.top,n.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=n,i){const[r,o]=ot(this.lockOffset,this.height,this.width),l={x:this.width/2-r.x,y:this.height/2-r.y},f={x:this.width/2-o.x,y:this.height/2-o.y};this.minTranslate.x&&this.maxTranslate.x&&(n.x=k(this.minTranslate.x+l.x,this.maxTranslate.x-f.x,n.x)),this.minTranslate.y&&this.maxTranslate.y&&(n.y=k(this.minTranslate.y+l.y,this.maxTranslate.y-f.y,n.y))}e==="x"?n.y=0:e==="y"&&(n.x=0),this.helper&&(this.helper.style.transform=`translate3d(${n.x}px,${n.y}px, 0)`)},animateNodes(){const{transitionDuration:t,hideSortableGhost:e}=this.$props,i=this.manager.getOrderedRefs(),s={left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top},n={left:this.offsetEdge.left+this.translate.x+s.left,top:this.offsetEdge.top+this.translate.y+s.top},r={top:window.pageYOffset-this.initialWindowScroll.top,left:window.pageXOffset-this.initialWindowScroll.left};this.newIndex=null;for(let o=0,l=i.length;o<l;o++){const{node:f}=i[o],a=f.sortableInfo.index,u=f.offsetWidth,g=f.offsetHeight,h={width:this.width>u?u/2:this.width/2,height:this.height>g?g/2:this.height/2},c={x:0,y:0};let{edgeOffset:d}=i[o];d||(i[o].edgeOffset=d=x(f,this.container));const p=o<i.length-1&&i[o+1],E=o>0&&i[o-1];if(p&&!p.edgeOffset&&(p.edgeOffset=x(p.node,this.container)),a===this.index){e&&(this.sortableGhost=f,f.style.visibility="hidden",f.style.opacity="0");continue}t&&(f.style.transitionDuration=`${t}ms`),this._axis.x?this._axis.y?a<this.index&&(n.left+r.left-h.width<=d.left&&n.top+r.top<=d.top+h.height||n.top+r.top+h.height<=d.top)?(c.x=this.width+this.marginOffset.x,d.left+c.x>this.containerBoundingRect.width-h.width&&p&&(c.x=p.edgeOffset.left-d.left,c.y=p.edgeOffset.top-d.top),this.newIndex===null&&(this.newIndex=a)):a>this.index&&(n.left+r.left+h.width>=d.left&&n.top+r.top+h.height>=d.top||n.top+r.top+h.height>=d.top+g)&&(c.x=-(this.width+this.marginOffset.x),d.left+c.x<this.containerBoundingRect.left+h.width&&E&&(c.x=E.edgeOffset.left-d.left,c.y=E.edgeOffset.top-d.top),this.newIndex=a):a>this.index&&n.left+r.left+h.width>=d.left?(c.x=-(this.width+this.marginOffset.x),this.newIndex=a):a<this.index&&n.left+r.left<=d.left+h.width&&(c.x=this.width+this.marginOffset.x,this.newIndex==null&&(this.newIndex=a)):this._axis.y&&(a>this.index&&n.top+r.top+h.height>=d.top?(c.y=-(this.height+this.marginOffset.y),this.newIndex=a):a<this.index&&n.top+r.top<=d.top+h.height&&(c.y=this.height+this.marginOffset.y,this.newIndex==null&&(this.newIndex=a))),f.style.transform=`translate3d(${c.x}px,${c.y}px,0)`}this.newIndex==null&&(this.newIndex=this.index)},autoscroll(){const t=this.translate,e={x:0,y:0},i={x:1,y:1},s={x:10,y:10};t.y>=this.maxTranslate.y-this.height/2?(e.y=1,i.y=s.y*Math.abs((this.maxTranslate.y-this.height/2-t.y)/this.height)):t.x>=this.maxTranslate.x-this.width/2?(e.x=1,i.x=s.x*Math.abs((this.maxTranslate.x-this.width/2-t.x)/this.width)):t.y<=this.minTranslate.y+this.height/2?(e.y=-1,i.y=s.y*Math.abs((t.y-this.height/2-this.minTranslate.y)/this.height)):t.x<=this.minTranslate.x+this.width/2&&(e.x=-1,i.x=s.x*Math.abs((t.x-this.width/2-this.minTranslate.x)/this.width)),this.autoscrollInterval&&(clearInterval(this.autoscrollInterval),this.autoscrollInterval=null),(e.x!==0||e.y!==0)&&(this.autoscrollInterval=window.setInterval(()=>{const n={left:1*i.x*e.x,top:1*i.y*e.y};this.useWindowAsScrollContainer?this._window.scrollBy(n.left,n.top):(this.scrollContainer.scrollTop+=n.top,this.scrollContainer.scrollLeft+=n.left),this.translate.x+=n.left,this.translate.y+=n.top,this.animateNodes()},5))}}}),H=v({name:"SlickItem",mixins:[Z],props:{tag:{type:String,default:"div"}},render(){var t,e;return T(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),at=v({name:"SlickList",mixins:[rt],props:{tag:{type:String,default:"div"},itemKey:{type:[String,Function],default:"id"}},render(){var t,e;return this.$slots.item?T(this.tag,this.list.map((i,s)=>{let n;if(i!=null){if(typeof this.itemKey=="function")n=this.itemKey(i);else if(typeof i=="object"&&D(i,this.itemKey)&&typeof i[this.itemKey]=="string")n=i[this.itemKey];else if(typeof i=="string")n=i;else throw new Error("Cannot find key for item, use the item-key prop and pass a function or string");return T(H,{key:n,index:s},{default:()=>{var r,o;return(o=(r=this.$slots).item)===null||o===void 0?void 0:o.call(r,{item:i,index:s})}})}})):T(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),lt=v({props:{tag:{type:String,default:"span"}},mounted(){this.$el.sortableHandle=!0},render(){var t,e;return T(this.tag,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),ut=v({__name:"InstagramUserGrid",props:{user:{},collection:{}},setup(t){const e=t,i=L(),s=L(!1);function n(){e.user.save()}function r(){s.value=!0}function o(){s.value=!1}return(l,f)=>{const a=W,u=F;return y(),b(X,{class:"ig-profile-page__grid-container px-0"},{default:w(()=>[Y("div",{class:q(["ig-profile-page__grid",{"ig-profile-page__grid--dragging":S(s)}]),ref_key:"gridListRef",ref:i},[l.user.media.collections[l.collection].length>0?(y(),b(S(at),{key:0,list:e.user.media.collections[l.collection],"onUpdate:list":[f[0]||(f[0]=g=>e.user.media.collections[l.collection]=g),n],axis:"xy",class:"v-row","use-drag-handle":"","press-delay":100,"press-threshold":100,onSortStart:r,onSortEnd:o},{default:w(()=>[(y(!0),U(j,null,J(l.user.media.collections[l.collection],(g,h)=>(y(),b(S(H),{key:g.id,index:h,class:"ig-profile-page__grid__item v-col v-col-4"},{default:w(()=>[("isPlannerFeatureEnabled"in l?l.isPlannerFeatureEnabled:S(V))("mediaSort")?(y(),b(S(lt),{key:0,class:"ig-profile-page__grid__drag-handle"},{default:w(()=>[O(K,{icon:"mdi-drag",color:"white"})]),_:1})):Q("",!0),O(a,{profile:l.user.profile,media:g,"context-menu":""},null,8,["profile","media"])]),_:2},1032,["index"]))),128))]),_:1},8,["list"])):(y(),b(z,{key:1,height:500,border:"",elevation:0},{default:w(()=>[O(u,{user:l.user},null,8,["user"])]),_:1}))],2)]),_:1})}}});export{ut as _};
