import{T as e}from"./index.34022fc3.js";import{_ as a}from"./index.f87270a7.js";import{d as n,r as o,i as d,o as r,j as t,w as i,k as s}from"./index.94b82568.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";var l=n({components:{Tinymce:e,PageWrapper:a},setup:()=>({handleChange:function(e){},value:o("hello world!")})});l.render=function(e,a,n,o,l,m){const p=d("Tinymce"),u=d("PageWrapper");return r(),t(u,{title:"富文本组件示例"},{default:i((()=>[s(p,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])),_:1})};export default l;