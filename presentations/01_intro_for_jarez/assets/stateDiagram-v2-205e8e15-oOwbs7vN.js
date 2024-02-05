import{p as J,d as B,s as Q,D as H,a as X,S as Z,b as F,c as I}from"./styles-4551667c-E619uyEY.js";import{G as tt}from"./graph-03626afa-QvChyZiU.js";import{ay as E,at as g,ax as x,aK as et,az as ot,aB as w}from"./index-Vz1PnNvQ.js";import{r as st}from"./index-b5c99bd1-aNpjGLKR.js";import"./layout-23a94ccc-nPlgwqxg.js";import"./clone-0d7cbc00-HHkd7D06.js";import"./edges-77d431ff-gJ3aYiPa.js";import"./createText-ac1cb2fc-n2dkCBVU.js";import"./line-379dbf1c-AZRWjOFm.js";import"./array-b7dcf730-Nw74a44z.js";import"./path-39bad7e2-aUcfwwLI.js";const h="rect",C="rectWithTitle",nt="start",it="end",ct="divider",rt="roundedWithTitle",at="note",lt="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,bt="cluster-alt",ft=`${_}-${bt}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,M=`${N}${V}`,z="fill:none",W="fill: #333",m="c",K="text",q="normal";let y={},d=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",i=N){const c=e!==null&&e.length>0?`${i}${e}`:"";return`${At}-${t}${c}-${n}`}const A=(t,n,e,i,c,r)=>{const o=e.id,u=$t(i[o]);if(o!=="root"){let T=h;e.start===!0&&(T=nt),e.start===!1&&(T=it),e.type!==H&&(T=e.type),y[o]||(y[o]={id:o,shape:T,description:w.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=h,s.description=e.description),s.description=w.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=h),!s.type&&e.doc&&(E.info("Setting cluster for ",o,G(e)),s.type="group",s.dir=G(e),s.shape=e.type===X?ct:rt,s.classes=s.classes+" "+Dt+" "+(r?ft:""));const p={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,d),type:s.type,padding:15};if(p.centerLabel=!0,e.note){const a={labelStyle:"",shape:at,labelText:e.note.text,classes:_t,style:"",id:o+ht+"-"+d,domId:R(o,d,Y),type:s.type,padding:15},l={labelStyle:"",shape:lt,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,d,V),type:"group",padding:0};d++;const D=o+M;t.setNode(D,l),t.setNode(a.id,a),t.setNode(o,p),t.setParent(o,D),t.setParent(a.id,D);let S=o,b=a.id;e.note.position==="left of"&&(S=a.id,b=o),t.setEdge(S,b,{arrowhead:"none",arrowType:"",style:z,labelStyle:"",classes:pt,arrowheadStyle:W,labelpos:m,labelType:K,thickness:q})}else t.setNode(o,p)}n&&n.id!=="root"&&(E.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(E.trace("Adding nodes children "),xt(t,e,e.doc,i,c,!r))},xt=(t,n,e,i,c,r)=>{E.trace("items",e),e.forEach(o=>{switch(o.stmt){case F:A(t,n,o,i,c,r);break;case H:A(t,n,o,i,c,r);break;case Z:{A(t,n,o.state1,i,c,r),A(t,n,o.state2,i,c,r);const u={id:"edge"+d,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:z,labelStyle:"",label:w.sanitizeText(o.description,g()),arrowheadStyle:W,labelpos:m,labelType:K,thickness:q,classes:U};t.setEdge(o.state1.id,o.state2.id,u,d),d++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let i=0;i<t.doc.length;i++){const c=t.doc[i];c.stmt==="dir"&&(e=c.value)}return e},Ct=async function(t,n,e,i){E.info("Drawing state diagram (v2)",n),y={},i.db.getDirection();const{securityLevel:c,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;E.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),E.info(i.db.getRootDocV2());const T=i.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(i.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),T,i.db,!0);let p;c==="sandbox"&&(p=x("#i"+n));const a=c==="sandbox"?x(p.nodes()[0].contentDocument.body):x("body"),l=a.select(`[id="${n}"]`),D=a.select("#"+n+" g");await st(D,s,["barb"],_,n);const S=8;et.insertTitle(l,"statediagramTitleText",r.titleTopMargin,i.db.getDiagramTitle());const b=l.node().getBBox(),L=b.width+S*2,P=b.height+S*2;l.attr("class",_);const O=l.node().getBBox();ot(l,P,L,r.useMaxWidth);const k=`${O.x-S} ${O.y-S} ${L} ${P}`;E.debug(`viewBox ${k}`),l.attr("viewBox",k);const j=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of j){const v=$.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",v.width),f.setAttribute("height",v.height),$.insertBefore(f,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ut={parser:J,db:B,renderer:Rt,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Ut as diagram};
