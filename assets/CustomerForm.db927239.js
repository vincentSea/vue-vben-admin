import{d as e,I as i,aZ as s,h as o,i as t,o as r,j as n,w as a,k as d}from"./index.94b82568.js";import"./index.61099513.js";import{_ as p}from"./index.0fcda6db.js";import{a as l}from"./index.17280903.js";import{_ as m}from"./index.f87270a7.js";import{u}from"./useForm.10991f27.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.9284d4e4.js";import"./useAttrs.a8ca5768.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.1a4577d5.js";import"./useTimeout.b50e2d3d.js";import"./useWindowSizeFn.f0ff55fc.js";import"./FullscreenOutlined.ea907300.js";import"./index.a45b2b74.js";import"./index.f81fa04f.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.a3d10154.js";import"./domUtils.9cb5e741.js";import"./index.0d11251c.js";import"./RightOutlined.c9667cba.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:i=>{e[o]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=e({components:{BasicForm:p,CollapseContainer:l,PageWrapper:m,[i.name]:i},setup(){const{createMessage:e}=o(),[i,{setProps:s}]=u({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:i,schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});f.render=function(e,i,s,o,p,l){const m=t("a-input"),u=t("BasicForm"),c=t("CollapseContainer"),f=t("PageWrapper");return r(),n(f,{title:"自定义组件示例"},{default:a((()=>[d(c,{title:"自定义表单"},{default:a((()=>[d(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:a((({model:e,field:i})=>[d(m,{value:e[i],"onUpdate:value":s=>e[i]=s,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;