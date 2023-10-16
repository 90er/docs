"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1970],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return i?a.createElement(m,o(o({ref:t},p),{},{components:i})):a.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8890:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const r={sidebar_label:"Host Capabilities Specification",title:""},o="Host capabilities specification",s={unversionedId:"writing-policies/spec/host-capabilities/intro-host-capabilities",id:"writing-policies/spec/host-capabilities/intro-host-capabilities",title:"",description:"While being evaluated, Kubewarden policies can access extra capabilities offered",source:"@site/docs/writing-policies/spec/host-capabilities/01-intro-host-capabilities.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/intro-host-capabilities",permalink:"/next/writing-policies/spec/host-capabilities/intro-host-capabilities",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/01-intro-host-capabilities.md",tags:[],version:"current",lastUpdatedAt:1697475968,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Host Capabilities Specification",title:""},sidebar:"docs",previous:{title:"Context Aware Policies",permalink:"/next/writing-policies/spec/context-aware-policies"},next:{title:"Signature Verifier Policies",permalink:"/next/writing-policies/spec/host-capabilities/signature-verifier-policies"}},l={},c=[],p={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"host-capabilities-specification"},"Host capabilities specification"),(0,n.kt)("p",null,"While being evaluated, Kubewarden policies can access extra capabilities offered\nby the host environment.\nThis mechanism uses an approach similar to traditional ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_procedure_call"},"RPC"),"."),(0,n.kt)("p",null,"This is what happens when a request is issued by a Kubewarden policy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubewarden policy:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Invokes the capability offered by the host environment"),(0,n.kt)("li",{parentName:"ul"},"The invocation is a blocking operation, hence the policy code will wait until the\nhost provides an answer"))),(0,n.kt)("li",{parentName:"ul"},"Host environment:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A capability invocation is received"),(0,n.kt)("li",{parentName:"ul"},"The host performs the operation"),(0,n.kt)("li",{parentName:"ul"},"The host provides an answer to the policy, which could be either a success or a\nfailure"))),(0,n.kt)("li",{parentName:"ul"},"Kubewarden policy:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The code receives the answer from the host and resumes execution"),(0,n.kt)("li",{parentName:"ul"},"The host response is handled accordingly")))),(0,n.kt)("p",null,"The host capabilities feature is implemented using ",(0,n.kt)("a",{parentName:"p",href:"https://wapc.io/"},"waPC"),",\neach capability is expressed using these details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"waPC function name: name of the capability exposed by the host"),(0,n.kt)("li",{parentName:"ul"},"input payload: the body of the request made by the policy. This is always\nencoded using JSON format"),(0,n.kt)("li",{parentName:"ul"},"output payload: the body of the response coming from the host. This is\nalways encoded using JSON format")),(0,n.kt)("p",null,"When something goes wrong, the host will reply with an error . This is handled\nusing the idiomatic error type of the programming language used by the policy.\nThe error consists of a UTF-8 string that holds an explanation message."))}h.isMDXComponent=!0}}]);