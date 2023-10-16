"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Contribute to Kubewarden docs",u={unversionedId:"contribution-guide/contributing",id:"version-1.8.0/contribution-guide/contributing",title:"Contribute to Kubewarden docs",description:"Kubewarden welcomes suggestions for improvement from all contributors, new and experienced!",source:"@site/versioned_docs/version-1.8.0/contribution-guide/contributing.md",sourceDirName:"contribution-guide",slug:"/contribution-guide/contributing",permalink:"/contribution-guide/contributing",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8.0/contribution-guide/contributing.md",tags:[],version:"1.8.0",lastUpdatedAt:1697475968,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{}},c={},s=[{value:"Getting Started",id:"getting-started",level:2}],l={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute-to-kubewarden-docs"},"Contribute to Kubewarden docs"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Kubewarden welcomes suggestions for improvement from all contributors, new and experienced!")),(0,o.kt)("p",null,"You can contribute to Kubewarden documentation by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improving existing content"),(0,o.kt)("li",{parentName:"ul"},"Creating new content"),(0,o.kt)("li",{parentName:"ul"},"(",(0,o.kt)("em",{parentName:"li"},"Upcoming"),") Helping with translation of the documentation")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Everybody is welcome to suggest changes by submitting a pull request\nor report a bug/typo with the help of a GitHub issue to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"kubewarden/docs")," repository"),".\nKnowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," and ",(0,o.kt)("a",{parentName:"p",href:"https://lab.github.com/"},"GitHub")," is\nan essential pre-requisite to getting started."),(0,o.kt)("p",null,"To get involved with the documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Familiarize yourself with the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/docs"},"documentation repository"),"\nand the ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"static site generator"),"."),(0,o.kt)("li",{parentName:"ul"},"Docusaurus makes use of the Markdown syntax and uses ",(0,o.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"MDX")," as the parser.\nEnsure you're familiar with Markdown before you begin."),(0,o.kt)("li",{parentName:"ul"},"Understand how to ",(0,o.kt)("a",{parentName:"li",href:"./suggesting-an-improvement"},"suggest an improvement")," and ",(0,o.kt)("a",{parentName:"li",href:"#"},"open a pull request"),".")))}d.isMDXComponent=!0}}]);