"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Distribute",title:""},a="Distribute",l={unversionedId:"writing-policies/rego/gatekeeper/distribute",id:"writing-policies/rego/gatekeeper/distribute",title:"",description:"Policies have to be annotated for them to be pushed, and eventually",source:"@site/docs/writing-policies/rego/gatekeeper/04-distribute.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/distribute",permalink:"/writing-policies/rego/gatekeeper/distribute",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/gatekeeper/04-distribute.md",tags:[],version:"current",lastUpdatedAt:1692359920,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Distribute",title:""},sidebar:"docs",previous:{title:"Build and Run",permalink:"/writing-policies/rego/gatekeeper/build-and-run"},next:{title:"C#",permalink:"/writing-policies/dotnet"}},s={},p=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2},{value:"Deploying on Kubernetes",id:"deploying-on-kubernetes",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distribute"},"Distribute"),(0,i.kt)("p",null,"Policies have to be annotated for them to be pushed, and eventually\nexecuted by the Kubewarden ",(0,i.kt)("inlineCode",{parentName:"p"},"policy-server")," in a Kubernetes cluster."),(0,i.kt)("p",null,"Annotating and distributing our Gatekeeper policy is very similar to\ndistributing an Open Policy Agent one. Let's go through it."),(0,i.kt)("h2",{id:"annotating-the-policy"},"Annotating the policy"),(0,i.kt)("p",null,"We are going to write a ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yaml")," file in our policy directory\nwith contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: gatekeeper\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n')),(0,i.kt)("p",null,"As you can see, everything is the same as the Open Policy Agent\nversion metadata, except for the ",(0,i.kt)("inlineCode",{parentName:"p"},"executionMode: gatekeeper")," bit."),(0,i.kt)("p",null,"Let's go ahead and annotate the policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n")),(0,i.kt)("h2",{id:"pushing-the-policy"},"Pushing the policy"),(0,i.kt)("p",null,"Let's push our policy to an OCI registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1\nPolicy successfully pushed\n")),(0,i.kt)("h2",{id:"deploying-on-kubernetes"},"Deploying on Kubernetes"),(0,i.kt)("p",null,"We have to pull our policy to our ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," local store first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1\npulling policy...\n")),(0,i.kt)("p",null,"We can now create a scaffold ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl scaffold manifest registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n')),(0,i.kt)("p",null,"We could now use this ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource to deploy our\npolicy to a Kubernetes cluster."))}d.isMDXComponent=!0}}]);