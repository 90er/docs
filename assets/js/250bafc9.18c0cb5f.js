"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[32248],{13327:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(85893),i=t(11151);const s={sidebar_label:"Metrics reference",title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",keywords:["kubewarden","kubernetes","metrics","reference"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","telemetry","metrics","reference"]},c=void 0,d={id:"operator-manual/telemetry/metrics/reference",title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",source:"@site/versioned_docs/version-1.10/operator-manual/telemetry/metrics/02-reference.md",sourceDirName:"operator-manual/telemetry/metrics",slug:"/operator-manual/telemetry/metrics/reference",permalink:"/operator-manual/telemetry/metrics/reference",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/operator-manual/telemetry/metrics/02-reference.md",tags:[],version:"1.10",lastUpdatedAt:1706189386,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Metrics reference",title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",keywords:["kubewarden","kubernetes","metrics","reference"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","telemetry","metrics","reference"]},sidebar:"docs",previous:{title:"Dependency matrix",permalink:"/operator-manual/dependency-matrix"},next:{title:"Custom Resources Definitions (CRD)",permalink:"/operator-manual/CRDs"}},o={},a=[{value:"Policy Server",id:"policy-server",level:2},{value:"Metrics",id:"metrics",level:3},{value:"<code>kubewarden_policy_evaluations_total</code>",id:"kubewarden_policy_evaluations_total",level:4},{value:"Baggage",id:"baggage",level:5}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Kubewarden exposes some relevant metrics that enhance visibility of the platform, and allows cluster\nadministrators and policy developers to identify patterns and potential issues."}),"\n",(0,n.jsx)(r.h2,{id:"policy-server",children:"Policy Server"}),"\n",(0,n.jsx)(r.p,{children:"The Policy Server is the component that initializes and runs policies. Upon receiving requests from\nthe Kubernetes API server, it will forward the request to the policy, and return the response\nprovided by the policy to the Kubernetes API server."}),"\n",(0,n.jsx)(r.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Baggage are key-value attributes added to the metric. They are used to enrich the metric\nwith additional information."})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kubewarden_policy_evaluations_total"})}),(0,n.jsx)(r.td,{children:"Counter"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"#kubewarden_policy_evaluations_total",children:"Baggage"})})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"kubewarden_policy_evaluations_total",children:(0,n.jsx)(r.code,{children:"kubewarden_policy_evaluations_total"})}),"\n",(0,n.jsx)(r.h5,{id:"baggage",children:"Baggage"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Label"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"policy_name"})}),(0,n.jsx)(r.td,{children:"Name of the policy"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_name"})}),(0,n.jsx)(r.td,{children:"Name of the evaluated resource"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_kind"})}),(0,n.jsx)(r.td,{children:"Kind of the evaluated resource"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_namespace"})}),(0,n.jsx)(r.td,{children:"Namespace of the evaluated resource. Not present if the resource is cluster scoped."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_request_operation"})}),(0,n.jsxs)(r.td,{children:["Operation type: ",(0,n.jsx)(r.code,{children:"CREATE"}),", ",(0,n.jsx)(r.code,{children:"UPDATE"}),", ",(0,n.jsx)(r.code,{children:"DELETE"}),", ",(0,n.jsx)(r.code,{children:"PATCH"}),", ",(0,n.jsx)(r.code,{children:"WATCH"}),"..."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"accepted"})}),(0,n.jsx)(r.td,{children:"Whether the request was accepted or not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"mutated"})}),(0,n.jsx)(r.td,{children:"Whether the request was mutated or not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error_code"})}),(0,n.jsx)(r.td,{children:"Error code returned by the policy in case of rejection, if any. Not present if the policy didn't provide one."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>c});var n=t(67294);const i={},s=n.createContext(i);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);