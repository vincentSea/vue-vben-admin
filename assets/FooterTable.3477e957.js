import{_ as e}from"./index.d45b6507.js";import{getBasicColumns as i}from"./tableData.7aa0192c.js";import{d as s}from"./table.a7b17030.js";import{d as o,i as t,o as r,j as d,k as n}from"./index.94b82568.js";import{u as m}from"./useTable.cec96cce.js";import"./index.47fbc714.js";import"./index.0fcda6db.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.a8ca5768.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.1a4577d5.js";import"./useTimeout.b50e2d3d.js";import"./useWindowSizeFn.f0ff55fc.js";import"./index.17280903.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./FullscreenOutlined.ea907300.js";import"./index.a45b2b74.js";import"./index.f81fa04f.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.a3d10154.js";import"./index.27bb0464.js";import"./clickOutside.52a11d8e.js";import"./CheckOutlined.b87d63e9.js";import"./useSortable.d5662cec.js";import"./SettingOutlined.0a8c2055.js";import"./useExpose.32e663b2.js";import"./useForm.10991f27.js";var a=o({components:{BasicTable:e},setup(){const[e]=m({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:i(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};a.render=function(e,i,s,o,m,a){const p=t("BasicTable");return r(),d("div",c,[n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default a;