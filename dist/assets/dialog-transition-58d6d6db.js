import{as as b,p as y,Z as A,T as u}from"./index-316d1364.js";import{a as m,d as B,s as v,b as C,n as T}from"./easing-9f15041e.js";const F=b()({name:"VDialogTransition",props:{target:Object},setup(g,i){let{slots:e}=i;const o={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,h){var c;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:s,y:a,sx:p,sy:f,speed:r}=x(g.target,t),l=m(t,[{transform:`translate(${s}px, ${a}px) scale(${p}, ${f})`,opacity:0},{}],{duration:225*r,easing:B});(c=w(t))==null||c.forEach(n=>{m(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:v})}),l.finished.then(()=>h())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,h){var c;await new Promise(n=>requestAnimationFrame(n));const{x:s,y:a,sx:p,sy:f,speed:r}=x(g.target,t);m(t,[{},{transform:`translate(${s}px, ${a}px) scale(${p}, ${f})`,opacity:0}],{duration:125*r,easing:C}).finished.then(()=>h()),(c=w(t))==null||c.forEach(n=>{m(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>g.target?y(u,A({name:"dialog-transition"},o,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function w(g){var e;const i=(e=g.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return i&&[...i]}function x(g,i){const e=g.getBoundingClientRect(),o=T(i),[t,h]=getComputedStyle(i).transformOrigin.split(" ").map(P=>parseFloat(P)),[s,a]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let p=e.left+e.width/2;s==="left"||a==="left"?p-=e.width/2:(s==="right"||a==="right")&&(p+=e.width/2);let f=e.top+e.height/2;s==="top"||a==="top"?f-=e.height/2:(s==="bottom"||a==="bottom")&&(f+=e.height/2);const r=e.width/o.width,l=e.height/o.height,c=Math.max(1,r,l),n=r/c||0,E=l/c||0,d=o.width*o.height/(window.innerWidth*window.innerHeight),$=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:p-(t+o.left),y:f-(h+o.top),sx:n,sy:E,speed:$}}export{F as V};
