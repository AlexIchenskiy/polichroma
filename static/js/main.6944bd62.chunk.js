(this.webpackJsonppolichroma=this.webpackJsonppolichroma||[]).push([[0],{28:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(7),a=n.n(o),s=(n(28),n(11)),l=n(3),i=n(10),j=n(4),b=n(2),u=n(1);var d=function(e){var t=Object(c.useState)("hsl(".concat(e.color,", 100%, 50%)")),n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(c.useEffect)((function(){return o("hsl(".concat(e.color,", 100%, 50%)"))}),[e.color]),Object(c.useEffect)((function(){document.getElementsByTagName("html")[0].style.overflow=e.visible?"hidden":"initial"}),[e.visible]),Object(u.jsxs)(b.b,{className:e.visible?"Modal-nav Modal-nav-opened":"Modal-nav Modal-nav-closed",flat:!0,children:[Object(u.jsx)(i.b,{to:"/",className:"Link-nostyle Link-outer",onClick:function(){return e.setVisible(!1)},children:Object(u.jsx)(b.a,{text:!0,children:"Home"})}),Object(u.jsx)(i.b,{to:"/generator",className:"Link-nostyle Link-outer",onClick:function(){return e.setVisible(!1)},children:Object(u.jsx)(b.a,{text:!0,children:"Generate"})}),Object(u.jsx)(b.a,{text:!0,children:Object(u.jsx)("p",{style:{color:r},children:"Explore"})}),Object(u.jsx)(b.a,{text:!0,children:"Sign in"}),Object(u.jsx)(b.a,{children:Object(u.jsx)("p",{style:{color:r},children:"Sign up"})}),Object(u.jsx)(b.a,{onClick:function(){return e.setVisible(!1)},children:"Close"})]})};var h=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)("hsl(".concat(e.color,", 100%, 50%)")),s=Object(l.a)(a,2),j=s[0],h=s[1];return Object(c.useEffect)((function(){return h("hsl(".concat(e.color,", 100%, 50%)"))}),[e.color]),Object(u.jsxs)(b.b,{style:{borderRadius:0},children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(i.b,{to:"",className:"Link-nostyle Link-logo",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"Logo",children:"poli"}),Object(u.jsx)("h1",{className:"Logo",style:{color:j},children:"chroma"})]})}),Object(u.jsx)("nav",{className:"Nav-header",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/generator",className:"Link-nostyle",children:Object(u.jsx)(b.a,{text:!0,children:"Generate"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(b.c,{style:{width:"4px",height:"100%"},dense:!0})}),Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{text:!0,children:"Sign in"})}),Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{children:Object(u.jsx)("p",{style:{color:j},children:"Sign up"})})})]})}),Object(u.jsxs)("div",{className:"Burger-menu",onClick:function(){return o(!r)},children:[Object(u.jsx)("div",{style:{backgroundColor:j},className:r?"active":"inactive"}),Object(u.jsx)("div",{style:{backgroundColor:j},className:r?"active":"inactive"}),Object(u.jsx)("div",{style:{backgroundColor:j},className:r?"active":"inactive"})]})]}),Object(u.jsx)(d,{color:e.color,setVisible:function(e){return o(e)},visible:r})]})},O=n(22);n(35);var f=function(e){var t=Object(c.useState)(0),n=Object(l.a)(t,2),r=n[0],o=(n[1],Object(c.useState)("hsl(".concat(e.color,", 100%, 50%)"))),a=Object(l.a)(o,2),s=a[0],j=a[1];return Object(c.useEffect)((function(){return j("hsl(".concat(e.color,", 100%, 50%)"))}),[e.color]),Object(u.jsxs)("section",{className:"App-body",children:[Object(u.jsxs)("section",{className:"App-body-left",children:[Object(u.jsxs)("p",{className:"App-body-title",children:["Fast and easy neumorphic ",Object(u.jsx)("b",{style:{color:s},children:"color"})," palettes generator!"]}),Object(u.jsx)("p",{className:"App-body-subtitle",children:"Create and export perfect palette for your art project easily."}),Object(u.jsx)(i.b,{to:"/generator",className:"Link-nostyle App-body-button-link",children:Object(u.jsx)(b.a,{className:"App-body-button",style:{height:"55px"},children:Object(u.jsx)("h1",{style:{fontSize:"18px",color:s},children:"Generate!"})})}),Object(u.jsx)(i.b,{to:"/",className:"Link-nostyle App-body-button-link",children:Object(u.jsx)(b.a,{className:"App-body-button",color:s,style:{height:"55px"},outlined:!0,children:Object(u.jsx)("h1",{style:{fontSize:"18px"},children:"Explore!"})})})]}),Object(u.jsx)("section",{className:"App-body-right",children:Object(u.jsxs)(b.b,{className:"Color-picker-outer",elevation:2,children:[Object(u.jsx)(b.b,{className:"Color-picker-inner",elevation:2}),Object(u.jsx)(O.a,{hue:r,onInput:function(e){},variant:"persistent"})]})})]})};n(36),n(37);var x=function(e){return Object(u.jsxs)(b.b,{className:"App",elevation:2,children:[Object(u.jsx)(h,{color:e.color}),Object(u.jsx)(f,{color:e.color})]})},p=n(15),m=n.n(p);var v=function(e){var t,n=Object(c.useState)("hsl(".concat(e.color,", 100%, 50%)")),r=Object(l.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(0),i=Object(l.a)(s,2),j=i[0],d=i[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),f=O[0],x=O[1],p=Object(c.useRef)(null);return t=p,Object(c.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&x(!1)}return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",e)}}),[t]),Object(c.useEffect)((function(){return a("hsl(".concat(e.color,", 100%, 50%)"))}),[e.color]),Object(c.useEffect)((function(){e.setGenMethod(j)}),[j]),Object(u.jsxs)("div",{className:"Generator-toolbar-method-outer",ref:p,children:[Object(u.jsx)("div",{className:"Generator-toolbar-method",style:{borderColor:o},onClick:function(){return x(!f)}}),Object(u.jsxs)(b.b,{className:f?"Generator-toolbar-method-inner opened":"Generator-toolbar-method-inner closed",flat:!0,bordered:!0,children:[Object(u.jsx)(b.a,{className:"Generator-toolbar-method-inner-element",text:0!==j,flat:0===j,bordered:!1,onClick:function(){d(0),x(!1)},children:Object(u.jsx)("h3",{children:"Analogous"})}),Object(u.jsx)(b.a,{className:"Generator-toolbar-method-inner-element",text:1!==j,flat:1===j,bordered:!1,onClick:function(){d(1),x(!1)},title:"Monochromatic",children:Object(u.jsx)("h3",{children:"Monochromatic"})}),Object(u.jsx)(b.a,{className:"Generator-toolbar-method-inner-element",text:2!==j,flat:2===j,bordered:!1,onClick:function(){d(2),x(!1)},title:"Complementary",children:Object(u.jsx)("h3",{children:"Complementary"})}),Object(u.jsx)(b.a,{className:"Generator-toolbar-method-inner-element",text:3!==j,flat:3===j,bordered:!1,onClick:function(){d(3),x(!1)},children:Object(u.jsx)("h3",{children:"Random"})})]})]})};var g=function(e){var t=Object(c.useState)(window.innerWidth),n=Object(l.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(r<768),s=Object(l.a)(a,2),i=s[0],j=s[1];function d(){o(window.innerWidth)}return Object(c.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]),Object(c.useEffect)((function(){j(r<768)}),[r]),Object(u.jsxs)(b.b,{className:"Generator-toolbar",style:{borderRadius:"0"},flat:!0,bordered:!0,children:[Object(u.jsx)("h2",{className:"Generator-toolbar-subtitle",children:m.a||i?"Swipe up!":"Press spacebar to quickly generate a new palette!"}),Object(u.jsx)("div",{className:"Generator-toolbar-tools",children:Object(u.jsx)(v,{color:e.color,setGenMethod:function(t){return e.setGenMethod(t)}})})]})},y=n(21);function N(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)}function k(e,t){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");var n=parseInt(e.slice(0,2),16),c=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return t?.299*n+.587*c+.114*r>186?"#000000":"#FFFFFF":(n=(255-n).toString(16),c=(255-c).toString(16),r=(255-r).toString(16),"#"+N(n)+N(c)+N(r))}var S=n(23);var C=function(e){var t={color:e.textColor};return Object(u.jsxs)("div",{className:"Generator-palette-toolset",children:[Object(u.jsx)("div",{className:"Generator-palette-toolset-tools",children:Object(u.jsx)("div",{className:"Generator-palette-toolset-icon",onClick:function(){navigator.clipboard.writeText(e.color)},children:Object(u.jsx)(S.a,{size:"32px",color:e.textColor})})}),Object(u.jsx)("div",{className:"Generator-palette-toolset-colorname",children:Object(u.jsx)("h1",{style:t,children:e.color})})]})};function E(e,t,n){n/=100;var c=t*Math.min(n,1-n)/100,r=function(t){var r=(t+e/30)%12,o=n-c*Math.max(Math.min(r-3,9-r,1),-1);return Math.round(255*o).toString(16).padStart(2,"0")};return"".concat(r(0)).concat(r(8)).concat(r(4))}function G(e,t){return Math.floor(Math.random()*(t-e+1))+e}function w(e){for(var t=[],n=G(0,360),c=G(35,65),r=G(40,75);;){for(t=[];t.length!==e;)E(n,c,r)in t||t.push(E(n,c,r)),(n+=G(20,60))>360?n-=360:n<0&&(n+=360);if(t.length===e)break}return t}var M=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(5),i=Object(l.a)(a,2),j=i[0],d=(i[1],Object(c.useState)(e.genMethod)),h=Object(l.a)(d,2),O=h[0],f=h[1],x=Object(c.useState)(g()),p=Object(l.a)(x,2),m=p[0],v=p[1];function g(){switch(O){case 0:return w(j);case 1:return function(e){var t,n=[],c=G(7,10),r=1===G(0,1)?1:-1,o=G(0,360),a=G(0,100);for(t=-1===r?G(20+e*c,100):G(20,100-e*c);;){for(n=[];n.length!==e;)E(o,a,t)in n||n.push(E(o,a,t)),t+=r*c;if(n.length===e)break}return n}(j);case 2:return function(e){var t,n=[],c=G(7,10),r=1===G(0,1)?1:-1,o=G(0,360),a=G(30,80);for(t=-1===r?G(20+e*c,100):G(20,100-e*c);;){n=[];for(var s=0;s<e;s++)s===Math.round(e/2)&&(t=-1===r?G(20+e*c,100):G(20,100-e*c),(o+=180)>360&&(o-=360)),E(o,a,t)in n||n.push(E(o,a,t)),t+=r*c;if(n.length===e)break}return n}(j);case 3:return function(e){for(var t=[],n=0;n<e;n++)t.push((1048575*Math.random()*1e6).toString(16).slice(0,6));return t}(j);default:return w(j)}}var N=function(e){32===e.keyCode&&setTimeout(S(),100)},S=function(){v(g)};Object(c.useEffect)((function(){document.addEventListener("keypress",N)}),[]),Object(c.useEffect)((function(){f(e.genMethod)}),[e.genMethod]),Object(c.useEffect)((function(){for(var e,t=[],n="",c=[],r=0;r<3;r++){for(var a=0;a<j;a++)n+="%c       %c ",c.push("background: #".concat(m[a],";")),c.push("background: null");n+="\n"}(e=console).log.apply(e,[n].concat(c)),console.log(m.join("  "));for(var s=0;s<m.length;s++)t.push(Object(u.jsx)("div",{className:"Generator-palette-color",style:{backgroundColor:"#".concat(m[s])},children:Object(u.jsx)(C,{textColor:k(m[s],1).toUpperCase(),color:m[s].toUpperCase()})},"#".concat(m[s])));o(t)}),[m]);var M=Object(y.useSwipeable)({onSwipedUp:function(){setTimeout(S(),100)}});return Object(u.jsx)("div",Object(s.a)(Object(s.a)({className:"Generator-palette-outer",elevation:2},M),{},{children:Object(u.jsx)(b.b,{className:"Generator-palette-inner",inset:!0,children:r})}))};var L=function(e){var t=Object(c.useState)(0),n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(u.jsxs)(b.b,{className:"Generator",elevation:2,children:[Object(u.jsx)(h,{color:e.color}),Object(u.jsx)(g,{color:e.color,setGenMethod:function(e){return o(e)}}),Object(u.jsx)(M,{genMethod:r},r)]})};var A=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return r(n>359?0:n+1)}),100);return function(){return clearInterval(e)}})),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(j.a,{to:"/"})}),Object(u.jsx)(j.b,{exact:!0,path:"/",render:function(e){return Object(u.jsx)(x,Object(s.a)(Object(s.a)({},e),{},{color:n}))}}),Object(u.jsx)(j.b,{exact:!0,path:"/generator",children:Object(u.jsx)(j.a,{to:"/generator"})}),Object(u.jsx)(j.b,{path:"/generator",render:function(e){return Object(u.jsx)(L,Object(s.a)(Object(s.a)({},e),{},{color:n}))}})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.6944bd62.chunk.js.map