import{d as t,r as i,b as e,s as r,f as s,cx as n,a0 as a,a6 as l,a7 as h,bB as m,k as o,b1 as c}from"./index.94b82568.js";var u=t({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(t,{slots:u}){const g=i(null),d=e({first:0,last:0,scrollTop:0}),f=r((()=>parseInt(t.bench,10))),p=r((()=>parseInt(t.itemHeight,10))),b=r((()=>Math.max(0,d.first-s(f)))),x=r((()=>Math.min((t.items||[]).length,d.last+s(f)))),H=r((()=>({height:n((t.items||[]).length*s(p))}))),S=r((()=>{const i={},e=n(t.height),r=n(t.minHeight),s=n(t.minWidth),a=n(t.maxHeight),l=n(t.maxWidth),h=n(t.width);return e&&(i.height=e),r&&(i.minHeight=r),s&&(i.minWidth=s),a&&(i.maxHeight=a),l&&(i.maxWidth=l),h&&(i.width=h),i}));function y(i){const e=s(g);if(!e)return 0;const r=parseInt(t.height||0,10)||e.clientHeight;return i+Math.ceil(r/s(p))}function N(){const t=s(g);t&&(d.scrollTop=t.scrollTop,d.first=Math.floor(d.scrollTop/s(p)),d.last=y(d.first))}function v(){const{items:i=[]}=t;return i.slice(s(b),s(x)).map(W)}function W(t,i){i+=s(b);const e=n(i*s(p));return o("div",{class:"virtual-scroll__item",style:{top:e},key:i},[c(u,"default",{index:i,item:t})])}return a([()=>t.itemHeight,()=>t.height],(()=>{N()})),l((()=>{d.last=y(0),h((()=>{const t=s(g);t&&m({el:t,name:"scroll",listener:N,wait:0})}))})),()=>o("div",{class:"virtual-scroll",style:s(S),ref:g},[o("div",{class:"virtual-scroll__container",style:s(H)},[v()])])}});export default u;