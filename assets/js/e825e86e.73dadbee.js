"use strict";(self.webpackChunkbackmon_docs=self.webpackChunkbackmon_docs||[]).push([[830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>N,default:()=>_,frontMatter:()=>h,metadata:()=>y,toc:()=>v});var n=a(7462),i=a(7294),l=a(3905),r=a(6010),o=a(2389),s=a(7392),d=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:o,defaultValue:c,values:k,groupId:f,className:b}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===c?c:null!=(t=null!=c?c:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==g&&!N.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:C}=(0,d.U)(),[_,w]=(0,i.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:$}=(0,p.o5)();if(null!=f){const e=v[f];null!=e&&e!==_&&N.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==_&&($(t),w(n),null!=f&&C(f,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var i;const t=T.indexOf(e.currentTarget)-1;a=null!=(i=T[t])?i:T[T.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},N.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:x,onClick:x},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function k(e){const t=(0,o.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(f,n),hidden:a},t)}const h={},N="Overview",y={unversionedId:"reference/backup-definition/overview",id:"reference/backup-definition/overview",title:"Overview",description:"",source:"@site/docs/20-reference/20-backup-definition/10-overview.md",sourceDirName:"20-reference/20-backup-definition",slug:"/reference/backup-definition/overview",permalink:"/reference/backup-definition/overview",draft:!1,editUrl:"https://github.com/dreitier/backmon-docs/tree/main/docs/docs/20-reference/20-backup-definition/10-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backup definition",permalink:"/category/backup-definition"},next:{title:"Substitutions",permalink:"/reference/backup-definition/substitutions"}},g={},v=[{value:"Sample <code>backup_definitions.yaml</code> file",id:"sample-backup_definitionsyaml-file",level:3},{value:"Available configuration keys",id:"available-configuration-keys",level:2},{value:"<code>[$directory]</code>",id:"directory",level:2},{value:"Location of backup directories",id:"location-of-backup-directories",level:3},{value:"Backups in the same directory",id:"backups-in-the-same-directory",level:4},{value:"Backups in subdirectories",id:"backups-in-subdirectories",level:4},{value:"Patterns",id:"patterns",level:3},{value:"Pattern variables",id:"pattern-variables",level:4},{value:"Pattern substitutions",id:"pattern-substitutions",level:4},{value:"<code>[$directory].alias</code>",id:"directoryalias",level:3},{value:"Without <code>.alias</code>",id:"without-alias",level:4},{value:"With <code>.alias</code> specified",id:"with-alias-specified",level:4},{value:"<code>[$directory].fuse</code>",id:"directoryfuse",level:3},{value:"<code>[$directory].defaults.*</code>",id:"directorydefaults",level:3},{value:"<code>[$directory].files[$file]</code>",id:"directoryfilesfile",level:3},{value:"<code>[$directory].files[$file].schedule</code>",id:"directoryfilesfileschedule",level:3},{value:"<code>[$directory].files[$file].sort</code>",id:"directoryfilesfilesort",level:3},{value:"<code>[$directory].files[$file].purge</code>",id:"directoryfilesfilepurge",level:3},{value:"<code>[$directory].files[$file].retention-count</code>",id:"directoryfilesfileretention-count",level:3},{value:"<code>[$directory].files[$file].retention-age</code>",id:"directoryfilesfileretention-age",level:3},{value:"<code>[$directory].files[$file].alias</code>",id:"directoryfilesfilealias",level:3},{value:"Without <code>.alias</code>",id:"without-alias-1",level:4},{value:"With <code>.alias</code> specified",id:"with-alias-specified-1",level:4}],C={toc:v};function _(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The backup definition is a YAML file that describes the structure of your backups.\nIn it, you provide the information that ",(0,l.kt)("em",{parentName:"p"},"backmon")," needs to collect metric data, purge files, and offer file downloads."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"backmon")," looks for the backup definition file called ",(0,l.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," at the root directory of your disk.\nYou can overwrite the file naming in the ",(0,l.kt)("a",{parentName:"p",href:"/reference/backmon-configuration/overview"},"backmon configuration file"),"."),(0,l.kt)("h3",{id:"sample-backup_definitionsyaml-file"},"Sample ",(0,l.kt)("inlineCode",{parentName:"h3"},"backup_definitions.yaml")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# use directory ./databases as the the root directory. You can have multiple directories in each YAML file. \n# use '.' if the definitions file is in the same directory as your backups.\n'./databases/{{client}}':\n  # alias is used for Prometheus metrics\n  alias: DB\n  # assign variables\n  fuse:\n    - 'client'\n  # apply those defaults to all files.* sections. You can override each parameter in the files.* section\n  defaults:\n    # expect that a backup file is generated at 00:30 each night\n    schedule: 30 0 * * *\n    # for identifying the newest file, we use the `born_at` field\n    sort: born_at\n    # purge old files which are older than 7 days and keep at least 10 backups\n    purge: true\n\n    # @see https://github.com/dreitier/backmon/issues/19\n    # retention-count: 10\n    # retention-age: 7d\n  # inside the ./databases folder there are multiple files like `postgres-20220713.gz`\n  files:\n    'postgres-%Y%M%D.gz':\n      # File alias for Prometheus   \n      alias: PostgeSQL\n      # This backup is generated at 01:00 each night\n      schedule: 0 1 * * *\n      retention-count: 10\n      retention-age: 7d\n    '%Y%M%D_mysql_%I.gz':\n      alias: MySQL\n")),(0,l.kt)("h2",{id:"available-configuration-keys"},"Available configuration keys"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"string"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory name inside the disk, relative to the ",(0,l.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].alias")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<name of directory>")," (",(0,l.kt)("em",{parentName:"td"},"string"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Used alias when exporting metrics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].fuse[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"list of wildcard strings"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Group files together by that substitutions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].defaults.*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"any of .schedule, .sort, .purge"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Apply those defaults for each ",(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file]")," section. Each ",(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].*")," key can override this default.  ",(0,l.kt)("p",null),"(",(0,l.kt)("inlineCode",{parentName:"td"},".retention-count"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".retention-age"),") are not available, see ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/dreitier/backmon/issues/19"},"#19"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"map"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"File pattern to check for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].schedule")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"valid cron definition"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Cron definition to check for files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].sort")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"interpolation")," (",(0,l.kt)("em",{parentName:"td"},"one of ",(0,l.kt)("inlineCode",{parentName:"em"},"born_at"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"modified_at"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"archived_at")," or ",(0,l.kt)("inlineCode",{parentName:"em"},"interpolation")),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Used data to sort the files. The selected method uses the given field to sort the files and find the latest/newest one. In case of ",(0,l.kt)("inlineCode",{parentName:"td"},"interpolation"),", the variable substitution is applied")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].purge")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"bool"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Purges each file which does not match ",(0,l.kt)("inlineCode",{parentName:"td"},"retention-age")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"retention-count"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"purge")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", without having an explicit retention, a limit von ",(0,l.kt)("inlineCode",{parentName:"td"},"14")," days is assumed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].retention-count")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"int"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep max number of files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].retention-age")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<empty>")," (",(0,l.kt)("em",{parentName:"td"},"duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep files newer than that")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[$directory].files[$file].alias")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<name of file>")," (",(0,l.kt)("em",{parentName:"td"},"string"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Used alias when exporting metrics.")))),(0,l.kt)("h2",{id:"directory"},(0,l.kt)("inlineCode",{parentName:"h2"},"[$directory]")),(0,l.kt)("p",null,"The root elements for each ",(0,l.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," are the names of the subdirectories in a disk."),(0,l.kt)("h3",{id:"location-of-backup-directories"},"Location of backup directories"),(0,l.kt)("h4",{id:"backups-in-the-same-directory"},"Backups in the same directory"),(0,l.kt)("p",null,"When backups are in the same directory with the ",(0,l.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml"),", you have to use ",(0,l.kt)("inlineCode",{parentName:"p"},".")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./")," as root element:"),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"bash",label:"Directory structure",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- backup_definitions.yaml\n- backup1.tar.gz\n- backup2.tar.gz\n"))),(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./':\n  alias: root\n  # ... configuration options\n")))),(0,l.kt)("h4",{id:"backups-in-subdirectories"},"Backups in subdirectories"),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"bash",label:"Directory structure",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- backup_definitions.yaml\n+ /backup-1/\n  - backup1.tar.gz\n  - backup2.tar.gz\n+ /backup-2/\n  - backup1.tar.gz\n  - backup2.tar.gz\n"))),(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backup-1':\n  alias: root-1\n  # ... configuration options\n'./backup-2':\n  alias: root-2\n  # ... configuration options\n")))),(0,l.kt)("h3",{id:"patterns"},"Patterns"),(0,l.kt)("h4",{id:"pattern-variables"},"Pattern variables"),(0,l.kt)("p",null,"A variable can be put on a ",(0,l.kt)("em",{parentName:"p"},"directory")," pattern by using two curly braces (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{variable}}"),"). For variable names only characters ",(0,l.kt)("inlineCode",{parentName:"p"},"0-9"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"A-Z"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a-z"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," are allowed. Please note that you ",(0,l.kt)("em",{parentName:"p"},"should not")," override the variables names from the ",(0,l.kt)("a",{parentName:"p",href:"substitutions"},"substituions"),"."),(0,l.kt)("p",null,"Variables can be referenced later on in a ",(0,l.kt)("em",{parentName:"p"},"file")," pattern with help of ",(0,l.kt)("inlineCode",{parentName:"p"},"${variable}"),"."),(0,l.kt)("h4",{id:"pattern-substitutions"},"Pattern substitutions"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"substitutions"},"Substitutions"),"."),(0,l.kt)("h3",{id:"directoryalias"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].alias")),(0,l.kt)("p",null,"If specified, the label ",(0,l.kt)("inlineCode",{parentName:"p"},"dir")," for the epxorted Prometheues metrics will be overwritten with the given alias."),(0,l.kt)("h4",{id:"without-alias"},"Without ",(0,l.kt)("inlineCode",{parentName:"h4"},".alias")),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backups':\n  files:\n    'dump-%Y%M%D.sql':\n"))),(0,l.kt)(b,{value:"bash",label:"Prometheus output",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'backmon_backup_file_age_aim_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}\n')))),(0,l.kt)("h4",{id:"with-alias-specified"},"With ",(0,l.kt)("inlineCode",{parentName:"h4"},".alias")," specified"),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backups':\n  alias: \"custom_backups\"\n  files:\n    'dump-%Y%M%D.sql':\n"))),(0,l.kt)(b,{value:"bash",label:"Prometheus output",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'backmon_backup_file_age_aim_seconds{dir="custom_backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}\n')))),(0,l.kt)("h3",{id:"directoryfuse"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].fuse")),(0,l.kt)("p",null,"Sometimes you need to group files together which belong logically to the same backup set but are split across different directories."),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"bash",label:"Directory structure",default:!0,mdxType:"TabItem"},"Let's group together the following backup `.sql` files:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"backups/2022/01/postgres/some_subdir\n- 20220101.sql\nbackups/2022/02/postgres/some_subdir\n- 20220201.sql\nbackups/2022/03/postgres/some_subdir\n- 20220301.sql\n"))),(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backups/{{of_year}/{{of_month}}/postgres/{{some_subdir}}':\n  alias: \"backups\"\n  fuse:\n    - 'of_year'\n    - 'of_month'\n  files:\n    'dump-%Y%M%D.sql':\n      alias: 'postgres'\n")))),(0,l.kt)("h3",{id:"directorydefaults"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].defaults.*")),(0,l.kt)("p",null,"If you want to use the same configuration over multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"[$directory].files[$file]")," sections, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},".defaults"),".\nWith ",(0,l.kt)("inlineCode",{parentName:"p"},".defaults")," you can apply the configuration keys "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".schedule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".sort")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".purge"))),(0,l.kt)("p",null,"as defaults for each ",(0,l.kt)("inlineCode",{parentName:"p"},"[$directory].files[$file].*")," section. You can can override the default key value in each ",(0,l.kt)("inlineCode",{parentName:"p"},"[$directory].files[$file]")," section."),(0,l.kt)("p",null,"The two settings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".retention-count")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".retention-age"))),(0,l.kt)("p",null,"are ",(0,l.kt)("strong",{parentName:"p"},"not")," available, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dreitier/backmon/issues/19"},"#19"),"."),(0,l.kt)("h3",{id:"directoryfilesfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file]")),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"[$directory].files[$file]")," key supports so called ",(0,l.kt)("a",{parentName:"p",href:"substitutions"},"substitutions"),". They are basically simplified regular expressions. Some of those substitutions like '%Y' and '%M' are used to update the file's `interpolated_timestamp'."),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"bash",label:"Directory structure",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"backups-1/\n- dump-20220401.sql\n- dump-20220501.sql\n- dump-20220601.sql\n- dump-20220701.sql\n"))),(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"./backups-1:\n  alias: \"backups\"\n  files: \n    'dump-%Y%M%D.sql':\n")))),(0,l.kt)("h3",{id:"directoryfilesfileschedule"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].schedule")),(0,l.kt)("p",null,"Put in your crontab definition for when the backup should occur."),(0,l.kt)("h3",{id:"directoryfilesfilesort"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].sort")),(0,l.kt)("p",null,"With help of ",(0,l.kt)("inlineCode",{parentName:"p"},".sort")," you can define which of the backup file's fields is used for sorting. Sorting is used for finding the latest/newest files (relevant for the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/download")," endpoint) and oldest files (relevant for purging)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Timestamp used"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"born_at")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"file-dates"},(0,l.kt)("inlineCode",{parentName:"a"},"born_at"))),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"modified_at")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"file-dates"},(0,l.kt)("inlineCode",{parentName:"a"},"modified_at"))),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"archived_at")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"file-dates"},(0,l.kt)("inlineCode",{parentName:"a"},"archived_at"))),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"interpolation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"file-dates#interpolated_value"},"interpolated timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("p",null,"If you are not using ",(0,l.kt)("a",{parentName:"p",href:"file-dates#stat--dotstat-files"},".stat / dotstat files"),", ",(0,l.kt)("a",{parentName:"p",href:"file-dates#interpolated_timestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"interpolation"))," is used."),(0,l.kt)("h3",{id:"directoryfilesfilepurge"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].purge")),(0,l.kt)("p",null,"If set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", files which are older than ",(0,l.kt)("inlineCode",{parentName:"p"},"retention-age")," and over the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"retention-count")," are deleted."),(0,l.kt)("h3",{id:"directoryfilesfileretention-count"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].retention-count")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},".purge")," is set to true, at least a number of ",(0,l.kt)("inlineCode",{parentName:"p"},".retention-count")," files are kept, even if they are older than ",(0,l.kt)("inlineCode",{parentName:"p"},".retention-age"),"."),(0,l.kt)("h3",{id:"directoryfilesfileretention-age"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].retention-age")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},".purge")," is set to true, files older then ",(0,l.kt)("inlineCode",{parentName:"p"},".retention-age")," are purged. Pleas note that at least a number of ",(0,l.kt)("inlineCode",{parentName:"p"},".retention-count")," files is kept.\n",(0,l.kt)("inlineCode",{parentName:"p"},".sort")," is used to calculate if a given file is older than ",(0,l.kt)("inlineCode",{parentName:"p"},".retention-age")," from today."),(0,l.kt)("h3",{id:"directoryfilesfilealias"},(0,l.kt)("inlineCode",{parentName:"h3"},"[$directory].files[$file].alias")),(0,l.kt)("p",null,"If specified, the label ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," for the epxorted Prometheues metrics will be overwritten with the given alias."),(0,l.kt)("h4",{id:"without-alias-1"},"Without ",(0,l.kt)("inlineCode",{parentName:"h4"},".alias")),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backups':\n  files:\n    'dump-%Y%M%D.sql':\n"))),(0,l.kt)(b,{value:"bash",label:"Prometheus output",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'backmon_backup_file_age_aim_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="dump-%Y%M%D.sql"}\n')))),(0,l.kt)("h4",{id:"with-alias-specified-1"},"With ",(0,l.kt)("inlineCode",{parentName:"h4"},".alias")," specified"),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(b,{value:"yaml",label:"backup_definitions.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"'./backups':\n  files:\n    'dump-%Y%M%D.sql':\n    alias: \"pg-dump\"\n"))),(0,l.kt)(b,{value:"bash",label:"Prometheus output",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'backmon_backup_file_age_aim_seconds{dir="./backups",disk="_samples/1.postgres-dumps",file="pg-dump"}\n')))))}_.isMDXComponent=!0}}]);