(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{124:function(e,t,n){e.exports=n(317)},129:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),i=n.n(r),u=(n(129),n(46)),o=n(4),l=n(26),s=n(18),p=n.n(s),m=(n(132),p.a.initializeApp({apiKey:"AIzaSyAUQhVrtSOLyzosiYKnWY0ekjrgwAwxiOw",authDomain:"unichat-b7576.firebaseapp.com",projectId:"unichat-b7576",storageBucket:"unichat-b7576.appspot.com",messagingSenderId:"104432896700",appId:"1:104432896700:web:cd671d002bbf5e9ab79eb9"}).auth()),h=c.a.createContext(),f=function(e){var t=e.children,n=Object(a.useState)(!0),r=Object(l.a)(n,2),i=r[0],u=r[1],s=Object(a.useState)(null),p=Object(l.a)(s,2),f=p[0],d=p[1],b=Object(o.f)();Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){d(e),u(!1),e&&b.push("/chats")}))}),[f,b]);var g={user:f};return c.a.createElement(h.Provider,{value:g},!i&&t)},d=n(27),b=n.n(d),g=n(69),v=n(3),E=n.n(v),j=n(122);function O(){var e=Object(a.useRef)(!1),t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],i=n[1],u=Object(a.useContext)(h).user,s=Object(o.f)();function p(){return(p=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(g.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,e.abrupt("return",new File([a],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(!e.current){if(e.current=!0,!u||null===u)return void s.push("/");E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"8e0eff7c-e8fe-4ccf-9d77-0d318bc46408","user-name":u.email,"user-secret":u.uid}}).then((function(){return i(!1)})).catch((function(e){var t=new FormData;t.append("email",u.email),t.append("username",u.email),t.append("secret",u.uid),function(e){return f.apply(this,arguments)}(u.photoURL).then((function(e){t.append("avatar",e,e.name),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"fce06895-9f21-4dd2-b7d9-57c3fddf9cf5"}}).then((function(){return i(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[u,s]),!u||r?c.a.createElement("div",null):c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:function(){return p.apply(this,arguments)},className:"logout-tab"},"Logout")),c.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"8e0eff7c-e8fe-4ccf-9d77-0d318bc46408",userName:u.email,userSecret:u.uid}))}var w=n(319),k=n(320),y=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Unichat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithPopup(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," Sign in with Google"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithPopup(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign in with Facebook")))};var S=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(u.a,null,c.a.createElement(f,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:y})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.47f82506.chunk.js.map