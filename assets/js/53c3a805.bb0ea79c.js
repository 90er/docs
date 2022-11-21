"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3310],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(b,o(o({ref:t},p),{},{components:i})):n.createElement(b,o({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2478:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(3117),r=(i(7294),i(3905));const a={sidebar_label:"Container Registry Capabilities",title:""},o="Container registry capabilities",s={unversionedId:"writing-policies/spec/host-capabilities/container-registry",id:"writing-policies/spec/host-capabilities/container-registry",title:"",description:"Container registries can be used to distribute many types of OCI objects, going",source:"@site/docs/writing-policies/spec/host-capabilities/03-container-registry.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/container-registry",permalink:"/writing-policies/spec/host-capabilities/container-registry",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/03-container-registry.md",tags:[],version:"current",lastUpdatedAt:1669033712,formattedLastUpdatedAt:"Nov 21, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Container Registry Capabilities",title:""},sidebar:"docs",previous:{title:"Signature Verifier Policies",permalink:"/writing-policies/spec/host-capabilities/signature-verifier-policies"},next:{title:"Network Capabilities",permalink:"/writing-policies/spec/host-capabilities/net"}},l={},c=[{value:"Get OCI manifest digest",id:"get-oci-manifest-digest",level:2},{value:"Caching",id:"caching",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container-registry-capabilities"},"Container registry capabilities"),(0,r.kt)("p",null,"Container registries can be used to distribute many types of OCI objects, going\nfrom well-known container images to generic OCI Artifacts. OCI Artifacts are used\nto store objects such as Kubewarden Policies, Helm charts, and more."),(0,r.kt)("p",null,"Below documented are the capabilities exposed by the Kubewarden host to interact with\ncontainer registries."),(0,r.kt)("h2",{id:"get-oci-manifest-digest"},"Get OCI manifest digest"),(0,r.kt)("p",null,"This function computes the digest of an OCI manifest. This information can\nbe used to identify an object stored inside of an OCI registry in an immutable\nway, as opposed to ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," which are mutable."),(0,r.kt)("h3",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Computing the digest involves a series of network requests between the Kubewarden\npolicy host and the remote registry. These operation can be time expensive,\nbecause of that the results are going to be cached for 1 minute."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Interactions with private registries require the Kubewarden policy host to\nauthenticate against the remote registry."),(0,r.kt)("p",null,"The policy host will use the same set of credentials used to fetch policies\nfrom the remote registry."),(0,r.kt)("h3",{id:"communication-protocol"},"Communication protocol"),(0,r.kt)("p",null,"This is the description of the waPC protocol used to expose this capability:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"waPC function name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Input payload")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Output payload")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1/manifest_digest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"// OCI URI",(0,r.kt)("br",null),"// JSON encoded string",(0,r.kt)("br",null),"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"{",(0,r.kt)("br",null),"   // digest of the OCI object",(0,r.kt)("br",null),'   "digest": string',(0,r.kt)("br",null),"}"))))),(0,r.kt)("p",null,"For example, when requesting the manifest digest of the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox:latest")," image,\nthe payload would be the following ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input payload: ",(0,r.kt)("inlineCode",{parentName:"li"},'"busybox:latest"')),(0,r.kt)("li",{parentName:"ul"},"Output payload: ",(0,r.kt)("inlineCode",{parentName:"li"},'{ "digest": "sha256:69e70a79f2d41ab5d637de98c1e0b055206ba40a8145e7bddb55ccc04e13cf8f"}'))))}u.isMDXComponent=!0}}]);