import{x as e}from"./index.072bd9dc.js";import{d as t,r as n,f as s,o as a,j as r,ak as l,al as o,k as c,aa as u}from"./index.94b82568.js";var i=t({name:"ImportExcel",emits:["success","error"],setup(t,{emit:a}){const r=n(null),l=n(!1);function o(t){if(!t||!t["!ref"])return[];const n=[],s=e.utils.decode_range(t["!ref"]),a=s.s.r;for(let r=s.s.c;r<=s.e.c;++r){const s=t[e.utils.encode_cell({c:r,r:a})];let l="UNKNOWN "+r;s&&s.t&&(l=e.utils.format_cell(s)),n.push(l)}return n}function c(t){return l.value=!0,new Promise(((n,s)=>{const r=new FileReader;r.onload=async t=>{try{const s=t.target&&t.target.result,r=function(t){const n=[];for(const s of t.SheetNames){const a=t.Sheets[s],r=o(a),l=e.utils.sheet_to_json(a);n.push({header:r,results:l,meta:{sheetName:s}})}return n}(e.read(s,{type:"array"}));a("success",r),n("")}catch(r){s(r),a("error")}finally{l.value=!1}},r.readAsArrayBuffer(t)}))}return{handleUpload:function(){const e=s(r);e&&e.click()},handleInputClick:function(e){const t=e&&e.target.files,n=t&&t[0];n&&async function(e){const t=s(r);t&&(t.value=""),await c(e)}(n)},inputRef:r}}});i.render=function(e,t,n,s,i,d){return a(),r("div",null,[l(c("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick&&e.handleInputClick(...t))},null,544),[[o,!1]]),c("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload&&e.handleUpload(...t))},[u(e.$slots,"default")])])};export default i;