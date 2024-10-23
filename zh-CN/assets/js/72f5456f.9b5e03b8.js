/*! For license information please see 72f5456f.9b5e03b8.js.LICENSE.txt */
(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3487],{23401:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var n=t(85170),r=t(45924),a=t(33537);const i="header_briT";var l=t(43010);const o={blog:{title:(0,l.jsx)(a.Z,{id:"blogHeader.title",children:"Blog"}),slogan:(0,l.jsx)(a.Z,{id:"blogHeader.slogan",children:"Learn everything about Answer and leverage your Q&A community to the next level."})},contact:{title:(0,l.jsx)(a.Z,{id:"contact.title",children:"Contact us"}),slogan:(0,l.jsx)(a.Z,{id:"contact.slogan",children:"We always get an answer to your question."})},plugin:{title:(0,l.jsx)(a.Z,{id:"plugin.title",children:"Plugins"}),slogan:(0,l.jsx)(a.Z,{id:"plugin.slogan",children:"Extend capabilities and unlock new possibilities with our community-made plugins."})},download:{title:(0,l.jsx)(a.Z,{id:"download.title",children:"Download"}),slogan:(0,l.jsx)(a.Z,{id:"download.slogan",children:"This page provides download links for the latest release of Apache Answer."})}},c=e=>{let{type:s}=e;return(0,l.jsx)("div",{className:(0,r.Z)("py-5",i),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{children:o[s].title}),(0,l.jsx)("div",{className:"fs-20",children:o[s].slogan})]})})},d=(0,n.memo)(c)},38482:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var n=t(85170),r=t(5752),a=t(69327),i=t(52467),l=t(91810),o=t(33537),c=t(39377),d=t(17977),u=t(23401),p=t(43010);function f(){const[e,s]=(0,n.useState)([]),{i18n:t}=(0,c.Z)();(0,n.useEffect)((()=>{f()}),[]);const f=async()=>{try{const e=await fetch("https://raw.githubusercontent.com/apache/incubator-answer-plugins/main/plugins_desc.json"),n=await e.json();if(Array.isArray(n))s(n);else{const e=t.currentLocale,r="en"===e?"en_US":e.replace("-","_");s(n[r])}}catch(e){console.error("featch plugins list error",e)}};return(0,p.jsxs)(d.Z,{title:(0,o.I)({message:"Plugins"}),description:"Extend capabilities and unlock new possibilities with our community-made plugins.",children:[(0,p.jsx)(u.Z,{type:"plugin"}),(0,p.jsxs)(r.Z,{className:"py-5",children:[(0,p.jsxs)("div",{style:{fontSize:"1.25rem"},children:[(0,p.jsx)("a",{href:"/docs/plugins",children:(0,p.jsx)(o.Z,{id:"plugins.instruction.install",children:"Install plugins"})})," \xb7 ",(0,p.jsx)("a",{href:"/docs/development/plugins#create-a-plugin",children:(0,p.jsx)(o.Z,{id:"plugins.instruction.create",children:"Create a plugin"})})," \xb7 ",(0,p.jsx)("a",{href:"https://github.com/apache/incubator-answer-plugins",target:"_blank",children:(0,p.jsx)(o.Z,{id:"plugins.instruction.submit",children:"Submit a plugin"})})]}),(0,p.jsx)(a.Z,{className:"mt-5",children:e?.map((e=>(0,p.jsx)(i.Z,{sm:12,md:6,lg:3,className:"mb-4",children:(0,p.jsx)(l.Z,{style:{height:"100%"},children:(0,p.jsxs)(l.Z.Body,{children:[(0,p.jsx)("h5",{children:(0,p.jsx)("a",{href:e.link,target:"_blank",children:e.name})}),(0,p.jsx)("div",{className:"text-truncate-4",children:e.desc})]})})},e.name)))})]})]})}},84875:(e,s)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)n.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()},91810:(e,s,t)=>{"use strict";t.d(s,{Z:()=>P});var n=t(84875),r=t.n(n),a=t(85170),i=t(87605),l=/-(.)/g;var o=t(43010);const c=e=>{return e[0].toUpperCase()+(s=e,s.replace(l,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function d(e,{displayName:s=c(e),Component:t,defaultProps:n}={}){const l=a.forwardRef((({className:s,bsPrefix:a,as:l=t||"div",...c},d)=>{const u={...n,...c},p=(0,i.vE)(a,e);return(0,o.jsx)(l,{ref:d,className:r()(s,p),...u})}));return l.displayName=s,l}const u=e=>a.forwardRef(((s,t)=>(0,o.jsx)("div",{...s,ref:t,className:r()(s.className,e)}))),p=a.forwardRef((({bsPrefix:e,className:s,variant:t,as:n="img",...a},l)=>{const c=(0,i.vE)(e,"card-img");return(0,o.jsx)(n,{ref:l,className:r()(t?`${c}-${t}`:c,s),...a})}));p.displayName="CardImg";const f=p,h=a.createContext(null);h.displayName="CardHeaderContext";const m=h,x=a.forwardRef((({bsPrefix:e,className:s,as:t="div",...n},l)=>{const c=(0,i.vE)(e,"card-header"),d=(0,a.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,o.jsx)(m.Provider,{value:d,children:(0,o.jsx)(t,{ref:l,...n,className:r()(s,c)})})}));x.displayName="CardHeader";const g=x,v=u("h5"),j=u("h6"),b=d("card-body"),y=d("card-title",{Component:v}),N=d("card-subtitle",{Component:j}),w=d("card-link",{Component:"a"}),Z=d("card-text",{Component:"p"}),C=d("card-footer"),$=d("card-img-overlay"),k=a.forwardRef((({bsPrefix:e,className:s,bg:t,text:n,border:a,body:l=!1,children:c,as:d="div",...u},p)=>{const f=(0,i.vE)(e,"card");return(0,o.jsx)(d,{ref:p,...u,className:r()(s,f,t&&`bg-${t}`,n&&`text-${n}`,a&&`border-${a}`),children:l?(0,o.jsx)(b,{children:c}):c})}));k.displayName="Card";const P=Object.assign(k,{Img:f,Title:y,Subtitle:N,Body:b,Link:w,Text:Z,Header:g,Footer:C,ImgOverlay:$})},52467:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(84875),r=t.n(n),a=t(85170),i=t(87605),l=t(43010);const o=a.forwardRef(((e,s)=>{const[{className:t,...n},{as:a="div",bsPrefix:o,spans:c}]=function({as:e,bsPrefix:s,className:t,...n}){s=(0,i.vE)(s,"col");const a=(0,i.pi)(),l=(0,i.zG)(),o=[],c=[];return a.forEach((e=>{const t=n[e];let r,a,i;delete n[e],"object"==typeof t&&null!=t?({span:r,offset:a,order:i}=t):r=t;const d=e!==l?`-${e}`:"";r&&o.push(!0===r?`${s}${d}`:`${s}${d}-${r}`),null!=i&&c.push(`order${d}-${i}`),null!=a&&c.push(`offset${d}-${a}`)})),[{...n,className:r()(t,...o,...c)},{as:e,bsPrefix:s,spans:o}]}(e);return(0,l.jsx)(a,{...n,ref:s,className:r()(t,!c.length&&o)})}));o.displayName="Col";const c=o},5752:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(84875),r=t.n(n),a=t(85170),i=t(87605),l=t(43010);const o=a.forwardRef((({bsPrefix:e,fluid:s=!1,as:t="div",className:n,...a},o)=>{const c=(0,i.vE)(e,"container"),d="string"==typeof s?`-${s}`:"-fluid";return(0,l.jsx)(t,{ref:o,...a,className:r()(n,s?`${c}${d}`:c)})}));o.displayName="Container";const c=o},69327:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(84875),r=t.n(n),a=t(85170),i=t(87605),l=t(43010);const o=a.forwardRef((({bsPrefix:e,className:s,as:t="div",...n},a)=>{const o=(0,i.vE)(e,"row"),c=(0,i.pi)(),d=(0,i.zG)(),u=`${o}-cols`,p=[];return c.forEach((e=>{const s=n[e];let t;delete n[e],null!=s&&"object"==typeof s?({cols:t}=s):t=s;const r=e!==d?`-${e}`:"";null!=t&&p.push(`${u}${r}-${t}`)})),(0,l.jsx)(t,{ref:a,...n,className:r()(s,o,...p)})}));o.displayName="Row";const c=o},87605:(e,s,t)=>{"use strict";t.d(s,{pi:()=>c,vE:()=>o,zG:()=>d});var n=t(85170);t(43010);const r=["xxl","xl","lg","md","sm","xs"],a=n.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:i,Provider:l}=a;function o(e,s){const{prefixes:t}=(0,n.useContext)(a);return e||t[s]||s}function c(){const{breakpoints:e}=(0,n.useContext)(a);return e}function d(){const{minBreakpoint:e}=(0,n.useContext)(a);return e}}}]);