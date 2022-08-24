"use strict";(self.webpackChunkbackmon_docs=self.webpackChunkbackmon_docs||[]).push([[240],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9996:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s="FAQ",u={unversionedId:"faq",id:"faq",title:"FAQ",description:"Prometheus",source:"@site/docs/30-faq.md",sourceDirName:".",slug:"/faq",permalink:"/backmon-docs/faq",draft:!1,editUrl:"https://github.com/dreitier/backmon-docs/tree/main/docs/docs/30-faq.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rancher app",permalink:"/backmon-docs/deployment/rancher-app"}},p={},l=[{value:"Prometheus",id:"prometheus",level:2},{value:"How can I identify the number of backups in a week?",id:"how-can-i-identify-the-number-of-backups-in-a-week",level:3},{value:"Why does Prometheus does not export metrics like <code>backmon_backup_latest_size_bytes</code>?",id:"why-does-prometheus-does-not-export-metrics-like-backmon_backup_latest_size_bytes",level:3}],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"prometheus"},"Prometheus"),(0,a.kt)("h3",{id:"how-can-i-identify-the-number-of-backups-in-a-week"},"How can I identify the number of backups in a week?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sum_over_time(min(1, irate(backup_latest_time_seconds[7d])))\n")),(0,a.kt)("h3",{id:"why-does-prometheus-does-not-export-metrics-like-backmon_backup_latest_size_bytes"},"Why does Prometheus does not export metrics like ",(0,a.kt)("inlineCode",{parentName:"h3"},"backmon_backup_latest_size_bytes"),"?"),(0,a.kt)("p",null,"If metrics like ",(0,a.kt)("inlineCode",{parentName:"p"},"backmon_backup_latest_size_bytes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"backmon_backup_latest_file_modified_at")," are not available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint, either the root directories name in your ",(0,a.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," is wrong or none of the files matches the given pattern."))}f.isMDXComponent=!0}}]);