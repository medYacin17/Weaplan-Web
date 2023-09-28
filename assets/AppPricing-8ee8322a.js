import{W as v,k as S,o as n,c as m,m as a,y as o,p as e,w as s,Q as l,q as p,H as k,A as y,F as f,a as h,Z as w,s as C,K as b,L as P,b as L,G as B,a8 as I,a9 as N}from"./index-316d1364.js";import{V as U}from"./VInput-53f8379b.js";import{V as q}from"./VSwitch-1b704711.js";import{V as x}from"./VChip-6ae857ae.js";import{a as A,V as z}from"./VRow-ab4b794d.js";import{V as T,d as c,c as D}from"./VCard-592672bf.js";import{V as F}from"./VImg-8b08cbda.js";import{V as G,a as M,b as R}from"./VList-18e75428.js";const j="/assets/3d-safe-box-with-golden-dollar-coins-fcbc95c7.png",E="/assets/3d-space-rocket-with-smoke-603bb4f0.png",W="/assets/dollar-coins-flying-pink-piggy-bank-85567cfa.png";const u=r=>(I("data-v-e3260012"),r=r(),N(),r),Y={class:"text-center"},$={class:"text-h2 pricing-title mb-4"},H=u(()=>a("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. ",-1)),J=u(()=>a("p",null,"Choose the best plan to fit your needs.",-1)),K={class:"d-flex align-center justify-center mx-auto my-10"},Q={class:"position-relative"},Z={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},O={class:"text-h5 mb-2"},X={class:"mb-0"},ee={class:"d-flex justify-center align-center"},te=u(()=>a("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),se={class:"text-5xl font-weight-medium text-primary"},ae=u(()=>a("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),oe={__name:"AppPricing",props:{title:{type:String,required:!1},xs:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[String,Number],required:!1},lg:{type:[String,Number],required:!1},xl:{type:[String,Number],required:!1}},setup(r){const d=r,i=S(!0),V=[{name:"Basic",tagLine:"A simple start for everyone",logo:W,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:j,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom “Thank you” page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:E,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(re,g)=>(n(),m(f,null,[a("div",Y,[a("h4",$,o(d.title?d.title:"Pricing Plans"),1),H,J]),a("div",K,[e(U,{for:"pricing-plan-toggle",class:"me-2"},{default:s(()=>[l(" Monthly ")]),_:1}),a("div",Q,[e(q,{id:"pricing-plan-toggle",modelValue:p(i),"onUpdate:modelValue":g[0]||(g[0]=t=>k(i)?i.value=t:null),label:"Annual"},null,8,["modelValue"]),a("div",Z,[e(y,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(x,{label:"",color:"primary"},{default:s(()=>[l(" Save up to 10% ")]),_:1})])])]),e(z,null,{default:s(()=>[(n(),m(f,null,h(V,t=>e(A,w({key:t.logo},d,{cols:"12"}),{default:s(()=>[e(T,{flat:"",border:"",class:C(t.isPopular?"border-primary border-opacity-100":"")},{default:s(()=>[e(c,{style:{"block-size":"4.125rem"},class:"text-end"},{default:s(()=>[b(e(x,{label:"",color:"primary",size:"small"},{default:s(()=>[l(" Popular ")]),_:2},1536),[[P,t.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:s(()=>[e(F,{height:140,src:t.logo,class:"mx-auto mb-5"},null,8,["src"]),a("h5",O,o(t.name),1),a("p",X,o(t.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:s(()=>[a("div",ee,[te,a("h1",se,o(p(i)?Math.floor(Number(t.yearlyPrice)/12):t.monthlyPrice),1),ae]),b(a("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},o(t.yearlyPrice===0?"free":`USD ${t.yearlyPrice}/Year`),513),[[P,p(i)]])]),_:2},1024),e(c,{class:"mt-5"},{default:s(()=>[e(G,{class:"card-list"},{default:s(()=>[(n(!0),m(f,null,h(t.features,_=>(n(),L(M,{key:_},{prepend:s(()=>[e(y,{size:14,icon:"tabler-circle",class:"me-3"})]),default:s(()=>[e(R,null,{default:s(()=>[l(o(_),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(D,null,{default:s(()=>[e(B,{block:"",color:t.current?"success":"primary",variant:t.isPopular?"elevated":"tonal"},{default:s(()=>[l(o(t.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}},fe=v(oe,[["__scopeId","data-v-e3260012"]]);export{fe as _};