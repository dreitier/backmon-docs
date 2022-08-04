"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[264],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,k=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4638:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={},c="AWS S3",s={unversionedId:"reference/cloudmon-configuration/storage/aws-s3",id:"reference/cloudmon-configuration/storage/aws-s3",title:"AWS S3",description:"If you are configuring an S3 environment, cloudmon automatically creates a disk for each S3 bucket. Let's suppose you have the following config.yaml:",source:"@site/docs/20-reference/10-cloudmon-configuration/10-storage/20-aws-s3.md",sourceDirName:"20-reference/10-cloudmon-configuration/10-storage",slug:"/reference/cloudmon-configuration/storage/aws-s3",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage/aws-s3",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/20-reference/10-cloudmon-configuration/10-storage/20-aws-s3.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local filesystem",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage/local-filesystem"},next:{title:"Backup definition",permalink:"/cloudmon-docs/category/backup-definition"}},u={},d=[{value:"1. Create a cloudmon user",id:"1-create-a-cloudmon-user",level:2},{value:"2. Set up a policy",id:"2-set-up-a-policy",level:2},{value:"3. Update your <code>cloudmon</code> configuration",id:"3-update-your-cloudmon-configuration",level:2},{value:"3.1. When using<code>config.yaml</code>",id:"31-when-usingconfigyaml",level:3},{value:"3.2. When using Helm",id:"32-when-using-helm",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-s3"},"AWS S3"),(0,r.kt)("p",null,"If you are configuring an S3 environment, ",(0,r.kt)("em",{parentName:"p"},"cloudmon")," automatically creates a disk for each S3 bucket. Let's suppose you have the following ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  s3_backup:\n    access_key: my_access_key\n    secret_access_key: my_secret_access_key\n")),(0,r.kt)("p",null,"Your AWS account contains the following S3 buckets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket-1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket-2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket-3"))),(0,r.kt)("p",null,"Each of those buckets is considered as a disk. You have to put a ",(0,r.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://bucket-1/backup_definitions.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://bucket-2/backup_definitions.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://bucket-3/backup_definitions.yaml"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Each AWS S3 bucket is a ",(0,r.kt)("em",{parentName:"p"},"cloudmon disk"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to ignore a bucket, either use the ",(0,r.kt)("inlineCode",{parentName:"li"},"disks.exclude")," configuration key or the ",(0,r.kt)("inlineCode",{parentName:"li"},".cloudmonignore")," marker file."),(0,r.kt)("li",{parentName:"ul"},"If your AWS access key does not have the ",(0,r.kt)("inlineCode",{parentName:"li"},"ListBucket")," permission for one of the buckets, the bucket is ignored.")),(0,r.kt)("h2",{id:"1-create-a-cloudmon-user"},"1. Create a cloudmon user"),(0,r.kt)("p",null,"In the AWS management console, go to ",(0,r.kt)("em",{parentName:"p"},"IAM > Users > Add users")," and create a dedicated user for cloudmon. Just choose ",(0,r.kt)("em",{parentName:"p"},"programmatic access")," and note down the ",(0,r.kt)("em",{parentName:"p"},"access key id")," (",(0,r.kt)("em",{parentName:"p"},"${ACCESS_KEY_ID}"),") and ",(0,r.kt)("em",{parentName:"p"},"secret access key")," (",(0,r.kt)("em",{parentName:"p"},"${SECRET_ACCESS_KEY}"),")."),(0,r.kt)("h2",{id:"2-set-up-a-policy"},"2. Set up a policy"),(0,r.kt)("p",null,"In the AWS managent console, go to ",(0,r.kt)("em",{parentName:"p"},"IAM > Policies > Create policy")," and create a new JSON policy with the following content:"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At the moment, the permission ",(0,r.kt)("inlineCode",{parentName:"p"},"ListAllMyBuckets")," is still required. Please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dreitier/cloudmon/issues/9"},"issue #9"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListAllBuckets",\n            "Effect": "Allow",\n            "Action": "s3:ListAllMyBuckets",\n            "Resource": "arn:aws:s3:::*"\n        },\n        {\n            "Sid": "ListDisks",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::bucket-1",\n                "arn:aws:s3:::bucket-2",\n                "arn:aws:s3:::bucket-3"\n            ]\n        },\n        {\n            "Sid": "DownloadAndPurgeFiles",\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:DeleteObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::bucket-1/*",\n                "arn:aws:s3:::bucket-2/*",\n                "arn:aws:s3:::bucket-3/*"\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Depending upon the used functionality of ",(0,r.kt)("em",{parentName:"p"},"cloudmon"),", you can adjust the permissions for ",(0,r.kt)("inlineCode",{parentName:"p"},"DownloadAndPurgeFiles"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"IAM permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Required for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s3:GetObject")),(0,r.kt)("td",{parentName:"tr",align:null},"downloading the ",(0,r.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml")," and ",(0,r.kt)("em",{parentName:"td"},"cloudmon")," runs with ",(0,r.kt)("inlineCode",{parentName:"td"},"downloads.enabled=true"),". You can narrow down this permission to the resource ",(0,r.kt)("inlineCode",{parentName:"td"},"arn:aws:s3:::bucket-1/backup_definitions.yaml")," if you do not use ",(0,r.kt)("inlineCode",{parentName:"td"},"downloads.enabled=true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s3:DeleteObject")),(0,r.kt)("td",{parentName:"tr",align:null},"purging, if ",(0,r.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml")," contains ",(0,r.kt)("inlineCode",{parentName:"td"},"purge=true"))))),(0,r.kt)("p",null,"Attach the policy to your recently created IAM user."),(0,r.kt)("h2",{id:"3-update-your-cloudmon-configuration"},"3. Update your ",(0,r.kt)("inlineCode",{parentName:"h2"},"cloudmon")," configuration"),(0,r.kt)("h3",{id:"31-when-usingconfigyaml"},"3.1. When using",(0,r.kt)("inlineCode",{parentName:"h3"},"config.yaml")),(0,r.kt)("p",null,"In your local ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),", put in the AWS access key id and secret access key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  my_aws_environment:\n    access_key_id: ${ACCESS_KEY_ID}\n    secret_access_key: ${SECRET_ACCESS_KEY}\n")),(0,r.kt)("h3",{id:"32-when-using-helm"},"3.2. When using Helm"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),", put in the AWS access key id and secret access key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cloudmon:\n  disks:\n    all_others: include\n    exclude: []\n    include: []\n  downloads:\n    enabled: false\n  environments:\n    aws_prod:\n      # the ${CLOUDMON ... } variables reference the secrets below\n      access_key_id: ${CLOUDMON_AWS_PROD_ACCESS_KEY_ID}\n      region: eu-central-1\n      secret_access_key: ${CLOUDMON_AWS_PROD_SECRET_ACCESS_KEY}\n  log_level: debug\n  secrets:\n    - key: CLOUDMON_AWS_PROD_ACCESS_KEY_ID\n      # replace ${ACCESS_KEY_ID} with the access key id you noted down previously\n      value: ${ACCESS_KEY_ID}\n    - key: CLOUDMON_AWS_SECRET_ACCESS_KEY\n      # replace ${SECRET_ACCESS_KEY} with the secret access key you noted down previously\n      value: ${SECRET_ACCESS_KEY}\n")))}p.isMDXComponent=!0}}]);