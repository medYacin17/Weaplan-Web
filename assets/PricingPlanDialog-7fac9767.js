import{_ as m}from"./AppPricing-8ee8322a.js";import{_ as d}from"./DialogCloseBtn-356335a1.js";import{V as c,d as _}from"./VCard-592672bf.js";import{V as u}from"./VDialog-f1d29527.js";import{o as g,b as V,w as a,p as i}from"./index-316d1364.js";const B={__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(l,{emit:s}){const t=l,n=o=>{s("update:isDialogVisible",o)};return(o,e)=>{const p=d,r=m;return g(),V(u,{"model-value":t.isDialogVisible,class:"v-dialog-xl","onUpdate:modelValue":n},{default:a(()=>[i(p,{onClick:e[0]||(e[0]=f=>o.$emit("update:isDialogVisible",!1))}),i(c,{class:"pricing-dialog pa-5 pa-sm-8"},{default:a(()=>[i(_,null,{default:a(()=>[i(r,{title:"Subscription Plan",md:"4"})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{B as _};
