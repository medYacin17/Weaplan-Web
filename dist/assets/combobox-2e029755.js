import{_,V as C}from"./AppCombobox-0b6fe768.js";import{k as d,o as b,b as V,q as r,H as u,Y as I,ba as P,w as o,p as t,Q as n,m as a,y as x}from"./index-316d1364.js";import{a as A,b as D}from"./VList-18e75428.js";import{a as p,V as v}from"./VRow-ab4b794d.js";import{V as w}from"./VChip-6ae857ae.js";import{V as U}from"./VAvatar-6d773410.js";import{_ as L}from"./AppCardCode-23489e8e.js";import"./VInput-53f8379b.js";import"./transition-521b93ae.js";import"./VSelect-b93c40b3.js";import"./VTextField-db288dc5.js";/* empty css                   */import"./VField-f109ecae.js";import"./easing-9f15041e.js";import"./VImg-8b08cbda.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-c47a9a54.js";import"./dialog-transition-58d6d6db.js";import"./VMenu-0b62f671.js";import"./VOverlay-534e2f2d.js";import"./lazy-83886d65.js";import"./VCheckboxBtn-9e73f681.js";import"./VSelectionControl-306e73c1.js";import"./filter-2767447f.js";import"./ssrBoot-674b0f04.js";import"./VDivider-3a73e106.js";import"./vue.runtime.esm-bundler-a3219ac5.js";import"./VCard-592672bf.js";const k={__name:"DemoComboboxClearable",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=_;return b(),V(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"])}}},R=a("kbd",null,"enter",-1),$={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=d(["Vuetify"]),c=d(null);return I(m,l=>{l.length>5&&P(()=>m.value.pop())}),(l,s)=>{const i=_;return b(),V(i,{modelValue:r(m),"onUpdate:modelValue":s[0]||(s[0]=f=>u(m)?m.value=f:null),"search-input":r(c),"onUpdate:searchInput":s[1]||(s[1]=f=>u(c)?c.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":o(()=>[t(A,null,{default:o(()=>[t(D,null,{default:o(()=>[n(' No results matching "'),a("strong",null,x(r(c)),1),n('". Press '),R,n(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},N={style:{"margin-top":"1px"},class:"text-xs"},T={__name:"DemoComboboxMultiple",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=_;return b(),V(v,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=i=>u(e)?e.value=i:null),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=i=>u(e)?e.value=i:null),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(s,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=i=>u(e)?e.value=i:null),items:m,label:"I use selection slot",multiple:""},{selection:o(({item:i})=>[t(w,null,{default:o(()=>[t(U,{start:"",color:"primary"},{default:o(()=>[a("span",N,x(String(i.title).charAt(0).toUpperCase()),1)]),_:2},1024),n(" "+x(i.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},S={__name:"DemoComboboxVariant",setup(g){const e=d(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>(b(),V(v,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=s=>u(e)?e.value=s:null),items:m,multiple:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=s=>u(e)?e.value=s:null),multiple:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},j={__name:"DemoComboboxDensity",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=_;return b(),V(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"])}}},B={__name:"DemoComboboxBasic",setup(g){const e=d("Programming"),m=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const s=_;return b(),V(s,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=i=>u(e)?e.value=i:null),items:m},null,8,["modelValue"])}}},M={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},W={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},F={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},G={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip>
            <VAvatar
              start
              color="primary"
            >
              <span
                style="margin-top: 1px;"
                class="text-xs"
              >{{ String(item.title).charAt(0).toUpperCase() }}</span>
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip>
            <VAvatar
              start
              color="primary"
            >
              <span
                style="margin-top: 1px;"
                class="text-xs"
              >{{ String(item.title).charAt(0).toUpperCase() }}</span>
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},O={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},Y={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},q=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),H=a("p",null,[n(" You can use "),a("code",null,"Density"),n(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),n(", "),a("code",null,"comfortable"),n(", and "),a("code",null,"compact"),n(". ")],-1),Q=a("p",null,[n("Use "),a("code",null,"solo"),n(", "),a("code",null,"outlined"),n(", "),a("code",null,"underlined"),n(", "),a("code",null,"filled"),n(" and "),a("code",null,"plain"),n(" options of "),a("code",null,"variant"),n(" prop to change the look of combobox. ")],-1),z=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),J=a("p",null,[n("Use "),a("code",null,"clearable"),n(" prop to clear combobox.")],-1),Pe={__name:"combobox",setup(g){return(e,m)=>{const c=B,l=L,s=j,i=S,f=T,h=$,y=k;return b(),V(v,{class:"match-height"},{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Basic",code:M},{default:o(()=>[q,t(c)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Density",code:F},{default:o(()=>[H,t(s)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Variant",code:Y},{default:o(()=>[Q,t(i)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Multiple",code:G},{default:o(()=>[z,t(f)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"No data with chips",code:O},{default:o(()=>[E,t(h)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Clearable",code:W},{default:o(()=>[J,t(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
