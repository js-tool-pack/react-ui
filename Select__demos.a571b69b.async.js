"use strict";(self.webpackChunk_tool_pack_react_ui_monorepo=self.webpackChunk_tool_pack_react_ui_monorepo||[]).push([[4502],{98277:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=[{label:"foo",value:1},{label:"bar",value:2}],d=function(){var n=(0,l.useState)(1),s=u()(n,2),o=s[0],c=s[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Ph,{onChange:function(p,h){c(p),console.log("selected ",o,p,h)},placeholder:"select",options:_,value:o}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{placeholder:"select",options:_,value:o,disabled:!0})]})};a.default=d},95283:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=Array.from({length:20}).map(function(m,n){return{label:String(n),value:n}}),d=function(){var n=(0,t.uM)(),s=u()(n,2),o=s[0],c=s[1],E=function(){return o.success("clear")};return(0,r.jsxs)(r.Fragment,{children:[c,(0,r.jsx)(t.Ph,{placeholder:"select",options:_,onClear:E,clearable:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{placeholder:"multiple select",options:_,onClear:E,clearable:!0,multiple:!0})]})};a.default=d},31496:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=[{label:"foo",value:1},{label:"bar",value:2}],d=function(){var n=(0,l.useRef)(null),s=(0,t.uM)(),o=u()(s,2),c=o[0],E=o[1];return(0,r.jsxs)(t.T,{children:[E,(0,r.jsx)(t.zx,{onClick:function(){var h=n.current;h&&(h.focus(),setTimeout(h.blur,2e3))},children:"\u805A\u7126\u5E76\u4E14 2 \u79D2\u540E\u5931\u6548"}),(0,r.jsx)(t.Ph,{onFocus:function(){c.success("focus")},onBlur:function(){c.error("blur")},attrs:{style:{flex:1}},controllerRef:n,placeholder:"select",options:_})]})};a.default=d},61377:function(v,a,e){e.r(a);var i=e(77452),u=e(52625),t=e(50959),l=e(11527),r=Object.keys(i).map(function(m,n){var s=i[m],o=(0,l.jsx)(u.JO,{children:(0,l.jsx)(s,{})});return{label:function(E,p){return E?(0,l.jsxs)(u.T,{gap:2,children:[o,(0,l.jsx)("span",{children:p.value})]}):(0,l.jsxs)(u.T,{gap:6,children:[(0,l.jsx)("span",{style:{textAlign:"right",flex:"0 0 20px",color:"#949494"},children:n+1}),o]})},extra:(0,l.jsxs)("span",{style:{color:"#c7c7c7"},children:[m," "]}),value:m}});function _(m,n){return n.value.toLowerCase().includes(m.toLowerCase())}var d=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Ph,{placeholder:"select",options:r}),(0,l.jsx)("br",{}),(0,l.jsx)(u.Ph,{placeholder:"select with filterable",options:r,filter:_,filterable:!0}),(0,l.jsx)("br",{}),(0,l.jsx)(u.Ph,{placeholder:"multiple select",options:r,maxTagCount:1,multiple:!0}),(0,l.jsx)("br",{}),(0,l.jsx)(u.Ph,{placeholder:"multiple select with filterable",options:r,maxTagCount:1,filter:_,filterable:!0,multiple:!0})]})};a.default=d},7097:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(77452),l=e(52625),r=e(50959),_=e(11527),d=[{label:"foo",value:1},{label:"bar",value:2}],m=Object.keys(t).slice(0,5).map(function(s,o){var c=t[s],E=(0,_.jsx)(l.JO,{children:(0,_.jsx)(c,{})});return{label:function(h,P){return h?(0,_.jsxs)(l.T,{gap:2,children:[E,(0,_.jsx)("span",{children:P.value})]}):(0,_.jsxs)(l.T,{gap:6,children:[(0,_.jsx)("span",{style:{textAlign:"right",flex:"0 0 20px",color:"#949494"},children:o+1}),E]})},extra:(0,_.jsxs)("span",{style:{color:"#c7c7c7"},children:[s," "]}),value:s}}),n=function(){var o=(0,r.useState)([]),c=u()(o,2),E=c[0],p=c[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{placeholder:"select",options:d,filterable:!0,clearable:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{placeholder:"multiple select",options:d,filterable:!0,multiple:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{filter:function(P,M){var O=M.value;return O.toLowerCase().includes(P.toLowerCase())?!E.includes(O):!1},onChange:p,placeholder:"\u9690\u85CF\u5DF2\u9009",options:m,value:E,filterable:!0,multiple:!0})]})};a.default=n},18436:function(v,a,e){e.r(a);var i=e(67855),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=[{children:[].concat(u()(Array.from({length:10}).map(function(m,n){return{label:String(n),value:n}})),[{children:Array.from({length:10}).map(function(m,n){return{label:String(n+10),value:n+10}}),label:"[10, 20)",key:"[10, 20)",type:"group"}]),label:"[0, 20)",key:"[0, 20)",type:"group"},{type:"divider",key:"d1"},{children:Array.from({length:10}).map(function(m,n){return{label:String(n+20),value:n+20}}),label:"[20, 30)",key:"[20, 30)",type:"group"}],d=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Ph,{placeholder:"select",options:_,filterable:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{placeholder:"multiple select",options:_,filterable:!0,multiple:!0})]})};a.default=d},67291:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(77452),r=e(50959),_=e(11527),d=[{label:"foo",value:1},{label:"bar",value:2}],m=function(){var s=(0,r.useState)(!1),o=u()(s,2),c=o[0],E=o[1];return(0,_.jsx)(t.Ph,{icon:c?(0,_.jsx)(l.Close,{}):(0,_.jsx)(l.CircleWarningFill,{}),onVisibleChange:E,placeholder:"select",options:d,clearable:!0})};a.default=m},63474:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=Array.from({length:20}).map(function(m,n){return{label:String(n),value:n}}),d=function(){var n=(0,l.useState)([]),s=u()(n,2),o=s[0],c=s[1];return(0,r.jsx)(t.Ph,{onChange:function(p,h){c(o),console.log(p,h)},placeholder:"test",options:_,maxTagCount:2,value:o,multiple:!0})};a.default=d},76720:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=Array.from({length:20}).map(function(m,n){return{label:String(n),value:n}}),d=function(){var n=(0,l.useState)([1,15]),s=u()(n,2),o=s[0],c=s[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Ph,{onChange:function(p,h){c(o),console.log(p,h)},placeholder:"select",options:_,value:o,multiple:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{onChange:function(p,h){c(o),console.log(p,h)},placeholder:"select",options:_,value:o,disabled:!0,multiple:!0})]})};a.default=d},175:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(77452),l=e(52625),r=e(50959),_=e(11527),d=Object.keys(t).map(function(n,s){var o=t[n],c=(0,_.jsx)(l.JO,{children:(0,_.jsx)(o,{})});return{label:function(p,h){return p?(0,_.jsxs)(l.T,{gap:2,children:[c,(0,_.jsx)("span",{children:h.value})]}):(0,_.jsxs)(l.T,{gap:6,children:[(0,_.jsx)("span",{style:{textAlign:"right",flex:"0 0 20px",color:"#949494"},children:s+1}),c]})},extra:(0,_.jsxs)("span",{style:{color:"#c7c7c7"},children:[n," "]}),value:n}}),m=function(){var s=(0,r.useState)(""),o=u()(s,2),c=o[0],E=o[1],p=(0,r.useState)([]),h=u()(p,2),P=h[0],M=h[1],O=(0,r.useState)(!1),D=u()(O,2),f=D[0],A=D[1],g=(0,r.useState)([]),j=u()(g,2),C=j[0],R=j[1],x=(0,r.useRef)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Ph,{placeholder:"select",onChange:E,onSearch:T,loading:f,options:C,value:c,remote:!0}),(0,_.jsx)("br",{}),(0,_.jsx)(l.Ph,{placeholder:"select multiple",onChange:M,onSearch:T,loading:f,options:C,value:P,multiple:!0,remote:!0})]});function T(b){A(!0),clearTimeout(x.current),x.current=setTimeout(function(){var L=b?d.filter(function(I){return I.value.toLowerCase().includes(b.toLowerCase())}):[];R(L),A(!1)},1500)}};a.default=m},19303:function(v,a,e){e.r(a);var i=e(28152),u=e.n(i),t=e(52625),l=e(50959),r=e(11527),_=[{label:"foo",value:1},{label:"bar",value:2}],d=function(){var n=(0,l.useState)(2),s=u()(n,2),o=s[0],c=s[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Ph,{placeholder:"select",onChange:c,options:_,value:o,size:"small"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{placeholder:"select",onChange:c,options:_,size:"medium",value:o}),(0,r.jsx)("br",{}),(0,r.jsx)(t.Ph,{placeholder:"select",onChange:c,options:_,value:o,size:"large"})]})};a.default=d},12896:function(v,a,e){e.r(a);var i=e(52625),u=e(50959),t=e(11527),l=Array.from({length:20}).map(function(_,d){return{label:String(d),value:d}}),r=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Ph,{header:(0,t.jsx)("div",{style:{padding:"10px"},children:"header \u63D2\u69FD"}),placeholder:"header",options:l}),(0,t.jsx)("br",{}),(0,t.jsx)(i.Ph,{footer:(0,t.jsx)("div",{style:{padding:"10px"},children:"footer \u63D2\u69FD"}),placeholder:"footer",options:l})]})};a.default=r},6312:function(v,a,e){e.r(a);var i=e(52625),u=e(50959),t=e(11527),l=[{label:"foo",value:1},{label:"bar",value:2}],r=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Ph,{placeholder:"select",options:l,status:"warning"}),(0,t.jsx)("br",{}),(0,t.jsx)(i.Ph,{placeholder:"select",options:l,status:"error"})]})};a.default=r}}]);
