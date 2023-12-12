"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6089],{61829:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(85893),s=t(11151);const o={sidebar_label:"Building & Distributing Policies",title:""},r=void 0,l={id:"writing-policies/rust/build-and-distribute",title:"",description:"Building the policy",source:"@site/versioned_docs/version-1.7/writing-policies/rust/07-build-and-distribute.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/build-and-distribute",permalink:"/1.7/writing-policies/rust/build-and-distribute",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/rust/07-build-and-distribute.md",tags:[],version:"1.7",lastUpdatedAt:1702389988,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"Building & Distributing Policies",title:""},sidebar:"docs",previous:{title:"Logging",permalink:"/1.7/writing-policies/rust/logging"},next:{title:"Introduction to Go",permalink:"/1.7/writing-policies/go/intro-go"}},a={},d=[{value:"Building the policy",id:"building-the-policy",level:2},{value:"Distributing the policy",id:"distributing-the-policy",level:2},{value:"More examples",id:"more-examples",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"building-the-policy",children:"Building the policy"}),"\n",(0,n.jsx)(i.p,{children:"So far we have built the policy using as a compilation target the same operating\nsystem and architecture of our development machine."}),"\n",(0,n.jsxs)(i.p,{children:["It's now time to build the policy as a WebAssembly binary, also known as ",(0,n.jsx)(i.code,{children:".wasm"}),"\nfile."]}),"\n",(0,n.jsx)(i.p,{children:"This can be done with a simple command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"make policy.wasm\n"})}),"\n",(0,n.jsx)(i.p,{children:"This command will build the code in release mode, with WebAssembly as\ncompilation target."}),"\n",(0,n.jsx)(i.p,{children:"The build will produce the following file:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"$ file target/wasm32-wasi/release/demo.wasm\ntarget/wasm32-wasi/release/demo.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"distributing-the-policy",children:"Distributing the policy"}),"\n",(0,n.jsxs)(i.p,{children:["This topic is covered inside of the ",(0,n.jsx)(i.a,{href:"/distributing-policies",children:"distributing\npolicies"})," section of Kubewarden's\ndocumentation."]}),"\n",(0,n.jsx)(i.h2,{id:"more-examples",children:"More examples"}),"\n",(0,n.jsxs)(i.p,{children:["You can find more Kubewarden policies written in Rust inside of Kubewarden's\nGitHub space. ",(0,n.jsx)(i.a,{href:"https://github.com/search?l=Rust&q=topic%3Apolicy-as-code+org%3Akubewarden&type=Repositories",children:"This query"}),"\ncan help you find them."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Worth of note:"})," these repositories have a series of GitHub Actions that automate\nthe following tasks:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Run unit tests and code linting on pull requests and after code is merged\ninto the main branch"}),"\n",(0,n.jsxs)(i.li,{children:["Build the policy in ",(0,n.jsx)(i.code,{children:"release"})," mode and push it to a OCI registry as an\nartifact"]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>r});var n=t(67294);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);