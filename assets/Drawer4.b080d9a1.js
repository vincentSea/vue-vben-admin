import{_ as e,a as i}from"./useDrawer.7af50111.js";import{_ as t}from"./BasicForm.530d5c20.js";import{u as r}from"./useForm.7a19d831.js";import{d as s,h as o,o as d,i as n,w as p,j as a,a7 as m}from"./index.5c1bb4d0.js";import"./index.d1754312.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./RightOutlined.398160ad.js";/* empty css              */import"./useTimeout.8048cd3a.js";import"./useScrollTo.c6f01bc0.js";import"./ArrowLeftOutlined.b2f7170f.js";import"./isEqual.e04a9f42.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.5abbb4a2.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.3f119691.js";import"./SearchOutlined.d26b6660.js";import"./EyeOutlined.b3a1240e.js";import"./index.cbcc5622.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./index.1859d917.js";import"./useModal.1bf2067f.js";import"./useWindowSizeFn.6ab574ba.js";import"./FullscreenOutlined.f12e1d09.js";import"./index.9617de2a.js";import"./Dropdown.89759272.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=s({components:{BasicDrawer:e,BasicForm:t},setup(){const[e,{setFieldsValue:t}]=r({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((e=>{t({field2:e.data,field1:e.info})}));return{register:s,schemas:j,registerForm:e}}});l.render=function(e,i,t,r,s,j){const l=o("BasicForm"),c=o("BasicDrawer");return d(),n(c,m(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:p((()=>[a("div",null,[a(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;
