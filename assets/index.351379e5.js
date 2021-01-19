import{d as e,bz as i,i as t,o as s,j as r,aJ as o,k as a}from"./index.94b82568.js";import"./index.a45b2b74.js";import{D as d}from"./index.bea6f82b.js";import{_ as n}from"./index.d45b6507.js";import{_ as m}from"./index.f87270a7.js";import{refundSchema as c,refundData as p,personSchema as u,personData as j,refundTableData as l,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.55297ee4.js";import{u as g}from"./useTable.cec96cce.js";import"./index.c741f5a3.js";import"./index.17280903.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./index.8d91dadc.js";import"./useTimeout.b50e2d3d.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./index.47fbc714.js";import"./index.0fcda6db.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.a8ca5768.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.1a4577d5.js";import"./useWindowSizeFn.f0ff55fc.js";import"./FullscreenOutlined.ea907300.js";import"./index.f81fa04f.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.a3d10154.js";import"./index.27bb0464.js";import"./clickOutside.52a11d8e.js";import"./CheckOutlined.b87d63e9.js";import"./useSortable.d5662cec.js";import"./SettingOutlined.0a8c2055.js";import"./useExpose.32e663b2.js";import"./useForm.10991f27.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";import"./index.8ddc459b.js";var h=e({components:{Description:d,BasicTable:n,PageWrapper:m,[i.name]:i},setup(){const[e]=g({title:"退货商品",dataSource:l,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:c,refundData:p,personSchema:u,personData:j}}});const S=o("data-v-ada482fc"),T=S(((e,i,o,d,n,m)=>{const c=t("Description"),p=t("a-divider"),u=t("BasicTable"),j=t("PageWrapper");return s(),r(j,{title:"基础详情页",contentBackground:""},{default:S((()=>[a(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),a(p),a(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),a(p),a(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),a(p),a(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;