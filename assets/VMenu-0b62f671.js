import{f as h}from"./forwardRefs-a29b5f65.js";import{as as M,aA as b,aD as w,aC as O,D as m,k as v,aN as x,Y as A,Z as f,az as k,p as V,bl as I,aL as N}from"./index-316d1364.js";import{m as R,u as T,a as p,V as g}from"./VOverlay-534e2f2d.js";import{V as U}from"./dialog-transition-58d6d6db.js";const Y=M()({name:"VMenu",props:{id:String,...b(R({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:t}=P;const o=w(a,"modelValue"),{scopeId:y}=T(),C=O(),i=m(()=>a.id||`v-menu-${C}`),u=v(),e=x(p,null),s=v(0);N(p,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(o.value=!1,e==null||e.closeParents())},40)}}),A(o,l=>{l?e==null||e.register():e==null||e.unregister()});function D(){e==null||e.closeParents()}const S=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},a.activatorProps));return k(()=>{const[l]=g.filterProps(a);return V(g,f({ref:u,class:["v-menu",a.class],style:a.style},l,{modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,absolute:!0,activatorProps:S.value,"onClick:outside":D},y),{activator:t.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V(I,{root:!0},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...c)]}})}})}),h({id:i,ΨopenChildren:s},u)}});export{Y as V};