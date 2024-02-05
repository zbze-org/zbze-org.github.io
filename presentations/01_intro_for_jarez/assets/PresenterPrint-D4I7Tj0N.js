import{d as _,u as d,a as h,c as m,b as p,r as u,o as s,e as n,f as t,t as a,g as l,F as g,h as f,n as v,i as b,j as x,k as y,l as N,m as P,_ as k}from"./index-3xz1mf18.js";import{N as z}from"./NoteDisplay-PpUaToPh.js";const w={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},j={class:"font-bold flex gap-2"},B={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>u.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(s(),n("div",{id:"page-root",style:v(l(b))},[t("div",w,[t("div",V,[t("h1",L,a(l(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(s(!0),n(g,null,f(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",j,[t("div",B,a(e==null?void 0:e.no)+"/"+a(l(x)),1),y(" "+a(e==null?void 0:e.title)+" ",1),D])]),N(z,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",H)):P("v-if",!0)]))),128))])],4))}}),E=k(C,[["__file","/Users/panagoa/PycharmProjects/zbze-org.github.io/zbze_org_slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
