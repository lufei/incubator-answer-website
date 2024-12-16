"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9185],{86750:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var i=l(43010),s=l(90887);const d={slug:"/command-line"},c="\u547d\u4ee4\u884c\u6307\u5357",r={id:"getting-started/command-line",title:"\u547d\u4ee4\u884c\u6307\u5357",description:"Apache Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u652f\u6301\u4e00\u4e9b\u547d\u4ee4\u884c\u9009\u9879\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/command-line.md",sourceDirName:"getting-started",slug:"/command-line",permalink:"/zh-CN/docs/command-line",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"Luffy",lastUpdatedAt:1734089887,formattedLastUpdatedAt:"2024\u5e7412\u670813\u65e5",frontMatter:{slug:"/command-line"},sidebar:"docs",previous:{title:"\u5347\u7ea7",permalink:"/zh-CN/docs/upgrade"},next:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/zh-CN/docs/configfile"}},h={},t=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5168\u5c40\u9009\u9879",id:"\u5168\u5c40\u9009\u9879",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"init",id:"init",level:3},{value:"check",id:"check",level:3},{value:"run",id:"run",level:3},{value:"upgrade",id:"upgrade",level:3},{value:"dump",id:"dump",level:3},{value:"build",id:"build",level:3},{value:"plugin",id:"plugin",level:3},{value:"config",id:"config",level:3}];function a(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u547d\u4ee4\u884c\u6307\u5357",children:"\u547d\u4ee4\u884c\u6307\u5357"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"Apache Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u652f\u6301\u4e00\u4e9b\u547d\u4ee4\u884c\u9009\u9879\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"answer command [\u547d\u4ee4\u6216\u5168\u5c40\u9009\u9879] [\u53c2\u6570...]"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"\u8981\u8fd0\u884c Answer\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a\n        - 'answer init' \u521d\u59cb\u5316\u6240\u9700\u73af\u5883\n        - 'answer run' \u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\n        - 'answer upgrade' \u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\n\n\u7528\u6cd5:\n  answer [\u547d\u4ee4]\n\n\u53ef\u7528\u547d\u4ee4:\n  build       \u7528\u4e8e\u6784\u5efa\u5305\u542b\u63d2\u4ef6\u7684 Answer\n  check       \u68c0\u67e5\u6240\u9700\u73af\u5883\n  dump        \u5907\u4efd\u6570\u636e\n  help        \u83b7\u53d6\u5173\u4e8e\u4efb\u610f\u547d\u4ee4\u7684\u5e2e\u52a9\n  init        \u521d\u59cb\u5316 Answer \u5e94\u7528\u7a0b\u5e8f\n  plugin      \u6253\u5370\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u6253\u5305\u7684\u6240\u6709\u63d2\u4ef6\n  run         \u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\n  upgrade     \u5347\u7ea7 Apache Answer \u7248\u672c\n\nFlags:\n  -C, --data-path string   \u6570\u636e\u8def\u5f84\uff0c\u4f8b\u5982\uff1a-C ./data/ \uff08\u9ed8\u8ba4 \"/data/\"\uff09\n  -h, --help               \u83b7\u53d6 Answer \u7684\u5e2e\u52a9\u4fe1\u606f\n  -v, --version            \u83b7\u53d6 Answer \u7684\u7248\u672c\u4fe1\u606f\n\n\u4f7f\u7528 \"answer [\u547d\u4ee4] --help\" \u6765\u83b7\u53d6\u5173\u4e8e\u8be5\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\u3002\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5168\u5c40\u9009\u9879",children:"\u5168\u5c40\u9009\u9879"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u6709\u5168\u5c40\u9009\u9879\u90fd\u53ef\u4ee5\u653e\u7f6e\u5728\u547d\u4ee4\u7ea7\u522b\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--help"}),", ",(0,i.jsx)(e.code,{children:"-h"}),": \u663e\u793a\u5e2e\u52a9\u6587\u672c\u5e76\u9000\u51fa\u3002\u53ef\u9009\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--version"}),", ",(0,i.jsx)(e.code,{children:"-v"}),": \u663e\u793a\u7248\u672c\u5e76\u9000\u51fa\u3002\u53ef\u9009\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--data-path"})," \u8def\u5f84, -C \u8def\u5f84\uff1a\u6570\u636e\u4fdd\u5b58\u8def\u5f84\u3002\u53ef\u9009\u3002\uff08\u9ed8\u8ba4: /data/\uff09"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u547d\u4ee4",children:"\u547d\u4ee4"}),"\n",(0,i.jsx)(e.h3,{id:"init",children:"init"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"init \u547d\u4ee4\u5c06\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u73af\u5883\uff0c\u5305\u62ec\uff1a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u3001\u6570\u636e\u76ee\u5f55\u3001\u521d\u59cb\u5316\u6570\u636e\u5e93\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer init -C ./data/"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6ce8\u610f\u4e8b\u9879","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u679c Answer \u5df2\u7ecf\u521d\u59cb\u5316\uff0c\u6b64\u547d\u4ee4\u5c06\u4e0d\u4f1a\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u914d\u7f6e\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u5219\u4e0d\u4f1a\u88ab\u521b\u5efa\u6216\u8986\u76d6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679c Answer \u521d\u59cb\u5316\u5931\u8d25\uff0c\u5219\u65e0\u6cd5\u6267\u884c run \u547d\u4ee4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"check",children:"check"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"check \u547d\u4ee4\u5c06\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u53ef\u4ee5\u8fd0\u884c\u3002\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u68c0\u67e5\u6570\u636e\u5e93\u662f\u5426\u53ef\u4ee5\u5efa\u7acb\u8fde\u63a5\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer check -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"run",children:"run"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"run \u547d\u4ee4\u5c06\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer run -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"upgrade",children:"upgrade"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"upgrade \u547d\u4ee4\u5c06\u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9009\u9879","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-f"})," \u7248\u672c\uff1a\u4ece\u6307\u5b9a\u7248\u672c\u5347\u7ea7\u3002\u53ef\u9009\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer upgrade -C ./data/"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer upgrade -f v1.1.0 -C ./data/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"dump",children:"dump"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"dump \u547d\u4ee4\u5c06\u6570\u636e\u5e93\u6570\u636e\u8f6c\u50a8\u4e3a SQL \u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9009\u9879","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--path"})," \u8def\u5f84\uff0c",(0,i.jsx)(e.code,{children:"-p"})," \u8def\u5f84\uff1a\u6570\u636e\u8f6c\u50a8\u8def\u5f84\u3002\u53ef\u9009\u3002(\u9ed8\u8ba4: ./)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer dump -p /tmp/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"build",children:"build"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6784\u5efa\u5305\u542b\u63d2\u4ef6\u7684 Apache Answer\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9009\u9879","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--with"})," \u63d2\u4ef6\u5b57\u6bb5\u540d\u79f0\u3002\u5fc5\u9700\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer build --with plugin1 --with plugin2"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"plugin",children:"plugin"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6253\u5370\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u6253\u5305\u7684\u6240\u6709\u63d2\u4ef6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer plugin"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"config",children:"config"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c06\u67d0\u4e9b\u914d\u7f6e\u503c\u6062\u590d\u4e3a\u9ed8\u8ba4\u503c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9009\u9879","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--with"})," \u914d\u7f6e\u5b57\u6bb5\u540d\u79f0\u3002\u5fc5\u9700\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u793a\u4f8b","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"answer config -C ./data/ --with allow_password_login"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},90887:(n,e,l)=>{l.d(e,{Z:()=>r,a:()=>c});var i=l(85170);const s={},d=i.createContext(s);function c(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);