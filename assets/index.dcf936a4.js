import{d as e,b2 as t,i as o,o as i,j as s,w as a,k as n}from"./index.94b82568.js";import{e as r}from"./index.17280903.js";import d from"./TargetContent.e7e36087.js";import{_ as m}from"./index.f87270a7.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./index.8d91dadc.js";import"./useTimeout.b50e2d3d.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./index.58c2242a.js";import"./index.a0e9bc88.js";import"./index.38c8e961.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";var p=e({components:{LazyContainer:r,PageWrapper:m,TargetContent:d,Skeleton:t}});const j={class:"lazy-base-demo-wrap"},l=n("h1",null,"向下滚动",-1),c={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,m,p){const b=o("TargetContent"),x=o("Skeleton"),f=o("LazyContainer"),u=o("PageWrapper");return i(),s(u,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:a((()=>[n("div",j,[l,n("div",c,[n(f,null,{skeleton:a((()=>[n(x,{rows:10})])),default:a((()=>[n(b)])),_:1})])])])),_:1})};export default p;