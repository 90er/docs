"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Architecture",title:"Architecture",description:"The Kubewarden architecture",keywords:["kubewarden","kubernetes","architecture"]},o=void 0,s={unversionedId:"architecture",id:"version-1.7.0/architecture",title:"Architecture",description:"The Kubewarden architecture",source:"@site/versioned_docs/version-1.7.0/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/1.7.0/architecture",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7.0/architecture.md",tags:[],version:"1.7.0",lastUpdatedAt:1697475968,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{sidebar_label:"Architecture",title:"Architecture",description:"The Kubewarden architecture",keywords:["kubewarden","kubernetes","architecture"]},sidebar:"docs",previous:{title:"Audit Scanner Installation",permalink:"/1.7.0/howtos/audit-scanner"},next:{title:"Policy Communication Specification",permalink:"/1.7.0/writing-policies/spec/intro-spec"}},l={},c=[{value:"The journey of a Kubewarden policy",id:"the-journey-of-a-kubewarden-policy",level:2},{value:"Default policy server",id:"default-policy-server",level:3},{value:"Defining the first policy",id:"defining-the-first-policy",level:3},{value:"Reconciliation of <code>policy-server</code>",id:"reconciliation-of-policy-server",level:3},{value:"Making Kubernetes aware of the policy",id:"making-kubernetes-aware-of-the-policy",level:3},{value:"Policy in action",id:"policy-in-action",level:3},{value:"How Kubewarden handles many policy servers and policies",id:"how-kubewarden-handles-many-policy-servers-and-policies",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kubewarden is a Kubernetes policy engine.\nIt uses policies written in a programming language of your choosing.\nThis language must generate a WebAssembly binary for Kubewarden to use."),(0,r.kt)("p",null,"The Kubewarden stack consists of these components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kubewarden Custom Resources:\nThese are ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Kubernetes Custom Resources"),"\nthat simplify the process of managing policies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller"},(0,r.kt)("inlineCode",{parentName:"a"},"kubewarden-controller")),":\nThis is a Kubernetes controller that reconciles Kubewarden's Custom Resources.\nThis controller creates parts of the Kubewarden stack.\nIt also translates Kubewarden configuration into Kubernetes directives.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kubewarden policies:\nThese are WebAssembly modules holding the validation or mutation logic.\nWebAssembly modules have detailed documentation in the\n",(0,r.kt)("a",{parentName:"p",href:"/1.7.0/writing-policies/"},"writing policies")," sections.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-server"},(0,r.kt)("inlineCode",{parentName:"a"},"policy-server")),":\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," receives requests for validation.\nIt validates the requests by executing Kubewarden policies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/audit-scanner"},(0,r.kt)("inlineCode",{parentName:"a"},"audit-scanner")),":\nThe audit scanner inspects the resources already in the cluster. It identifies those violating Kubewarden policies."))),(0,r.kt)("p",null,"Kubewarden integrates with Kubernetes using\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Dynamic Admission Control"),".\nIn particular, Kubewarden operates as a Kubernetes Admission Webhook.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is the Webhook endpoint called by the Kubernetes API server to validate requests."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," registers the needed\n",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),"\nobjects with the Kubernetes API server."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/1.7.0/explanations/audit-scanner/"},"Audit scanner"),"\nconstantly checks the resources declared in the cluster,\nflagging the ones that no longer adhere with the deployed Kubewarden policies."),(0,r.kt)("p",null,"The diagram shows the architecture of a cluster running the Kubewarden stack:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full architecture",src:n(6373).Z,width:"1387",height:"632"})),(0,r.kt)("h2",{id:"the-journey-of-a-kubewarden-policy"},"The journey of a Kubewarden policy"),(0,r.kt)("p",null,"The architecture diagram appears complex at first.\nThis section covers it step by step."),(0,r.kt)("h3",{id:"default-policy-server"},"Default policy server"),(0,r.kt)("p",null,"On a new cluster, the Kubewarden components defined are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Custom Resource Definitions (CRD)"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-controller")," Deployment"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"PolicyServer")," Custom Resource named ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Defining the first ClusterAdmissionPolicy resource",src:n(5535).Z,width:"1123",height:"635"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," notices the default ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource,\nit creates a Deployment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," component."),(0,r.kt)("p",null,"Kubewarden works as a Kubernetes Admission Webhook.\nKubernetes specifies using TLS to secure all Webhook endpoints.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," sets up this secure communication\nby:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generating a self-signed Certificate Authority"),(0,r.kt)("li",{parentName:"ol"},"Use this CA to generate a TLS certificate key for the ",(0,r.kt)("inlineCode",{parentName:"li"},"policy-server")," Service.")),(0,r.kt)("p",null,"These objects are all stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," resources in Kubernetes."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Deployment\nand a Kubernetes ClusterIP Service\nto expose it inside the cluster network."),(0,r.kt)("h3",{id:"defining-the-first-policy"},"Defining the first policy"),(0,r.kt)("p",null,"This diagram shows what happens when defining the first policy\nbound to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," in the cluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Defining the first ClusterAdmissionPolicy resource",src:n(4339).Z,width:"1123",height:"635"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A policy must define which Policy Server it must run on.\nOr, we say it binds to a Policy Server.\nYou can have different policies with the same Wasm module and settings running in many Policy Servers.\nHowever, you can't have a single policy definition that runs in many policy servers.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," notices the new ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource and\nso finds the bound ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," and reconciles it."),(0,r.kt)("h3",{id:"reconciliation-of-policy-server"},"Reconciliation of ",(0,r.kt)("inlineCode",{parentName:"h3"},"policy-server")),(0,r.kt)("p",null,"When creating, modifying or deleting a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy"),",\na reconciliation loop activates in ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),",\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," owning the policy.\nThis reconciliation loop creates a ConfigMap with all the polices bound to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),".\nThen the Deployment rollout of the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," starts.\nIt results in starting the new ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," instance with the updated configuration."),(0,r.kt)("p",null,"At start time, the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," reads its configuration from the ConfigMap\nand downloads all the Kubewarden policies specified.\nYou can download Kubewarden policies from remote HTTP servers and container registries."),(0,r.kt)("p",null,"You use policy settings parameters to tune a policies' behavior.\nAfter startup and policy download the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nchecks the policy settings provided by the user are valid."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," validates policy settings by invoking\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_setting")," function exposed by each policy.\nThere is further documentation in the\n",(0,r.kt)("a",{parentName:"p",href:"/1.7.0/writing-policies/spec/intro-spec"},"writing policies section"),"\nof the documentation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," exits with an error\nif one or more policies received wrong configuration parameters\nfrom the policy specification provided by the user."),(0,r.kt)("p",null,"If all policies are correctly configured,\n",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nspawns a pool of worker threads\nto evaluate incoming requests\nusing the Kubewarden policies\nspecified by the user."),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," starts a HTTPS server,\nthe Kubewarden Policy Server,\nlistening to incoming validation requests.\nKubewarden uses the TLS key and certificate\ncreated by ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),"\nto secure the web server."),(0,r.kt)("p",null,"The web server exposes each policy by a dedicated path\nfollowing the naming convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"/validate/<policy ID>"),"."),(0,r.kt)("p",null,"This diagram shows the cluster when initialization of ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is complete:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"policy-server initialized",src:n(8188).Z,width:"1175",height:"641"})),(0,r.kt)("h3",{id:"making-kubernetes-aware-of-the-policy"},"Making Kubernetes aware of the policy"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Pods have a\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},(0,r.kt)("inlineCode",{parentName:"a"},"Readiness Probe")),",\nthat ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," uses to check when\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Deployment is ready to evaluate ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-request-and-response"},(0,r.kt)("inlineCode",{parentName:"a"},"AdmissionReview")),"s."),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Deployment is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready"),",\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," makes the Kubernetes API server\naware of the new policy by creating either a\n",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," object."),(0,r.kt)("p",null,"Each policy has a dedicated\n",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),"\nwhich points to the Webhook endpoint served by ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),".\nThe endpoint is reachable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"/validate/<policy ID>")," URL."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kubernetes Webhook endpoint configuration",src:n(9707).Z,width:"1181",height:"624"})),(0,r.kt)("h3",{id:"policy-in-action"},"Policy in action"),(0,r.kt)("p",null,"Now that all the necessary plumbing is complete,\nKubernetes starts sending Admission Review requests to the right ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," endpoints."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Policy in action",src:n(7358).Z,width:"1181",height:"624"})),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," receives the Admission Request object and,\nbased on the endpoint that received the request,\nuses the correct policy to evaluate it."),(0,r.kt)("p",null,"Each policy is evaluated inside its own dedicated WebAssembly sandbox.\nThe communication between ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),' (the "host")\nand the WebAssembly policy (the "guest")\nuses the waPC communication protocol.\nThe protocol description is part of the ',(0,r.kt)("a",{parentName:"p",href:"/1.7.0/writing-policies/"},"writing policies")," documentation."),(0,r.kt)("h2",{id:"how-kubewarden-handles-many-policy-servers-and-policies"},"How Kubewarden handles many policy servers and policies"),(0,r.kt)("p",null,"A cluster can have many policy servers and Kubewarden policies defined.\nThere are benefits of having many policy servers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can isolate noisy namespaces or tenants,\nthose generating many policy evaluations,\nfrom the rest of the cluster so as not to adversely affect other cluster operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can run mission-critical policies in a dedicated Policy Server pool,\nmaking your infrastructure more resilient."))),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource defines each ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nand a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," resource defines each policy."),(0,r.kt)("p",null,"This leads back to the initial diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full architecture",src:n(6373).Z,width:"1387",height:"632"})),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is bound to a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),".\nAny ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicies")," not specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),"\nare bound to the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),".\nIf a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," references a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),"\nthat doesn't exist, its state is ",(0,r.kt)("inlineCode",{parentName:"p"},"unschedulable"),"."),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," defines many validation endpoints,\none for each policy defined in its configuration file.\nYou can load the same policy many times,\nwith different configuration parameters."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," resources\nmake the Kubernetes API server aware of these policies.\nThen ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," keeps the API server\nand configuration resources in synchronization."),(0,r.kt)("p",null,"The Kubernetes API server dispatches incoming admission requests\nto the correct validation endpoint exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"."))}d.isMDXComponent=!0},6373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture-59488ce36b12f13c779fe02a35bb1ffb.png"},5535:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_01-4f634ca9150b2d99a07dd0d4a2624b5f.png"},4339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_02-9f94d02c0a9e42b25bccae6aada0a2bd.png"},8188:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_03-b601f6352389dcc81dad199af0e0c87a.png"},9707:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_04-615e4e3f91682b0a5a52382f45e5803b.png"},7358:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_05-c8eae1426a3086cdb921feda111ff30d.png"}}]);