import{k as C,D as g,ay as p,aQ as A,Y as L,aP as F,aZ as J,as as K,a_ as ee,at as te,a$ as ae,b0 as ne,b1 as oe,aY as le,au as ue,b2 as ie,av as re,b3 as se,b4 as $,ax as X,b5 as ce,b6 as ve,b7 as de,b8 as me,aD as fe,b9 as he,ba as ge,aO as we,bb as ye,bc as be,az as Se,p as T,Z as ke,T as Ee,F as Me}from"./index-316d1364.js";import{u as Te}from"./ssrBoot-674b0f04.js";function xe(e){let{rootEl:r,isSticky:s,layoutItemStyles:u}=e;const a=C(!1),t=C(0),m=g(()=>{const f=typeof a.value=="boolean"?"top":a.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[f]:p(t.value)}:{top:u.value.top}]});A(()=>{L(s,f=>{f?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),F(()=>{document.removeEventListener("scroll",S)});let b=0;function S(){const f=b>window.scrollY?"up":"down",l=r.value.getBoundingClientRect(),c=parseFloat(u.value.top??0),v=window.scrollY-Math.max(0,t.value-c),d=l.height+Math.max(t.value,c)-window.scrollY-window.innerHeight;l.height<window.innerHeight-c?(a.value="top",t.value=c):f==="up"&&a.value==="bottom"||f==="down"&&a.value==="top"?(t.value=window.scrollY+l.top,a.value=!0):f==="down"&&d<=0?(t.value=0,a.value="bottom"):f==="up"&&v<=0&&(t.value=l.top+v,a.value="top"),b=window.scrollY}return{isStuck:a,stickyStyles:m}}const Be=100,Ce=20;function z(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const u=z(r),a=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);r+=(a-u)*Math.abs(a),s===e.length-1&&(r*=.5)}return z(r)*1e3}function Re(){const e={};function r(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new J(Ce))).push([a.timeStamp,t])})}function s(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var f;const t=(f=e[a])==null?void 0:f.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const m=t[0],b=[],S=[];for(const l of t){if(m[0]-l[0]>Be)break;b.push({t:l[0],d:l[1].clientX}),S.push({t:l[0],d:l[1].clientY})}return{x:Z(b),y:Z(S),get direction(){const{x:l,y:c}=this,[v,d]=[Math.abs(l),Math.abs(c)];return v>d&&l>=0?"right":v>d&&l<=0?"left":d>v&&c>=0?"down":d>v&&c<=0?"up":Ye()}}}return{addMovement:r,endTouch:s,getVelocity:u}}function Ye(){throw new Error}function He(e){let{isActive:r,isTemporary:s,width:u,touchless:a,position:t}=e;A(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),F(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",B)});const m=g(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:f}=Re();let l=!1;const c=C(!1),v=C(0),d=C(0);let w;function P(n,o){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:H())-(o?u.value:0)}function V(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const i=t.value==="left"?(n-d.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-n-d.value)/u.value:t.value==="top"?(n-d.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-n-d.value)/u.value:H();return o?Math.max(0,Math.min(1,i)):i}function x(n){if(a.value)return;const o=n.changedTouches[0].clientX,i=n.changedTouches[0].clientY,h=25,E=t.value==="left"?o<h:t.value==="right"?o>document.documentElement.clientWidth-h:t.value==="top"?i<h:t.value==="bottom"?i>document.documentElement.clientHeight-h:H(),M=r.value&&(t.value==="left"?o<u.value:t.value==="right"?o>document.documentElement.clientWidth-u.value:t.value==="top"?i<u.value:t.value==="bottom"?i>document.documentElement.clientHeight-u.value:H());(E||M||r.value&&s.value)&&(l=!0,w=[o,i],d.value=P(m.value?o:i,r.value),v.value=V(m.value?o:i),S(n),b(n))}function R(n){const o=n.changedTouches[0].clientX,i=n.changedTouches[0].clientY;if(l){if(!n.cancelable){l=!1;return}const E=Math.abs(o-w[0]),M=Math.abs(i-w[1]);(m.value?E>M&&E>3:M>E&&M>3)?(c.value=!0,l=!1):(m.value?M:E)>3&&(l=!1)}if(!c.value)return;n.preventDefault(),b(n);const h=V(m.value?o:i,!1);v.value=Math.max(0,Math.min(1,h)),h>1?d.value=P(m.value?o:i,!0):h<0&&(d.value=P(m.value?o:i,!1))}function B(n){if(l=!1,!c.value)return;b(n),c.value=!1;const o=f(n.changedTouches[0].identifier),i=Math.abs(o.x),h=Math.abs(o.y);(m.value?i>h&&i>400:h>i&&h>3)?r.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||H()):r.value=v.value>.5}const k=g(()=>c.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*u.value}px))`:H(),transition:"none"}:void 0);return{isDragging:c,dragProgress:v,dragStyles:k}}function H(){throw new Error}const Pe=["start","end","left","right","top","bottom"],Le=K()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Pe.includes(e)},sticky:Boolean,...ee(),...te(),...ae(),...ne(),...oe(),...le({tag:"nav"}),...ue()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:s,emit:u,slots:a}=r;const{isRtl:t}=ie(),{themeClasses:m}=re(e),{borderClasses:b}=se(e),{backgroundColorClasses:S,backgroundColorStyles:f}=$(X(e,"color")),{elevationClasses:l}=ce(e),{mobile:c}=ve(),{roundedClasses:v}=de(e),d=me(),w=fe(e,"modelValue",null,y=>!!y),{ssrBootStyles:P}=Te(),V=C(),x=C(!1),R=g(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=g(()=>he(e.location,t.value)),k=g(()=>!e.permanent&&(c.value||e.temporary)),n=g(()=>e.sticky&&!k.value&&B.value!=="bottom");e.expandOnHover&&e.rail!=null&&L(x,y=>u("update:rail",!y)),e.disableResizeWatcher||L(k,y=>!e.permanent&&ge(()=>w.value=!y)),!e.disableRouteWatcher&&d&&L(d.currentRoute,()=>k.value&&(w.value=!1)),L(()=>e.permanent,y=>{y&&(w.value=!0)}),we(()=>{e.modelValue!=null||k.value||(w.value=e.permanent||!c.value)});const{isDragging:o,dragProgress:i,dragStyles:h}=He({isActive:w,isTemporary:k,width:R,touchless:X(e,"touchless"),position:B}),E=g(()=>{const y=k.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):R.value;return o.value?y*i.value:y}),{layoutItemStyles:M,layoutRect:Y,layoutItemScrimStyles:q}=ye({id:e.name,order:g(()=>parseInt(e.order,10)),position:B,layoutSize:E,elementSize:R,active:g(()=>w.value||o.value),disableTransitions:g(()=>o.value),absolute:g(()=>e.absolute||n.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:U}=xe({rootEl:V,isSticky:n,layoutItemStyles:M}),N=$(g(()=>typeof e.scrim=="string"?e.scrim:null)),Q=g(()=>({...o.value?{opacity:i.value*.2,transition:"none"}:void 0,...Y.value?{left:p(Y.value.left),right:p(Y.value.right),top:p(Y.value.top),bottom:p(Y.value.bottom)}:void 0,...q.value}));be({VList:{bgColor:"transparent"}});function j(){x.value=!0}function G(){x.value=!1}return Se(()=>{const y=a.image||e.image;return T(Me,null,[T(e.tag,ke({ref:V,onMouseenter:j,onMouseleave:G,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":k.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":n.value},m.value,S.value,b.value,l.value,v.value,e.class],style:[f.value,M.value,h.value,P.value,U.value,e.style]},s),{default:()=>{var W,_,I,O;return[y&&T("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(W=a.image)==null?void 0:W.call(a,{image:e.image}):T("img",{src:e.image,alt:""},null)]),a.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),T("div",{class:"v-navigation-drawer__content"},[(I=a.default)==null?void 0:I.call(a)]),a.append&&T("div",{class:"v-navigation-drawer__append"},[(O=a.append)==null?void 0:O.call(a)])]}}),T(Ee,{name:"fade-transition"},{default:()=>[k.value&&(o.value||w.value)&&!!e.scrim&&T("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Q.value,N.backgroundColorStyles.value],onClick:()=>w.value=!1},null)]})])}),{isStuck:D}}});export{Le as V};
