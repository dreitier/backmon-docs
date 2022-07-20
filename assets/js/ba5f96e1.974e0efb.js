"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d="Overview",m={unversionedId:"reference/cloudmon-configuration/overview",id:"reference/cloudmon-configuration/overview",title:"Overview",description:"cloudmon's binary must run either on a bare-metal host or inside a Docker container.",source:"@site/docs/reference/10-cloudmon-configuration/overview.md",sourceDirName:"reference/10-cloudmon-configuration",slug:"/reference/cloudmon-configuration/overview",permalink:"/cloudmon-docs/reference/cloudmon-configuration/overview",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/reference/10-cloudmon-configuration/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/cloudmon-docs/category/configuration"},next:{title:"Storage",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage"}},p={},u=[{value:"Command line options for <em>cloudmon</em>",id:"command-line-options-for-cloudmon",level:2},{value:"Available configuration keys",id:"available-configuration-keys",level:2},{value:"Sample configuration file",id:"sample-configuration-file",level:3}],s={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"cloudmon"),"'s binary must run either on a bare-metal host or inside a Docker container.\nIt then can be configure through a configuration file.\nIn it, you specify which disks, local filesystem paths or S3 buckets, have to be monitored."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"cloudmon")," inspects each of the configured disks. If a ",(0,i.kt)("a",{parentName:"p",href:"/cloudmon-docs/reference/backup-definition/overview"},"backup definition")," is found in a disk, its ",(0,i.kt)("a",{parentName:"p",href:"/cloudmon-docs/reference/backup-definition/overview"},"backup definition")," is applied."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"cloudmon")," tries to locate the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," in the following directories, priority in the defined order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"local directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"./config.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"${HOME}/.cloudmon/config.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/etc/cloudmon/config.yaml"))),(0,i.kt)("p",null,"In the configuration file, you can use environment placeholders like ",(0,i.kt)("inlineCode",{parentName:"p"},"${VAR}"),". Those placeholders will be replaced during the startup of ",(0,i.kt)("em",{parentName:"p"},"cloudmon")," with the corresponding environment variables. You have to place the configuration file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/cloudmon/config-raw.yaml"),"."),(0,i.kt)("h2",{id:"command-line-options-for-cloudmon"},"Command line options for ",(0,i.kt)("em",{parentName:"h2"},"cloudmon")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--debug")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")," (",(0,i.kt)("em",{parentName:"td"},"bool"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable debug output; overwrites any log setting from ",(0,i.kt)("inlineCode",{parentName:"td"},"config.yaml"))))),(0,i.kt)("h2",{id:"available-configuration-keys"},"Available configuration keys"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"port")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"80")," (",(0,i.kt)("em",{parentName:"td"},"int"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Default HTTP port to listen for requests. TLS is not supported at the moment. Consider using a proxy if you need encryption.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"update_interval")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1h")," (",(0,i.kt)("em",{parentName:"td"},"duration"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks each disk in that duration interval.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ignore_disks")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"list of strings"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Each of the listed disks is ignored and won't be considered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"log_level")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"one of ",(0,i.kt)("inlineCode",{parentName:"em"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"info")),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Used log level; will be overwritten if ",(0,i.kt)("inlineCode",{parentName:"td"},"--debug")," is used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"downloads.enabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the latest artifact of a monitored backup disk can be downloaded. This is disabled by default for security reasons (",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dreitier/cloudmon/issues/1"},"#1"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http.basic_auth.username")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Username for HTTP Basic Authentication. If this is set, ",(0,i.kt)("inlineCode",{parentName:"td"},"http.basic_auth.password")," must be also set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http.basic_auth.password")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Password for HTTP Basic Authentication. If this is set, ",(0,i.kt)("inlineCode",{parentName:"td"},"http.basic_auth.username")," must be also set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"list of environment"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Each ",(0,i.kt)("inlineCode",{parentName:"td"},"environment")," to check.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of environment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].definitions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"YAML file containing the backup definitions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].path")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Local path to check for. If you use the ",(0,i.kt)("inlineCode",{parentName:"td"},"path")," parameter, other parameters specific for S3 are ignored.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].region")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eu-central-1")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS region")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].force_path_style")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")," (",(0,i.kt)("em",{parentName:"td"},"bool"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Use path-style for that S3 bucket. This is deprecated by AWS S3 and should be probably ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].access_key_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Access Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].secret_access_key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom AWS S3 endpoint. This must be used for Minio buckets or if you are using a local S3 instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"environments[$env].token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"string"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS STS session token. You can leave that empty.")))),(0,i.kt)("h3",{id:"sample-configuration-file"},"Sample configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nport: 8080\nupdate_interval: 1m\ndownloads:\n  enabled: true\n\nhttp:\n  basic_auth:\n    username: my_username\n    password: my_password\n    \nignore_disks:\n  - disk_1\n  - disk_2\n \nenvironments:\n  env_1:\n    path: /my/backups\n  env_2:\n    access_key_id: my_access_key_id\n    secret_access_key: my_secret_access_key\n    \n")))}c.isMDXComponent=!0}}]);