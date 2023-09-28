import{m as U,V as w}from"./VSlideGroup-5a3f7d36.js";import{as as E,aA as X,dG as q,aw as O,D as G,k as V,az as M,G as z,p as m,Z as k,aS as W,aY as Z,aD as j,aT as F,b4 as J,ax as l,bc as K,ay as L}from"./index-316d1364.js";import{a as Q,s as p}from"./easing-9f15041e.js";const D=Symbol.for("vuetify:v-tabs"),ee=E()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...X(q({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,t){let{slots:o,attrs:b}=t;const{textColorClasses:y,textColorStyles:x}=O(e,"sliderColor"),a=G(()=>e.direction==="horizontal"),c=V(!1),f=V(),s=V();function R(h){var T,B;let{value:u}=h;if(c.value=u,u){const S=(B=(T=f.value)==null?void 0:T.$el.parentElement)==null?void 0:B.querySelector(".v-tab--selected .v-tab__slider"),C=s.value;if(!S||!C)return;const _=getComputedStyle(S).color,n=S.getBoundingClientRect(),r=C.getBoundingClientRect(),g=a.value?"x":"y",v=a.value?"X":"Y",$=a.value?"right":"bottom",i=a.value?"width":"height",A=n[g],Y=r[g],d=A>Y?n[$]-r[$]:n[g]-r[g],H=Math.sign(d)>0?a.value?"right":"bottom":Math.sign(d)<0?a.value?"left":"top":"center",I=(Math.abs(d)+(Math.sign(d)<0?n[i]:r[i]))/Math.max(n[i],r[i]),N=n[i]/r[i],P=1.5;Q(C,{backgroundColor:[_,""],transform:[`translate${v}(${d}px) scale${v}(${N})`,`translate${v}(${d/P}px) scale${v}(${(I-1)/P+1})`,""],transformOrigin:Array(3).fill(H)},{duration:225,easing:p})}}return M(()=>{const[h]=z.filterProps(e);return m(z,k({symbol:D,ref:f,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},h,b,{"onGroup:selected":R}),{default:()=>{var u;return[((u=o.default)==null?void 0:u.call(o))??e.text,!e.hideSlider&&m("div",{ref:s,class:["v-tab__slider",y.value],style:x.value},null)]}})}),{}}});function te(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const ne=E()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...U({mandatory:"force"}),...W(),...Z()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const b=j(e,"modelValue"),y=G(()=>te(e.items)),{densityClasses:x}=F(e),{backgroundColorClasses:a,backgroundColorStyles:c}=J(l(e,"bgColor"));return K({VTab:{color:l(e,"color"),direction:l(e,"direction"),stacked:l(e,"stacked"),fixed:l(e,"fixedTabs"),sliderColor:l(e,"sliderColor"),hideSlider:l(e,"hideSlider")}}),M(()=>{const[f]=w.filterProps(e);return m(w,k(f,{modelValue:b.value,"onUpdate:modelValue":s=>b.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},x.value,a.value,e.class],style:[{"--v-tabs-height":L(e.height)},c.value,e.style],role:"tablist",symbol:D}),{default:()=>[o.default?o.default():y.value.map(s=>m(ee,k(s,{key:s.title}),null))]})}),{}}});export{ne as V,ee as a};