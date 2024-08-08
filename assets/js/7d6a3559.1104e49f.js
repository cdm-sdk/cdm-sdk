"use strict";(self.webpackChunkah_sdk_doc=self.webpackChunkah_sdk_doc||[]).push([[9487],{8497:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=s(4848),t=s(8453);const d={sidebar_position:1},r="Coach Listing",c={id:"Coach/coachListing",title:"Coach Listing",description:"- Get coach list assigned to user",source:"@site/docs/Coach/coachListing.md",sourceDirName:"Coach",slug:"/Coach/coachListing",permalink:"/docs/Coach/coachListing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Coach/coachListing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Coach",permalink:"/docs/category/coach"},next:{title:"Coach Detail",permalink:"/docs/Coach/coachDetail"}},h={},o=[{value:"API Endpoint",id:"api-endpoint",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Queries",id:"request-queries",level:3},{value:"Response: 200",id:"response-200",level:3},{value:"Array of",id:"array-of",level:4}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"coach-listing",children:"Coach Listing"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Get coach list assigned to user"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"api-endpoint",children:"API Endpoint"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Method"}),(0,n.jsx)(i.th,{children:"Endpoint"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"GET"}),(0,n.jsxs)(i.td,{children:["/coach/user/",(0,n.jsx)(i.strong,{children:"{uid}"}),"/list"]})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Header"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Authorization"}),(0,n.jsx)(i.td,{children:"Authentication access bearer token"}),(0,n.jsx)(i.td,{children:"String"}),(0,n.jsx)(i.td,{children:"Yes"})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"uid"}),(0,n.jsx)(i.td,{children:"AH unique identifier"}),(0,n.jsx)(i.td,{children:"String"}),(0,n.jsx)(i.td,{children:"Yes"})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"request-queries",children:"Request Queries"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Required"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"status"}),(0,n.jsxs)(i.td,{children:["coach status, eg. ",(0,n.jsx)(i.code,{children:"ACTIVE"}),", ",(0,n.jsx)(i.code,{children:"INACTIVE"}),", ",(0,n.jsx)(i.code,{children:"ALL"})]}),(0,n.jsx)(i.td,{children:"String"}),(0,n.jsx)(i.td,{children:"No"})]})})]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.mdxAdmonitionTitle,{children:["NOTES ON QUERY ",(0,n.jsx)(i.code,{children:"status"})]}),(0,n.jsxs)(i.p,{children:["option ",(0,n.jsx)(i.code,{children:"ALL"})," will fetch coaches for both ",(0,n.jsx)(i.code,{children:"ACTIVE"})," and ",(0,n.jsx)(i.code,{children:"INACTIVE"})," status"]})]}),"\n",(0,n.jsx)(i.h3,{id:"response-200",children:"Response: 200"}),"\n",(0,n.jsx)(i.h4,{id:"array-of",children:"Array of"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Attribute"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"id"}),(0,n.jsx)(i.td,{children:"Coach unique identifier"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"chatUid"}),(0,n.jsx)(i.td,{children:"Coach unique identifier for chat"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"roomId"}),(0,n.jsx)(i.td,{children:"Indicates which room do coach is in for the assigned user"}),(0,n.jsx)(i.td,{children:"String[]"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Name of coach"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"photo"}),(0,n.jsx)(i.td,{children:"Photo of coach, in url format"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"coachRole"}),(0,n.jsx)(i.td,{children:"Role of the coach, eg trainer (Fitness)"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"bio"}),(0,n.jsx)(i.td,{children:"Bio of the coach"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"country"}),(0,n.jsx)(i.td,{children:"Country of the coach, in alpha-2 lowercase code"}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"education"}),(0,n.jsxs)(i.td,{children:["Education of the coach, a json string which defined as array of objects with key ",(0,n.jsx)(i.code,{children:"title"})," and ",(0,n.jsx)(i.code,{children:"period"})]}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"experience"}),(0,n.jsxs)(i.td,{children:["Education of the coach, a json string which defined as array of objects with key ",(0,n.jsx)(i.code,{children:"title"})," and ",(0,n.jsx)(i.code,{children:"period"})]}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"status"}),(0,n.jsxs)(i.td,{children:["Indicates the current coach status ",(0,n.jsx)(i.code,{children:"ACTIVE"}),", ",(0,n.jsx)(i.code,{children:"INACTIVE"})]}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"isMainCoach"}),(0,n.jsx)(i.td,{children:"Indicates coach is the main coach for this member"}),(0,n.jsx)(i.td,{children:"Boolean"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"isLeadCoach"}),(0,n.jsx)(i.td,{children:"Indicates coach is the lead coach for this member"}),(0,n.jsx)(i.td,{children:"Boolean"})]})]})]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.mdxAdmonitionTitle,{children:["FURTHER DEFINITION OF ",(0,n.jsx)(i.code,{children:"status"})," KEY"]}),(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"status = ACTIVE"})," would indicate"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"the coach is assigned to the user and actively coaching with user"}),"\n"]}),(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"status = INACTIVE"})," would indicate"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["the coach is previously assigned to the user, is set to ",(0,n.jsx)(i.code,{children:"INACTIVE"})," as the coach is no longer with the user"]}),"\n"]})]}),"\n",(0,n.jsx)(i.admonition,{title:"DEFAULT RESPONSE",type:"note",children:(0,n.jsxs)(i.p,{children:["Default response for coach listing will only show ",(0,n.jsx)(i.code,{children:"ACTIVE"})," coach list."]})}),"\n",(0,n.jsxs)(i.admonition,{type:"warning",children:[(0,n.jsxs)(i.mdxAdmonitionTitle,{children:["NOTES ON ",(0,n.jsx)(i.code,{children:"roomId"})," VALUE"]}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"roomId"})," value will be available in every coach row response, no longer only ",(0,n.jsx)(i.code,{children:"isMainCoach = true"})," flag contains value of ",(0,n.jsx)(i.code,{children:"roomId"})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Response Example"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",metastring:'title="Example"',children:'[\n  {\n    id: \'dab2b1b5-7cf9-4b31-a58e-cca6ab9e987f\',\n    chatUid: \'076cef07-93db-47d7-b3cc-ed24d6b117e7\',\n    roomId: [\'4fe18619-c963-464b-89e7-f2d2e305fa47\'],\n    name: \'Fitness Coach\',\n    photo: \'https://...\',\n    coachRole: \'trainer\',\n    bio: \'I am a trainer\',\n    country: \'my\',\n    education:\n      \'[{"title":"Master of Clinical Psychology, HELP University","period":"2017"}]\',\n    experience:\n      \'[{"title":"Clinic Psychologist, The Mind Psychological Services and Training","period":"2017 - present"},{"title":"Clinic Psychologist, Global Doctors Hospital","period":"2018 - 2020"}]\',\n    status: \'ACTIVE\',\n    isMainCoach: true,\n    isLeadCoach: false,\n  },\n];\n'})})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>c});var n=s(6540);const t={},d=n.createContext(t);function r(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);