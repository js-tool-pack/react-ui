"use strict";(self.webpackChunk_tool_pack_react_ui_monorepo=self.webpackChunk_tool_pack_react_ui_monorepo||[]).push([[4502],{45616:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=[{value:1,label:"foo"},{value:2,label:"bar"}],c=function(){var n=(0,t.useState)(1),s=u()(n,2),o=s[0],i=s[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{value:o,onChange:function(p,h){i(p),console.log("selected ",o,p,h)},options:r,placeholder:"select"}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{disabled:!0,value:o,options:r,placeholder:"select"})]})};a.default=c},19648:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=Array.from({length:20}).map(function(d,n){return{value:n,label:String(n)}}),c=function(){var n=(0,l.uM)(),s=u()(n,2),o=s[0],i=s[1],E=function(){return o.success("clear")};return(0,_.jsxs)(_.Fragment,{children:[i,(0,_.jsx)(l.Ph,{placeholder:"select",options:r,onClear:E,clearable:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{placeholder:"multiple select",options:r,onClear:E,clearable:!0,multiple:!0})]})};a.default=c},16914:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=[{value:1,label:"foo"},{value:2,label:"bar"}],c=function(){var n=(0,t.useRef)(null),s=(0,l.uM)(),o=u()(s,2),i=o[0],E=o[1];return(0,_.jsxs)(l.T,{children:[E,(0,_.jsx)(l.zx,{onClick:function(){var h=n.current;h&&(h.focus(),setTimeout(h.blur,2e3))},children:"\u805A\u7126\u5E76\u4E14 2 \u79D2\u540E\u5931\u6548"}),(0,_.jsx)(l.Ph,{onFocus:function(){i.success("focus")},onBlur:function(){i.error("blur")},attrs:{style:{flex:1}},controllerRef:n,placeholder:"select",options:r})]})};a.default=c},25375:function(v,a,e){e.r(a);var m=e(50959),u=e(23458),t=e(81809),l=e(11527),_=Object.keys(u).map(function(d,n){var s=u[d],o=(0,l.jsx)(t.JO,{children:(0,l.jsx)(s,{})});return{value:d,label:function(E,p){return E?(0,l.jsxs)(t.T,{gap:2,children:[o,(0,l.jsx)("span",{children:p.value})]}):(0,l.jsxs)(t.T,{gap:6,children:[(0,l.jsx)("span",{style:{flex:"0 0 20px",textAlign:"right",color:"#949494"},children:n+1}),o]})},extra:(0,l.jsxs)("span",{style:{color:"#c7c7c7"},children:[d," "]})}});function r(d,n){return n.value.toLowerCase().includes(d.toLowerCase())}var c=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Ph,{options:_,placeholder:"select"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.Ph,{placeholder:"select with filterable",options:_,filter:r,filterable:!0}),(0,l.jsx)("br",{}),(0,l.jsx)(t.Ph,{placeholder:"multiple select",options:_,maxTagCount:1,multiple:!0}),(0,l.jsx)("br",{}),(0,l.jsx)(t.Ph,{placeholder:"multiple select with filterable",options:_,maxTagCount:1,filter:r,filterable:!0,multiple:!0})]})};a.default=c},76314:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(23458),_=e(81809),r=e(11527),c=[{value:1,label:"foo"},{value:2,label:"bar"}],d=Object.keys(l).slice(0,5).map(function(s,o){var i=l[s],E=(0,r.jsx)(_.JO,{children:(0,r.jsx)(i,{})});return{value:s,label:function(h,P){return h?(0,r.jsxs)(_.T,{gap:2,children:[E,(0,r.jsx)("span",{children:P.value})]}):(0,r.jsxs)(_.T,{gap:6,children:[(0,r.jsx)("span",{style:{flex:"0 0 20px",textAlign:"right",color:"#949494"},children:o+1}),E]})},extra:(0,r.jsxs)("span",{style:{color:"#c7c7c7"},children:[s," "]})}}),n=function(){var o=(0,t.useState)([]),i=u()(o,2),E=i[0],p=i[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Ph,{placeholder:"select",options:c,filterable:!0,clearable:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(_.Ph,{placeholder:"multiple select",options:c,filterable:!0,multiple:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(_.Ph,{filter:function(P,M){var O=M.value;return O.toLowerCase().includes(P.toLowerCase())?!E.includes(O):!1},placeholder:"\u9690\u85CF\u5DF2\u9009",options:d,onChange:p,value:E,filterable:!0,multiple:!0})]})};a.default=n},20032:function(v,a,e){e.r(a);var m=e(93525),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=[{type:"group",key:"[0, 20)",label:"[0, 20)",children:[].concat(u()(Array.from({length:10}).map(function(d,n){return{value:n,label:String(n)}})),[{type:"group",key:"[10, 20)",label:"[10, 20)",children:Array.from({length:10}).map(function(d,n){return{value:n+10,label:String(n+10)}})}])},{type:"divider",key:"d1"},{type:"group",key:"[20, 30)",label:"[20, 30)",children:Array.from({length:10}).map(function(d,n){return{value:n+20,label:String(n+20)}})}],c=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{placeholder:"select",options:r,filterable:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{placeholder:"multiple select",options:r,filterable:!0,multiple:!0})]})};a.default=c},73885:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(23458),r=e(11527),c=[{value:1,label:"foo"},{value:2,label:"bar"}],d=function(){var s=(0,t.useState)(!1),o=u()(s,2),i=o[0],E=o[1];return(0,r.jsx)(l.Ph,{onVisibleChange:E,icon:i?(0,r.jsx)(_.Close,{}):(0,r.jsx)(_.CircleWarningFill,{}),options:c,placeholder:"select",clearable:!0})};a.default=d},36364:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=Array.from({length:20}).map(function(d,n){return{value:n,label:String(n)}}),c=function(){var n=(0,t.useState)([]),s=u()(n,2),o=s[0],i=s[1];return(0,_.jsx)(l.Ph,{placeholder:"test",onChange:function(p,h){i(o),console.log(p,h)},options:r,value:o,multiple:!0,maxTagCount:2})};a.default=c},28525:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=Array.from({length:20}).map(function(d,n){return{value:n,label:String(n)}}),c=function(){var n=(0,t.useState)([1,15]),s=u()(n,2),o=s[0],i=s[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{placeholder:"select",onChange:function(p,h){i(o),console.log(p,h)},options:r,value:o,multiple:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{disabled:!0,placeholder:"select",onChange:function(p,h){i(o),console.log(p,h)},options:r,value:o,multiple:!0})]})};a.default=c},72081:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(23458),_=e(81809),r=e(11527),c=Object.keys(l).map(function(n,s){var o=l[n],i=(0,r.jsx)(_.JO,{children:(0,r.jsx)(o,{})});return{value:n,label:function(p,h){return p?(0,r.jsxs)(_.T,{gap:2,children:[i,(0,r.jsx)("span",{children:h.value})]}):(0,r.jsxs)(_.T,{gap:6,children:[(0,r.jsx)("span",{style:{flex:"0 0 20px",textAlign:"right",color:"#949494"},children:s+1}),i]})},extra:(0,r.jsxs)("span",{style:{color:"#c7c7c7"},children:[n," "]})}}),d=function(){var s=(0,t.useState)(""),o=u()(s,2),i=o[0],E=o[1],p=(0,t.useState)([]),h=u()(p,2),P=h[0],M=h[1],O=(0,t.useState)(!1),D=u()(O,2),f=D[0],A=D[1],g=(0,t.useState)([]),j=u()(g,2),C=j[0],R=j[1],x=(0,t.useRef)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Ph,{placeholder:"select",onChange:E,onSearch:T,loading:f,options:C,value:i,remote:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(_.Ph,{placeholder:"select multiple",onChange:M,onSearch:T,loading:f,options:C,value:P,multiple:!0,remote:!0})]});function T(b){A(!0),clearTimeout(x.current),x.current=setTimeout(function(){var L=b?c.filter(function(I){return I.value.toLowerCase().includes(b.toLowerCase())}):[];R(L),A(!1)},1500)}};a.default=d},96727:function(v,a,e){e.r(a);var m=e(54306),u=e.n(m),t=e(50959),l=e(81809),_=e(11527),r=[{value:1,label:"foo"},{value:2,label:"bar"}],c=function(){var n=(0,t.useState)(2),s=u()(n,2),o=s[0],i=s[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{size:"small",value:o,onChange:i,options:r,placeholder:"select"}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{size:"medium",value:o,onChange:i,options:r,placeholder:"select"}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{size:"large",value:o,onChange:i,options:r,placeholder:"select"})]})};a.default=c},51616:function(v,a,e){e.r(a);var m=e(50959),u=e(81809),t=e(11527),l=Array.from({length:20}).map(function(r,c){return{value:c,label:String(c)}}),_=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Ph,{header:(0,t.jsx)("div",{style:{padding:"10px"},children:"header \u63D2\u69FD"}),options:l,placeholder:"header"}),(0,t.jsx)("br",{}),(0,t.jsx)(u.Ph,{footer:(0,t.jsx)("div",{style:{padding:"10px"},children:"footer \u63D2\u69FD"}),options:l,placeholder:"footer"})]})};a.default=_},56578:function(v,a,e){e.r(a);var m=e(50959),u=e(81809),t=e(11527),l=[{value:1,label:"foo"},{value:2,label:"bar"}],_=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Ph,{placeholder:"select",options:l,status:"warning"}),(0,t.jsx)("br",{}),(0,t.jsx)(u.Ph,{placeholder:"select",options:l,status:"error"})]})};a.default=_}}]);
