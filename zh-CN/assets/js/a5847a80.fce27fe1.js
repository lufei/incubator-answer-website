"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1249],{12778:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(43010),s=i(90887);const a={date:new Date("2023-07-22T00:00:00.000Z"),title:"The Packaging Process for Answer Plugins",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2023-07-22-cover@4x.png",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way."},o=void 0,l={permalink:"/zh-CN/blog/why-the-answer-plugin-system-was-designed-this-way",editUrl:"https://crowdin.com/project/answer-website/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/why-the-answer-plugin-system-was-designed-this-way/index.md",title:"The Packaging Process for Answer Plugins",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way.",date:"2023-07-22T00:00:00.000Z",formattedDate:"2023\u5e747\u670822\u65e5",tags:[],readingTime:3.395,hasTruncateMarker:!1,authors:[{name:"LinkinStar",title:"Developer",url:"https://github.com/LinkinStars",imageURL:"https://avatars.githubusercontent.com/u/19712692?v=4",key:"LinkinStar"}],frontMatter:{date:"2023-07-22T00:00:00.000Z",title:"The Packaging Process for Answer Plugins",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2023-07-22-cover@4x.png",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way."},unlisted:!1,prevItem:{title:"How to Manage Content System Efficiently with Answer",permalink:"/zh-CN/blog/how-to-manage-content-system-efficiently-with-answer"},nextItem:{title:"How to Utilize Reputation and Privilege in Online Community",permalink:"/zh-CN/blog/how-to-utilize-reputation-and-privilege-in-online-community"}},r={authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Goal &amp; Features",id:"goal--features",level:2},{value:"Connectors",id:"connectors",level:3},{value:"Storage",id:"storage",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Details",id:"details",level:3},{value:"Reason",id:"reason",level:3},{value:"Static Compilation",id:"static-compilation",level:4},{value:"Fixed Functionality",id:"fixed-functionality",level:4},{value:"Extension",id:"extension",level:4},{value:"Reference",id:"reference",level:2},{value:"More",id:"more",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Why is Answer's plugin system designed in such a way that it seems a bit of difficulty to use?"}),"\n",(0,t.jsx)(n.li,{children:"How can I implement plugin functionality using Golang?"}),"\n",(0,t.jsx)(n.li,{children:"What exactly does Answer's plugin system do when it is compiled and packaged?"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsxs)(n.p,{children:["You can build a Q&A community using answer easily. However, the basic features of Answer may not sufficiently support to every use case.\nTherefore, we need to design a plugin system to extend its features.\nAs you may know, Answer is built using ",(0,t.jsx)(n.code,{children:"React.js"})," and ",(0,t.jsx)(n.code,{children:"Golang"}),". Both these languages require compilation. So designing a plugin system is a bit difficult."]}),"\n",(0,t.jsx)(n.h2,{id:"goal--features",children:"Goal & Features"}),"\n",(0,t.jsxs)(n.p,{children:["The goal of Answer's plugin system is to provide a ",(0,t.jsx)(n.strong,{children:"flexible"})," and ",(0,t.jsx)(n.strong,{children:"extendable"})," architecture that can accommodate a wide range of use cases. Some of the key features of the plugin system include:"]}),"\n",(0,t.jsx)(n.h3,{id:"connectors",children:"Connectors"}),"\n",(0,t.jsx)(n.p,{children:"By default, Answer supports login via email and password. Withing the plugin system, developers can easily integrate other authentication, such as GitHub."}),"\n",(0,t.jsx)("img",{src:i(97493).Z,alt:"install-choose-language",width:"400"}),"\n",(0,t.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.p,{children:["Out of the box, Answer stores files in the local file system. However, there could be scenarios where users might prefer to save their uploaded files to a cloud storage service like ",(0,t.jsx)(n.code,{children:"S3"}),". This can be achieved by plugin system."]}),"\n",(0,t.jsx)("img",{src:i(96754).Z,alt:"install-choose-language",width:"400"}),"\n",(0,t.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Now, let's explore how the plugin system is implemented, followed by the reasons behind our design decisions."}),"\n",(0,t.jsx)(n.h3,{id:"details",children:"Details"}),"\n",(0,t.jsx)(n.p,{children:"The general process is as follows:"}),"\n",(0,t.jsx)("img",{src:i(9976).Z,alt:"install-choose-language",width:"400"}),"\n",(0,t.jsx)(n.p,{children:"Here are the steps involved in implementing a plugin:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Generate a ",(0,t.jsx)(n.code,{children:"main.go"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"Import the specific plugin list."}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"go mod tidy"})," and ",(0,t.jsx)(n.code,{children:"go mod vendor"})," to manage dependencies."]}),"\n",(0,t.jsx)(n.li,{children:"Copy the UI directory."}),"\n",(0,t.jsxs)(n.li,{children:["Overwrite the ",(0,t.jsx)(n.code,{children:"index.ts"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"pnpm install"})," and ",(0,t.jsx)(n.code,{children:"pnpm build"})," to manage the package and build the project."]}),"\n",(0,t.jsxs)(n.li,{children:["Merge the ",(0,t.jsx)(n.code,{children:"i18n"})," file from the plugin with the original ",(0,t.jsx)(n.code,{children:"i18n"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"Build a new binary."}),"\n",(0,t.jsx)(n.li,{children:"Clean up the byproducts generated during the build process."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"answer-plugin-build-all.png",src:i(1887).Z+"",width:"1862",height:"846"})}),"\n",(0,t.jsx)(n.h3,{id:"reason",children:"Reason"}),"\n",(0,t.jsx)(n.p,{children:"Here are the reasons behind our design choices:"}),"\n",(0,t.jsx)(n.h4,{id:"static-compilation",children:"Static Compilation"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This is the main reason why the plugin system is designed this way."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"React.js"})," and ",(0,t.jsx)(n.code,{children:"Golang"})," both these languages require compilation. They are not dynamically executable like some other scripting languages.\nSo the plugin system should be static compilation, which means that the application and plugins are compiled together, resulting in a single binary that can be easily distributed and deployed."]}),"\n",(0,t.jsx)(n.h4,{id:"fixed-functionality",children:"Fixed Functionality"}),"\n",(0,t.jsx)(n.p,{children:"The plugin system allows users to add features that are fixed for their specific use cases without changing the core system.\nFurthermore, these functionalities persistently remain operational once they are employed.\nTherefore, it is sufficient to deliberate on the necessities of their incorporation at the initial stage, and subsequently, package them accordingly.\nIn the future, we can build a Docker image that contains all officially plugins, thereby enabling users to access the entire range of features. The enablement or disablement of these functionalities can be managed through the plugin control interface."}),"\n",(0,t.jsx)(n.h4,{id:"extension",children:"Extension"}),"\n",(0,t.jsx)(n.p,{children:"The most important capability of a plugin system is actually its extensibility.\nIt is impossible for a program to provide all the functions that every user wants.\nHowever, with a plugin system, users can develop their own plugins to help them achieve the functions that they want."}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.p,{children:["The Caddy is a great open-source software that inspired the design of the Answer plugin system.\nCaddy is a web server that allows developers to extend its functionality using plugins.\nUsing ",(0,t.jsx)(n.a,{href:"https://github.com/caddyserver/xcaddy/",children:"xcaddy"})," can easy to make custom builds of the Caddy Web Server."]}),"\n",(0,t.jsx)(n.h2,{id:"more",children:"More"}),"\n",(0,t.jsx)(n.p,{children:"In this blog post, we discussed the design and implementation of the plugin system for Answer, a popular open-source Q&A platform.\nWe discussed the motivation behind the design, the features and principles of the plugin system, and provided a step-by-step guide on implementation.\nIf you are interested in developing plugins for Answer, please feel free to leave us a comment.\nWe will also write an article on how to implement an Answer plugin from scratch, so stay focus!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9976:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/answer-plugin-build-brief-b0b7164eb72df5d3d2b6b0e24f53be2a.png"},97493:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/answer-plugin-connector-2e7bb37348532629256d812cec021c34.png"},96754:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/answer-plugin-storage-014f1ac8b8e1939c2a8d99253adb9724.png"},1887:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/answer-plugin-build-all-4a2d4f7304dd15a01d1c624a8a0826a2.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(85170);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);