(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{424:function(e,t,n){Promise.resolve().then(n.bind(n,1488))},2457:function(e,t,n){"use strict";var i=n(7437);t.Z=function(e){let{onClick:t}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",onClick:t,className:"absolute left-0",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.13124 4.36566C1.64369 3.87811 0.853212 3.87811 0.365662 4.36566C-0.121888 4.85321 -0.121887 5.64369 0.365662 6.13124L5.95665 11.7222L0.365675 17.3132C-0.121875 17.8008 -0.121875 18.5912 0.365675 19.0788C0.853225 19.5663 1.6437 19.5663 2.13125 19.0788L7.72223 13.4878L13.3132 19.0788C13.8008 19.5663 14.5912 19.5663 15.0788 19.0788C15.5663 18.5912 15.5663 17.8008 15.0788 17.3132L9.4878 11.7222L15.0788 6.13124C15.5663 5.64369 15.5663 4.85321 15.0788 4.36566C14.5912 3.87811 13.8008 3.87811 13.3132 4.36566L7.72223 9.95665L2.13124 4.36566Z",fill:"#3D4150"})})}},5202:function(e,t,n){"use strict";var i=n(7437);t.Z=e=>{let{item:t,isSelected:n,selectedId:r,setSelectedId:s}=e;return(0,i.jsxs)("div",{className:"flex w-full items-center gap-4 px-5 py-4 ".concat(n?"bg-[#ebebeb]":"bg-white"),onClick:()=>{r===String(t.id)?s(""):s(String(t.id))},children:[(0,i.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full border border-solid border-black01 ".concat(n?"bg-black01 text-white":"bg-white text-black01"),children:t.id}),(0,i.jsx)("div",{children:t.name})]})}},3359:function(e,t,n){"use strict";var i=n(7437),r=n(6978);t.Z=e=>{let{size:t="medium",color:n="active",className:s="",disabled:c=!1,children:l,...a}=e,o=c?"whitespace-nowrap rounded-md bg-gray03 py-3 text-center text-gray02":"".concat(r.AK[n]," ").concat(r.Ph[t]," ").concat(s);return(0,i.jsx)("button",{...a,className:o,children:l})}},3617:function(e,t,n){"use strict";n.d(t,{s:function(){return c}});var i=n(7437),r=n(3359),s=function(){return(0,i.jsxs)("svg",{width:"61",height:"60",viewBox:"0 0 61 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"30.5",cy:"30",r:"28.5",fill:"white",stroke:"#4D70EC",strokeWidth:"3"}),(0,i.jsx)("path",{d:"M33.915 36.2881H27.6309L26.9717 14.1836H34.5742L33.915 36.2881ZM30.751 46.4395C30.0332 46.4395 29.3667 46.2637 28.7515 45.9121C28.1362 45.5605 27.6528 45.0771 27.3013 44.4619C26.9497 43.8467 26.7812 43.1729 26.7959 42.4404C26.7812 41.7373 26.9497 41.0854 27.3013 40.4849C27.6528 39.8843 28.1362 39.4082 28.7515 39.0566C29.3667 38.7051 30.0332 38.5293 30.751 38.5293C31.4395 38.5293 32.084 38.7051 32.6846 39.0566C33.2998 39.4082 33.7905 39.8843 34.1567 40.4849C34.5376 41.0854 34.7354 41.7373 34.75 42.4404C34.7354 43.1729 34.5449 43.8467 34.1787 44.4619C33.8125 45.0625 33.3218 45.5459 32.7065 45.9121C32.0913 46.2637 31.4395 46.4395 30.751 46.4395Z",fill:"#4D70EC"})]})};let c=e=>{let{onLeft:t,onRight:n,title:c,description:l,left:a,right:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),(0,i.jsx)("h2",{className:"mt-5 text-[19px] font-bold text-black01",children:c}),(0,i.jsx)("p",{className:"text-[15px] font-semibold text-gray02",children:l}),(0,i.jsxs)("div",{className:"mt-5 flex w-full gap-4",children:[(0,i.jsx)(r.Z,{size:"medium",color:"activeBlack",onClick:t,children:a}),(0,i.jsx)(r.Z,{size:"medium",color:"active",onClick:n,children:o})]})]})}},2976:function(e,t,n){"use strict";var i=n(7437),r=n(6978);t.Z=e=>{let{size:t="body-01",color:n="black-01",className:s="",children:c,...l}=e,a="".concat(r.k7[t]," ").concat(n," ").concat(s);return(0,i.jsx)("p",{...l,className:a,children:c})}},6978:function(e,t,n){"use strict";n.d(t,{AK:function(){return r},NS:function(){return c},Ph:function(){return i},k7:function(){return s}});let i={xsmall:22,small:"px-2 py-1 rounded-sm text-[13px]",medium:"w-[50%] rounded-md py-3",large:"w-full rounded-md font-semibold text-base py-4"},r={active:"whitespace-nowrap bg-blue01 text-white flex items-center justify-center",nonactive:"whitespace-nowrap bg-gray03 text-center text-gray02 flex items-center justify-center",activeBorder:"whitespace-nowrap border-2 border-solid border-blue01 bg-white text-blue01 flex items-center justify-center",activeLight:"whitespace-nowrap bg-blue03 text-blue01 flex items-center justify-center",activeBlack:"whitespace-nowrap bg-gray03 text-black01 flex items-center justify-center",green:"whitespace-nowrap bg-green02 text-green01 flex items-center justify-center",red:"whitespace-nowrap bg-red02 text-red01 flex items-center justify-center"},s={"head-01":"font-bold text-[21px]","head-02":"font-bold text-[19px]","head-03":"font-bold text-[17px]","head-04":"font-semibold text-[15px]","head-05":"font-medium text-[15px]","body-01":"font-semibold text-[17px]","body-02":"font-medium text-[17px]","body-03":"font-medium text-[15px]","body-04":"font-normal text-[15px]","caption-01":"font-normal text-[13px]","caption-02":"font-normal text-[11px]"},c={language:"언어영역",reasoning:"추리영역",math:"수리영역",spatial:"공간지각영역"}},3542:function(e,t,n){"use strict";n.d(t,{u:function(){return r},w:function(){return i}});let i={id:2,question:"다음 중 괄호안에 상응하는 단어로 절합한 것은?",questionD:"스포츠 : 축구 = ( ) : 피카소",choice:[{id:1,name:"예술가"},{id:2,name:"화가"},{id:3,name:"조각가"},{id:4,name:"작가"},{id:5,name:"음악가"}]},r={id:1,question:"다음 중 괄호안에 상응하는 단어로 절합한 것은?",questionD:"스포츠 : 축구 = ( ) : 피카소",isCorrect:!1,isAnswer:4,isSelected:2,choice:[{id:1,name:"예술가"},{id:2,name:"화가"},{id:3,name:"조각가"},{id:4,name:"작가"},{id:5,name:"음악가"}]}},97:function(e,t,n){"use strict";var i=n(7437),r=n(2265),s=n(4887);t.Z=function(){let{initialOpen:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,r.useState)(e),c=(0,r.useCallback)(()=>{n(!1)},[]);return{open:t,openModal:(0,r.useCallback)(()=>{n(!0)},[]),closeModal:c,Modal:e=>{let{children:n}=e;return t?(0,s.createPortal)((0,i.jsx)("div",{className:"z-1000 fixed top-0 mx-auto flex h-full w-full min-w-[320px] max-w-[450px] items-center justify-center bg-black bg-opacity-50",onClick:c,children:(0,i.jsx)("div",{className:"max-w-90pc max-h-90pc flex w-[90%] flex-col items-center justify-center overflow-auto rounded-2xl bg-white p-5 px-5 py-8 shadow-md",onClick:e=>e.stopPropagation(),children:n})}),document.body):null}}}},1488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(7437),r=n(6463),s=n(2457),c=n(2976),l=n(3359),a=n(2265),o=n(3542),d=n(97),u=n(5244),x=n(3617),m=n(5202);function f(){let e=(0,r.useRouter)(),t=(0,r.useParams)(),[n,f]=(0,a.useState)(""),{openModal:h,closeModal:p,Modal:b}=(0,d.Z)({initialOpen:!1});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"bg-whtie relative flex flex-col items-center pb-7 pt-14",children:[(0,i.jsxs)("div",{className:"relative flex w-full flex-col px-5",children:[(0,i.jsxs)("div",{className:"relative mb-8 w-full",children:[(0,i.jsx)(s.Z,{onClick:h}),(0,i.jsx)("span",{className:"ml-9 text-[13px] font-normal text-gray01",children:"8문제 남았어요!"})]}),(0,i.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,i.jsxs)(c.Z,{size:"head-03",className:"mb-4",children:["문제 ",(0,u.Z)(Number(t.id))]}),(0,i.jsx)(l.Z,{size:"small",color:"nonactive",children:"유의어"})]}),(0,i.jsx)(c.Z,{size:"body-03",className:"relative mb-4",children:o.w.question}),(0,i.jsx)("div",{className:"relative mb-12 flex items-center justify-center rounded-md border border-solid border-gray02 py-5",children:(0,i.jsx)(c.Z,{size:"body-03",children:o.w.questionD})})]}),o.w.choice.map(e=>(0,i.jsx)(m.Z,{item:e,isSelected:n===String(e.id),selectedId:n,setSelectedId:f},e.id)),(0,i.jsx)("div",{className:"fixed bottom-0 mb-11 flex w-full flex-col px-5 py-4",children:1===o.w.id?(0,i.jsx)(l.Z,{size:"large",color:"active",className:"mt-4",children:"채점하기"}):o.w.id>1&&o.w.id<20?(0,i.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,i.jsx)(l.Z,{size:"medium",color:"activeBorder",children:"이전 문제"}),(0,i.jsx)(l.Z,{size:"medium",color:"active",children:"채점하기"})]}):20===o.w.id?(0,i.jsx)(l.Z,{size:"large",color:"activeBorder",className:"mt-4",children:"이전 문제"}):void 0}),(0,i.jsx)(b,{children:(0,i.jsx)(x.s,{onLeft:()=>e.push("/main/sectional/".concat(t.subject,"/").concat(t.type,"/result")),onRight:p,title:"정말로 학습을 종료하실 건가요?",description:"나가면 현재까지 푼 문제만 저장돼요!",left:"종료할래요",right:"계속 풀고 싶어요."})})]})})}},5244:function(e,t,n){"use strict";function i(e){let t=String(e);return 1===t.length?"0".concat(t):String(e)}n.d(t,{Z:function(){return i}})},6463:function(e,t,n){"use strict";var i=n(1169);n.o(i,"useParams")&&n.d(t,{useParams:function(){return i.useParams}}),n.o(i,"usePathname")&&n.d(t,{usePathname:function(){return i.usePathname}}),n.o(i,"useRouter")&&n.d(t,{useRouter:function(){return i.useRouter}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=424)}),_N_E=e.O()}]);