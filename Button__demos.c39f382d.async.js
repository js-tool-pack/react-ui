"use strict";(self.webpackChunk_tool_pack_react_ui_monorepo=self.webpackChunk_tool_pack_react_ui_monorepo||[]).push([[7570],{53504:function(x,l,i){i.r(l);var a=i(57213),r=i.n(a),n=i(54306),e=i.n(n),c=i(50959),_=i(7889),s=i(11527),u=function(){var h=(0,c.useReducer)(function(t){return t+1},0),m=e()(h,2),p=m[0],f=m[1],E=(0,c.useCallback)(function(){return f()},[]),C=["default","primary","success","info","danger","warning"],v=["small","medium","large"],D=["none","default","round","circle"],z=[!1,!0,"dashed","text"];return(0,s.jsxs)(d,{vertical:!0,children:["click times: ",p,(0,s.jsxs)(d,{children:["size:",v.map(function(t){return(0,s.jsx)(_.zx,{className:"test",onClick:E,size:t,children:t},t)})]}),(0,s.jsxs)(d,{children:["type:",C.map(function(t){return(0,s.jsx)(_.zx,{onClick:E,type:t,children:t},t)})]}),(0,s.jsxs)(d,{children:["plain:",z.map(function(t){return(0,s.jsxs)(d,{style:{marginBottom:"5px",textAlign:"center"},vertical:!0,children:["(",String(t),"):",C.map(function(o){return(0,s.jsx)(_.zx,{onClick:E,type:o,plain:t,children:o},o+"_"+t)})]},String(t))})]}),(0,s.jsxs)(d,{children:["disabled:",z.map(function(t){return(0,s.jsx)(d,{style:{marginBottom:"5px"},vertical:!0,children:C.map(function(o){return(0,s.jsx)(_.zx,{onClick:E,type:o,plain:t,disabled:!0,children:o},String(t)+"_"+o)})},String(t))})]}),(0,s.jsxs)(d,{children:["shape:",v.map(function(t){return D.map(function(o){return(0,s.jsx)(_.zx,{onClick:E,type:"primary",size:t,shape:o,children:o},t+"_"+o)})})]})]})},d=c.memo(function(j){return(0,s.jsx)(_.Ar,r()(r()({},j),{},{style:r()({gap:"8px",flexWrap:"wrap",overflow:"visible"},j.style),children:j.children}))});l.default=u},47637:function(x,l,i){i.r(l);var a=i(57213),r=i.n(a),n=i(50959),e=i(7889),c=i(11527),_=function(){return(0,c.jsxs)(s,{vertical:!0,children:[(0,c.jsxs)(s,{children:[(0,c.jsx)(e.zx,{type:"primary",children:"Primary"}),(0,c.jsx)(e.zx,{type:"primary",disabled:!0,children:"Primary(disabled)"})]}),(0,c.jsxs)(s,{children:[(0,c.jsx)(e.zx,{children:"Default"}),(0,c.jsx)(e.zx,{disabled:!0,children:"Default(disabled)"})]})]})},s=n.memo(function(u){return(0,c.jsx)(e.Ar,r()(r()({},u),{},{style:r()({gap:"8px",flexWrap:"wrap",overflow:"visible"},u.style),children:u.children}))});l.default=_},73922:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(46899),e=i(11527),c=function(){var s=[(0,e.jsx)(r.zx,{size:"small",type:"danger",icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"},1),(0,e.jsx)(r.zx,{type:"success",icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"},2),(0,e.jsx)(r.zx,{type:"info",size:"large",icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"},3),(0,e.jsx)(r.zx,{type:"primary",size:"large",icon:(0,e.jsx)(n.CircleWarning,{})},4)];return(0,e.jsxs)(r.T,{vertical:!0,children:[(0,e.jsx)(r.hE,{size:"small",children:(0,e.jsx)(r.bl.Provider,{value:{size:"large"},children:s})}),(0,e.jsx)(r.hE,{size:"medium",children:s}),(0,e.jsx)(r.hE,{children:s}),(0,e.jsx)(r.hE,{size:"large",children:s}),(0,e.jsx)(r.bl.Provider,{value:{size:"small",plain:!0,onClick:function(){return alert("click")}},children:(0,e.jsx)(r.hE,{size:"large",children:s})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{size:"large",type:"primary"},children:[(0,e.jsx)(r.zx,{shape:"round",icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{children:"Upload"}),(0,e.jsx)(r.zx,{shape:"round",icon:(0,e.jsx)(n.CircleWarning,{})})]})}),(0,e.jsx)(r.hE,{size:"large",children:(0,e.jsxs)(r.bl.Provider,{value:{type:"danger"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{children:"Upload"}),(0,e.jsx)(r.zx,{plain:"dashed",shape:"round",icon:(0,e.jsx)(n.CircleWarning,{})})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{plain:!0},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleWarning,{})})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"success",plain:"dashed"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleWarning,{})})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"warning",plain:"text"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"primary"},children:[(0,e.jsx)(r.zx,{children:"items"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(r.JO,{children:(0,e.jsx)(n.Down,{})})})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"info"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"primary",shape:"none"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{disabled:!0,icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleWarning,{})})]})}),(0,e.jsx)(r.hE,{children:(0,e.jsxs)(r.bl.Provider,{value:{type:"primary",disabled:!0,rightIcon:!0,shape:"round"},children:[(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{disabled:!0,icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"}),(0,e.jsx)(r.zx,{icon:(0,e.jsx)(n.CircleWarning,{})})]})})]})};l.default=c},7642:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(46899),e=i(11527),c=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.T,{children:[(0,e.jsx)(r.zx,{size:"small",type:"danger",icon:(0,e.jsx)(n.CircleClose,{}),children:"Delete"}),(0,e.jsx)(r.zx,{type:"success",icon:(0,e.jsx)(n.CircleSuccess,{}),children:"Commit"}),(0,e.jsx)(r.zx,{type:"info",size:"large",icon:(0,e.jsx)(n.CircleInfo,{}),children:"Upload"}),(0,e.jsx)(r.zx,{type:"primary",size:"large",icon:(0,e.jsx)(n.CircleWarning,{})})]}),(0,e.jsx)(r.iz,{children:(0,e.jsxs)(r.T,{children:[(0,e.jsxs)(r.T,{children:[(0,e.jsx)(r.JO,{children:(0,e.jsx)(n.Up,{})}),"icon\u5728\u5DE6\u4FA7"]}),(0,e.jsx)(r.iz,{lineColor:"lime",vertical:!0}),(0,e.jsxs)(r.T,{children:[(0,e.jsx)(r.JO,{children:(0,e.jsx)(n.Down,{})}),"icon\u5728\u53F3\u4FA7"]})]})}),(0,e.jsxs)(r.T,{children:[(0,e.jsx)(r.zx,{size:"small",type:"danger",icon:(0,e.jsx)(n.CircleClose,{}),rightIcon:!0,children:"Delete"}),(0,e.jsx)(r.zx,{type:"success",icon:(0,e.jsx)(n.CircleSuccess,{}),rightIcon:!0,children:"Commit"}),(0,e.jsx)(r.zx,{type:"info",size:"large",icon:(0,e.jsx)(n.CircleInfo,{}),rightIcon:!0,children:"Upload"}),(0,e.jsx)(r.zx,{type:"primary",size:"large",icon:(0,e.jsx)(n.CircleWarning,{}),rightIcon:!0})]})]})};l.default=c},82906:function(x,l,i){i.r(l);var a=i(54306),r=i.n(a),n=i(50959),e=i(7889),c=i(46899),_=i(11527),s=function(){var d=(0,n.useState)(!1),j=r()(d,2),h=j[0],m=j[1];return(0,n.useEffect)(function(){if(h){var p=setTimeout(function(){m(!1)},3e3);return function(){return clearTimeout(p)}}},[h]),(0,_.jsxs)(e.T,{vertical:!0,children:[(0,_.jsx)(e.zx,{size:"small",type:"danger",loading:h,icon:(0,_.jsx)(c.CircleWarning,{}),onClick:function(){return m(!0)},children:"Delete"}),(0,_.jsx)(e.zx,{type:"success",loading:h,onClick:function(){return m(!0)},children:"Commit"}),(0,_.jsx)(e.zx,{type:"primary",size:"large",loading:h,icon:(0,_.jsx)(c.CircleWarning,{}),onClick:function(){return m(!0)}})]})};l.default=s},83257:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(11527),e=function(){return(0,n.jsxs)(r.Ar,{style:{gap:"8px",flexWrap:"wrap",overflow:"visible",alignItems:"center"},children:[(0,n.jsx)(r.zx,{type:"primary",plain:!1,children:"false"}),(0,n.jsx)(r.zx,{type:"primary",plain:!0,children:"true"}),(0,n.jsx)(r.zx,{type:"primary",plain:"dashed",children:"dashed"}),(0,n.jsx)(r.zx,{type:"primary",plain:"text",children:"text"})]})};l.default=e},83179:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(11527),e=function(){return(0,n.jsxs)(r.Ar,{style:{gap:"8px",flexWrap:"wrap",overflow:"visible",alignItems:"center"},children:[(0,n.jsx)(r.zx,{shape:"none",children:"none"}),(0,n.jsx)(r.zx,{children:"default"}),(0,n.jsx)(r.zx,{shape:"round",children:"round"}),(0,n.jsx)(r.zx,{size:"large",shape:"circle",style:{fontSize:"12px"},children:"circle"})]})};l.default=e},96273:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(11527),e=function(){return(0,n.jsxs)(r.Ar,{style:{gap:"8px",flexWrap:"wrap",overflow:"visible",alignItems:"center"},children:[(0,n.jsx)(r.zx,{size:"small",children:"small"}),(0,n.jsx)(r.zx,{children:"default"}),(0,n.jsx)(r.zx,{size:"medium",children:"medium"}),(0,n.jsx)(r.zx,{size:"large",children:"large"})]})};l.default=e},89990:function(x,l,i){i.r(l);var a=i(50959),r=i(7889),n=i(11527),e=function(){return(0,n.jsxs)(r.Ar,{style:{gap:"8px",flexWrap:"wrap",overflow:"visible"},children:[(0,n.jsx)(r.zx,{type:"primary",children:"Primary Button"}),(0,n.jsx)(r.zx,{children:"Default Button"}),(0,n.jsx)(r.zx,{type:"success",children:"Success Button"}),(0,n.jsx)(r.zx,{type:"info",children:"Info Button"}),(0,n.jsx)(r.zx,{type:"warning",children:"warning Button"}),(0,n.jsx)(r.zx,{type:"danger",children:"warning Button"})]})};l.default=e}}]);
