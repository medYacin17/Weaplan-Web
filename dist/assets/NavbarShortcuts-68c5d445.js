import{t as b,r as h,o,b as n,w as e,p as t,A as r,Q as g,q as p,P as V,c as y,F as x,a as v,s as C,m,y as d}from"./index-316d1364.js";import{V as A}from"./VMenu-0b62f671.js";import{V as S,a as I,b as k}from"./VCard-592672bf.js";import{V as w}from"./VDivider-3a73e106.js";import{V as B,a as D}from"./VRow-ab4b794d.js";import{V as N}from"./VAvatar-6d773410.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-534e2f2d.js";import"./lazy-83886d65.js";import"./easing-9f15041e.js";import"./transition-521b93ae.js";import"./dialog-transition-58d6d6db.js";import"./VImg-8b08cbda.js";const q={class:"text-base font-weight-medium mt-2 mb-0"},z={class:"text-sm"},F={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const s=l,i=b();return(_,c)=>{const u=h("IconBtn");return o(),n(u,null,{default:e(()=>[t(r,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(A,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(S,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(I,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(r,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(k,null,{default:e(()=>[g("Shortcuts")]),_:1})]),_:1}),t(w),t(p(V),{options:{wheelPropagation:!1}},{default:e(()=>[t(B,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),y(x,null,v(s.shortcuts,(a,f)=>(o(),n(D,{key:a.title,cols:"6",class:C(["text-center border-t cursor-pointer pa-4 shortcut-icon",(f+1)%2?"border-e":""]),onClick:M=>p(i).push(a.to)},{default:e(()=>[t(N,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),m("h6",q,d(a.title),1),m("span",z,d(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},O={__name:"NavbarShortcuts",setup(l){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,_)=>{const c=F;return o(),n(c,{shortcuts:s})}}};export{O as default};