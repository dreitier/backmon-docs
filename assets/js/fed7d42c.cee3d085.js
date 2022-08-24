"use strict";(self.webpackChunkbackmon_docs=self.webpackChunkbackmon_docs||[]).push([[241],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:"/",sidebar_position:1},l="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"backmon monitors backup files inside filesystems and object storages.",source:"@site/docs/01-intro.md",sourceDirName:".",slug:"/",permalink:"/backmon-docs/",draft:!1,editUrl:"https://github.com/dreitier/backmon-docs/tree/main/docs/docs/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Concept",permalink:"/backmon-docs/concept"}},u={},p=[{value:"Goals",id:"goals",level:2},{value:"Features",id:"features",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"backmon")," monitors backup files inside filesystems and object storages.\nEach backup file definition can be exported into a Prometheus-compatible format. You can use tools like ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager")," to notify the SRE team if a backup is missing or some threshold has been missed. A threshold could be e.g. that the filesize of the backup file is too small."),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("p",null,"The goals of ",(0,a.kt)("em",{parentName:"p"},"backmon")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitoring and supervising existing backup files: inspecting, overseeing, handling, controlling"),(0,a.kt)("li",{parentName:"ul"},"Overseeing backup processes"),(0,a.kt)("li",{parentName:"ul"},"Collecting metric data about backup files")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Export Prometheus metrics"),(0,a.kt)("li",{parentName:"ul"},"Purging outdated backup files (erase, remove, delete)"),(0,a.kt)("li",{parentName:"ul"},"Centralized download of backup files")))}m.isMDXComponent=!0}}]);