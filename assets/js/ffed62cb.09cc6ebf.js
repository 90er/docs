"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_label:"GitHub Action Integration",title:""},o="Automations",r={unversionedId:"writing-policies/go/automate",id:"writing-policies/go/automate",title:"",description:"This section describes how we can use GitHub Actions to automate as many tasks",source:"@site/docs/writing-policies/go/07-automate.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/automate",permalink:"/writing-policies/go/automate",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/07-automate.md",tags:[],version:"current",lastUpdatedAt:1690444606,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"GitHub Action Integration",title:""},sidebar:"docs",previous:{title:"Logging",permalink:"/writing-policies/go/logging"},next:{title:"Distributing Policy",permalink:"/writing-policies/go/distribute"}},s={},c=[{value:"Testing",id:"testing",level:2},{value:"Release",id:"release",level:2},{value:"A concrete example",id:"a-concrete-example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"automations"},"Automations"),(0,i.kt)("p",null,"This section describes how we can use GitHub Actions to automate as many tasks\nas possible."),(0,i.kt)("p",null,"The scaffolded project already includes all the GitHub actions you need.\nThese Actions can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template")," file;\nrename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"github/workflows.ci/yml")," to enable them."),(0,i.kt)("p",null,"The same principles can be adapted to use a different CI system."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Automation of the unit tests and of the end-to-end tests is working out of the\nbox thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"unit-tests")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e-tests")," jobs defined in\n",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template"),"."),(0,i.kt)("h2",{id:"release"},"Release"),(0,i.kt)("p",null,"The scaffolded project contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," job in\n",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template"),"."),(0,i.kt)("p",null,"This job performs the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checkout code"),(0,i.kt)("li",{parentName:"ul"},"Build the WebAssembly policy"),(0,i.kt)("li",{parentName:"ul"},"Push the policy to an OCI registry"),(0,i.kt)("li",{parentName:"ul"},"Eventually create a new GitHub Release")),(0,i.kt)("p",null,"To enable the job you need to rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yml")," and change the value of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"OCI_TARGET")," to match your preferences."),(0,i.kt)("p",null,"The job will act differently based on the commit that triggered its execution."),(0,i.kt)("p",null,"Regular commits will lead to the creation of an OCI artifact called ",(0,i.kt)("inlineCode",{parentName:"p"},"<policy-name>:latest"),".\nNo GitHub Release will be created for these commits."),(0,i.kt)("p",null,"On the other hand, creating a tag that matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"v*")," pattern, will lead\nto:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creation of an OCI artifact called ",(0,i.kt)("inlineCode",{parentName:"li"},"<policy-name>:<tag>"),"."),(0,i.kt)("li",{parentName:"ol"},"Creation of a GitHub Release named ",(0,i.kt)("inlineCode",{parentName:"li"},"Release <full tag name>"),". The release\nwill include the following assets: the source code of the policy and the WebAssembly\nbinary.")),(0,i.kt)("h3",{id:"a-concrete-example"},"A concrete example"),(0,i.kt)("p",null,"Let's assume we have a policy named ",(0,i.kt)("inlineCode",{parentName:"p"},"safe-labels")," and we want to publish\nit as ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io/kubewarden/policies/safe-labels"),"."),(0,i.kt)("p",null,"The contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs.push-to-oci-registry.env")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yml")," should\nlook like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  push-to-oci-registry:\n    runs-on: ubuntu-latest\n    env:\n      WASM_BINARY_NAME: policy.wasm\n      OCI_TARGET: ghcr.io/kubewarden/policies/safe-labels\n")),(0,i.kt)("p",null,"Pushing a tag named ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.1.0")," will lead to the creation and publishing of the\nOCI artifact called ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io/kubewarden/policies/safe-labels:v0.1.0"),"."),(0,i.kt)("p",null,"A GitHub Release named ",(0,i.kt)("inlineCode",{parentName:"p"},"Release v0.1.0")," will be created. The release will\ninclude the following assets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source code compressed as ",(0,i.kt)("inlineCode",{parentName:"li"},"zip")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tar.gz")),(0,i.kt)("li",{parentName:"ul"},"A file named ",(0,i.kt)("inlineCode",{parentName:"li"},"policy.wasm")," that is the actual WebAssembly policy")))}d.isMDXComponent=!0}}]);