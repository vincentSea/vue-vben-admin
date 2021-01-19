import{d as e,bQ as s,bz as t,g as a,cm as o,s as l,cn as r,br as u,bs as n,i,aN as m,o as d,j as c,aJ as p,k as E,m as f,n as R,l as S,ak as _}from"./index.94b82568.js";import"./index.a45b2b74.js";import"./index.f4c035d6.js";import x from"./CurrentPermissionMode.8a6187da.js";import{_ as P}from"./index.6727cf99.js";import{_ as T}from"./index.f87270a7.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";var y=e({components:{Alert:s,PageWrapper:T,CurrentPermissionMode:x,Divider:t,Authority:P},setup(){const{changeRole:e,hasPermission:s}=r();return{userStore:a,RoleEnum:o,isSuper:l((()=>a.getRoleListState.includes(o.SUPER))),isTest:l((()=>a.getRoleListState.includes(o.TEST))),changeRole:e,hasPermission:s}}});const g=p("data-v-069ee5d2");u("data-v-069ee5d2");const b=R(" 当前角色: "),h={class:"mt-4"},v=R(" 权限切换(请先切换权限模式为前端角色权限模式): "),j=R("组件方式判断权限(有需要可以自行全局注册)"),U=R("拥有super角色权限可见"),k=R("拥有test角色权限可见"),C=R("拥有[test,super]角色权限可见"),A=R("函数方式方式判断权限(适用于函数内部过滤)"),L=R(" 拥有super角色权限可见 "),M=R(" 拥有test角色权限可见 "),D=R(" 拥有[test,super]角色权限可见 "),W=R("指令方式方式判断权限(该方式不能动态修改权限.)"),w=R(" 拥有super角色权限可见 "),z=R(" 拥有test角色权限可见 "),B=R(" 拥有[test,super]角色权限可见 ");n();const I=g(((e,s,t,a,o,l)=>{const r=i("CurrentPermissionMode"),u=i("Alert"),n=i("a-button"),p=i("a-button-group"),x=i("Divider"),P=i("Authority"),T=i("PageWrapper"),y=m("auth");return d(),c(T,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:g((()=>[E(r),E("p",null,[b,E("a",null,f(e.userStore.getRoleListState),1)]),E(u,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),E("div",h,[v,E(p,null,{default:g((()=>[E(n,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:g((()=>[R(f(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),E(n,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:g((()=>[R(f(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),E(x,null,{default:g((()=>[j])),_:1}),E(P,{value:e.RoleEnum.SUPER},{default:g((()=>[E(n,{type:"primary",class:"mx-4"},{default:g((()=>[U])),_:1})])),_:1},8,["value"]),E(P,{value:e.RoleEnum.TEST},{default:g((()=>[E(n,{color:"success",class:"mx-4"},{default:g((()=>[k])),_:1})])),_:1},8,["value"]),E(P,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:g((()=>[E(n,{color:"error",class:"mx-4"},{default:g((()=>[C])),_:1})])),_:1},8,["value"]),E(x,null,{default:g((()=>[A])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(d(),c(n,{key:0,type:"primary",class:"mx-4"},{default:g((()=>[L])),_:1})):S("",!0),e.hasPermission(e.RoleEnum.TEST)?(d(),c(n,{key:1,color:"success",class:"mx-4"},{default:g((()=>[M])),_:1})):S("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(d(),c(n,{key:2,color:"error",class:"mx-4"},{default:g((()=>[D])),_:1})):S("",!0),E(x,null,{default:g((()=>[W])),_:1}),_(E(n,{type:"primary",class:"mx-4"},{default:g((()=>[w])),_:1},512),[[y,e.RoleEnum.SUPER]]),_(E(n,{color:"success",class:"mx-4"},{default:g((()=>[z])),_:1},512),[[y,e.RoleEnum.TEST]]),_(E(n,{color:"error",class:"mx-4"},{default:g((()=>[B])),_:1},512),[[y,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));y.render=I,y.__scopeId="data-v-069ee5d2";export default y;