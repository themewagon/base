import{r as n,j as e,S as o,B as l}from"./index-0ZqnxuXU.js";import{I as m}from"./Image-D52gvGhu.js";import{L as d}from"./Logo-o0ZDjHVW.js";import{P as h,B as u,j as c,k as p,q as x,n as f}from"./TextField-BAVfnkO3.js";const b=()=>{const[a,s]=n.useState(""),i=t=>{s(t.target.value)},r=t=>{t.preventDefault(),console.log(a)};return e.jsx(o,{py:10,justifyContent:"center",height:"100vh",width:1,children:e.jsxs(o,{mx:1.5,my:"auto",component:h,direction:"column",alignItems:"center",justifyContent:"center",height:600,width:1,maxWidth:600,borderRadius:1.5,children:[e.jsx(u,{LinkComponent:c,href:"/",disableRipple:!0,children:e.jsx(m,{src:d,alt:"logo",height:92,width:92})}),e.jsx(p,{mt:6,variant:"h3",fontWeight:600,children:"Recover"}),e.jsxs(l,{mt:8,width:1,maxWidth:480,component:"form",onSubmit:r,children:[e.jsx(x,{id:"email",name:"email",type:"email",color:"secondary",label:"Email Address",value:a,onChange:i,variant:"filled",placeholder:"mail@example.com",autoComplete:"email",sx:{mt:3},fullWidth:!0,autoFocus:!0,required:!0}),e.jsx(f,{type:"submit",variant:"contained",size:"large",sx:{mt:3},fullWidth:!0,children:"Reset Your Password"})]})]})})};export{b as default};
