"use strict";(self.webpackChunkbackmon_docs=self.webpackChunkbackmon_docs||[]).push([[676],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6300:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={},c="AWS S3",l={unversionedId:"reference/backmon-configuration/storage/aws-s3",id:"reference/backmon-configuration/storage/aws-s3",title:"AWS S3",description:"If you are configuring an S3 environment, backmon automatically creates a disk for each S3 bucket. Let's suppose you have the following config.yaml:",source:"@site/docs/20-reference/10-backmon-configuration/10-storage/20-aws-s3.md",sourceDirName:"20-reference/10-backmon-configuration/10-storage",slug:"/reference/backmon-configuration/storage/aws-s3",permalink:"/backmon-docs/reference/backmon-configuration/storage/aws-s3",draft:!1,editUrl:"https://github.com/dreitier/backmon-docs/tree/main/docs/docs/20-reference/10-backmon-configuration/10-storage/20-aws-s3.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local filesystem",permalink:"/backmon-docs/reference/backmon-configuration/storage/local-filesystem"},next:{title:"Backup definition",permalink:"/backmon-docs/category/backup-definition"}},u={},p=[{value:"1. Create a backmon user",id:"1-create-a-backmon-user",level:2},{value:"2. Set up a policy",id:"2-set-up-a-policy",level:2},{value:"2.1. Using auto-discovery",id:"21-using-auto-discovery",level:2},{value:"2.2. Explicitly white-listing buckets",id:"22-explicitly-white-listing-buckets",level:3},{value:"2.3. Configure permissions and attach to user",id:"23-configure-permissions-and-attach-to-user",level:3},{value:"3. Update your <code>backmon</code> configuration",id:"3-update-your-backmon-configuration",level:2},{value:"3.1. When using<code>config.yaml</code>",id:"31-when-usingconfigyaml",level:3},{value:"3.2. When using Helm",id:"32-when-using-helm",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-s3"},"AWS S3"),(0,o.kt)("p",null,"If you are configuring an S3 environment, ",(0,o.kt)("em",{parentName:"p"},"backmon")," automatically creates a disk for each S3 bucket. Let's suppose you have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  s3_backup:\n    access_key: my_access_key\n    secret_access_key: my_secret_access_key\n")),(0,o.kt)("p",null,"Your AWS account contains the following S3 buckets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bucket-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bucket-2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bucket-3"))),(0,o.kt)("p",null,"Each of those buckets is considered as a disk. You have to put a ",(0,o.kt)("inlineCode",{parentName:"p"},"backup_definitions.yaml")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://bucket-1/backup_definitions.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://bucket-2/backup_definitions.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://bucket-3/backup_definitions.yaml"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each AWS S3 bucket is a ",(0,o.kt)("em",{parentName:"p"},"backmon disk"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want to ignore a bucket, either use the ",(0,o.kt)("inlineCode",{parentName:"li"},"disks.exclude")," configuration key or the ",(0,o.kt)("inlineCode",{parentName:"li"},".backmonignore")," marker file."),(0,o.kt)("li",{parentName:"ul"},"If your AWS access key does not have the ",(0,o.kt)("inlineCode",{parentName:"li"},"ListBucket")," permission for one of the buckets, the bucket is ignored.")),(0,o.kt)("h2",{id:"1-create-a-backmon-user"},"1. Create a backmon user"),(0,o.kt)("p",null,"In the AWS management console, go to ",(0,o.kt)("em",{parentName:"p"},"IAM > Users > Add users")," and create a dedicated user for backmon. Just choose ",(0,o.kt)("em",{parentName:"p"},"programmatic access")," and note down the ",(0,o.kt)("em",{parentName:"p"},"access key id")," (",(0,o.kt)("em",{parentName:"p"},"${ACCESS_KEY_ID}"),") and ",(0,o.kt)("em",{parentName:"p"},"secret access key")," (",(0,o.kt)("em",{parentName:"p"},"${SECRET_ACCESS_KEY}"),")."),(0,o.kt)("h2",{id:"2-set-up-a-policy"},"2. Set up a policy"),(0,o.kt)("p",null,"In the AWS managent console, go to ",(0,o.kt)("em",{parentName:"p"},"IAM > Policies > Create policy")," and create a new JSON policy with the following content:"),(0,o.kt)("h2",{id:"21-using-auto-discovery"},"2.1. Using auto-discovery"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("em",{parentName:"p"},"backmon")," scans all S3 buckets which belongs to the user's AWS account. This requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListAllMyBuckets")," permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListAllBuckets",\n            "Effect": "Allow",\n            "Action": "s3:ListAllMyBuckets",\n            "Resource": "arn:aws:s3:::*"\n        },\n        {\n            "Sid": "ListDisks",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::bucket-1",\n                "arn:aws:s3:::bucket-2",\n                "arn:aws:s3:::bucket-3"\n            ]\n        },\n        {\n            "Sid": "DownloadAndPurgeFiles",\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:DeleteObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::bucket-1/*",\n                "arn:aws:s3:::bucket-2/*",\n                "arn:aws:s3:::bucket-3/*"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"22-explicitly-white-listing-buckets"},"2.2. Explicitly white-listing buckets"),(0,o.kt)("p",null,"In some environments the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListAllMyBuckets")," permission is not allowed to be assigned: Even if the user ",(0,o.kt)("em",{parentName:"p"},"backmon")," user can not access the content of restrictetd buckets, it might leak sensitive information through the naming of the buckets.\nYou can drop the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListAllBuckets")," statement from the IAM policy above. You then have to update your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," with the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"disks:\n  include:\n    - bucket-1\n    - bucket-2\n    - bucket-3\n\nenvironments:\n  aws_prod:\n    # ...\n    # set `auto_discover_disks` to false\n    auto_discover_disks: false\n")),(0,o.kt)("p",null,"With that configuration, only bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket-2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket-3")," are included."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With whitelisting buckets, you have to specify the full name of the bucket. Using regular expressions is ",(0,o.kt)("strong",{parentName:"p"},"not")," possible."))),(0,o.kt)("h3",{id:"23-configure-permissions-and-attach-to-user"},"2.3. Configure permissions and attach to user"),(0,o.kt)("p",null,"Depending upon the used functionality of ",(0,o.kt)("em",{parentName:"p"},"backmon"),", you can also adjust the permissions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"DownloadAndPurgeFiles")," statement:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IAM permission"),(0,o.kt)("th",{parentName:"tr",align:null},"Required for"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"s3:GetObject")),(0,o.kt)("td",{parentName:"tr",align:null},"downloading the ",(0,o.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml")," and ",(0,o.kt)("em",{parentName:"td"},"backmon")," runs with ",(0,o.kt)("inlineCode",{parentName:"td"},"downloads.enabled=true"),". You can narrow down this permission to the resource ",(0,o.kt)("inlineCode",{parentName:"td"},"arn:aws:s3:::bucket-1/backup_definitions.yaml")," if you do not use ",(0,o.kt)("inlineCode",{parentName:"td"},"downloads.enabled=true"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"s3:DeleteObject")),(0,o.kt)("td",{parentName:"tr",align:null},"purging, if ",(0,o.kt)("inlineCode",{parentName:"td"},"backup_definitions.yaml")," contains ",(0,o.kt)("inlineCode",{parentName:"td"},"purge=true"))))),(0,o.kt)("p",null,"Attach the policy to your recently created IAM user."),(0,o.kt)("h2",{id:"3-update-your-backmon-configuration"},"3. Update your ",(0,o.kt)("inlineCode",{parentName:"h2"},"backmon")," configuration"),(0,o.kt)("h3",{id:"31-when-usingconfigyaml"},"3.1. When using",(0,o.kt)("inlineCode",{parentName:"h3"},"config.yaml")),(0,o.kt)("p",null,"In your local ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),", put in the AWS access key id and secret access key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  my_aws_environment:\n    access_key_id: ${ACCESS_KEY_ID}\n    secret_access_key: ${SECRET_ACCESS_KEY}\n    auto_discover_disks: true\n")),(0,o.kt)("h3",{id:"32-when-using-helm"},"3.2. When using Helm"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),", put in the AWS access key id and secret access key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"backmon:\n  disks:\n    all_others: include\n    exclude: []\n    include: []\n  downloads:\n    enabled: false\n  environments:\n    aws_prod:\n      # the ${CLOUDMON ... } variables reference the secrets below\n      access_key_id: ${CLOUDMON_AWS_PROD_ACCESS_KEY_ID}\n      region: eu-central-1\n      secret_access_key: ${CLOUDMON_AWS_PROD_SECRET_ACCESS_KEY}\n      auto_discover_disks: true\n  log_level: debug\n  secrets:\n    - key: CLOUDMON_AWS_PROD_ACCESS_KEY_ID\n      # replace ${ACCESS_KEY_ID} with the access key id you noted down previously\n      value: ${ACCESS_KEY_ID}\n    - key: CLOUDMON_AWS_SECRET_ACCESS_KEY\n      # replace ${SECRET_ACCESS_KEY} with the secret access key you noted down previously\n      value: ${SECRET_ACCESS_KEY}\n")))}d.isMDXComponent=!0}}]);