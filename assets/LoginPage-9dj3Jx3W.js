import{r as l,u as c,e as d,j as e}from"./index-DeuJWPC5.js";const m="_loginPage_18y5m_1",u={loginPage:m};function h(){const[s,t]=l.useState(""),[n,o]=l.useState(""),{login:i}=c(),r=d(),g=a=>{a.preventDefault(),s.length!=3&&n.length!=3&&i({email:s,password:n}),t(""),o(""),r("/app")};return e.jsx("main",{className:u.loginPage,children:e.jsxs("form",{onSubmit:g,children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("input",{id:"email",type:"email",onChange:a=>t(a.target.value)}),e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{id:"password",type:"password",onChange:a=>o(a.target.value)}),e.jsx("button",{className:"cta",children:"Login"})]})})}export{h as default};