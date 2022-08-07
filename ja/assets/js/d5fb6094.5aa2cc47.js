"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(g,l(l({ref:t},u),{},{components:r})):o.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={},l="getMdColor",c={unversionedId:"packages/utils-color/functions/getMdColor",id:"packages/utils-color/functions/getMdColor",title:"getMdColor",description:"\u6307\u5b9a\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb \u30c7\u30b6\u30a4\u30f3\u306e\u8272\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002 \u4f7f\u7528\u53ef\u80fd\u306a\u8272\u306f mdColors \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/packages/utils-color/functions/getMdColor.md",sourceDirName:"packages/utils-color/functions",slug:"/packages/utils-color/functions/getMdColor",permalink:"/utils/ja/docs/packages/utils-color/functions/getMdColor",draft:!1,editUrl:"https://github.com/onkz481/utils/tree/main/documents/docs/packages/utils-color/functions/getMdColor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"functions",permalink:"/utils/ja/docs/category/functions"},next:{title:"variables",permalink:"/utils/ja/docs/category/variables"}},s={},i=[{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getmdcolor"},"getMdColor"),(0,n.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb \u30c7\u30b6\u30a4\u30f3\u306e\u8272\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002 \u4f7f\u7528\u53ef\u80fd\u306a\u8272\u306f ",(0,n.kt)("a",{parentName:"p",href:"/utils/ja/docs/packages/utils-color/variables/mdColors"},"mdColors")," \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getMdColor('red', 'base'); // #F44336\ngetMdColor('deepPurple', 'lighten5'); // #EDE7F6\ngetMdColor('black'); // #000000\n")),(0,n.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { getMdColor } from '@onkz481/utils-color';\n\nconst color = 'red';\nconst shade = 'base';\n\ngetMdColor(color, shade);\n")))}p.isMDXComponent=!0}}]);