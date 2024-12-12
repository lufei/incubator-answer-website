"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3166],{96920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(43010),i=s(90887);const r={date:new Date("2024-08-16T00:00:00.000Z"),title:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357",authors:["ChenJiaji","ZhuXuanlyu","Anne"],category:"Tutorials",featured:!0,image:"2024-08-16-cover-zh@4x.png",description:"Answer\u524d\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66"},a=void 0,c={permalink:"/zh-CN/blog/apache-answer-frontend-configuration-guide",editUrl:"https://crowdin.com/project/answer-website/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/apache-answer-frontend-configuration-guide/index.md",title:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357",description:"Answer\u524d\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66",date:"2024-08-16T00:00:00.000Z",formattedDate:"2024\u5e748\u670816\u65e5",tags:[],readingTime:3.405,hasTruncateMarker:!1,authors:[{name:"Chen Jiaji",title:"Developer",url:"https://github.com/CHENJUaaa",imageURL:"https://avatars.githubusercontent.com/u/137683102?v=4",key:"ChenJiaji"},{name:"Zhu Xuanlyu",title:"Developer",url:"https://github.com/IamMelody233",imageURL:"https://avatars.githubusercontent.com/u/103870995?v=4",key:"ZhuXuanlyu"},{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{date:"2024-08-16T00:00:00.000Z",title:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357",authors:["ChenJiaji","ZhuXuanlyu","Anne"],category:"Tutorials",featured:!0,image:"2024-08-16-cover-zh@4x.png",description:"Answer\u524d\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66"},unlisted:!1,prevItem:{title:"Apache Answer \u540e\u7aef\u914d\u7f6e\u6307\u5357",permalink:"/zh-CN/blog/apache-answer-backend-configuration-guide"},nextItem:{title:"Say Hi to Answer 1.3.6: Faster and Easier",permalink:"/zh-CN/blog/answer-1.3.6-release"}},o={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"1. \u4e0b\u8f7d Node.js \u548c pnpm",id:"1-\u4e0b\u8f7d-nodejs-\u548c-pnpm",level:3},{value:"2. Clone the Repository",id:"2-clone-the-repository",level:3},{value:"2.1 Fork Answer \u9879\u76ee",id:"21-fork-answer-\u9879\u76ee",level:4},{value:"2.2 \u5b89\u88c5 Git/Git Bash",id:"22-\u5b89\u88c5-gitgit-bash",level:4},{value:"2.3 \u521b\u5efa\u5e76\u914d\u7f6e SSH",id:"23-\u521b\u5efa\u5e76\u914d\u7f6e-ssh",level:4},{value:"2.4 \u83b7\u53d6 Answer \u9879\u76ee",id:"24-\u83b7\u53d6-answer-\u9879\u76ee",level:4},{value:"3. \u5b89\u88c5\u6240\u6709\u4f9d\u8d56\u9879\u5e76\u6784\u5efa\u6240\u6709\u672c\u5730\u5305",id:"3-\u5b89\u88c5\u6240\u6709\u4f9d\u8d56\u9879\u5e76\u6784\u5efa\u6240\u6709\u672c\u5730\u5305",level:3},{value:"4. \u8fd0\u884c\u524d\u7aef",id:"4-\u8fd0\u884c\u524d\u7aef",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u7684\u5b98\u7f51\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86",(0,t.jsx)(n.a,{href:"https://answer.apache.org/zh-CN/docs/development/",children:"\u5f00\u53d1\u8005\u6307\u5357"}),"\u5e2e\u52a9\u5f00\u53d1\u8005\u80fd\u591f\u5feb\u901f\u5b8c\u6210\u524d\u540e\u7aef\u7684\u914d\u7f6e\uff0c\u5728\u4eca\u5929\u8fd9\u7bc7\u535a\u5ba2\u91cc\uff0c\u6211\u4eec\u5bf9\u5982\u4f55\u8fdb\u884c\u524d\u7aef\u548c\u540e\u7aef\u914d\u7f6e\u8fdb\u884c\u8be6\u7ec6\u7684\u62c6\u89e3\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Answer \u793e\u533a\uff0c\u6211\u4eec\u6b22\u8fce\u5e76\u5c0a\u91cd\u591a\u79cd\u4e0d\u540c\u7684",(0,t.jsx)(n.a,{href:"https://answer.apache.org/zh-CN/community/contributing/",children:"\u8d21\u732e\u65b9\u5f0f"}),"\uff0c\u65e0\u8bba\u662f\u5f00\u53d1\u8005\u8fd8\u662f\u975e\u5f00\u53d1\u8005\u53ef\u4ee5\u8ddf\u968f\u6587\u7ae0\u91cc\u9762\u7684\u6b65\u9aa4\uff0c\u5b8c\u6210 Answer \u524d\u7aef\u914d\u7f6e"]}),"\n",(0,t.jsx)(n.h3,{id:"1-\u4e0b\u8f7d-nodejs-\u548c-pnpm",children:"1. \u4e0b\u8f7d Node.js \u548c pnpm"}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u51fb",(0,t.jsx)(n.a,{href:"https://nodejs.org/en",children:"\u6b64\u5904"}),"\u4e0b\u8f7d Node.js\uff0c\u5b89\u88c5\u65f6\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"Node.js runtime"}),"\u3002\u5efa\u8bae\u5b89\u88c5\u81f3\u9ed8\u8ba4\u4f4d\u7f6e\u3002\n",(0,t.jsx)(n.img,{alt:"node install",src:s(49946).Z+"",width:"921",height:"720"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Node \u5b89\u88c5\u597d\u4e4b\u540e\uff0c\u627e\u5230 ",(0,t.jsx)(n.code,{children:"Node.js command prompt"}),"\u3002\n",(0,t.jsx)(n.img,{alt:"node command",src:s(40419).Z+"",width:"637",height:"284"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6253\u5f00 Node.js command prompt\uff0c\u8f93\u5165",(0,t.jsx)(n.code,{children:"npm install -g pnpm"}),"\u3002\u5f53\u51fa\u73b0\u4e0b\u9762\u56fe\u7684\u60c5\u51b5\u65f6\uff0c\u8868\u793a pnpm \u5df2\u7ecf\u4e0b\u8f7d\u5b8c\u6210\u3002\n",(0,t.jsx)(n.img,{alt:"pnpm install",src:s(54796).Z+"",width:"1280",height:"372"}),"\n",(0,t.jsx)(n.em,{children:"\u6ce8\uff1apnpm\u6709\u8bb8\u591a\u5176\u4ed6\u4e0b\u8f7d\u65b9\u5f0f\uff0c\u9002\u7528\u4e8e\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u8be6\u7ec6\u8bf7\u89c1\u5176\u5b98\u7f51"})]}),"\n",(0,t.jsx)(n.h3,{id:"2-clone-the-repository",children:"2. Clone the Repository"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6b65\u9aa4\u76ee\u7684\u662f\u4ece GitHub \u4e2d\u83b7\u53d6 Apache Answer \u6574\u4e2a\u9879\u76ee\uff0c\u70b9\u51fb",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer",children:"\u6b64\u5904"}),"\u8bbf\u95ee Apache Answer \u7684 GitHub Repo\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"21-fork-answer-\u9879\u76ee",children:"2.1 Fork Answer \u9879\u76ee"}),"\n",(0,t.jsxs)(n.p,{children:["\u767b\u5f55 GitHub \u8d26\u53f7\uff0c\u70b9\u51fb Fork \u6574\u4e2a Answer \u7684\u9879\u76ee\u3002\n",(0,t.jsx)(n.img,{alt:"fork answer",src:s(72982).Z+"",width:"1280",height:"713"})]}),"\n",(0,t.jsx)(n.h4,{id:"22-\u5b89\u88c5-gitgit-bash",children:"2.2 \u5b89\u88c5 Git/Git Bash"}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u51fb",(0,t.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"\u6b64\u5904"}),"\uff0c\u6309\u7167\u7cfb\u7edf\u5e78\u597d\uff0c\u9009\u62e9\u4e0b\u8f7d Git\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"23-\u521b\u5efa\u5e76\u914d\u7f6e-ssh",children:"2.3 \u521b\u5efa\u5e76\u914d\u7f6e SSH"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u6d4f\u89c8 GitHub \u5173\u4e8e",(0,t.jsx)(n.a,{href:"https://docs.github.com/zh/authentication/connecting-to-github-with-ssh",children:"\u901a\u8fc7 SSH \u8fde\u63a5\u5230 GitHub"})," \u7684\u6587\u6863\uff0c\u53ef\u8df3\u8fc7\u6587\u6863\u4e2d\u4e3a\u786c\u4ef6\u5b89\u5168\u5bc6\u94a5\u751f\u6210\u65b0\u7684 SSH \u5bc6\u94a5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u56fe\u5c55\u793a\u4e86\u914d\u7f6e\u5b8c\u6210\u540e\u7684 SSH \u5bc6\u94a5\u3002\n",(0,t.jsx)(n.img,{alt:"ssh configuration",src:s(83323).Z+"",width:"1280",height:"352"})]}),"\n",(0,t.jsx)(n.h4,{id:"24-\u83b7\u53d6-answer-\u9879\u76ee",children:"2.4 \u83b7\u53d6 Answer \u9879\u76ee"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Answer GitHub \u754c\u9762\u4e2d\u627e\u5230 Code\uff0c\u70b9\u51fb\u5c55\u5f00\u540e\uff0c\u590d\u5236 Answer \u7684 SSH \u5730\u5740\u3002\n",(0,t.jsx)(n.img,{alt:"copy ssh",src:s(26235).Z+"",width:"1065",height:"720"})]}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u7740\uff0c\u6253\u5f00 Git Bash \uff0c\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u514b\u9686\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone <Answer\u7684SSH\u5730\u5740>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5b8c\u6210\u4e4b\u540e\u5c31\u628a\u9879\u76ee\u6210\u529f\u62c9\u53d6\u5230\u672c\u5730\u6587\u4ef6\u5939\u3002\n",(0,t.jsx)(n.img,{alt:"clone answer",src:s(19016).Z+"",width:"774",height:"284"})]}),"\n",(0,t.jsx)(n.h3,{id:"3-\u5b89\u88c5\u6240\u6709\u4f9d\u8d56\u9879\u5e76\u6784\u5efa\u6240\u6709\u672c\u5730\u5305",children:"3. \u5b89\u88c5\u6240\u6709\u4f9d\u8d56\u9879\u5e76\u6784\u5efa\u6240\u6709\u672c\u5730\u5305"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5c06 Answer \u9879\u76ee\u7684\u6587\u4ef6\u5939\u79f0\u4e3a\u6839\u76ee\u5f55\uff0c\u6253\u5f00",(0,t.jsx)(n.code,{children:"\u547d\u4ee4\u884c\u7ec8\u7aef"}),"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u4ece\u8be5\u76ee\u5f55\u8fdb\u5165 ",(0,t.jsx)(n.code,{children:"ui"})," \u5b50\u76ee\u5f55\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ./ui\npnpm install\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f\uff1aWindows \u7cfb\u7edf\uff0c\u5728\u8fd0\u884c pnmp install \u4f1a\u9047\u5230\u4ee5\u4e0b\u62a5\u9519\uff1a"}),"\n",(0,t.jsx)(n.img,{alt:"windows-error",src:s(80119).Z+"",width:"1280",height:"245"}),"\n\u8fd9\u662f\u7531\u4e8e\u7cfb\u7edf\u6743\u9650\u5bfc\u81f4\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5148\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6761\u547d\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u7684 PowerShell \u6267\u884c\u7b56\u7565\u4e3a RemoteSigned\uff0c\u8fd9\u610f\u5473\u7740\u672c\u5730\u811a\u672c\u53ef\u4ee5\u8fd0\u884c\uff0c\u800c\u8fdc\u7a0b\u811a\u672c\u5fc5\u987b\u7ecf\u8fc7\u7b7e\u540d\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u7740\u4fbf\u53ef\u4ee5\u987a\u5229\u8fd0\u884c\uff0c\u8fd0\u884c\u5b8c\u6210\u540e\uff0c\u89c6\u4e3a\u5b89\u88c5\u5b8c\u6210\u3002\n",(0,t.jsx)(n.img,{alt:"install complete",src:s(62328).Z+"",width:"1280",height:"262"})]}),"\n",(0,t.jsx)(n.h3,{id:"4-\u8fd0\u884c\u524d\u7aef",children:"4. \u8fd0\u884c\u524d\u7aef"}),"\n",(0,t.jsxs)(n.p,{children:["\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5728 ui \u6587\u4ef6\u5939\u8def\u5f84\u8f93\u5165\uff1a",(0,t.jsx)(n.code,{children:"pnpm start"})," \u5373\u53ef\u8fd0\u884c Answer\u3002\n",(0,t.jsx)(n.img,{alt:"pnpm start",src:s(87876).Z+"",width:"1280",height:"572"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u5df2\u7ecf\u5b8c\u6210 Answer \u7684\u524d\u7aef\u914d\u7f6e\uff0c\u5982\u679c\u4f60\u4ecd\u6709\u5176\u4ed6\u95ee\u9898\uff0c\u6b22\u8fce\u4f60\u5728\u6211\u4eec\u7684",(0,t.jsx)(n.a,{href:"https://meta.answer.dev/",children:"\u793e\u533a"}),"\u548c\u6211\u4eec\u7684\u5c0f\u4f19\u4f34\u4ea4\u6d41\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19016:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/clone-answer-b84011546c149ae70795a0288f14bb3a.png"},26235:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/copy-ssh-dca3851f8b808e04cc852369a526622c.png"},72982:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/fork-answer-8136ca68f76bea32ca2c4d4ae99b4de2.png"},62328:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/install-complete-8fc2bc1fb625db53cf1f85f2d646f557.png"},40419:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/node-command-995a590c3a872bfe54dd673b59a474c8.png"},49946:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/node-install-4d282d94bd07b1288593740206962174.png"},54796:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pnpm-install-a9367ed47f4ff2e360e2b610097af2bf.png"},87876:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pnpm-start-4655a9e74676b26d13c5d0fb76090e85.png"},83323:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ssh-configuration-1f6870dad6aaba69b74b932551a63fd7.png"},80119:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/windows-error-e9f8dbb8076dca27f68f32331e1a94f0.png"},90887:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(85170);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);