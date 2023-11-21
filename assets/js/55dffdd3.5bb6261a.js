"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=s,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),s=(n(67294),n(3905));const a={sidebar_label:"Raw policies",title:"Writing raw policies",description:"Using Kubewarden for writing raw policies.",keywords:["kubewarden","kubernetes","raw policies"],"doc-type":["explanation","tutorial"],"doc-topic":["kubewarden","writing-policies","raw-policies"],"doc-persona":["kubewarden-developer"]},r=void 0,o={unversionedId:"writing-policies/wasi/raw-policies",id:"writing-policies/wasi/raw-policies",title:"Writing raw policies",description:"Using Kubewarden for writing raw policies.",source:"@site/docs/writing-policies/wasi/02-raw-policies.md",sourceDirName:"writing-policies/wasi",slug:"/writing-policies/wasi/raw-policies",permalink:"/next/writing-policies/wasi/raw-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/wasi/02-raw-policies.md",tags:[],version:"current",lastUpdatedAt:1700575510,formattedLastUpdatedAt:"Nov 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Raw policies",title:"Writing raw policies",description:"Using Kubewarden for writing raw policies.",keywords:["kubewarden","kubernetes","raw policies"],"doc-type":["explanation","tutorial"],"doc-topic":["kubewarden","writing-policies","raw-policies"],"doc-persona":["kubewarden-developer"]},sidebar:"docs",previous:{title:"WASI",permalink:"/next/writing-policies/wasi/intro-wasi"},next:{title:"Policy metadata",permalink:"/next/writing-policies/metadata"}},l={},u=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,s.kt)("a",{parentName:"p",href:"/next/howtos/raw-policies"},"raw policies")," page."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/next/writing-policies/wasi/intro-wasi"},"Introduction to WASI")," for an overview of the WASI execution mode."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You mark the policy as ",(0,s.kt)("inlineCode",{parentName:"p"},"raw")," by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"policyType")," field in the ",(0,s.kt)("inlineCode",{parentName:"p"},"metadata.yml")," configuration.\nPlease refer to the ",(0,s.kt)("a",{parentName:"p",href:"/next/writing-policies/metadata"},"metadata")," specification for more information.")),(0,s.kt)("h3",{id:"validation"},"Validation"),(0,s.kt)("p",null,"As an example you can write a policy that accepts a request in the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n')),(0,s.kt)("p",null,"and validates that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," is in the list of valid users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"action")," is in the list of valid actions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"resource")," is in the list of valid resources")),(0,s.kt)("p",null,"Start by scaffolding the policy by using the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-wasi-policy-template"},"go WASI policy template"),"."),(0,s.kt)("p",null,"First, you need to define the types that represent the payload of the request."),(0,s.kt)("p",null,"You should declare a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"RawValidationRequest")," type containing the ",(0,s.kt)("inlineCode",{parentName:"p"},"Request")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings"),", instead of using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," type provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"kw_sdk.go"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\ntype RawValidationRequest struct {\n    Request Request `json:"request"`\n    // Raw policies can have settings.\n    Settings Settings `json:"settings"`\n}\n\n// Request represents the payload of the request.\ntype Request struct {\n    User     string `json:"user"`\n    Action   string `json:"action"`\n    Resource string `json:"resource"`\n}\n')),(0,s.kt)("p",null,"Then you define the ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings")," type and the ",(0,s.kt)("inlineCode",{parentName:"p"},"validateSettings")," function in the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.go")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers     []string `json:"validUsers"`\n    ValidActions   []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n}\n\nfunc validateSettings(input []byte) []byte {\n    var response SettingsValidationResponse\n\n    settings := &Settings{}\n    if err := json.Unmarshal(input, &settings); err != nil {\n        response = RejectSettings(Message(fmt.Sprintf("cannot unmarshal settings: %v", err)))\n    } else {\n        response = validateCliSettings(settings)\n    }\n\n    responseBytes, err := json.Marshal(&response)\n    if err != nil {\n        log.Fatalf("can not marshal validation response: %v", err)\n    }\n    return responseBytes\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n    if len(settings.ValidUsers) == 0 {\n        return RejectSettings(Message(\n            "At least one valid user must be specified"))\n    }\n\n    if len(settings.ValidActions) == 0 {\n        return RejectSettings(Message(\n            "At least one valid action must be specified"))\n    }\n\n    if len(settings.ValidResources) == 0 {\n        return RejectSettings(Message(\n            "At least one valid resource must be specified"))\n    }\n\n    return AcceptSettings()\n}\n')),(0,s.kt)("p",null,"Finally, you update the validation logic in ",(0,s.kt)("inlineCode",{parentName:"p"},"validate.go"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'func validate(input []byte) []byte {\n    var validationRequest RawValidationRequest\n    validationRequest.Settings = Settings{}\n    decoder := json.NewDecoder(strings.NewReader(string(input)))\n    decoder.DisallowUnknownFields()\n    err := decoder.Decode(&validationRequest)\n    if err != nil {\n        return marshalValidationResponseOrFail(\n            RejectRequest(\n                Message(fmt.Sprintf("Error deserializing validation request: %v", err)),\n                Code(400)))\n    }\n\n    return marshalValidationResponseOrFail(\n        validateRequest(validationRequest.Settings, validationRequest.Request))\n}\n\nfunc marshalValidationResponseOrFail(response ValidationResponse) []byte {\n    responseBytes, err := json.Marshal(&response)\n    if err != nil {\n        log.Fatalf("cannot marshal validation response: %v", err)\n    }\n    return responseBytes\n}\n\nfunc validateRequest(settings Settings, request Request) ValidationResponse {\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return AcceptRequest()\n    }\n\n    return RejectRequest(\n        Message("The request cannot be accepted."),\n        Code(403))\n}\n')),(0,s.kt)("h3",{id:"mutation"},"Mutation"),(0,s.kt)("p",null,"You can change the earlier example to mutate the request instead of rejecting it."),(0,s.kt)("p",null,"In this case, the settings should contain the ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultUser"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultAction")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultRequest")," to use to mutate the request if the user, the action, or the resource isn't valid."),(0,s.kt)("p",null,"You need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings")," type with the new fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers []string `json:"validUsers"`\n    ValidActions []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n    DefaultUser string `json:"defaultUser"`\n    DefaultAction string `json:"defaultAction"`\n    DefaultResource string `json:"defaultResource"`\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n    if len(settings.ValidUsers) == 0 {\n        return RejectSettings(Message(\n            "At least one valid user must be specified"))\n    }\n\n    if len(settings.ValidActions) == 0 {\n        return RejectSettings(Message(\n            "At least one valid action must be specified"))\n    }\n\n    if len(settings.ValidResources) == 0 {\n        return RejectSettings(Message(\n            "At least one valid resource must be specified"))\n    }\n\n    if settings.DefaultUser == "" {\n        return RejectSettings(Message(\n            "Default user must be specified"))\n    }\n\n    if settings.DefaultAction == "" {\n        return RejectSettings(Message(\n            "Default action must be specified"))\n    }\n\n    if settings.DefaultResource == "" {\n        return RejectSettings(Message(\n            "Default resource must be specified"))\n    }\n\n    return AcceptSettings()\n}\n')),(0,s.kt)("p",null,"You also need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," struct and the ",(0,s.kt)("inlineCode",{parentName:"p"},"MutateRequest")," function in ",(0,s.kt)("inlineCode",{parentName:"p"},"kw_sdk.go")," to remove the Kubernetes-specific types and use Kubewarden types instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// ValidationResponse defines the response given when validating a request\ntype ValidationResponse struct {\n    Accepted bool `json:"accepted"`\n    // Optional - ignored if accepted\n    Message *string `json:"message,omitempty"`\n    // Optional - ignored if accepted\n    Code *uint16 `json:"code,omitempty"`\n    // Optional - used only by mutating policies\n    // highlight-next-line\n    MutatedObject *Request `json:"mutated_object,omitempty"`\n}\n\n// MutateRequest accepts the request. The given `mutatedObject` is how\n// the evaluated object must look once accepted\n// highlight-next-line\nfunc MutateRequest(mutatedObject *Request) ValidationResponse {\n    return ValidationResponse{\n        Accepted:      true,\n        MutatedObject: mutatedObject,\n    }\n}\n')),(0,s.kt)("p",null,"Now you can update the ",(0,s.kt)("inlineCode",{parentName:"p"},"validate")," function to mutate the request if not valid:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"func validateRequest(settings Settings, request Request) ValidationResponse {\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return AcceptRequest()\n    }\n\n    if !slices.Contains(settings.ValidUsers, request.User) {\n        request.User = settings.DefaultUser\n    }\n\n    if !slices.Contains(settings.ValidActions, request.Action) {\n        request.Action = settings.DefaultAction\n    }\n\n    if !slices.Contains(settings.ValidResources, request.Resource) {\n        request.Resource = settings.DefaultResource\n    }\n\n    return MutateRequest(&request)\n}\n")))}d.isMDXComponent=!0}}]);