import{X as g,Y as d,k as f,r as _,o as l,b as i,w as a,p as s,A as L,q as b,H as h,c as v,F as V,a as C,Q as I,y as k,v as x}from"./index-316d1364.js";import{V as y}from"./VMenu-0b62f671.js";import{V as B,a as A,b as w}from"./VList-18e75428.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-534e2f2d.js";import"./lazy-83886d65.js";import"./easing-9f15041e.js";import"./transition-521b93ae.js";import"./dialog-transition-58d6d6db.js";import"./ssrBoot-674b0f04.js";import"./VAvatar-6d773410.js";import"./VImg-8b08cbda.js";import"./VDivider-3a73e106.js";const q={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(c,{emit:u}){const n=c,{locale:o}=g({useScope:"global"});d(o,r=>{document.documentElement.setAttribute("lang",r)});const t=f(["en"]);return(r,p)=>{const m=_("IconBtn");return l(),i(m,null,{default:a(()=>[s(L,{size:"26",icon:"tabler-language"}),s(y,{activator:"parent",location:n.location,offset:"14px"},{default:a(()=>[s(B,{selected:b(t),"onUpdate:selected":p[0]||(p[0]=e=>h(t)?t.value=e:null),"min-width":"175px"},{default:a(()=>[(l(!0),v(V,null,C(n.languages,e=>(l(),i(A,{key:e.i18nLang,value:e.i18nLang,onClick:E=>{o.value=e.i18nLang,r.$emit("change",e.i18nLang)}},{default:a(()=>[s(w,null,{default:a(()=>[I(k(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}},Y={__name:"NavBarI18n",setup(c){const{isAppRtl:u}=x(),n=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],o=t=>{u.value=t==="ar"};return(t,r)=>(l(),i(q,{languages:n,onChange:o}))}};export{Y as default};