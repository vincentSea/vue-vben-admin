import{cV as e,b as i,d as s,g as o,h as r,o as t,i as a,w as p,j as n}from"./index.5c1bb4d0.js";import{A as d}from"./index.1859d917.js";import{h as m,_ as l}from"./BasicForm.530d5c20.js";import{u as j}from"./useForm.7a19d831.js";import{_ as c}from"./index.c20e0ee6.js";import"./vendor.3b1829c7.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.5abbb4a2.js";import"./isEqual.e04a9f42.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.3f119691.js";import"./SearchOutlined.d26b6660.js";import"./EyeOutlined.b3a1240e.js";import"./index.cbcc5622.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RightOutlined.398160ad.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";/* empty css              */import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./useModal.1bf2067f.js";import"./useTimeout.8048cd3a.js";import"./useWindowSizeFn.6ab574ba.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./useScrollTo.c6f01bc0.js";import"./FullscreenOutlined.f12e1d09.js";import"./index.9617de2a.js";import"./Dropdown.89759272.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";import"./index.3c579330.js";import"./index.e7f7b3ac.js";import"./usePageContext.70d29e37.js";import"./transButton.1e3620e3.js";import"./ArrowLeftOutlined.b2f7170f.js";const{uploadUrl:f=""}=i();function u(i,s){return e.uploadFile({url:f,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:l,PageWrapper:c,[d.name]:d},setup(){const{createMessage:e}=o(),[i]=j({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,d,m){const l=r("a-alert"),j=r("BasicUpload"),c=r("BasicForm"),f=r("PageWrapper");return t(),a(f,{title:"上传组件示例"},{default:p((()=>[n(l,{message:"基础示例"}),n(j,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),n(l,{message:"嵌入表单,加入表单校验"}),n(c,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
