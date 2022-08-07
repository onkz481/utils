"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[709],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(t),d=a,f=y["".concat(l,".").concat(d)]||y[d]||p[d]||i;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={title:"isArray",sidebar_position:1},s=void 0,o={unversionedId:"packages/utils-is/is-array",id:"packages/utils-is/is-array",title:"isArray",description:"The isArray method determines if the passed value is Array.",source:"@site/docs/packages/utils-is/is-array.md",sourceDirName:"packages/utils-is",slug:"/packages/utils-is/is-array",permalink:"/utils/docs/packages/utils-is/is-array",draft:!1,editUrl:"https://github.com/onkz481/utils/tree/main/documents/docs/packages/utils-is/is-array.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"isArray",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"utils-is",permalink:"/utils/docs/category/utils-is"},next:{title:"isBool",permalink:"/utils/docs/packages/utils-is/is-bool"}},l={},c=[{value:"Usage",id:"usage",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isArray")," method determines if the passed value is ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"isArray([]); // true\nisArray([1]); // true\nisArray(new Array(1)); // true\n\nisArray({}); // false\nisArray(null); // false\nisArray(undefined); // false\n")),(0,a.kt)("p",null,"This is essentially the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.isArray"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { isArray } from '@onkz481/conditionals';\n\nisArray(value);\n")))}p.isMDXComponent=!0}}]);