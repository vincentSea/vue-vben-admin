import{u as e}from"./useECharts.c9514bfc.js";import{b as t}from"./props.f48aca0b.js";import{d as o,r,a6 as l,o as i,j as a}from"./index.94b82568.js";import"./useTimeout.b50e2d3d.js";const n=[{value:335,name:"移动设备",itemStyle:{color:"#1b65b9"}},{value:310,name:"网页端",itemStyle:{color:"#3ca0f6"}},{value:234,name:"手表",itemStyle:{color:"#2dc0c0"}},{value:234,name:"其他",itemStyle:{color:"#7dd9b9"}}];var s=o({props:t,setup(){const t=r(null),{setOptions:o}=e(t);return l((()=>{o({title:[{text:"总设备",subtext:"1,430",textStyle:{fontSize:12,color:"#4B535E85"},subtextStyle:{fontSize:24,color:"black"},textAlign:"center",x:"34.5%",y:"40%"}],tooltip:{trigger:"item",backgroundColor:"rgba(0, 0, 0, .6)"},legend:{icon:"circle",itemHeight:10,type:"scroll",orient:"vertical",left:"70%",align:"left",top:"middle",textStyle:{color:"#8C8C8C"},height:250},series:[{name:"成交额",type:"pie",center:["35%","50%"],radius:["45%","65%"],label:{show:!1},data:n,animationDuration:3e3}]})})),{chartRef:t}}});s.render=function(e,t,o,r,l,n){return i(),a("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default s;