import{as as P,aB as _,at as R,aS as $,bz as z,aY as N,au as A,aF as T,av as w,aD as D,D as u,bR as H,c8 as E,k as G,aC as Q,az as U,p as l,F as k,G as Y,Q as j}from"./index-316d1364.js";const J=P()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:_,default:"$ratingEmpty"},fullIcon:{type:_,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...R(),...$(),...z(),...N(),...A()},emits:{"update:modelValue":e=>!0},setup(e,C){let{slots:s}=C;const{t:M}=T(),{themeClasses:B}=w(e),f=D(e,"modelValue"),c=u(()=>H(parseFloat(f.value),0,+e.length)),h=u(()=>E(Number(e.length),1)),y=u(()=>h.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),d=G(-1),g=u(()=>y.value.map(a=>{const i=e.hover&&d.value>-1,n=c.value>=a,t=d.value>=a,o=(i?t:n)?e.fullIcon:e.emptyIcon,b=e.activeColor??e.color,v=n||t?b:e.color;return{isFilled:n,isHovered:t,icon:o,color:v}})),F=u(()=>[0,...y.value].map(a=>{function i(){d.value=a}function n(){d.value=-1}function t(){e.disabled||e.readonly||(f.value=c.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?i:void 0,onMouseleave:e.hover?n:void 0,onClick:t}})),I=u(()=>e.name??`v-rating-${Q()}`);function m(a){var L,V;let{value:i,index:n,showStar:t=!0}=a;const{onMouseenter:r,onMouseleave:o,onClick:b}=F.value[n+1],v=`${I.value}-${String(i).replace(".","-")}`,x={color:(L=g.value[n])==null?void 0:L.color,density:e.density,disabled:e.disabled,icon:(V=g.value[n])==null?void 0:V.icon,ripple:e.ripple,size:e.size,variant:"plain"};return l(k,null,[l("label",{for:v,class:{"v-rating__item--half":e.halfIncrements&&i%1>0,"v-rating__item--full":e.halfIncrements&&i%1===0},onMouseenter:r,onMouseleave:o,onClick:b},[l("span",{class:"v-rating__hidden"},[M(e.itemAriaLabel,i,e.length)]),t?s.item?s.item({...g.value[n],props:x,value:i,index:n,rating:c.value}):l(Y,x,null):void 0]),l("input",{class:"v-rating__hidden",name:I.value,id:v,type:"radio",value:i,checked:c.value===i,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function S(a){return s["item-label"]?s["item-label"](a):a.label?l("span",null,[a.label]):l("span",null,[j(" ")])}return U(()=>{var i;const a=!!((i=e.itemLabels)!=null&&i.length)||s["item-label"];return l(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},B.value,e.class],style:e.style},{default:()=>[l(m,{value:0,index:-1,showStar:!1},null),h.value.map((n,t)=>{var r,o;return l("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?S({value:n,index:t,label:(r=e.itemLabels)==null?void 0:r[t]}):void 0,l("div",{class:"v-rating__item"},[e.halfIncrements?l(k,null,[l(m,{value:n-.5,index:t*2},null),l(m,{value:n,index:t*2+1},null)]):l(m,{value:n,index:t},null)]),a&&e.itemLabelPosition==="bottom"?S({value:n,index:t,label:(o=e.itemLabels)==null?void 0:o[t]}):void 0])})]})}),{}}});export{J as V};