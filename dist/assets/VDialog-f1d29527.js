import{as as P,aD as y,k as D,bH as h,Y as f,ba as S,D as x,Z as v,az as w,p as m,bl as B,ce as I}from"./index-316d1364.js";import{m as R,u as T,V as g}from"./VOverlay-534e2f2d.js";import{f as F}from"./forwardRefs-a29b5f65.js";import{V as O}from"./dialog-transition-58d6d6db.js";const N=P()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...R({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=y(a,"modelValue"),{scopeId:V}=T(),t=D();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=I(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}h&&f(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),f(n,async l=>{var e,o;await S(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const b=x(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return w(()=>{const[l]=g.filterProps(a);return m(g,v({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return m(B,{root:!0},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),F({},t)}});export{N as V};
