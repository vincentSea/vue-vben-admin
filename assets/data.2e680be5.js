import{ch as t,k as e,bu as a,u as r}from"./index.94b82568.js";import"./index.9284d4e4.js";const{t:d}=r();function l(){return[{dataIndex:"type",title:d("sys.errorLog.tableColumnType"),width:80,customRender:({text:r})=>{const d=r===t.VUE?"green":r===t.RESOURCE?"cyan":r===t.PROMISE?"blue":t.AJAX?"red":"purple";return e(a,{color:d},{default:()=>r})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:d("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:d("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:d("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:d("sys.errorLog.tableColumnStackMsg"),width:300}]}function n(){return l().map((t=>({field:t.dataIndex,label:t.title})))}export{l as getColumns,n as getDescSchema};