import{S as n,B as o,a5 as l}from"./DM9sX13V.js";const r=n({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function u(e){return{elevationClasses:o(()=>{const s=l(e)?e.value:e.elevation,a=[];return s==null||a.push(`elevation-${s}`),a})}}export{r as m,u};