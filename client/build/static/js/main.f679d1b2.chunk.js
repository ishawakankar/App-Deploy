(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/gitlab.11d38b71.png"},226:function(e,t,a){e.exports=a(646)},231:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){},315:function(e,t,a){},554:function(e,t,a){},582:function(e,t){},643:function(e,t,a){},646:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(48),c=a.n(r),o=(a(231),a(649)),i=a(650),s=a(651),m=a(66),u=a(67),p=a(69),d=a(68),h=a(70),E=a(217),f=a.n(E),b=(a(233),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"test",value:function(){console.log("clicked");fetch("/deploy",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"https://github.com/ishawakankar/test2.git"}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),l.a.createElement("a",{className:"App-link",id:"loginButton",href:"/auth"}," Connect using Gitlab ")))}}]),t}(n.Component)),v=a(219),g=a.n(v),N=a(220),k=a.n(N),y=a(146),j=a.n(y),w=a(221),O=a.n(w),x=a(141),A=a.n(x),B=a(142),C=a.n(B),S=a(73),M=a.n(S),I=a(143),P=a.n(I),U=a(144),T=a.n(U),W=a(648);a(235);var G=function(){return l.a.createElement("div",{className:"root"},l.a.createElement(A.a,{position:"static",className:"app"},l.a.createElement(C.a,null,l.a.createElement(W.a,{to:"/home",className:"lnk"},l.a.createElement(P.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},l.a.createElement(T.a,null))),l.a.createElement(W.a,{to:"/listUrl",className:"lnk"},l.a.createElement(M.a,{variant:"h6",color:"inherit",className:"grow"},"App")),l.a.createElement(W.a,{to:"/newApp",className:"lnk"},l.a.createElement(M.a,{variant:"h6",color:"inherit",className:"grow"},"NewApp")),l.a.createElement("span",{className:"heading"},"Rx-Actor Model"))))},R=(a(315),a(145)),_=a(548),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={listdata:[],data:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;R.Observable.fromPromise(fetch("/apps").then(function(e){return e.json()})).subscribe(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,l.a.createElement(G,null),this.state.data.map(function(e,t){return l.a.createElement("div",{className:"root"},l.a.createElement(g.a,{className:"card"},l.a.createElement(k.a,{avatar:l.a.createElement(j.a,{"aria-label":"Recipe",className:"avatar"},l.a.createElement(O.a,{className:"checkCircle"})),title:e.app_name+"( Id: "+e.appId+" )",subheader:_().format("llll")})))}))}}]),t}(l.a.Component),J=a(147),L=a.n(J),H=a(224),z=a.n(H),F=a(65),$=a.n(F),q=a(167),K=a.n(q),Q=a(222),V=a.n(Q);var X=function(e){return l.a.createElement("div",null,l.a.createElement(V.a,{className:"progress",thickness:7}))},Y=(a(554),a(13)),Z=a(193),ee=a(41),te=a(51),ae=a(223),ne=a.n(ae),le=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleClickButton=function(){console.log("inside handleClickButton",a.state.loading),document.getElementById("outlined-email-input2").value&&a.setState({context:l.a.createElement(X,null)})},a.state={context:"",data:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;Y.a.fromPromise(fetch("/auth").then(function(e){return e.json()})).subscribe(function(t){e.setState({data:t}),console.log("After fetching auth in add git"+t)})}},{key:"componentDidMount",value:function(){var e=this,t=ne()("http://localhost:5000");console.log("before rxjs"),Z.a(document.getElementById("outlined-email-input"),"click").pipe(Object(ee.a)(function(){return document.getElementById("outlined-email-input2").value}),Object(te.a)(function(e){return""!==e})).subscribe(function(t){fetch("/deploy",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:t})}).then(function(e){return e.json()}).then(function(t){return t&&e.setState({context:""}),t}).then(function(e){return console.log("this is res: ",e)})}),t.on("chat",function(e){document.getElementById("logger").style.display="block",document.getElementById("logger").innerHTML+="".concat(e," <br/>")})}},{key:"render",value:function(){var e=this.state.context;return l.a.createElement("div",{className:"main"},l.a.createElement(G,null),l.a.createElement($.a,{className:"root1",elevation:20},l.a.createElement("div",{className:"text1"},l.a.createElement(z.a,{id:"outlined-email-input2",label:"GitURL",className:"textField1",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"}),l.a.createElement(L.a,{variant:"outlined",color:"primary",className:"button1",id:"outlined-email-input",name:"buttonSubmit",onClick:this.handleClickButton},"Deploy"),e)),l.a.createElement($.a,{id:"logger",className:"root2",style:{maxHeight:150,overflow:"auto",padding:20,background:"black",color:"white",display:"none",fontSize:"0.8rem"}},l.a.createElement(K.a,null)))}}]),t}(l.a.Component),re=(a(643),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={listdata:[],data:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;R.Observable.fromPromise(fetch("/profile").then(function(e){return e.json()})).subscribe(function(t){e.setState({data:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(A.a,{position:"static",className:"app"},l.a.createElement(C.a,null,l.a.createElement(W.a,{to:"/home",className:"lnk"},l.a.createElement(P.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},l.a.createElement(T.a,null))),l.a.createElement(W.a,{to:"/listUrl",className:"lnk"},l.a.createElement(M.a,{variant:"h6",color:"inherit",className:"grow"},"App")),l.a.createElement(W.a,{to:"/newApp",className:"lnk"},l.a.createElement(M.a,{variant:"h6",color:"inherit",className:"grow"},"NewApp")),l.a.createElement("span",{className:"heading"},"Rx-Actor Model"))),l.a.createElement($.a,{className:"root1",elevation:20},l.a.createElement(L.a,{variant:"outlined",color:"primary",className:"button1",id:"outlined-email-input",name:"buttonSubmit",href:"/logout"},"Logout"),l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"text"},"Profile Details:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"flex-item"},l.a.createElement(j.a,{alt:"Thumb",src:"https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",className:"avatar1"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"flex-item1"},this.state.data.map(function(e,t){return l.a.createElement("div",{className:"root"},l.a.createElement("strong",null,"Name: ")," \xa0\xa0",e.displayName,l.a.createElement("br",null),l.a.createElement("strong",null,"Email: "),"\xa0\xa0 ",e.email,l.a.createElement("br",null),l.a.createElement("strong",null,"Gitlab username: ")," \xa0\xa0 ",e.userName," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Gitlab Profile: ")," \xa0\xa0",l.a.createElement("a",{href:e.profileUrl,target:"_blank"},e.profileUrl),l.a.createElement("br",null))})))))))}}]),t}(l.a.Component));var ce=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{path:"/",component:b,exact:!0}),l.a.createElement(s.a,null,l.a.createElement(i.a,{path:"/home",component:re}),l.a.createElement(i.a,{path:"/listUrl",component:D}),l.a.createElement(i.a,{path:"/newApp",component:le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,2,1]]]);
//# sourceMappingURL=main.f679d1b2.chunk.js.map