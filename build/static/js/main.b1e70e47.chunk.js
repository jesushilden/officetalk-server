(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t),n.d(t,"rootstore",(function(){return H}));var r=n(1),s=n(2),a=n.n(s),c=n(23),o=n.n(c),i=(n(60),n(4)),u=n.n(i),l=n(5),d=n(7),f=n(6),j=n(54),b=(n(91),n(92),function(e){return Object(r.jsx)("div",{className:"dots ".concat(e.white&&"white"),children:Object(r.jsx)("div",{className:"snippet","data-title":".dot-hourglass",children:Object(r.jsx)("div",{className:"stage",children:Object(r.jsx)("div",{className:"dot-flashing"})})})})}),m=n(20);var v=function(e){var t=H.userStore,n=Object(s.useState)(""),a=Object(d.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(""),f=Object(d.a)(i,2),j=f[0],v=f[1],h=Object(s.useState)(!1),p=Object(d.a)(h,2),O=p[0],x=p[1],g=Object(s.useState)("user"),N=Object(d.a)(g,2),w=N[0],k=N[1],S=function(e){return"user"===e&&"user"===w?"user-active":"organization"===e&&"organization"===w?"organization-active":""},y=function(){var n=Object(l.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==c&&""!==j){n.next=3;break}return alert("username and password required"),n.abrupt("return");case 3:return n.prev=3,x(!0),n.next=7,t.signIn(c,j);case 7:r=n.sent,e.connectSocket(r.token,r.user.organization),e.navigateTo("office"),x(!1),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(3),x(!1),v(""),alert("could not signin"),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("div",{className:"login-title",children:"Sign in to OfficeTalk"}),Object(r.jsxs)("div",{className:"login-card block-shadow",children:[Object(r.jsxs)("div",{className:"login-card-tabs",children:[Object(r.jsxs)("div",{className:"login-card-tab ".concat(S("user")),onClick:function(){return k("user")},children:[Object(r.jsx)(m.c,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"User"})]}),Object(r.jsxs)("div",{className:"login-card-tab ".concat(S("organization")),onClick:function(){return k("organization")},children:[Object(r.jsx)(m.b,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"Organization"})]})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Email",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Password",value:j,type:"password",onChange:function(e){return v(e.target.value)}})]}),Object(r.jsx)("div",{className:"login-input-row",children:Object(r.jsx)("div",{className:"OTButton",style:{background:"organization"===w&&"#F74040"},onClick:function(){return y()},children:O?Object(r.jsx)(b,{white:!0}):"Sign in"})})]})]})},h=(n(93),n(94),n(9)),p=Object(f.a)((function(e){var t=H.userStore,n=H.officeStore;return Object(r.jsxs)("div",{className:"navbar block-shadow",children:[Object(r.jsxs)("div",{className:"navbar-logo",children:[Object(r.jsx)("img",{className:"navbar-logo-image",src:n.organization.logo}),Object(r.jsx)("div",{className:"navbar-office-name",children:n.organization.name})]}),Object(r.jsxs)("div",{className:"navbar-controls",children:[Object(r.jsx)("div",{className:"navbar-controls-border"}),Object(r.jsxs)("div",{className:"navbar-room",children:[Object(r.jsx)("div",{className:"navbar-room-name",children:function(){var e=n.users.find((function(e){return e.userId===t.user._id}));if(!e)return"loading...";var r=e.position.room;return-1===r?"Hallway":n.office.rooms.find((function(e){return e._id===r})).name}()}),Object(r.jsx)("div",{className:"navbar-room-title",children:"current room"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.setMuted(!t.muted)},children:[t.muted?Object(r.jsx)(h.c,{size:22,className:"navbar-voice-microphone",color:"#F74040"}):Object(r.jsx)(h.b,{size:22,className:"navbar-voice-microphone",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"microphone"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.silenced?t.setSilenced(!1):(t.setSilenced(!0),t.setMuted(!0))},children:[t.silenced?Object(r.jsx)(h.g,{size:22,className:"navbar-voice-volume",color:"#F74040"}):Object(r.jsx)(h.f,{size:22,className:"navbar-voice-volume",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"volume"})]}),Object(r.jsxs)("div",{className:"navbar-settings",onClick:function(){return e.setShowSettings(!0)},children:[Object(r.jsx)(h.d,{size:22,className:"navbar-settings-cog",color:"#404145"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"settings"})]}),Object(r.jsx)("div",{className:"navbar-controls-border"})]}),Object(r.jsxs)("div",{className:"navbar-user",children:[t.user.name,Object(r.jsx)("div",{className:"navbar-user-avatar",style:{backgroundImage:"url(".concat(t.user.avatar,")")}}),Object(r.jsx)("div",{className:"navbar-sign-out",onClick:function(){return t.signOut(),e.disconnectSocket(),void e.navigateTo("login")},children:"Sign out"})]})]})})),O=(n(95),n(96),Object(f.a)((function(e){var t=H.userStore;return Object(r.jsx)("div",{className:"message ".concat(function(){if(e.message.author._id===t.user._id)return" my-message"}()),children:Object(r.jsxs)("div",{className:"message-buble",children:[Object(r.jsx)("div",{className:"message-author",children:e.message.author.name}),Object(r.jsx)("div",{className:"message-content",children:e.message.content})]})})}))),x=Object(f.a)((function(e){var t=Object(s.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),i=Object(d.a)(o,2),f=i[0],j=i[1],v=Object(s.useState)("office"),h=Object(d.a)(v,2),p=h[0],x=h[1],g=H.officeStore,N=H.userStore,w=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,g.sendMessage(a);case 3:t=e.sent,j(!1),c(""),t||window.alert("sending message failed");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"chat block-shadow",children:[Object(r.jsxs)("div",{className:"chat-tabs block-shadow",children:[Object(r.jsx)("div",{className:"chat-tab ".concat("office"===p&&"chat-tab-active"),onClick:function(){return x("office")},children:"Office"}),Object(r.jsx)("div",{className:"chat-tab ".concat("room"===p&&"chat-tab-active"),onClick:function(){return x("room")},children:function(){var e=g.users.find((function(e){return e.userId===N.user._id}));if(!e)return"loading...";var t=e.position.room;return-1===t?"Hallway":g.office.rooms.find((function(e){return e._id===t})).name}()})]}),Object(r.jsx)("div",{className:"chat-messages",children:H.officeStore.office.messages.map((function(e,t){return Object(r.jsx)(O,{message:e},t)}))}),Object(r.jsx)("div",{className:"chat-controls",children:Object(r.jsxs)("div",{className:"chat-input-container",children:[Object(r.jsx)("input",{value:a,placeholder:"Say something",onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("div",{className:"chat-send",onClick:w,children:f?Object(r.jsx)(b,{}):Object(r.jsx)(m.a,{size:30})})]})})]})})),g=(n(97),n(98),Object(f.a)((function(e){var t=H.userStore;return Object(r.jsxs)("div",{className:"room ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"," ").concat(e.bottomRoom&&"bottom-room"),id:"room".concat(e.room._id),children:[Object(r.jsx)("div",{className:"room-top",children:e.room.name}),Object(r.jsx)("div",{className:"room-content",onDoubleClick:function(n){return e.move(n,e.room._id,t.user._id)}}),Object(r.jsx)("div",{className:"room-bottom",children:Object(r.jsx)("div",{className:"room-door",id:"door".concat(e.room._id)})})]})}))),N=(n(99),Object(f.a)((function(e){var t=H.userStore;return Object(r.jsx)("div",{className:"hallway ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"),onDoubleClick:function(n){return e.move(n,-1,t.user._id)}})}))),w=(n(100),Object(f.a)((function(e){var t=H.officeStore,n=H.userStore;return Object(r.jsx)("div",{className:"avatar",style:{top:e.user.position.coordinates.y,left:e.user.position.coordinates.x,transition:"all ".concat(e.user.transitionTime,"s ease-in-out"),border:"2px solid ".concat(e.user.userId===n.user._id?"#1CBF73":"black"),backgroundImage:"url(".concat(function(){var n=t.organization.employees.find((function(t){return t._id===e.user.userId}));return n?n.avatar:"laoding..."}(),")")}})}))),k=Object(f.a)((function(){var e=H.officeStore,t=e.office.rooms.length,n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},s=function(t,n,r){var s=document.getElementById("rooms"),u=e.users.find((function(e){return e.userId===r}));n!==u.position.room?-1===n?a(r,s,t,n,u):-1===u.position.room?c(u,s,t,n,r):o(s,t,n,u):i(r,t,n)},a=function(){var e=Object(l.a)(u.a.mark((function e(t,r,s,a,c){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=d(t,r,c.position.room),e.next=3,n(1e3*o);case 3:i(t,s,a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,s,a){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(u.a.mark((function e(t,r,s,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=d(t.userId,r,a),e.next=3,n(1e3*c);case 3:i(t.userId,s,a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(u.a.mark((function e(t,r,s,a){var c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=d(a.userId,t,a.position.room),e.next=3,n(1e3*c);case 3:return o=d(a.userId,t,s),e.next=6,n(1e3*o);case 6:i(a.userId,r,s);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),i=function(t,n,r){var s=e.users.find((function(e){return e.userId===t})),a=document.getElementById("rooms"),c=n.clientX-a.offsetLeft,o=n.clientY-a.offsetTop,i=f(s.position.coordinates.x,s.position.coordinates.y,c,o);return e.changePosition(t,{room:r,coordinates:{x:c,y:o}},i),i},d=function(t,n,r){var s=e.users.find((function(e){return e.userId===t})),a=document.getElementById("door".concat(r)),c=a.offsetLeft+30,o=a.offsetTop,i=f(s.position.coordinates.x,s.position.coordinates.y,c,o);return e.changePosition(t,{room:s.position.room,coordinates:{x:c,y:o}},i),i},f=function(e,t,n,r){var s=Math.abs(e-n),a=Math.abs(t-r);return.01*Math.hypot(s,a)};return Object(r.jsxs)("div",{className:"rooms",id:"rooms",children:[Object(r.jsx)("div",{className:"rooms-row",children:e.office.rooms.map((function(e,t){return t%2===0?Object(r.jsx)(g,{room:e,first:0===t,move:s}):null}))}),Object(r.jsx)(N,{move:s}),Object(r.jsxs)("div",{className:"rooms-row",children:[e.office.rooms.map((function(e,t){return t%2===1?Object(r.jsx)(g,{room:e,bottomRoom:!0,first:1===t,move:s}):null})),t%2===1&&Object(r.jsx)("div",{className:"room-block-empty"})]}),Object(r.jsx)("div",{className:"user-layer",children:e.users.map((function(e){return Object(r.jsx)(w,{user:e},e._id)}))})]})})),S=(n(101),function(e){return Object(r.jsxs)("div",{className:"loading",children:[Object(r.jsx)("div",{className:"loading-text",children:"Loading Office"}),Object(r.jsx)(b,{})]})}),y=(n(102),Object(f.a)((function(e){var t=H.officeStore,n=function(e){return t.users.find((function(t){return t._id===e._id}))};return Object(r.jsxs)("div",{className:"coworkers block-shadow",style:{right:e.show?"0px":"-250px"},children:[Object(r.jsx)("div",{className:"coworkers-header",children:"Co-workers"}),Object(r.jsx)("div",{className:"coworkers-header-back",onClick:function(){return e.close()},children:Object(r.jsx)(h.a,{size:25})}),Object(r.jsx)("div",{className:"coworkers-names",children:t.organization.employees.map((function(e){return Object(r.jsxs)("div",{className:"coworkers-user",children:[Object(r.jsx)("div",{className:"coworkers-user-avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),Object(r.jsxs)("div",{className:"coworkers-user-name ".concat(n(e)&&"user-online"),children:[" ",e.name," "]})]})}))})]})}))),z=n(24),I=n(29),C=(n(103),Object(f.a)((function(e){var t=H.userStore,n=(H.officeStore,Object(s.useState)("transparent")),a=Object(d.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(!1),f=Object(d.a)(i,2),j=f[0],m=f[1],v=Object(s.useState)(JSON.parse(JSON.stringify(t.user))),p=Object(d.a)(v,2),O=p[0],x=p[1],g=Object(s.useState)(!1),N=Object(d.a)(g,2),w=N[0],k=N[1];Object(s.useEffect)((function(){o("rgba(64, 65, 69, 0.5)")}),[]);var S=function(e,t){j||m(!0),x(Object(I.a)(Object(I.a)({},O),{},Object(z.a)({},e,t.target.value)))},y=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.next=5,t.updateUser(O);case 5:n=e.sent,k(!1),n?m(!1):alert("could not save user");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"settings-background",style:{background:c},children:Object(r.jsxs)("div",{className:"settings-modal block-shadow",children:[Object(r.jsx)("div",{className:"settings-top-row",children:Object(r.jsx)(h.h,{size:25,style:{margin:"10px",cursor:"pointer"},color:"#404145",onClick:function(){return e.setShowSettings(!1)}})}),Object(r.jsxs)("div",{className:"settings-content",children:[Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsx)("div",{className:"settings-avatar",style:{backgroundImage:"url(".concat(O.avatar,")")}})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Avatar url"}),Object(r.jsx)("input",{value:O.avatar,onChange:function(e){return S("avatar",e)}})]})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Name"}),Object(r.jsx)("input",{value:O.name,onChange:function(e){return S("name",e)}})]})})]}),Object(r.jsx)("div",{className:"settings-bottom-row",children:Object(r.jsx)("div",{className:"settings-save-button ".concat(j&&"unsaved-changes"),onClick:function(){return y()},children:w?Object(r.jsx)(b,{white:!0}):"Save"})})]})})}))),_=Object(f.a)((function(e){var t=H.officeStore,n=H.userStore,a=Object(s.useState)(!1),c=Object(d.a)(a,2),o=c[0],i=c[1],f=Object(s.useState)(!1),j=Object(d.a)(f,2),b=j[0],m=j[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchOffice(n.user.organization);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),t.office?Object(r.jsxs)("div",{className:"office",children:[Object(r.jsx)(p,{navigateTo:e.navigateTo,disconnectSocket:e.disconnectSocket,setShowSettings:m}),Object(r.jsxs)("div",{className:"office-body",children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{className:"office-body-scrollable",children:Object(r.jsx)(k,{})})]}),Object(r.jsxs)("div",{className:"office-toggle-coworkers",onClick:function(){return i(!o)},children:[Object(r.jsx)(h.e,{style:{marginRight:"3px"},size:18}),"Co-workers (".concat(t.organization.employees.length,")")]}),Object(r.jsx)(y,{show:o,close:function(){return i(!1)}}),b&&Object(r.jsx)(C,{setShowSettings:m})]}):Object(r.jsx)(S,{})})),T=(n(104),Object(f.a)((function(){var e=H.userStore,t=H.officeStore,n=Object(s.useState)("login"),a=Object(d.a)(n,2),c=a[0],o=a[1],i=Object(s.useRef)();Object(s.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkSignIn();case 2:(n=t.sent).user&&o("office"),f(n.token,n.user.organization);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var f=function(e,n){i.current=j.io.connect("/".concat(n),{auth:{token:e}}),i.current.on("message",(function(e){t.receiveMessage(e)})),i.current.on("employees",(function(e){t.setEmployeeStates(e)}))},b=function(){i.current.disconnect()};return Object(r.jsx)("div",{className:"App",children:function(){switch(c){case"login":return Object(r.jsx)(v,{navigateTo:o,connectSocket:f});case"office":return Object(r.jsx)(_,{navigateTo:o,disconnectSocket:b});case"controlPanel":default:return Object(r.jsx)(v,{navigateTo:o})}}()})}))),M=n(18),E=n(3),J=n(10),B=n.n(J),P={getOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat("/api/organizations","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={sendOfficeMessage:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat("/api/messages"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function e(t){var n=this;Object(M.a)(this,e),this.rootStore=null,this.office=null,this.organization=null,this.users=[{id:"600fddd784a2d221e466a3f9",name:"Axel Baumgartner",position:{room:-1,coordinates:{x:5,y:360}},transitionTime:2},{id:"600fdd8584a2d221e466a3f8",name:"600fddd784a2d221e466a3f9",position:{room:-1,coordinates:{x:5,y:360}},transitionTime:2}],this.fetchOffice=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getOrganization(t);case 2:return r=e.sent,n.organization=r,n.office=r.office,console.log("current organization:",n.organization),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setEmployeeStates=function(e){console.log(e),n.users=e},this.sendMessage=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.sendOfficeMessage({content:t});case 3:if(!(r=e.sent)){e.next=7;break}return n.office.messages.find((function(e){return e._id===r._id}))||((s=JSON.parse(JSON.stringify(n.office))).messages.unshift(r),n.office=s),e.abrupt("return",r);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.receiveMessage=function(e){if(!n.office.messages.find((function(t){return t._id===e._id}))){var t=JSON.parse(JSON.stringify(n.office));t.messages.unshift(e),n.office=t}},this.changePosition=function(e,t,r){var s=JSON.parse(JSON.stringify(n.users));s.find((function(t){return t.userId===e})).position=t,s.find((function(t){return t.userId===e})).transitionTime=r,n.users=s},this.rootStore=t,Object(E.n)(this,{rootStore:E.o,office:E.o,organization:E.o,users:E.o,receiveMessage:E.f,changePosition:E.f,sendMessage:E.f,fetchOffice:E.f,setEmployeeStates:E.f})},U={updateEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.put("".concat("/api/employees","/").concat(t._id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A="/api/signin",L={signInWithToken:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post(A);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signInEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(A,"/employee"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signInOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(A,"/organization"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),SignOut:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(A,"/signout"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},D=function e(t){var n=this;Object(M.a)(this,e),this.rootStore=null,this.user=null,this.muted=!1,this.silenced=!1,this.signIn=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.signInEmployee({username:t,password:r});case 2:return s=e.sent,n.user=s.user,console.log("current user:",n.user),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.checkSignIn=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.signInWithToken();case 2:return t=e.sent,n.user=t.user,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),this.signOut=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.SignOut();case 2:n.user=null;case 3:case"end":return e.stop()}}),e)}))),this.updateUser=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.updateEmployee(t);case 3:return r=e.sent,n.user=r,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.setMuted=function(e){n.muted=e},this.setSilenced=function(e){n.silenced=e},this.rootStore=t,Object(E.n)(this,{rootStore:E.o,user:E.o,muted:E.o,silenced:E.o,signIn:E.f,checkSignIn:E.f,signOut:E.f,updateUser:E.f,setMuted:E.f,setSilenced:E.f})},H=new function e(){Object(M.a)(this,e),this.officeStore=new R(this),this.userStore=new D(this),Object(E.m)(this)};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))},60:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.b1e70e47.chunk.js.map