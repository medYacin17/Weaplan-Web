import{v as _,a3 as d,Y as f,r as x,o as i,b as p,w as c,p as r,A as T,q as m,m as v,y}from"./index-316d1364.js";import{V as g}from"./VTooltip-773f5458.js";import"./VOverlay-534e2f2d.js";import"./lazy-83886d65.js";import"./easing-9f15041e.js";import"./transition-521b93ae.js";import"./forwardRefs-a29b5f65.js";const w={class:"text-capitalize"},N={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(s){const e=s,{theme:t}=_(),{state:o,next:n,index:l}=d(e.themes.map(a=>a.name),{initialValue:t.value}),h=()=>{t.value=n()};return f(t,a=>{o.value=a}),(a,V)=>{const u=x("IconBtn");return i(),p(u,{onClick:h},{default:c(()=>[r(T,{size:"26",icon:e.themes[m(l)].icon},null,8,["icon"]),r(g,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:c(()=>[v("span",w,y(m(o)),1)]),_:1})]),_:1})}}},z={__name:"NavbarThemeSwitcher",setup(s){const e=[{name:"system",icon:"tabler-device-laptop"},{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon"}];return(t,o)=>{const n=N;return i(),p(n,{themes:e})}}};export{z as default};