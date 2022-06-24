"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[241],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={slug:"/",sidebar_position:1},c="Introduction",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"cloudmon monitors backup files inside a S3 or Minio bucket.",source:"@site/docs/01-intro.md",sourceDirName:".",slug:"/",permalink:"/cloudmon-docs/",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Concept",permalink:"/cloudmon-docs/concept"}},s={},p=[{value:"Goals",id:"goals",level:2},{value:"Features",id:"features",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"cloudmon")," monitors backup files inside a S3 or Minio bucket.\nEach backup file definition can be exported into a Prometheus-compatible format. You can use tools like ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager")," to notify the SRE team if a backup is missing or some threshold has been missed. A threshold could be e.g. that the filesize of the backup file is too small."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"The goals of ",(0,i.kt)("em",{parentName:"p"},"cloudmon")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitoring and supervising existing backup files: inspecting, overseeing, handling, controlling"),(0,i.kt)("li",{parentName:"ul"},"Overseeing backup processes"),(0,i.kt)("li",{parentName:"ul"},"Collecting metric data about backup files")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Export Prometheus metrics"),(0,i.kt)("li",{parentName:"ul"},"Purging outdated backup files (erase, remove, delete)"),(0,i.kt)("li",{parentName:"ul"},"Centralized download of backup files")))}f.isMDXComponent=!0}}]);