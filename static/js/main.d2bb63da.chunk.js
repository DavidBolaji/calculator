(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,l){e.exports={container:"style_container__1L-eZ",holder:"style_holder__2q1m3",head:"style_head__13PyE",title:"style_title__17ytg",theme:"style_theme__mgYSm",togglerCont:"style_togglerCont__3gaxI",track:"style_track__ujkF6",togglerGrp:"style_togglerGrp__2_8ch",tog:"style_tog__Jmotl",label:"style_label__3Dt9i",screen:"style_screen__3Zk-R",casein:"style_casein__1sGXB",buttons:"style_buttons__2HdNN",special:"style_special__1weQM",equal:"style_equal__3HaZV"}},11:function(e,t,l){e.exports={container:"stylestwo_container__21Fyi",holder:"stylestwo_holder__xE77A",head:"stylestwo_head__22VJ9",title:"stylestwo_title__3hWsY",theme:"stylestwo_theme__3vPfI",togglerCont:"stylestwo_togglerCont__2Iss0",track:"stylestwo_track__23DfS",togglerGrp:"stylestwo_togglerGrp__OGvQW",tog:"stylestwo_tog__2P4_E",label:"stylestwo_label__4SDfL",screen:"stylestwo_screen__2Dhtn",casein:"stylestwo_casein__3VWjd",buttons:"stylestwo_buttons__1q9CK",special:"stylestwo_special__3cfQ2",equal:"stylestwo_equal__38_5i"}},12:function(e,t,l){e.exports={container:"style-three_container__2oisg",holder:"style-three_holder__1ppYb",head:"style-three_head__1ORaL",title:"style-three_title__3zdbX",theme:"style-three_theme__2geeH",togglerCont:"style-three_togglerCont__2_Ame",track:"style-three_track__2Z7lR",togglerGrp:"style-three_togglerGrp__t3Fzw",tog:"style-three_tog__336qc",label:"style-three_label__3Ow4W",screen:"style-three_screen__1dhBH",casein:"style-three_casein__3VgIB",buttons:"style-three_buttons__1oxIL",special:"style-three_special__25MuX",equal:"style-three_equal__2HfHi"}},25:function(e,t,l){"use strict";l.r(t);var s=l(0),a=l(5),n=l.n(a),c=l(7),r=l(3),i=l(1),o=function(e){return Object(i.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{children:e.children}))},u=l(4),_=l(2),p=function(e){var t,l=Object(s.useState)(window.innerWidth),a=Object(c.a)(l,2),n=a[0],r=a[1];Object(s.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n]);var o,p=Object(_.b)();console.log(n),o=n<600?{position:"absolute",right:"3px",top:"66px",zIndex:3,transform:"translateY(10px)"}:{position:"absolute",right:"-5px",top:"56px",zIndex:3,transform:"translateY(10px)"};var d=function(e){window.localStorage.setItem("THEME",e),p(function(e){return{type:"NEXT",payload:e}}(e))};return Object(i.jsxs)("div",{className:e.head,children:[Object(i.jsx)("div",{className:e.title,children:Object(i.jsx)("p",{children:"calc"})}),Object(i.jsx)("div",{className:e.theme,children:Object(i.jsx)("p",{children:"theme"})}),Object(i.jsxs)("div",{className:e.togglerCont,style:{position:"relative"},children:[Object(i.jsxs)("div",{className:e.tracker,style:{position:"absolute",right:"10px",top:"19px",zIndex:5,opacity:1},children:[Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(1)},children:"1"}),Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(2)},children:"2"}),Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(3)},children:"3"})]}),Object(i.jsxs)("div",{className:e.tracker,style:{position:"absolute",right:"10px",top:"34px",zIndex:5,opacity:0},children:[Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(1)},children:"1"}),Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(2)},children:"2"}),Object(i.jsx)("span",{className:e.spanGrp,onClick:function(){return d(3)},children:"3"})]}),Object(i.jsxs)("div",{className:e.togglerGrp,style:{position:"relative"},children:[Object(i.jsx)("input",{type:"checkbox",name:"toggler",id:"toggler",className:e.tog}),Object(i.jsx)("label",(t={htmlFor:"toggler",className:e.labelGrp},Object(u.a)(t,"className",e.label),Object(u.a)(t,"style",o),t))]})]})]})},d=l(10),h=l.n(d),y=l(11),b=l.n(y),j=l(12),g=l.n(j),v=function(e){var t=Object(_.c)((function(e){return e.calc}));return console.log(t),Object(i.jsx)("div",{className:e.screen,children:Object(i.jsx)("p",{children:t.total})})},x=function(e){return Object(i.jsx)("div",{className:e.casein,children:e.children})},m=function(e){return e.equal?Object(i.jsx)("button",{onClick:e.onClick,className:e.equal,children:e.value}):e.special?Object(i.jsx)("button",{onClick:e.onClick,className:e.special,children:e.value}):Object(i.jsx)("button",{onClick:e.onClick,className:e.buttons,children:e.value})},O=function(e,t,l){return[{id:"01",value:"7",style:e,special:"",equal:""},{id:"02",value:"8",style:e,special:"",equal:""},{id:"03",value:"9",style:e,special:"",equal:""},{id:"04",value:"DEL",style:"",special:t,equal:""},{id:"05",value:"4",style:e,special:"",equal:""},{id:"06",value:"5",style:e,special:"",equal:""},{id:"07",value:"6",style:e,special:"",equal:""},{id:"08",value:"+",style:e,special:"",equal:""},{id:"09",value:"1",style:e,special:"",equal:""},{id:"10",value:"2",style:e,special:"",equal:""},{id:"11",value:"3",style:e,special:"",equal:""},{id:"12",value:"-",style:e,special:"",equal:""},{id:"13",value:".",style:e,special:"",equal:""},{id:"14",value:"0",style:e,special:"",equal:""},{id:"15",value:"/",style:e,special:"",equal:""},{id:"16",value:"*",style:e,special:"",equal:""},{id:"17",value:"RESET",style:"",special:t,equal:""},{id:"18",value:"=",style:"",special:"",equal:l}]},f=function(e){return{type:"NUM",payload:e}},q=[],w=[],N="",k=function(e){var t=0;return e.forEach((function(e){"+"===String(e.split()[0][0])||"-"===String(e.split()[0][0])||"0123456789".split("").includes(e.split()[0][0])?t+=Number(e):"*"===e.split()[0][0]?t*=Number(e.split()[0].replace("*","")):t/=Number(e.split()[0].replace("/",""))})),t};var C=function(){var e,t=Object(s.useState)(!1),l=Object(c.a)(t,2),a=l[0],n=l[1],r=Object(_.c)((function(e){return e.theme})),u=Object(_.c)((function(e){return e.calc})),d=Object(_.b)(),y=window.localStorage.getItem("THEME"),j=e=y?"1"===y?h.a:"2"===y?b.a:g.a:1===r?h.a:2===r?b.a:g.a,C=j.buttons,E=j.special,G=j.equal,L=function(e){if("="===e){n(!0),q.push(e),function(e){var t="";console.log(q);for(var l=0;l<e.length;l++)"+"===e[l+1]||"-"===e[l+1]||"/"===e[l+1]||"*"===e[l+1]||"="===e[l+1]?""!==t?(t+=e[l],w.push(t),t=""):"+"!==e[l]&&"-"!==e[l]&&"/"!==e[l]&&"*"!==e[l]&&w.push(e[l]):t+=e[l]}(q);var t=k(w);return k(w),q=[],void d((s=t,{type:"TOTAL",payload:s}))}if("+"===e||"-"===e||"x"===e||"/"===e)n(!1),d(f(e)),q.push(e);else if("DEL"===e){if(a)return q=[],w=[],n(!1),d({type:"CLEAR"});if(w.length,q.pop(),u.total.length<=1)return d({type:"CLEAR"});for(var l=0;l<u.total.length-1;l++)N+=u.total[l],d({type:"UPDATE",payload:N});N=""}else{if("RESET"===e)return q=[],w=[],d({type:"CLEAR"});d(f(e)),q.push(e)}var s},I=O(C,E,G).map((function(e){return Object(i.jsx)(m,{buttons:e.style,id:e.id,value:e.value,special:e.special,equal:e.equal,onClick:function(){return L(e.value)}},e.id)}));return Object(i.jsxs)("div",{className:e.container,children:[Object(i.jsxs)(o,{className:e.holder,children:[Object(i.jsx)(p,{head:e.head,title:e.title,theme:e.theme,tracker:e.track,togglerCont:e.togglerCont,togglerGrp:e.togglerGrp,spanGrp:e.spanGrp,label:e.label,tog:e.tog}),Object(i.jsx)(v,{screen:e.screen}),Object(i.jsxs)(x,{casein:e.casein,children:[" ",I," "]})]})," "]})},E=l(6),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return"NEXT"===t.type?t.payload:e},L={total:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return"NUM"===t.type?{total:e.total+t.payload}:"TOTAL"===t.type?{total:String(t.payload)}:"UPDATE"===t.type?{total:t.payload}:"CLEAR"===t.type?{total:""}:e},S=Object(E.a)({theme:G,calc:I}),T=Object(E.b)(S);n.a.render(Object(i.jsx)(_.a,{store:T,children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d2bb63da.chunk.js.map