(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t),n.d(t,"rootstore",(function(){return H}));var r=n(1),c=n(2),s=n.n(c),a=n(23),i=n.n(a),o=(n(60),n(4)),u=n.n(o),l=n(5),f=n(7),d=n(6),j=n(54),b=(n(91),n(92),function(e){return Object(r.jsx)("div",{className:"dots ".concat(e.white&&"white"),children:Object(r.jsx)("div",{className:"snippet","data-title":".dot-hourglass",children:Object(r.jsx)("div",{className:"stage",children:Object(r.jsx)("div",{className:"dot-flashing"})})})})}),m=n(20);var v=function(e){var t=H.userStore,n=Object(c.useState)(""),s=Object(f.a)(n,2),a=s[0],i=s[1],o=Object(c.useState)(""),d=Object(f.a)(o,2),j=d[0],v=d[1],h=Object(c.useState)(!1),O=Object(f.a)(h,2),p=O[0],x=O[1],g=Object(c.useState)("user"),N=Object(f.a)(g,2),w=N[0],k=N[1],S=function(e){return"user"===e&&"user"===w?"user-active":"organization"===e&&"organization"===w?"organization-active":""},y=function(){var n=Object(l.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==a&&""!==j){n.next=3;break}return alert("username and password required"),n.abrupt("return");case 3:return n.prev=3,x(!0),n.next=7,t.signIn(a,j);case 7:r=n.sent,e.connectSocket(r.token,r.user.organization),e.navigateTo("office"),x(!1),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(3),x(!1),v(""),alert("could not signin"),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("div",{className:"login-title",children:"Sign in to OfficeTalk"}),Object(r.jsxs)("div",{className:"login-card block-shadow",children:[Object(r.jsxs)("div",{className:"login-card-tabs",children:[Object(r.jsxs)("div",{className:"login-card-tab ".concat(S("user")),onClick:function(){return k("user")},children:[Object(r.jsx)(m.c,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"User"})]}),Object(r.jsxs)("div",{className:"login-card-tab ".concat(S("organization")),onClick:function(){return k("organization")},children:[Object(r.jsx)(m.b,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"Organization"})]})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Email",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Password",value:j,type:"password",onChange:function(e){return v(e.target.value)}})]}),Object(r.jsx)("div",{className:"login-input-row",children:Object(r.jsx)("div",{className:"OTButton",style:{background:"organization"===w&&"#F74040"},onClick:function(){return y()},children:p?Object(r.jsx)(b,{white:!0}):"Sign in"})})]})]})},h=(n(93),n(94),n(9)),O=Object(d.a)((function(e){var t=H.userStore,n=H.officeStore;return Object(r.jsxs)("div",{className:"navbar block-shadow",children:[Object(r.jsxs)("div",{className:"navbar-logo",children:[Object(r.jsx)("img",{className:"navbar-logo-image",src:n.organization.logo}),Object(r.jsx)("div",{className:"navbar-office-name",children:n.organization.name})]}),Object(r.jsxs)("div",{className:"navbar-controls",children:[Object(r.jsx)("div",{className:"navbar-controls-border"}),Object(r.jsxs)("div",{className:"navbar-room",children:[Object(r.jsx)("div",{className:"navbar-room-name",children:function(){var e=n.users.find((function(e){return e.id===t.user._id})).position.room;return-1===e?"Hallway":n.office.rooms.find((function(t){return t._id===e})).name}()}),Object(r.jsx)("div",{className:"navbar-room-title",children:"current room"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.setMuted(!t.muted)},children:[t.muted?Object(r.jsx)(h.c,{size:22,className:"navbar-voice-microphone",color:"#F74040"}):Object(r.jsx)(h.b,{size:22,className:"navbar-voice-microphone",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"microphone"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.silenced?t.setSilenced(!1):(t.setSilenced(!0),t.setMuted(!0))},children:[t.silenced?Object(r.jsx)(h.g,{size:22,className:"navbar-voice-volume",color:"#F74040"}):Object(r.jsx)(h.f,{size:22,className:"navbar-voice-volume",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"volume"})]}),Object(r.jsxs)("div",{className:"navbar-settings",onClick:function(){return e.setShowSettings(!0)},children:[Object(r.jsx)(h.d,{size:22,className:"navbar-settings-cog",color:"#404145"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"settings"})]}),Object(r.jsx)("div",{className:"navbar-controls-border"})]}),Object(r.jsxs)("div",{className:"navbar-user",children:[t.user.name,Object(r.jsx)("div",{className:"navbar-user-avatar",style:{backgroundImage:"url(".concat(t.user.avatar,")")}}),Object(r.jsx)("div",{className:"navbar-sign-out",onClick:function(){return t.signOut(),e.disconnectSocket(),void e.navigateTo("login")},children:"Sign out"})]})]})})),p=(n(95),n(96),Object(d.a)((function(e){var t=H.userStore;return Object(r.jsx)("div",{className:"message ".concat(function(){if(e.message.author._id===t.user._id)return" my-message"}()),children:Object(r.jsxs)("div",{className:"message-buble",children:[Object(r.jsx)("div",{className:"message-author",children:e.message.author.name}),Object(r.jsx)("div",{className:"message-content",children:e.message.content})]})})}))),x=Object(d.a)((function(e){var t=Object(c.useState)(""),n=Object(f.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(f.a)(i,2),d=o[0],j=o[1],v=Object(c.useState)("office"),h=Object(f.a)(v,2),O=h[0],x=h[1],g=H.officeStore,N=H.userStore,w=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,g.sendMessage(s);case 3:t=e.sent,j(!1),a(""),t||window.alert("sending message failed");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"chat block-shadow",children:[Object(r.jsxs)("div",{className:"chat-tabs block-shadow",children:[Object(r.jsx)("div",{className:"chat-tab ".concat("office"===O&&"chat-tab-active"),onClick:function(){return x("office")},children:"Office"}),Object(r.jsx)("div",{className:"chat-tab ".concat("room"===O&&"chat-tab-active"),onClick:function(){return x("room")},children:function(){var e=g.users.find((function(e){return e.id===N.user._id})).position.room;return-1===e?"Hallway":g.office.rooms.find((function(t){return t._id===e})).name}()})]}),Object(r.jsx)("div",{className:"chat-messages",children:H.officeStore.office.messages.map((function(e,t){return Object(r.jsx)(p,{message:e},t)}))}),Object(r.jsx)("div",{className:"chat-controls",children:Object(r.jsxs)("div",{className:"chat-input-container",children:[Object(r.jsx)("input",{value:s,placeholder:"Say something",onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("div",{className:"chat-send",onClick:w,children:d?Object(r.jsx)(b,{}):Object(r.jsx)(m.a,{size:30})})]})})]})})),g=(n(97),n(98),Object(d.a)((function(e){var t=H.userStore;return Object(r.jsxs)("div",{className:"room ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"," ").concat(e.bottomRoom&&"bottom-room"),id:"room".concat(e.room._id),children:[Object(r.jsx)("div",{className:"room-top",children:e.room.name}),Object(r.jsx)("div",{className:"room-content",onDoubleClick:function(n){return e.move(n,e.room._id,t.user._id)}}),Object(r.jsx)("div",{className:"room-bottom",children:Object(r.jsx)("div",{className:"room-door",id:"door".concat(e.room._id)})})]})}))),N=(n(99),Object(d.a)((function(e){var t=H.userStore;return Object(r.jsx)("div",{className:"hallway ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"),onDoubleClick:function(n){return e.move(n,-1,t.user._id)}})}))),w=(n(100),Object(d.a)((function(e){var t=H.officeStore,n=H.userStore;return Object(r.jsx)("div",{className:"avatar",style:{top:e.user.position.cordinates.y,left:e.user.position.cordinates.x,transition:"all ".concat(e.user.transitionTime,"s ease-in-out"),border:"2px solid ".concat(e.user.id===n.user._id?"#1CBF73":"black"),backgroundImage:"url(".concat(t.organization.employees.find((function(t){return t._id===e.user.id})).avatar,")")}})}))),k=Object(d.a)((function(){var e=H.officeStore,t=e.office.rooms.length,n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},c=function(t,n,r){var c=document.getElementById("rooms"),u=e.users.find((function(e){return e.id===r}));n!==u.position.room?-1===n?s(r,c,t,n,u):-1===u.position.room?a(u,c,t,n,r):i(c,t,n,u):o(r,t,n)},s=function(){var e=Object(l.a)(u.a.mark((function e(t,r,c,s,a){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f(t,r,a.position.room),e.next=3,n(1e3*i);case 3:o(t,c,s);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,c,s){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(u.a.mark((function e(t,r,c,s){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f(t.id,r,s),e.next=3,n(1e3*a);case 3:o(t.id,c,s);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(t,r,c,s){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f(s.id,t,s.position.room),e.next=3,n(1e3*a);case 3:return i=f(s.id,t,c),e.next=6,n(1e3*i);case 6:o(s.id,r,c);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),o=function(t,n,r){var c=e.users.find((function(e){return e.id===t})),s=document.getElementById("rooms"),a=n.clientX-s.offsetLeft,i=n.clientY-s.offsetTop,o=d(c.position.cordinates.x,c.position.cordinates.y,a,i);return e.changePosition(t,{room:r,cordinates:{x:a,y:i}},o),o},f=function(t,n,r){var c=e.users.find((function(e){return e.id===t})),s=document.getElementById("door".concat(r)),a=s.offsetLeft-n.offsetLeft+30,i=s.offsetTop-n.offsetTop,o=d(c.position.cordinates.x,c.position.cordinates.y,a,i);return e.changePosition(t,{room:c.position.room,cordinates:{x:a,y:i}},o),o},d=function(e,t,n,r){var c=Math.abs(e-n),s=Math.abs(t-r);return.01*Math.hypot(c,s)};return Object(r.jsxs)("div",{className:"rooms",id:"rooms",children:[Object(r.jsx)("div",{className:"rooms-row",children:e.office.rooms.map((function(e,t){return t%2===0?Object(r.jsx)(g,{room:e,first:0===t,move:c}):null}))}),Object(r.jsx)(N,{move:c}),Object(r.jsxs)("div",{className:"rooms-row",children:[e.office.rooms.map((function(e,t){return t%2===1?Object(r.jsx)(g,{room:e,bottomRoom:!0,first:1===t,move:c}):null})),t%2===1&&Object(r.jsx)("div",{className:"room-block-empty"})]}),Object(r.jsx)("div",{className:"user-layer",children:e.users.map((function(e){return Object(r.jsx)(w,{user:e},e.id)}))})]})})),S=(n(101),function(e){return Object(r.jsxs)("div",{className:"loading",children:[Object(r.jsx)("div",{className:"loading-text",children:"Loading Office"}),Object(r.jsx)(b,{})]})}),y=(n(102),Object(d.a)((function(e){var t=H.officeStore,n=function(e){return t.users.find((function(t){return t.id===e._id}))};return Object(r.jsxs)("div",{className:"coworkers block-shadow",style:{right:e.show?"0px":"-250px"},children:[Object(r.jsx)("div",{className:"coworkers-header",children:"Co-workers"}),Object(r.jsx)("div",{className:"coworkers-header-back",onClick:function(){return e.close()},children:Object(r.jsx)(h.a,{size:25})}),Object(r.jsx)("div",{className:"coworkers-names",children:t.organization.employees.map((function(e){return Object(r.jsxs)("div",{className:"coworkers-user",children:[Object(r.jsx)("div",{className:"coworkers-user-avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),Object(r.jsxs)("div",{className:"coworkers-user-name ".concat(n(e)&&"user-online"),children:[" ",e.name," "]})]})}))})]})}))),z=n(24),C=n(29),I=(n(103),Object(d.a)((function(e){var t=H.userStore,n=(H.officeStore,Object(c.useState)("transparent")),s=Object(f.a)(n,2),a=s[0],i=s[1],o=Object(c.useState)(!1),d=Object(f.a)(o,2),j=d[0],m=d[1],v=Object(c.useState)(JSON.parse(JSON.stringify(t.user))),O=Object(f.a)(v,2),p=O[0],x=O[1],g=Object(c.useState)(!1),N=Object(f.a)(g,2),w=N[0],k=N[1];Object(c.useEffect)((function(){i("rgba(64, 65, 69, 0.5)")}),[]);var S=function(e,t){j||m(!0),x(Object(C.a)(Object(C.a)({},p),{},Object(z.a)({},e,t.target.value)))},y=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.next=5,t.updateUser(p);case 5:n=e.sent,k(!1),n?m(!1):alert("could not save user");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"settings-background",style:{background:a},children:Object(r.jsxs)("div",{className:"settings-modal block-shadow",children:[Object(r.jsx)("div",{className:"settings-top-row",children:Object(r.jsx)(h.h,{size:25,style:{margin:"10px",cursor:"pointer"},color:"#404145",onClick:function(){return e.setShowSettings(!1)}})}),Object(r.jsxs)("div",{className:"settings-content",children:[Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsx)("div",{className:"settings-avatar",style:{backgroundImage:"url(".concat(p.avatar,")")}})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Avatar url"}),Object(r.jsx)("input",{value:p.avatar,onChange:function(e){return S("avatar",e)}})]})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Name"}),Object(r.jsx)("input",{value:p.name,onChange:function(e){return S("name",e)}})]})})]}),Object(r.jsx)("div",{className:"settings-bottom-row",children:Object(r.jsx)("div",{className:"settings-save-button ".concat(j&&"unsaved-changes"),onClick:function(){return y()},children:w?Object(r.jsx)(b,{white:!0}):"Save"})})]})})}))),T=Object(d.a)((function(e){var t=H.officeStore,n=H.userStore,s=Object(c.useState)(!1),a=Object(f.a)(s,2),i=a[0],o=a[1],d=Object(c.useState)(!1),j=Object(f.a)(d,2),b=j[0],m=j[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchOffice(n.user.organization);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),t.office?Object(r.jsxs)("div",{className:"office",children:[Object(r.jsx)(O,{navigateTo:e.navigateTo,disconnectSocket:e.disconnectSocket,setShowSettings:m}),Object(r.jsxs)("div",{className:"office-body",children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{className:"office-body-scrollable",children:Object(r.jsx)(k,{})})]}),Object(r.jsxs)("div",{className:"office-toggle-coworkers",onClick:function(){return o(!i)},children:[Object(r.jsx)(h.e,{style:{marginRight:"3px"},size:18}),"Co-workers (".concat(t.organization.employees.length,")")]}),Object(r.jsx)(y,{show:i,close:function(){return o(!1)}}),b&&Object(r.jsx)(I,{setShowSettings:m})]}):Object(r.jsx)(S,{})})),_=(n(104),Object(d.a)((function(){var e=H.userStore,t=H.officeStore,n=Object(c.useState)("login"),s=Object(f.a)(n,2),a=s[0],i=s[1],o=Object(c.useRef)();Object(c.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkSignIn();case 2:(n=t.sent).user&&i("office"),d(n.token,n.user.organization);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var d=function(e,n){o.current=j.io.connect("/".concat(n),{auth:{token:e}}),o.current.on("message",(function(e){t.receiveMessage(e)})),o.current.on("employees",(function(e){console.log(e)}))},b=function(){o.current.disconnect()};return Object(r.jsx)("div",{className:"App",children:function(){switch(a){case"login":return Object(r.jsx)(v,{navigateTo:i,connectSocket:d});case"office":return Object(r.jsx)(T,{navigateTo:i,disconnectSocket:b});case"controlPanel":default:return Object(r.jsx)(v,{navigateTo:i})}}()})}))),M=n(18),E=n(3),J=n(10),B=n.n(J),P={getOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat("/api/organizations","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={sendOfficeMessage:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat("/api/messages"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function e(t){var n=this;Object(M.a)(this,e),this.rootStore=null,this.office=null,this.organization=null,this.users=[{id:"600fddd784a2d221e466a3f9",name:"Axel Baumgartner",position:{room:-1,cordinates:{x:5,y:360}},transitionTime:2},{id:"600fdd8584a2d221e466a3f8",name:"600fddd784a2d221e466a3f9",position:{room:-1,cordinates:{x:5,y:360}},transitionTime:2}],this.fetchOffice=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getOrganization(t);case 2:return r=e.sent,n.organization=r,n.office=r.office,console.log("current organization:",n.organization),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.sendMessage=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.sendOfficeMessage({content:t});case 3:if(!(r=e.sent)){e.next=7;break}return n.office.messages.find((function(e){return e._id===r._id}))||((c=JSON.parse(JSON.stringify(n.office))).messages.unshift(r),n.office=c),e.abrupt("return",r);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.receiveMessage=function(e){if(!n.office.messages.find((function(t){return t._id===e._id}))){var t=JSON.parse(JSON.stringify(n.office));t.messages.unshift(e),n.office=t}},this.changePosition=function(e,t,r){var c=JSON.parse(JSON.stringify(n.users));c.find((function(t){return t.id===e})).position=t,c.find((function(t){return t.id===e})).transitionTime=r,n.users=c},this.rootStore=t,Object(E.n)(this,{rootStore:E.o,office:E.o,organization:E.o,users:E.o,receiveMessage:E.f,changePosition:E.f,sendMessage:E.f,fetchOffice:E.f})},R={updateEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.put("".concat("/api/employees","/").concat(t._id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U="/api/signin",A={signInWithToken:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post(U);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signInEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(U,"/employee"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signInOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(U,"/organization"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),SignOut:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(U,"/signout"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},D=function e(t){var n=this;Object(M.a)(this,e),this.rootStore=null,this.user=null,this.muted=!1,this.silenced=!1,this.signIn=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.signInEmployee({username:t,password:r});case 2:return c=e.sent,n.user=c.user,console.log("current user:",n.user),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.checkSignIn=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.signInWithToken();case 2:return t=e.sent,n.user=t.user,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),this.signOut=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.SignOut();case 2:n.user=null;case 3:case"end":return e.stop()}}),e)}))),this.updateUser=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.updateEmployee(t);case 3:return r=e.sent,n.user=r,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.setMuted=function(e){n.muted=e},this.setSilenced=function(e){n.silenced=e},this.rootStore=t,Object(E.n)(this,{rootStore:E.o,user:E.o,muted:E.o,silenced:E.o,signIn:E.f,checkSignIn:E.f,signOut:E.f,updateUser:E.f,setMuted:E.f,setSilenced:E.f})},H=new function e(){Object(M.a)(this,e),this.officeStore=new L(this),this.userStore=new D(this),Object(E.m)(this)};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root"))},60:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.fd47d56e.chunk.js.map