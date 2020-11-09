(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{145:function(e,t,n){e.exports=n(286)},150:function(e,t,n){},151:function(e,t,n){},176:function(e,t){},178:function(e,t){},192:function(e,t){},194:function(e,t){},222:function(e,t){},224:function(e,t){},225:function(e,t){},231:function(e,t){},233:function(e,t){},251:function(e,t){},253:function(e,t){},265:function(e,t){},268:function(e,t){},286:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(48),o=n.n(r),c=(n(150),n(151),n(15)),u=n(4),i=n(23),s=n(142),m=n(22),E=n(24),p=n(156),d={isAuthenticated:!1,user:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!p(t.payload),user:t.payload});default:return e}},f={message:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERROR":return Object(E.a)(Object(E.a)({},e),{},{message:t.payload});case"CLEAR_ERROR":return Object(E.a)(Object(E.a)({},e),{},{message:null});default:return e}},g=Object(i.c)({auth:h,error:b}),O=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"MERN STACK APPLICATION"))},v=n(17),j=n(21),w=n.n(j),R=function(e){e?w.a.defaults.headers.common.Authorization=e:delete w.a.defaults.headers.common.Authorization},y=n(144),S=n.n(y),_=function(e){return{type:"SET_CURRENT_USER",payload:e}},T=Object(m.b)((function(e){return{auth:e.auth,error:e.error.message}}))(Object(u.f)((function(e){var t=Object(a.useState)(""),n=Object(v.a)(t,2),r=n[0],o=n[1],u=Object(a.useState)(""),i=Object(v.a)(u,2),s=i[0],m=i[1],E=Object(a.useState)(""),p=Object(v.a)(E,2),d=p[0],h=p[1],f=Object(a.useState)(""),b=Object(v.a)(f,2),g=b[0],O=b[1],j=Object(a.useState)({}),R=Object(v.a)(j,2),y=R[0],S=R[1],_={name:r,email:s,password:d,confirmPassword:g};Object(a.useEffect)((function(){T()}),[e.error]);var T=function(){null!==e.error&&S(e.error.errors)};console.log("error",y);return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},"BACK TO HOME"),l.a.createElement("h3",null,"Sign up below"),l.a.createElement("h5",null,"Already have an account? ",l.a.createElement(c.b,{to:"/login"},"Log in")),l.a.createElement("br",null),y.length>0?l.a.createElement("ul",null,y.map((function(e,t){return l.a.createElement("li",{key:t},e.msg)}))):null,l.a.createElement("div",null,l.a.createElement("form",{action:"",onSubmit:function(t){var n,a;t.preventDefault(),e.dispatch((n=_,a=e.history,function(e){w.a.post("/signup",n).then((function(e){a.push("/login"),console.log(e)})).catch((function(t){e({type:"GET_ERROR",payload:t.response.data}),e({type:"CLEAR_ERROR"})}))}))}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",value:s,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",value:d,onChange:function(e){return h(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),l.a.createElement("input",{type:"password",id:"confirmPassword",value:g,onChange:function(e){return O(e.target.value)}})),l.a.createElement("button",{type:"submit"},"SIGN UP"))))}))),C=Object(m.b)((function(e){return console.log("state",e),{auth:e.auth}}))(Object(u.f)((function(e){console.log("props",e);return l.a.createElement("div",null,l.a.createElement("h3",null,"Hey there, ",e.auth.user.userName),l.a.createElement("h5",null,"You are logged in a full-stack MERN application."),l.a.createElement("button",{onClick:function(){var t;e.dispatch((t=e.history,function(e){localStorage.removeItem("jwtToken"),R(!1),e(_({})),t.push("/")}))}},"LOGOUT"))}))),N=Object(m.b)((function(e){return console.log("state",e),{auth:e.auth,error:e.error.message}}))(Object(u.f)((function(e){console.log("props",e);var t=Object(a.useState)(""),n=Object(v.a)(t,2),r=n[0],o=n[1],u=Object(a.useState)(""),i=Object(v.a)(u,2),s=i[0],m=i[1],E=Object(a.useState)({}),p=Object(v.a)(E,2),d=p[0],h=p[1],f={email:r,password:s};Object(a.useEffect)((function(){b()}),[e.error]);var b=function(){null!==e.error&&h(e.error.errors)};console.log("error",d);return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},"BACK TO HOME"),l.a.createElement("h3",null,"Log in below"),l.a.createElement("h5",null,"Don't have an account? ",l.a.createElement(c.b,{to:"/signup"},"Sign up")),l.a.createElement("br",null),l.a.createElement("br",null),d.length>0?l.a.createElement("ul",null,d.map((function(e,t){return l.a.createElement("li",{key:t},e.msg)}))):null,l.a.createElement("div",null,l.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e.dispatch(function(e,t){return function(n){w.a.post("/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),R(a),n(_(S.a.decode(a))),t.push("/dashboard")})).catch((function(e){n({type:"GET_ERROR",payload:e.response.data}),n({type:"CLEAR_ERROR"})}))}}(f,e.history))}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",value:s,onChange:function(e){return m(e.target.value)}})),l.a.createElement("button",{type:"submit"},"LOG IN"))))}))),A=function(){return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Build")," a login/auth app with MERN STACK"),l.a.createElement("h5",null,"Create a minimal full-stack app with user authentication via JWT token"),l.a.createElement(c.b,{to:"/signup"},l.a.createElement("button",null,"SIGN UP")),l.a.createElement(c.b,{to:"/login"},l.a.createElement("button",null,"LOG IN")))},k=Object(i.e)(g,Object(i.d)(Object(i.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var I=function(){return l.a.createElement(m.a,{store:k},l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/signup",component:T}),l.a.createElement(u.a,{path:"/login",component:N}),l.a.createElement(u.a,{path:"/dashboard",component:C}),l.a.createElement(u.a,{path:"/",exact:!0,component:A})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.1ac17935.chunk.js.map