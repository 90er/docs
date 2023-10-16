"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"writing-policies/dsl",id:"version-1.8.0/writing-policies/dsl",title:"dsl",description:"WARNING: not yet done, WIP",source:"@site/versioned_docs/version-1.8.0/writing-policies/dsl.md",sourceDirName:"writing-policies",slug:"/writing-policies/dsl",permalink:"/writing-policies/dsl",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8.0/writing-policies/dsl.md",tags:[],version:"1.8.0",lastUpdatedAt:1697475968,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"WARNING:")," not yet done, WIP")),(0,i.kt)("h1",{id:"domain-specific-language"},"Domain Specific Language"),(0,i.kt)("p",null,"Being able to write Kubewarden policies using regular programming languages provides\nmany advantages, however in certain cases this could be a bit of an overkill.\nSimple policies could be written in an easier way using a domain-specific\nlanguage."),(0,i.kt)("p",null,"This is an extract from the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"Wikipedia page"),"\nabout domain-specific languages:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A domain-specific language (DSL) is a computer language specialized to a\nparticular application domain.")),(0,i.kt)("p",null,"We plan to provide a simple DSL that can be built as a Wasm module.\nThis would allow the Kubewarden admission controller to use policies written\nusing regular programming languages ",(0,i.kt)("strong",{parentName:"p"},"and")," policies written a simpler DSL\nlanguage."))}d.isMDXComponent=!0}}]);