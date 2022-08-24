"use strict";(self.webpackChunkbackmon_docs=self.webpackChunkbackmon_docs||[]).push([[229],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1562:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={},p="File dates",m={unversionedId:"reference/backup-definition/file-dates",id:"reference/backup-definition/file-dates",title:"File dates",description:"For normal file systems different attributes like `mtime, ctime and atime exists to record the times of changes to files. Those values might change if and when files are copied to other locations like remote filesystems or object storages.",source:"@site/docs/20-reference/20-backup-definition/25-file-dates.md",sourceDirName:"20-reference/20-backup-definition",slug:"/reference/backup-definition/file-dates",permalink:"/backmon-docs/reference/backup-definition/file-dates",draft:!1,editUrl:"https://github.com/dreitier/backmon-docs/tree/main/docs/docs/20-reference/20-backup-definition/25-file-dates.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Substitutions",permalink:"/backmon-docs/reference/backup-definition/substitutions"},next:{title:"Purging",permalink:"/backmon-docs/reference/backup-definition/purging"}},s={},d=[{value:"<code>interpolated_timestamp</code>",id:"interpolated_timestamp",level:2},{value:".stat / dotstat files",id:"stat--dotstat-files",level:2},{value:"Format of .stat files",id:"format-of-stat-files",level:3},{value:"Example format of <code>.stat</code> file",id:"example-format-of-stat-file",level:3},{value:"Sample script for creating a backup and dotstat file",id:"sample-script-for-creating-a-backup-and-dotstat-file",level:3}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-dates"},"File dates"),(0,i.kt)("p",null,"For normal file systems different attributes like `",(0,i.kt)("em",{parentName:"p"},"mtime"),", ",(0,i.kt)("em",{parentName:"p"},"ctime")," and ",(0,i.kt)("em",{parentName:"p"},"atime")," exists to record the times of changes to files. Those values might change if and when files are copied to other locations like remote filesystems or object storages.\nBecause of this, ",(0,i.kt)("em",{parentName:"p"},"backmon")," internally uses 4 different types of timestamps:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Default for files in local storage"),(0,i.kt)("th",{parentName:"tr",align:null},"Default for files in S3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"born_at")),(0,i.kt)("td",{parentName:"tr",align:null},"The time when the file has been initally created. This timestamp is the same if the file is copied to another location"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"mtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of upload")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"modified_at")),(0,i.kt)("td",{parentName:"tr",align:null},"The time when the file were last modified"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"mtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of upload")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"archived_at")),(0,i.kt)("td",{parentName:"tr",align:null},"The time when the file were moved to a long-term storage"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"mtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of upload")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"interpolated_timestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"Based upon the file's and parent directories names, the timestamp of the file is calculated"),(0,i.kt)("td",{parentName:"tr",align:null},"interpolation with defaults from ",(0,i.kt)("em",{parentName:"td"},"mtime")),(0,i.kt)("td",{parentName:"tr",align:null},"interpolation with defaults from timestamp of upload")))),(0,i.kt)("p",null,"As you can see in the ",(0,i.kt)("em",{parentName:"p"},"Default for...")," columns, by default they point all to the same value. To overwrite those timestamps with your own values, you can use ",(0,i.kt)("a",{parentName:"p",href:"#stat--dotstat-files"},(0,i.kt)("inlineCode",{parentName:"a"},".stat files")),"."),(0,i.kt)("h2",{id:"interpolated_timestamp"},(0,i.kt)("inlineCode",{parentName:"h2"},"interpolated_timestamp")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolated_timestamp")," is calculated by ",(0,i.kt)("em",{parentName:"p"},"backmon")," during the file discovery phase. If you have defined a file pattern for your backups which contains date formats like ",(0,i.kt)("inlineCode",{parentName:"p"},"%Y")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"%d"),", those values will be applied. For missing parts of the date, the timestamp of the selected ",(0,i.kt)("inlineCode",{parentName:"p"},".sort")," algorithm is used as reference date.\nIn case that ",(0,i.kt)("inlineCode",{parentName:"p"},".sort")," has not been set or has been set to ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolation"),", a fallback to the ",(0,i.kt)("inlineCode",{parentName:"p"},"modified_at")," timestamp happens."),(0,i.kt)("h2",{id:"stat--dotstat-files"},".stat / dotstat files"),(0,i.kt)("p",null,"You can override a file's timestamp by using a ",(0,i.kt)("inlineCode",{parentName:"p"},".stat")," file The .stat file has the same filename as the backup file, except that you have to add the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},".stat")," at the end.\nIf your backup file is named ",(0,i.kt)("inlineCode",{parentName:"p"},"20220719-postgres.tar.gz"),", you must name your ",(0,i.kt)("inlineCode",{parentName:"p"},".stat")," file ",(0,i.kt)("inlineCode",{parentName:"p"},"20220719-postgres.tar.gz.stat"),"."),(0,i.kt)("h3",{id:"format-of-stat-files"},"Format of .stat files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".stat")," files have a simple YAML format. ",(0,i.kt)("em",{parentName:"p"},"backmon")," recognizes the following keys which corresponds to ",(0,i.kt)("em",{parentName:"p"},"backmon"),"'s timestamp types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"born_at")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,i.kt)("em",{parentName:"td"},"unix timestamp"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"modified_at")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty")," (",(0,i.kt)("em",{parentName:"td"},"unix timestamp"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"archived_at")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<empty")," (",(0,i.kt)("em",{parentName:"td"},"unix timestamp"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"modified_at")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"born_at")," gives the duration in seconds that was needed to create the backup."),(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"archived_at")," can be set if after creating the backup an upload to a long-term archive like S3 does not happen directly. You can simply add the parameter before you upload the backup and dotstat file.")),(0,i.kt)("h3",{id:"example-format-of-stat-file"},"Example format of ",(0,i.kt)("inlineCode",{parentName:"h3"},".stat")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"born_at: 12313213\narchived_at: 13818188\nmodified_at: 129939399\n")),(0,i.kt)("h3",{id:"sample-script-for-creating-a-backup-and-dotstat-file"},"Sample script for creating a backup and dotstat file"),(0,i.kt)("p",null,"For example, if you create your backups with pg_dump, you can store the values as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'TODAY=$(date +\'%Y%m%d\')\nFILE="/tmp/${TODAY}.tar"\nNOW=$(date +"%s")\n\n# create dump\necho "born_at: $NOW" >> "$FILE.stat"\npg_dump -U postgres -F t my_database > $FILE\nNOW=$(date +"%s")\necho "modified_at: $NOW" >> "$FILE.stat"\n\n# for demonstration purposes, sleep some seconds\nsleep 300\nNOW=$(date +"%s")\n# copy backup to S3\naws s3 cp "$FILE." s3://my-backup-bucket/\necho "archived_at: $NOW" >> "$FILE.stat"\naws s3 cp "$FILE.stat" s3://my-backup-bucket/\n')))}c.isMDXComponent=!0}}]);