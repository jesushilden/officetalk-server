(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t),n.d(t,"rootstore",(function(){return $}));var r=n(1),s=n(2),c=n.n(s),a=n(24),o=n.n(a),i=(n(60),n(4)),u=n.n(i),l=n(5),f=n(7),d=n(6),j=n(30),b=(n(91),n(92),function(e){return Object(r.jsx)("div",{className:"dots ".concat(e.white&&"white"),children:Object(r.jsx)("div",{className:"snippet","data-title":".dot-hourglass",children:Object(r.jsx)("div",{className:"stage",children:Object(r.jsx)("div",{className:"dot-flashing"})})})})}),m=n(21);var v=function(e){var t=$.userStore,n=$.socketStore,c=Object(s.useState)(""),a=Object(f.a)(c,2),o=a[0],i=a[1],d=Object(s.useState)(""),j=Object(f.a)(d,2),v=j[0],p=j[1],h=Object(s.useState)(!1),O=Object(f.a)(h,2),x=O[0],g=O[1],N=Object(s.useState)("user"),S=Object(f.a)(N,2),k=S[0],w=S[1],y=function(e){return"user"===e&&"user"===k?"user-active":"organization"===e&&"organization"===k?"organization-active":""},I=function(){var r=Object(l.a)(u.a.mark((function r(){var s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==o&&""!==v){r.next=3;break}return alert("username and password required"),r.abrupt("return");case 3:return r.prev=3,g(!0),r.next=7,t.signIn(o,v);case 7:s=r.sent,n.connectToOffice(s.token,s.user.organization),e.navigateTo("office"),g(!1),r.next=19;break;case 13:r.prev=13,r.t0=r.catch(3),g(!1),p(""),alert("could not signin"),console.log(r.t0);case 19:case"end":return r.stop()}}),r,null,[[3,13]])})));return function(){return r.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("div",{className:"login-title",children:"Sign in to OfficeTalk"}),Object(r.jsxs)("div",{className:"login-card block-shadow",children:[Object(r.jsxs)("div",{className:"login-card-tabs",children:[Object(r.jsxs)("div",{className:"login-card-tab ".concat(y("user")),onClick:function(){return w("user")},children:[Object(r.jsx)(m.c,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"User"})]}),Object(r.jsxs)("div",{className:"login-card-tab ".concat(y("organization")),onClick:function(){return w("organization")},children:[Object(r.jsx)(m.b,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"Organization"})]})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Email",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Password",value:v,type:"password",onChange:function(e){return p(e.target.value)}})]}),Object(r.jsx)("div",{className:"login-input-row",children:Object(r.jsx)("div",{className:"OTButton",style:{background:"organization"===k&&"#F74040"},onClick:function(){return I()},children:x?Object(r.jsx)(b,{white:!0}):"Sign in"})})]})]})},p=(n(93),n(94),n(9)),h=Object(d.a)((function(e){var t=$.userStore,n=$.socketStore,s=$.officeStore;return Object(r.jsxs)("div",{className:"navbar block-shadow",children:[Object(r.jsxs)("div",{className:"navbar-logo",children:[Object(r.jsx)("img",{className:"navbar-logo-image",src:s.organization.logo}),Object(r.jsx)("div",{className:"navbar-office-name",children:s.organization.name})]}),Object(r.jsxs)("div",{className:"navbar-controls",children:[Object(r.jsx)("div",{className:"navbar-controls-border"}),Object(r.jsxs)("div",{className:"navbar-room",children:[Object(r.jsx)("div",{className:"navbar-room-name",children:function(){var e=s.users.find((function(e){return e.userId===t.user._id}));if(!e)return"loading...";var n=e.position.room;return-1===n?"Hallway":s.office.rooms.find((function(e){return e._id===n})).name}()}),Object(r.jsx)("div",{className:"navbar-room-title",children:"current room"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.setMuted(!t.muted)},children:[t.muted?Object(r.jsx)(p.c,{size:22,className:"navbar-voice-microphone",color:"#F74040"}):Object(r.jsx)(p.b,{size:22,className:"navbar-voice-microphone",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"microphone"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){t.silenced?t.setSilenced(!1):(t.setSilenced(!0),t.setMuted(!0))},children:[t.silenced?Object(r.jsx)(p.g,{size:22,className:"navbar-voice-volume",color:"#F74040"}):Object(r.jsx)(p.f,{size:22,className:"navbar-voice-volume",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"volume"})]}),Object(r.jsxs)("div",{className:"navbar-settings",onClick:function(){return e.setShowSettings(!0)},children:[Object(r.jsx)(p.d,{size:22,className:"navbar-settings-cog",color:"#404145"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"settings"})]}),Object(r.jsx)("div",{className:"navbar-controls-border"})]}),Object(r.jsxs)("div",{className:"navbar-user",children:[t.user.name,Object(r.jsx)("div",{className:"navbar-user-avatar",style:{backgroundImage:"url(".concat(t.user.avatar,")")}}),Object(r.jsx)("div",{className:"navbar-sign-out",onClick:function(){return t.signOut(),n.disconnectSocket(),void e.navigateTo("login")},children:"Sign out"})]})]})})),O=(n(95),n(96),Object(d.a)((function(e){var t=$.userStore;return Object(r.jsx)("div",{className:"message ".concat(function(){if(e.message.author._id===t.user._id)return" my-message"}()),children:Object(r.jsxs)("div",{className:"message-buble",children:[Object(r.jsx)("div",{className:"message-author",children:e.message.author.name}),Object(r.jsx)("div",{className:"message-content",children:e.message.content})]})})}))),x=Object(d.a)((function(e){var t=Object(s.useState)(""),n=Object(f.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(!1),i=Object(f.a)(o,2),d=i[0],j=i[1],v=Object(s.useState)("office"),p=Object(f.a)(v,2),h=p[0],x=p[1],g=$.officeStore,N=$.userStore,S=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,g.sendMessage(c);case 3:t=e.sent,j(!1),a(""),t||window.alert("sending message failed");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"chat block-shadow",children:[Object(r.jsxs)("div",{className:"chat-tabs block-shadow",children:[Object(r.jsx)("div",{className:"chat-tab ".concat("office"===h&&"chat-tab-active"),onClick:function(){return x("office")},children:"Office"}),Object(r.jsx)("div",{className:"chat-tab ".concat("room"===h&&"chat-tab-active"),onClick:function(){return x("room")},children:function(){var e=g.users.find((function(e){return e.userId===N.user._id}));if(!e)return"loading...";var t=e.position.room;return-1===t?"Hallway":g.office.rooms.find((function(e){return e._id===t})).name}()})]}),Object(r.jsx)("div",{className:"chat-messages",children:$.officeStore.office.messages.map((function(e,t){return Object(r.jsx)(O,{message:e},t)}))}),Object(r.jsx)("div",{className:"chat-controls",children:Object(r.jsxs)("div",{className:"chat-input-container",children:[Object(r.jsx)("input",{value:c,placeholder:"Say something",onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("div",{className:"chat-send",onClick:S,children:d?Object(r.jsx)(b,{}):Object(r.jsx)(m.a,{size:30})})]})})]})})),g=(n(97),n(98),Object(d.a)((function(e){var t=$.socketStore;return Object(r.jsxs)("div",{className:"room ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"," ").concat(e.bottomRoom&&"bottom-room"),id:"room".concat(e.room._id),children:[Object(r.jsx)("div",{className:"room-top",children:e.room.name}),Object(r.jsx)("div",{className:"room-content",onDoubleClick:function(n){return function(n){var r={room:e.room._id,coordinates:{x:n.clientX,y:n.clientY}};t.emitPosition(r)}(n)}}),Object(r.jsx)("div",{className:"room-bottom",children:Object(r.jsx)("div",{className:"room-door",id:"door".concat(e.room._id)})})]})}))),N=(n(99),Object(d.a)((function(e){var t=$.socketStore;return Object(r.jsx)("div",{className:"hallway ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"),onDoubleClick:function(e){return function(e){var n={room:-1,coordinates:{x:e.clientX,y:e.clientY}};t.emitPosition(n)}(e)}})}))),S=(n(100),Object(d.a)((function(e){var t=$.officeStore,n=$.userStore;return Object(r.jsx)("div",{className:"avatar",style:{top:e.user.position.coordinates.y,left:e.user.position.coordinates.x,transition:"all ".concat(e.user.transitionTime,"s ease-in-out"),border:"2px solid ".concat(e.user.userId===n.user._id?"#1CBF73":"black"),backgroundImage:"url(".concat(function(){var n=t.organization.employees.find((function(t){return t._id===e.user.userId}));return n?n.avatar:"laoding..."}(),")")}})}))),k=Object(d.a)((function(){var e=$.officeStore,t=e.office.rooms.length;return Object(r.jsxs)("div",{className:"rooms",id:"rooms",children:[Object(r.jsx)("div",{className:"rooms-row",children:e.office.rooms.map((function(e,t){return t%2===0?Object(r.jsx)(g,{room:e,first:0===t}):null}))}),Object(r.jsx)(N,{}),Object(r.jsxs)("div",{className:"rooms-row",children:[e.office.rooms.map((function(e,t){return t%2===1?Object(r.jsx)(g,{room:e,bottomRoom:!0,first:1===t}):null})),t%2===1&&Object(r.jsx)("div",{className:"room-block-empty"})]}),Object(r.jsx)("div",{className:"user-layer",children:e.users.map((function(e){return Object(r.jsx)(S,{user:e},e._id)}))})]})})),w=(n(101),function(e){return Object(r.jsxs)("div",{className:"loading",children:[Object(r.jsx)("div",{className:"loading-text",children:"Loading Office"}),Object(r.jsx)(b,{})]})}),y=(n(102),Object(d.a)((function(e){var t=$.officeStore,n=function(e){return t.users.find((function(t){return t.userId===e._id}))};return Object(r.jsxs)("div",{className:"coworkers block-shadow",style:{right:e.show?"0px":"-250px"},children:[Object(r.jsx)("div",{className:"coworkers-header",children:"Co-workers"}),Object(r.jsx)("div",{className:"coworkers-header-back",onClick:function(){return e.close()},children:Object(r.jsx)(p.a,{size:25})}),Object(r.jsx)("div",{className:"coworkers-names",children:t.organization.employees.map((function(e){return Object(r.jsxs)("div",{className:"coworkers-user",children:[Object(r.jsx)("div",{className:"coworkers-user-avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),Object(r.jsxs)("div",{className:"coworkers-user-name ".concat(n(e)&&"user-online"),children:[" ",e.name," "]})]})}))})]})}))),I=n(25),z=n(19),C=(n(103),Object(d.a)((function(e){var t=$.userStore,n=($.officeStore,Object(s.useState)("transparent")),c=Object(f.a)(n,2),a=c[0],o=c[1],i=Object(s.useState)(!1),d=Object(f.a)(i,2),j=d[0],m=d[1],v=Object(s.useState)(JSON.parse(JSON.stringify(t.user))),h=Object(f.a)(v,2),O=h[0],x=h[1],g=Object(s.useState)(!1),N=Object(f.a)(g,2),S=N[0],k=N[1];Object(s.useEffect)((function(){o("rgba(64, 65, 69, 0.5)")}),[]);var w=function(e,t){j||m(!0),x(Object(z.a)(Object(z.a)({},O),{},Object(I.a)({},e,t.target.value)))},y=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.next=5,t.updateUser(O);case 5:n=e.sent,k(!1),n?m(!1):alert("could not save user");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"settings-background",style:{background:a},children:Object(r.jsxs)("div",{className:"settings-modal block-shadow",children:[Object(r.jsx)("div",{className:"settings-top-row",children:Object(r.jsx)(p.h,{size:25,style:{margin:"10px",cursor:"pointer"},color:"#404145",onClick:function(){return e.setShowSettings(!1)}})}),Object(r.jsxs)("div",{className:"settings-content",children:[Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsx)("div",{className:"settings-avatar",style:{backgroundImage:"url(".concat(O.avatar,")")}})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Avatar url"}),Object(r.jsx)("input",{value:O.avatar,onChange:function(e){return w("avatar",e)}})]})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Name"}),Object(r.jsx)("input",{value:O.name,onChange:function(e){return w("name",e)}})]})})]}),Object(r.jsx)("div",{className:"settings-bottom-row",children:Object(r.jsx)("div",{className:"settings-save-button ".concat(j&&"unsaved-changes"),onClick:function(){return y()},children:S?Object(r.jsx)(b,{white:!0}):"Save"})})]})})}))),T=Object(d.a)((function(e){var t=$.officeStore,n=$.userStore,c=Object(s.useState)(!1),a=Object(f.a)(c,2),o=a[0],i=a[1],d=Object(s.useState)(!1),j=Object(f.a)(d,2),b=j[0],m=j[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchOffice(n.user.organization);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),t.office?Object(r.jsxs)("div",{className:"office",children:[Object(r.jsx)(h,{navigateTo:e.navigateTo,setShowSettings:m}),Object(r.jsxs)("div",{className:"office-body",children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{className:"office-body-scrollable",children:Object(r.jsx)(k,{})})]}),Object(r.jsxs)("div",{className:"office-toggle-coworkers",onClick:function(){return i(!o)},children:[Object(r.jsx)(p.e,{style:{marginRight:"3px"},size:18}),"Co-workers (".concat(t.organization.employees.length,")")]}),Object(r.jsx)(y,{show:o,close:function(){return i(!1)}}),b&&Object(r.jsx)(C,{setShowSettings:m})]}):Object(r.jsx)(w,{})})),_=(n(104),Object(d.a)((function(){var e=$.userStore,t=$.socketStore,n=Object(s.useState)("login"),c=Object(f.a)(n,2),a=c[0],o=c[1];Object(s.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.checkSignIn();case 2:(r=n.sent).user&&o("office"),t.connectToOffice(r.token,r.user.organization);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e]);return Object(r.jsx)("div",{className:"App",children:function(){switch(a){case"login":return Object(r.jsx)(v,{navigateTo:o});case"office":return Object(r.jsx)(T,{navigateTo:o});case"controlPanel":default:return Object(r.jsx)(v,{navigateTo:o})}}()})}))),E=n(16),J=n(3),M=n(10),P=n.n(M),B={getOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("".concat("/api/organizations","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={sendOfficeMessage:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("".concat("/api/messages"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function e(t){var n=this;Object(E.a)(this,e),this.rootStore=null,this.office=null,this.organization=null,this.users=[{id:"600fddd784a2d221e466a3f9",name:"Axel Baumgartner",position:{room:-1,coordinates:{x:5,y:360}},transitionTime:2},{id:"600fdd8584a2d221e466a3f8",name:"600fddd784a2d221e466a3f9",position:{room:-1,coordinates:{x:5,y:360}},transitionTime:2}],this.fetchOffice=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getOrganization(t);case 2:return r=e.sent,n.organization=r,n.office=r.office,console.log("current organization:",n.organization),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setEmployeeStates=function(e){console.log(e),n.users=e},this.sendMessage=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.sendOfficeMessage({content:t});case 3:if(!(r=e.sent)){e.next=7;break}return n.office.messages.find((function(e){return e._id===r._id}))||((s=JSON.parse(JSON.stringify(n.office))).messages.unshift(r),n.office=s),e.abrupt("return",r);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.receiveMessage=function(e){if(!n.office.messages.find((function(t){return t._id===e._id}))){var t=JSON.parse(JSON.stringify(n.office));t.messages.unshift(e),n.office=t}},this.muteEmployee=function(e,t){var r=JSON.parse(JSON.stringify(n.users));r.find((function(t){return t.userId===e})).muted=t,n.users=r},this.silenceEmployee=function(e,t){var r=JSON.parse(JSON.stringify(n.users));r.find((function(t){return t.userId===e})).silenced=t,n.users=r},this.changePosition=function(e,t,r){var s=JSON.parse(JSON.stringify(n.users));s.find((function(t){return t.userId===e})).position=t,s.find((function(t){return t.userId===e})).transitionTime=r,n.users=s},this.rootStore=t,Object(J.n)(this,{rootStore:J.o,office:J.o,organization:J.o,users:J.o,receiveMessage:J.f,changePosition:J.f,sendMessage:J.f,fetchOffice:J.f,setEmployeeStates:J.f})},A=function(e){return new Promise((function(t){return setTimeout(t,e)}))},L=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=$.officeStore.users.find((function(e){return e.userId===s})),console.log(r,c.position.room),r===c.position.room){e.next=17;break}if(-1!==r){e.next=8;break}return e.next=6,R(c,t,n,r,s);case 6:e.next=15;break;case 8:if(-1!==c.position.room){e.next=13;break}return e.next=11,D(c,t,n,r,s);case 11:e.next=15;break;case 13:return e.next=15,H(c,t,n,r);case 15:e.next=19;break;case 17:return e.next=19,W(s,t,n,r);case 19:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,s,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=X(c,t.position.room),e.next=3,A(1e3*a);case 3:W(c,n,r,s);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,s,c){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=X(t.userId,s),e.next=3,A(1e3*c);case 3:W(t.userId,n,r,s);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,s){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=X(t.userId,t.position.room),e.next=3,A(1e3*c);case 3:return a=X(t.userId,s),e.next=6,A(1e3*a);case 6:W(t.userId,n,r,s);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),W=function(e,t,n,r){var s=$.officeStore.users.find((function(t){return t.userId===e})),c=document.getElementById("rooms"),a=t-c.offsetLeft,o=n-c.offsetTop,i=Y(s.position.coordinates.x,s.position.coordinates.y,a,o);return $.officeStore.changePosition(e,{room:r,coordinates:{x:a,y:o}},i),i},X=function(e,t){var n=$.officeStore.users.find((function(t){return t.userId===e})),r=document.getElementById("door".concat(t)),s=r.offsetLeft+30,c=r.offsetTop,a=Y(n.position.coordinates.x,n.position.coordinates.y,s,c);return $.officeStore.changePosition(e,{room:n.position.room,coordinates:{x:s,y:c}},a),a},Y=function(e,t,n,r){var s=Math.abs(e-n),c=Math.abs(t-r);return.01*Math.hypot(s,c)},q=L,G=function e(t){var n=this;Object(E.a)(this,e),this.rootStore=null,this.socket=null,this.connectToOffice=function(e,t){n.socket=j.io.connect("/".concat(t),{auth:{token:e}}),n.socket.on("message",(function(e){n.rootStore.officeStore.receiveMessage(e)})),n.socket.on("employees",(function(e){n.rootStore.officeStore.setEmployeeStates(e)})),n.socket.on("employeeState",(function(e){var t=$.officeStore.users.find((function(t){return t.userId===e.userId}));t.muted!==e.muted&&$.officeStore.muteEmployee(e.muted),t.silenced!==e.silenced&&$.officeStore.silenceEmployee(e.silenced),t.position!==e.position&&q(e.position.coordinates.x,e.position.coordinates.y,e.position.room,e.userId)}))},this.disconnectSocket=function(){n.socket.disconnect()},this.emitPosition=function(e){var t=$.userStore.user._id,r=JSON.parse(JSON.stringify(n.rootStore.officeStore.users.find((function(e){return e.userId===t}))));n.socket.emit("employeeState",{employeeState:Object(z.a)(Object(z.a)({},r),{},{position:e})})},this.rootStore=t,Object(J.n)(this,{rootStore:J.o,socket:J.o,connectToOffice:J.f,disconnectSocket:J.f,emitPosition:J.f})},K={updateEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.put("".concat("/api/employees","/").concat(t._id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q="/api/signin",V={signInWithToken:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post(Q);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signInEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("".concat(Q,"/employee"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signInOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("".concat(Q,"/organization"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),SignOut:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("".concat(Q,"/signout"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Z=function e(t){var n=this;Object(E.a)(this,e),this.rootStore=null,this.user=null,this.muted=!1,this.silenced=!1,this.signIn=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.signInEmployee({username:t,password:r});case 2:return s=e.sent,n.user=s.user,console.log("current user:",n.user),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.checkSignIn=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.signInWithToken();case 2:return t=e.sent,n.user=t.user,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),this.signOut=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.SignOut();case 2:n.user=null;case 3:case"end":return e.stop()}}),e)}))),this.updateUser=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.updateEmployee(t);case 3:return r=e.sent,n.user=r,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.setMuted=function(e){n.muted=e},this.setSilenced=function(e){n.silenced=e},this.rootStore=t,Object(J.n)(this,{rootStore:J.o,user:J.o,muted:J.o,silenced:J.o,signIn:J.f,checkSignIn:J.f,signOut:J.f,updateUser:J.f,setMuted:J.f,setSilenced:J.f})},$=new function e(){Object(E.a)(this,e),this.officeStore=new U(this),this.userStore=new Z(this),this.socketStore=new G(this),Object(J.m)(this)};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root"))},60:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.4662a606.chunk.js.map