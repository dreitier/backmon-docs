"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[314],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||a;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9504:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},l="Local filesystem",u={unversionedId:"reference/cloudmon-configuration/storage/local-filesystem",id:"reference/cloudmon-configuration/storage/local-filesystem",title:"Local filesystem",description:"Local disks can be configured in the config.yaml by using the parameter environments[].path:",source:"@site/docs/20-reference/10-cloudmon-configuration/10-storage/10-local-filesystem.md",sourceDirName:"20-reference/10-cloudmon-configuration/10-storage",slug:"/reference/cloudmon-configuration/storage/local-filesystem",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage/local-filesystem",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/20-reference/10-cloudmon-configuration/10-storage/10-local-filesystem.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage/"},next:{title:"AWS S3",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage/aws-s3"}},s={},f=[],m={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-filesystem"},"Local filesystem"),(0,a.kt)("p",null,"Local disks can be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," by using the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"environments[].path"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  local_backup:\n    path: /data/backup/mysql\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"cloudmon")," tries to read the ",(0,a.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," from the location ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/backup/mysql/backup_definitions.yaml"),"."))}p.isMDXComponent=!0}}]);