(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[63],{1030:function(e,t,a){"use strict";t.a=a.p+"static/media/header-bg.07dde975.jpg"},1228:function(e,t,a){"use strict";t.a=a.p+"static/media/img-contact-mail.ec54011b.svg"},1237:function(e,t,a){"use strict";var n=a(866),r=a(12),o=a(5),i=a(9),c=a(2),s=a(0),d=(a(138),a(11)),l=a(103),u=a(8),b=a(13),p=a(605),j=a(674),f=a(833),x=a(95),h=a(72),O=a(85);function m(e){return Object(h.a)("MuiAccordion",e)}var g=Object(O.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=a(1),y=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],w=Object(u.a)(j.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(o.a)({},"& .".concat(g.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(g.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(g.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(o.a)({},"&.".concat(g.expanded),{margin:"16px 0"}))})),k=s.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),o=a.children,u=a.className,j=a.defaultExpanded,h=void 0!==j&&j,O=a.disabled,g=void 0!==O&&O,k=a.disableGutters,R=void 0!==k&&k,S=a.expanded,C=a.onChange,M=a.square,A=void 0!==M&&M,E=a.TransitionComponent,I=void 0===E?p.a:E,G=a.TransitionProps,T=Object(i.a)(a,y),N=Object(x.a)({controlled:S,default:h,name:"Accordion",state:"expanded"}),q=Object(r.a)(N,2),B=q[0],W=q[1],D=s.useCallback((function(e){W(!B),C&&C(e,!B)}),[B,C,W]),H=s.Children.toArray(o),L=Object(n.a)(H),V=L[0],z=L.slice(1),P=s.useMemo((function(){return{expanded:B,disabled:g,disableGutters:R,toggle:D}}),[B,g,R,D]),_=Object(c.a)({},a,{square:A,disabled:g,disableGutters:R,expanded:B}),Y=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,m,t)}(_);return Object(v.jsxs)(w,Object(c.a)({className:Object(d.default)(Y.root,u),ref:t,ownerState:_,square:A},T,{children:[Object(v.jsx)(f.a.Provider,{value:P,children:V}),Object(v.jsx)(I,Object(c.a)({in:B,timeout:"auto"},G,{children:Object(v.jsx)("div",{"aria-labelledby":V.props.id,id:V.props["aria-controls"],role:"region",className:Y.region,children:z})}))]}))}));t.a=k},1238:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(2),i=a(0),c=a(11),s=a(103),d=a(8),l=a(13),u=a(601),b=a(833),p=a(72),j=a(85);function f(e){return Object(p.a)("MuiAccordionSummary",e)}var x=Object(j.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=a(1),O=["children","className","expandIcon","focusVisibleClassName","onClick"],m=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,r=e.ownerState,i={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(n.a)(t,"&.".concat(x.focusVisible),{backgroundColor:a.palette.action.focus}),Object(n.a)(t,"&.".concat(x.disabled),{opacity:a.palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(x.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&Object(n.a)({},"&.".concat(x.expanded),{minHeight:64}))})),g=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,u=a.expandIcon,p=a.focusVisibleClassName,j=a.onClick,x=Object(r.a)(a,O),y=i.useContext(b.a),w=y.disabled,k=void 0!==w&&w,R=y.disableGutters,S=y.expanded,C=y.toggle,M=Object(o.a)({},a,{expanded:S,disabled:k,disableGutters:R}),A=function(e){var t=e.classes,a=e.expanded,n=e.disabled,r=e.disableGutters,o={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(o,f,t)}(M);return Object(h.jsxs)(m,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:k,component:"div","aria-expanded":S,className:Object(c.default)(A.root,d),focusVisibleClassName:Object(c.default)(A.focusVisible,p),onClick:function(e){C&&C(e),j&&j(e)},ref:t,ownerState:M},x,{children:[Object(h.jsx)(g,{className:A.content,ownerState:M,children:n}),u&&Object(h.jsx)(v,{className:A.expandIconWrapper,ownerState:M,children:u})]}))}));t.a=y},1239:function(e,t,a){"use strict";var n=a(2),r=a(9),o=a(0),i=a(11),c=a(103),s=a(8),d=a(13),l=a(72),u=a(85);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var p=a(1),j=["className"],f=Object(s.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),x=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,s=Object(r.a)(a,j),l=a,u=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(l);return Object(p.jsx)(f,Object(n.a)({className:Object(i.default)(u.root,o),ref:t,ownerState:l},s))}));t.a=x},1869:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(8),o=a(37),i=a(696),c=a(222),s=a(73),d=a(886),l=a(135),u=a(935),b=a(51),p=a(1228),j=a(1030),f=a(1),x=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({backgroundImage:"url(".concat(j.a,")"),backgroundSize:"100% 600px",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",textAlign:"center",paddingTop:30},t.breakpoints.down("md"),{paddingTop:0})})),h=[{id:"basic1",title:"When do I need Extended License?",defaultExpand:!0,content:"If your End Product which is sold - Then only your required Extended License. i.e. If you take subscription charges (monthly, yearly, etc...) from your end users in this case you required Extended License."},{id:"basic2",title:"What Support Includes?",content:"6 Months of Support Includes with 1 year of free updates. We are happy to solve your bugs, issue."},{id:"basic3",title:"Is Berry Support TypeScript?",content:"Yes, Berry Support the TypeScript and it is only available in Plus and Extended License."},{id:"basic4",title:"Is there any RoadMap for Berry?",content:"Berry is our flagship React Dashboard Template and we always add the new features for the long run. You can check the Roadmap in Documentation."}];t.default=function(){var e=Object(o.a)();return Object(f.jsxs)(x,{children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(i.a,{children:Object(f.jsxs)(c.a,{container:!0,justifyContent:"center",spacing:b.c,children:[Object(f.jsx)(c.a,{item:!0,sm:10,md:7,sx:{mt:{md:12.5,xs:2.5},mb:{md:12.5,xs:2.5}},children:Object(f.jsxs)(c.a,{container:!0,spacing:b.c,children:[Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(s.a,{variant:"h1",color:"white",component:"div",sx:Object(n.a)({fontSize:"3.5rem",fontWeight:900,lineHeight:1.4},e.breakpoints.down("md"),{fontSize:"1.8125rem",marginTop:"80px"}),children:"FAQs"})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(s.a,{variant:"h4",component:"div",sx:Object(n.a)({fontWeight:400,lineHeight:1.4},e.breakpoints.up("md"),{my:0,mx:12.5}),color:"white",children:"Please refer the Frequently ask question for your quick help"})})]})}),Object(f.jsx)(c.a,{item:!0,xs:12,sx:{position:"relative",display:{xs:"none",lg:"block"}},children:Object(f.jsx)("img",{src:p.a,alt:"Berry",style:{marginBottom:-.625,position:"absolute",bottom:-90,right:"0",width:400,maxWidth:"100%",animation:"5s wings ease-in-out infinite"}})}),Object(f.jsx)(c.a,{item:!0,xs:12,children:Object(f.jsx)(l.a,{sx:{textAlign:"left"},elevation:4,border:!1,boxShadow:!0,shadow:4,children:Object(f.jsx)(u.a,{data:h})})})]})})]})}},748:function(e,t,a){"use strict";var n=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(113)),o=a(1),i=(0,r.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},833:function(e,t,a){"use strict";var n=a(0),r=n.createContext({});t.a=r},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(289),r=a(288),o=a(139),i=a(290);function c(e){return Object(n.a)(e)||Object(r.a)(e)||Object(o.a)(e)||Object(i.a)()}},886:function(e,t,a){"use strict";var n=a(4),r=a(12),o=a(0),i=a.n(o),c=a(27),s=a(37),d=a(978),l=a(681),u=a(696),b=a(682),p=a(73),j=a(649),f=a(683),x=a(159),h=a(680),O=a(694),m=a(679),g=a(675),v=a(647),y=a(650),w=a(648),k=a(275),R=a(18),S=a(887),C=a.n(S),M=a(1);function A(e){var t=e.children,a=e.window,n=Object(s.a)(),r=Object(d.a)({disableHysteresis:!0,threshold:0,target:a}),o="dark"===n.palette.mode?n.palette.dark.dark:n.palette.grey[200];return i.a.cloneElement(t,{elevation:r?2:0,style:{backgroundColor:n.palette.background.default,borderBottom:r?"none":"1px solid",borderColor:r?"":o,color:n.palette.text.dark}})}t.a=function(e){var t=Object.assign({},e),a=i.a.useState(!1),o=Object(r.a)(a,2),s=o[0],d=o[1],S=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&d(e)}};return Object(M.jsx)(A,Object(n.a)(Object(n.a)({},t),{},{children:Object(M.jsx)(l.a,{children:Object(M.jsx)(u.a,{children:Object(M.jsxs)(b.a,{children:[Object(M.jsx)(p.a,{component:"div",sx:{flexGrow:1,textAlign:"left"},children:Object(M.jsx)(k.a,{})}),Object(M.jsx)(j.a,{direction:"row",sx:{display:{xs:"none",sm:"block"}},spacing:2,children:Object(M.jsx)(f.a,{disableElevation:!0,variant:"contained",color:"secondary",component:c.b,to:"/login",children:"LOGIN / REGISTER"})}),Object(M.jsxs)(x.a,{sx:{display:{xs:"block",sm:"none"}},children:[Object(M.jsx)(h.a,{color:"inherit",onClick:S(!0),size:"large",children:Object(M.jsx)(C.a,{})}),Object(M.jsx)(O.a,{anchor:"top",open:s,onClose:S(!1),children:s&&Object(M.jsx)(x.a,{sx:{width:"auto"},role:"presentation",onClick:S(!1),onKeyDown:S(!1),children:Object(M.jsxs)(m.a,{children:[Object(M.jsx)(g.a,{style:{textDecoration:"none"},href:"#",target:"_blank",children:Object(M.jsxs)(v.a,{component:"a",children:[Object(M.jsx)(y.a,{children:Object(M.jsx)(R.O,{})}),Object(M.jsx)(w.a,{primary:"Home"})]})}),Object(M.jsx)(g.a,{style:{textDecoration:"none"},href:"/login",target:"_blank",children:Object(M.jsxs)(v.a,{component:"a",children:[Object(M.jsx)(y.a,{children:Object(M.jsx)(R.G,{})}),Object(M.jsx)(w.a,{primary:"Dashboard"})]})})]})})})]})]})})})}))}},887:function(e,t,a){"use strict";var n=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(113)),o=a(1),i=(0,r.default)((0,o.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},935:function(e,t,a){"use strict";var n=a(12),r=a(0),o=a(37),i=a(159),c=a(1237),s=a(1239),d=a(1238),l=a(748),u=a.n(l),b=a(1);t.a=function(e){var t=e.data,a=e.defaultExpandedId,l=void 0===a?null:a,p=e.expandIcon,j=e.square,f=e.toggle,x=Object(o.a)(),h=Object(r.useState)(null),O=Object(n.a)(h,2),m=O[0],g=O[1];return Object(r.useEffect)((function(){g(l)}),[l]),Object(b.jsx)(i.a,{sx:{width:"100%"},children:t&&t.map((function(e){return Object(b.jsxs)(c.a,{defaultExpanded:!e.disabled&&e.defaultExpand,expanded:!f&&!e.disabled&&e.expanded||f&&m===e.id,disabled:e.disabled,square:j,onChange:(t=e.id,function(e,a){return f&&g(!!a&&t)}),children:[Object(b.jsx)(d.a,{expandIcon:p||!1===p?p:Object(b.jsx)(u.a,{}),sx:{color:"dark"===x.palette.mode?"grey.500":"grey.800",fontWeight:500},children:e.title}),Object(b.jsx)(s.a,{children:e.content})]},e.id);var t}))})}},978:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(12),r=a(2),o=a(9),i=a(0),c=["getTrigger","target"];function s(e,t){var a=t.disableHysteresis,n=void 0!==a&&a,r=t.threshold,o=void 0===r?100:r,i=t.target,c=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!n&&void 0!==c&&e.current<c)&&e.current>o}var d="undefined"!==typeof window?window:null;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,a=void 0===t?s:t,l=e.target,u=void 0===l?d:l,b=Object(o.a)(e,c),p=i.useRef(),j=i.useState((function(){return a(p,b)})),f=Object(n.a)(j,2),x=f[0],h=f[1];return i.useEffect((function(){var e=function(){h(a(p,Object(r.a)({target:u},b)))};return e(),u.addEventListener("scroll",e),function(){u.removeEventListener("scroll",e)}}),[u,a,JSON.stringify(b)]),x}}}]);
//# sourceMappingURL=63.cc61de1f.chunk.js.map