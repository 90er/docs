"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const i={slug:"/",sidebar_label:"Introduction",title:""},o="Introduction",s={unversionedId:"introduction",id:"introduction",title:"",description:"Kubewarden is a [Kubernetes Dynamic Admission",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1669033712,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{slug:"/",sidebar_label:"Introduction",title:""},sidebar:"docs",next:{title:"Quick Start",permalink:"/quick-start"}},l={},c=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why use WebAssembly?",id:"why-use-webassembly",level:2},{value:"Policy distribution",id:"policy-distribution",level:2}],u={toc:c};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Kubewarden is a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Kubernetes Dynamic Admission\nController"),"\nthat validates incoming requests using policies written in\nWebAssembly."),(0,a.kt)("h2",{id:"what-is-webassembly"},"What is WebAssembly?"),(0,a.kt)("p",null,"As stated on ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly's official\nwebsite"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WebAssembly (abbreviated Wasm) is a binary instruction format for a\nstack-based virtual machine. Wasm is designed as a portable\ncompilation target for programming languages, enabling deployment on\nthe web for client and server applications.")),(0,a.kt)("p",null,'WebAssembly has been originally conceived as an "extension" of\nbrowsers. However, recent efforts have been made by the WebAssembly\ncommunity to allow the execution of WebAssembly code outside of\nbrowsers.'),(0,a.kt)("h2",{id:"why-use-webassembly"},"Why use WebAssembly?"),(0,a.kt)("p",null,"By using WebAssembly, users can write Kubernetes policies using their\nfavorite programming language, as long as the language can produce\nWasm binaries."),(0,a.kt)("p",null,'Policy authors can reuse their skills, tools and best\npractices. Policies are "traditional" programs that can have reusable\nblocks (regular libraries), can be tested, can be linted, can be\nplugged into their current CI and CD workflows,...'),(0,a.kt)("p",null,"Wasm modules are portable, once built they can run on any kind of\nprocessor architecture and Operating System. A policy built on a Apple\nSilicon machine can be run on a x86_64 Linux server without any\nconversion."),(0,a.kt)("h2",{id:"policy-distribution"},"Policy distribution"),(0,a.kt)("p",null,"Kubewarden Policies can be served by a regular web server or, even\nbetter, can be published inside of an OCI compliant registry."),(0,a.kt)("p",null,"Kubewarden Policies can be stored inside of an OCI compliant registry as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/artifacts"},"OCI artifacts"),"."))}b.isMDXComponent=!0}}]);