import{d as e,u as s,N as r,s as i,cp as o,g as a,i as t,o as d,j as n,w as l,k as m,m as c,n as p,y as f}from"./index.94b82568.js";import{_ as u,a as j}from"./index.1a4577d5.js";import{_ as x}from"./index.0fcda6db.js";import{h as g}from"./header.3041aac3.js";import{u as h}from"./useForm.10991f27.js";import"./useTimeout.b50e2d3d.js";import"./useAttrs.a8ca5768.js";import"./useWindowSizeFn.f0ff55fc.js";import"./index.17280903.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./index.8d91dadc.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./FullscreenOutlined.ea907300.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.a45b2b74.js";import"./index.f81fa04f.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.a3d10154.js";var _=e({name:"LockModal",components:{BasicModal:u,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:t}=r("header-lock-modal"),d=i((()=>{var e;return null==(e=a.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=j(),[m,{validateFields:c,resetFields:p}]=h({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:t,getRealName:d,register:n,registerForm:m,handleLock:async function(){const e=(await c()).password;l(),o.commitLockInfoState({isLock:!0,pwd:e}),await p()},headerImg:g}}});_.render=function(e,s,r,i,o,a){const u=t("BasicForm"),j=t("a-button"),x=t("BasicModal");return d(),n(x,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:l((()=>[m("div",{class:`${e.prefixCls}__entry`},[m("div",{class:`${e.prefixCls}__header`},[m("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),m("p",{class:`${e.prefixCls}__header-name`},c(e.getRealName),3)],2),m(u,{onRegister:e.registerForm},null,8,["onRegister"]),m("div",{class:`${e.prefixCls}__footer`},[m(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:l((()=>[p(c(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;