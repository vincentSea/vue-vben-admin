import{_ as e}from"./index.cbefd1bb.js";import{E as t}from"./index.0ba3da4a.js";import{c as o,d as i,j as s}from"./data.4bde4e19.js";import{b as r}from"./useModal.1bf2067f.js";import{_ as d}from"./index.c20e0ee6.js";import{d as p,h as a,o as n,i as m,w as c,j,m as l}from"./index.5c1bb4d0.js";import"./index.cbcc5622.js";import"./SearchOutlined.d26b6660.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./BasicForm.530d5c20.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.5abbb4a2.js";import"./isEqual.e04a9f42.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.3f119691.js";import"./EyeOutlined.b3a1240e.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RightOutlined.398160ad.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";/* empty css              */import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./index.1859d917.js";import"./index.9617de2a.js";import"./Dropdown.89759272.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./useTimeout.8048cd3a.js";import"./useScrollTo.c6f01bc0.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";import"./index.683cd56d.js";import"./DoubleLeftOutlined.a70c149c.js";import"./DoubleRightOutlined.d693c189.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.1e3620e3.js";import"./CaretDownFilled.ec9bdc02.js";import"./useForm.7a19d831.js";import"./clickOutside.007172e8.js";import"./useSortable.912f94e2.js";import"./useWindowSizeFn.6ab574ba.js";import"./SettingOutlined.bc8af49f.js";import"./useExpose.e74a41b6.js";import"./FullscreenOutlined.f12e1d09.js";import"./index.3c579330.js";import"./index.e7f7b3ac.js";import"./usePageContext.70d29e37.js";import"./ArrowLeftOutlined.b2f7170f.js";var f=p({components:{BasicTable:e,ExpExcelModel:t,PageWrapper:d},setup(){const[e,{openModal:t}]=r();return{defaultHeader:function({filename:e,bookType:t}){s({data:i,filename:e,write2excelOpts:{bookType:t}})},columns:o,data:i,register:e,openModal:t}}});const u=l(" 导出 ");f.render=function(e,t,o,i,s,r){const d=a("a-button"),p=a("BasicTable"),l=a("ExpExcelModel"),f=a("PageWrapper");return n(),m(f,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[j(p,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(d,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),j(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default f;
