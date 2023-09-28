import{m as se,f as ce,V as ue}from"./VField-f109ecae.js";import{m as pe,u as re,a as O}from"./VInput-53f8379b.js";import{f as de}from"./forwardRefs-a29b5f65.js";import{as as me,aK as _e,aF as fe,aD as he,D as z,dN as Y,k as g,Y as W,az as Fe,aE as Ve,p as e,Z as N,F as j,ba as ve,bX as be,o as p,b as r,q as L,H as q,w as o,c as ge,a as Ie,Q as t,y as ye,W as F,m as n}from"./index-316d1364.js";import{V as H}from"./VChip-6ae857ae.js";import{V as Ce}from"./VCounter-c47a9a54.js";import{a as c,V as K}from"./VRow-ab4b794d.js";import{_ as we}from"./AppCardCode-23489e8e.js";import"./easing-9f15041e.js";import"./transition-521b93ae.js";import"./VAvatar-6d773410.js";import"./VImg-8b08cbda.js";import"./vue.runtime.esm-bundler-a3219ac5.js";import"./VCard-592672bf.js";import"./VDivider-3a73e106.js";const u=me()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...pe({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>_e(l).every(i=>i!=null&&typeof i=="object")},...se({clearable:!0})},emits:{"click:control":l=>!0,"mousedown:control":l=>!0,"update:focused":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:_,emit:f,slots:a}=i;const{t:h}=fe(),m=he(l,"modelValue"),{isFocused:b,focus:x,blur:A}=re(l),k=z(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=z(()=>(m.value??[]).reduce((s,d)=>{let{size:y=0}=d;return s+y},0)),$=z(()=>Y(S.value,k.value)),I=z(()=>(m.value??[]).map(s=>{const{name:d="",size:y=0}=s;return l.showSize?`${d} (${Y(y,k.value)})`:d})),B=z(()=>{var d;const s=((d=m.value)==null?void 0:d.length)??0;return l.showSize?h(l.counterSizeString,s,$.value):h(l.counterString,s)}),D=g(),U=g(),V=g();function R(){var s;V.value!==document.activeElement&&((s=V.value)==null||s.focus()),b.value||x()}function Q(s){M(s)}function X(s){f("mousedown:control",s)}function M(s){var d;(d=V.value)==null||d.click(),f("click:control",s)}function Z(s){s.stopPropagation(),R(),ve(()=>{m.value=[],be(l["onClick:clear"],s)})}return W(m,s=>{(!Array.isArray(s)||!s.length)&&V.value&&(V.value.value="")}),Fe(()=>{const s=!!(a.counter||l.counter),d=!!(s||a.details),[y,G]=Ve(_),[{modelValue:zl,...J}]=O.filterProps(l),[ee]=ce(l);return e(O,N({ref:D,modelValue:m.value,"onUpdate:modelValue":C=>m.value=C,class:["v-file-input",l.class],style:l.style,"onClick:prepend":Q},y,J,{focused:b.value}),{...a,default:C=>{let{id:P,isDisabled:w,isDirty:T,isReadonly:le,isValid:te}=C;return e(ue,N({ref:U,"prepend-icon":l.prependIcon,onMousedown:X,onClick:M,"onClick:clear":Z,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},ee,{id:P.value,active:T.value||b.value,dirty:T.value,disabled:w.value,focused:b.value,error:te.value===!1}),{...a,default:ne=>{var E;let{props:{class:oe,...ae}}=ne;return e(j,null,[e("input",N({ref:V,type:"file",readonly:le.value,disabled:w.value,multiple:l.multiple,name:l.name,onClick:v=>{v.stopPropagation(),R()},onChange:v=>{if(!v.target)return;const ie=v.target;m.value=[...ie.files??[]]},onFocus:R,onBlur:A},ae,G),null),e("div",{class:oe},[!!((E=m.value)!=null&&E.length)&&(a.selection?a.selection({fileNames:I.value,totalBytes:S.value,totalBytesReadable:$.value}):l.chips?I.value.map(v=>e(H,{key:v,size:"small",color:l.color},{default:()=>[v]})):I.value.join(", "))])])}})},details:d?C=>{var P,w;return e(j,null,[(P=a.details)==null?void 0:P.call(a,C),s&&e(j,null,[e("span",null,null),e(Ce,{active:!!((w=m.value)!=null&&w.length),value:B.value},a.counter)])])}:void 0})}),de({},D,U,V)}}),ze={__name:"DemoFileInputLoading",setup(l){const i=g(),_=g(!0);return W(i,()=>{_.value=!i.value[0]}),(f,a)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":a[0]||(a[0]=h=>q(i)?i.value=h:null),loading:L(_),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},ke={__name:"DemoFileInputSelectionSlot",setup(l){const i=g([]);return(_,f)=>(p(),r(u,{modelValue:L(i),"onUpdate:modelValue":f[0]||(f[0]=a=>q(i)?i.value=a:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:o(({fileNames:a})=>[(p(!0),ge(j,null,Ie(a,h=>(p(),r(H,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:o(()=>[t(ye(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},Se={__name:"DemoFileInputValidation",setup(l){const i=[_=>!_||!_.length||_[0].size<1e6||"Avatar size should be less than 1 MB!"];return(_,f)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}},$e={};function De(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const Pe=F($e,[["render",De]]),je={};function xe(l,i){return p(),r(u,{label:"File input","prepend-icon":"tabler-camera"})}const Ae=F(je,[["render",xe]]),Be={};function Re(l,i){return p(),r(u,{multiple:"",label:"File input"})}const Ne=F(Be,[["render",Re]]),Le={};function Ue(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Me=F(Le,[["render",Ue]]),Te={};function Ee(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Oe=F(Te,[["render",Ee]]),Ye={};function We(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const qe=F(Ye,[["render",We]]),He={};function Ke(l,i){return p(),r(K,null,{default:o(()=>[e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const Qe=F(He,[["render",Ke]]),Xe={};function Ze(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Ge=F(Xe,[["render",Ze]]),Je={};function el(l,i){return p(),r(u,{label:"File input"})}const ll=F(Je,[["render",el]]),tl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},nl={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},ol={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},al={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},il={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},sl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},cl={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},ul={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},pl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},rl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},dl={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},ml={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},_l=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),fl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),hl=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),Fl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),Vl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),vl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),bl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),gl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Il=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),yl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Cl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),wl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),El={__name:"file-input",setup(l){return(i,_)=>{const f=ll,a=we,h=Ge,m=Qe,b=qe,x=Oe,A=Me,k=Ne,S=Ae,$=Pe,I=Se,B=ke,D=ze;return p(),r(K,{class:"match-height"},{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Basic",code:nl},{default:o(()=>[_l,e(f)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Density",code:il},{default:o(()=>[fl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:o(()=>[e(a,{title:"Variant",code:ml},{default:o(()=>[hl,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Accept",code:tl},{default:o(()=>[Fl,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Chips",code:ol},{default:o(()=>[Vl,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Counter",code:al},{default:o(()=>[vl,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Multiple",code:cl},{default:o(()=>[bl,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Prepend icon",code:ul},{default:o(()=>[gl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Show size",code:rl},{default:o(()=>[Il,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Validation",code:dl},{default:o(()=>[yl,e(I)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Selection slot",code:pl},{default:o(()=>[Cl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(a,{title:"Loading",code:sl},{default:o(()=>[wl,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{El as default};
