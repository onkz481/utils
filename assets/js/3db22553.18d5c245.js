"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(r),d=i,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const s={title:"isString",sidebar_position:8},a=void 0,o={unversionedId:"packages/utils-is/is-string",id:"packages/utils-is/is-string",title:"isString",description:"The isString method determines if the passed value is String.",source:"@site/docs/packages/utils-is/is-string.md",sourceDirName:"packages/utils-is",slug:"/packages/utils-is/is-string",permalink:"/utils/docs/packages/utils-is/is-string",draft:!1,editUrl:"https://github.com/onkz481/utils/tree/main/documents/docs/packages/utils-is/is-string.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"isString",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"isObject",permalink:"/utils/docs/packages/utils-is/is-object"},next:{title:"utils-color",permalink:"/utils/docs/category/utils-color"}},l={},c=[{value:"Usage",id:"usage",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"isString")," method determines if the passed value is ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"isString(''); // true\nisString('val'); // true\n\nisString(undefined); // false\nisString(null); // false\nisString(0); // false\nisString([]); // false\nisString({}); // false\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { isString } from '@onkz481/conditionals';\n\nisString(value);\n")))}p.isMDXComponent=!0}}]);