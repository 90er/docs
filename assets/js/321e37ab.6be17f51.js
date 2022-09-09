"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8443],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3406:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],s={sidebar_label:"Configuring PolicyServers using Custom CAs",title:""},c="Configuring PolicyServers",u={unversionedId:"operator-manual/policy-servers/custom-cas",id:"operator-manual/policy-servers/custom-cas",title:"",description:"Custom Certificate Authorities for Policy registries",source:"@site/docs/operator-manual/policy-servers/01-custom-cas.md",sourceDirName:"operator-manual/policy-servers",slug:"/operator-manual/policy-servers/custom-cas",permalink:"/operator-manual/policy-servers/custom-cas",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/policy-servers/01-custom-cas.md",tags:[],version:"current",lastUpdatedAt:1662729918,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Configuring PolicyServers using Custom CAs",title:""},sidebar:"docs",previous:{title:"Operator Manual",permalink:"/operator-manual/intro"},next:{title:"Using private registries",permalink:"/operator-manual/policy-servers/private-registry"}},l={},p=[{value:"Custom Certificate Authorities for Policy registries",id:"custom-certificate-authorities-for-policy-registries",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Custom Certificate Authorities",id:"custom-certificate-authorities",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-policyservers"},"Configuring PolicyServers"),(0,o.kt)("h2",{id:"custom-certificate-authorities-for-policy-registries"},"Custom Certificate Authorities for Policy registries"),(0,o.kt)("p",null,"It is possible to specify and configure the Certificate Authorities that a\nPolicyServer uses when pulling the ClusterAdmissionPolicy artifacts from the\npolicy registry. The following ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," fields will configure the deployed\n",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," executable to that effect."),(0,o.kt)("h3",{id:"insecure-sources"},"Insecure sources"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important"),": the default behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," is to\nenforce HTTPS with trusted certificates matching the system CA store. You can\ninteract with registries using untrusted certificates or even without TLS, by\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"insecure_sources")," setting. This approach is ",(0,o.kt)("strong",{parentName:"p"},"highly discouraged"),"\nfor environments closer to production.")),(0,o.kt)("p",null,"To configure the PolicyServer to accept insecure connections to specific\nregistries, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.insecureSources")," field of PolicyServer. This field\naccepts a list of URIs to be regarded as insecure. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  insecureSources:\n    - localhost:5000\n    - host.k3d.internal:5000\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/distributing-policies/custom-certificate-authorities"},"here")," for more\ninformation on how the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," executable treats them."),(0,o.kt)("h3",{id:"custom-certificate-authorities"},"Custom Certificate Authorities"),(0,o.kt)("p",null,"To configure the PolicyServer with a custom certificate chain of 1 or more\ncertificates for a specific URI, use the field ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.sourceAuthorities"),"."),(0,o.kt)("p",null,"This field is a map of URIs, each with its own list of strings that contain PEM\nencoded certificates. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  sourceAuthorities:\n    "registry-pre.example.com":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-1 PEM cert\n        -----END CERTIFICATE-----\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-2 PEM cert\n        -----END CERTIFICATE-----\n    "registry-pre2.example.com:5500":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre2 PEM cert\n        -----END CERTIFICATE-----\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/distributing-policies/custom-certificate-authorities"},"here")," for more\ninformation on how the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," executable treats them."))}m.isMDXComponent=!0}}]);