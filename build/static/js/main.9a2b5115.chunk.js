(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},169:function(e,t){},171:function(e,t){},180:function(e,t,n){"use strict";n.r(t),n.d(t,"rootstore",(function(){return ie}));var r=n(1),o=n(3),s=n.n(o),c=n(34),a=n.n(c),i=(n(84),n(4)),u=n.n(i),l=n(5),f=n(7),d=n(6),m=(n(86),n(87),function(e){return Object(r.jsx)("div",{className:"dots ".concat(e.white&&"white"),children:Object(r.jsx)("div",{className:"snippet","data-title":".dot-hourglass",children:Object(r.jsx)("div",{className:"stage",children:Object(r.jsx)("div",{className:"dot-flashing"})})})})}),p=n(27);var j=function(e){var t=ie.userStore,n=ie.socketStore,s=Object(o.useState)(""),c=Object(f.a)(s,2),a=c[0],i=c[1],d=Object(o.useState)(""),j=Object(f.a)(d,2),b=j[0],h=j[1],v=Object(o.useState)(!1),O=Object(f.a)(v,2),g=O[0],x=O[1],S=Object(o.useState)("user"),y=Object(f.a)(S,2),k=y[0],w=y[1],N=function(e){return"user"===e&&"user"===k?"user-active":"organization"===e&&"organization"===k?"organization-active":""},I=function(){var r=Object(l.a)(u.a.mark((function r(){var o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==a&&""!==b){r.next=3;break}return alert("username and password required"),r.abrupt("return");case 3:return r.prev=3,x(!0),r.next=7,t.signIn(a,b);case 7:o=r.sent,n.connectToOffice(o.token,o.user.organization),e.navigateTo("office"),x(!1),r.next=19;break;case 13:r.prev=13,r.t0=r.catch(3),x(!1),h(""),alert("could not signin"),console.log(r.t0);case 19:case"end":return r.stop()}}),r,null,[[3,13]])})));return function(){return r.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("div",{className:"login-title",children:"Sign in to OfficeTalk"}),Object(r.jsxs)("div",{className:"login-card block-shadow",children:[Object(r.jsxs)("div",{className:"login-card-tabs",children:[Object(r.jsxs)("div",{className:"login-card-tab ".concat(N("user")),onClick:function(){return w("user")},children:[Object(r.jsx)(p.d,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"User"})]}),Object(r.jsxs)("div",{className:"login-card-tab ".concat(N("organization")),onClick:function(){return w("organization")},children:[Object(r.jsx)(p.c,{size:20}),Object(r.jsx)("div",{className:"login-tab-text",children:"Organization"})]})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Email",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{className:"login-input-row",children:[Object(r.jsx)("div",{className:"login-input-title"}),Object(r.jsx)("input",{placeholder:"Password",value:b,type:"password",onChange:function(e){return h(e.target.value)}})]}),Object(r.jsx)("div",{className:"login-input-row",children:Object(r.jsx)("div",{className:"OTButton",style:{background:"organization"===k&&"#F74040"},onClick:function(){return I()},children:g?Object(r.jsx)(m,{white:!0}):"Sign in"})})]})]})},b=(n(88),n(89),n(9)),h=Object(d.a)((function(e){var t=ie.userStore,n=ie.socketStore,o=ie.officeStore;return Object(r.jsxs)("div",{className:"navbar block-shadow",children:[Object(r.jsxs)("div",{className:"navbar-logo",children:[Object(r.jsx)("img",{className:"navbar-logo-image",src:o.organization.logo}),Object(r.jsx)("div",{className:"navbar-office-name",children:o.organization.name})]}),Object(r.jsxs)("div",{className:"navbar-controls",children:[Object(r.jsx)("div",{className:"navbar-controls-border"}),Object(r.jsxs)("div",{className:"navbar-room",children:[Object(r.jsx)("div",{className:"navbar-room-name",children:function(){var e=o.users.find((function(e){return e.employeeId===t.user._id}));if(!e)return"loading...";var n=e.position.room;return-1===n?"Hallway":o.office.rooms.find((function(e){return e._id===n})).name}()}),Object(r.jsx)("div",{className:"navbar-room-title",children:"current room"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){return function(){var e=!t.muted;t.setMuted(e),n.emitMuted(e)}()},children:[t.muted?Object(r.jsx)(b.c,{size:22,className:"navbar-voice-microphone",color:"#F74040"}):Object(r.jsx)(b.b,{size:22,className:"navbar-voice-microphone",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"microphone"})]}),Object(r.jsxs)("div",{className:"navbar-voice",onClick:function(){return function(){var e=!t.silenced;t.setSilenced(e),n.emitSilenced(e)}()},children:[t.silenced?Object(r.jsx)(b.g,{size:22,className:"navbar-voice-volume",color:"#F74040"}):Object(r.jsx)(b.f,{size:22,className:"navbar-voice-volume",color:"#1CBF73"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"volume"})]}),Object(r.jsxs)("div",{className:"navbar-settings",onClick:function(){return e.setShowSettings(!0)},children:[Object(r.jsx)(b.d,{size:22,className:"navbar-settings-cog",color:"#404145"}),Object(r.jsx)("div",{className:"navbar-room-title",children:"settings"})]}),Object(r.jsx)("div",{className:"navbar-controls-border"})]}),Object(r.jsxs)("div",{className:"navbar-user",children:[t.user.name,Object(r.jsx)("div",{className:"navbar-user-avatar",style:{backgroundImage:"url(".concat(t.user.avatar,")")}}),Object(r.jsx)("div",{className:"navbar-sign-out",onClick:function(){return t.signOut(),n.disconnectSocket(),void e.navigateTo("login")},children:"Sign out"})]})]})})),v=(n(90),n(91),Object(d.a)((function(e){var t=ie.userStore;return Object(r.jsx)("div",{className:"message ".concat(function(){if(e.message.author._id===t.user._id)return" my-message"}()),children:Object(r.jsxs)("div",{className:"message-buble",children:[Object(r.jsx)("div",{className:"message-author",children:e.message.author.name}),Object(r.jsx)("div",{className:"message-content",children:e.message.content})]})})}))),O=Object(d.a)((function(e){var t=Object(o.useState)(""),n=Object(f.a)(t,2),s=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(f.a)(a,2),d=i[0],j=i[1],b=Object(o.useState)("office"),h=Object(f.a)(b,2),O=h[0],g=h[1],x=ie.officeStore,S=ie.userStore,y=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,x.sendMessage(s);case 3:t=e.sent,j(!1),c(""),t||window.alert("sending message failed");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"chat block-shadow",children:[Object(r.jsxs)("div",{className:"chat-tabs block-shadow",children:[Object(r.jsx)("div",{className:"chat-tab ".concat("office"===O&&"chat-tab-active"),onClick:function(){return g("office")},children:"Office"}),Object(r.jsx)("div",{className:"chat-tab ".concat("room"===O&&"chat-tab-active"),onClick:function(){return g("room")},children:function(){var e=x.users.find((function(e){return e.employeeId===S.user._id}));if(!e)return"loading...";var t=e.position.room;return-1===t?"Hallway":x.office.rooms.find((function(e){return e._id===t})).name}()})]}),"room"===O&&Object(r.jsxs)("div",{className:"chat-messages-warning",children:[Object(r.jsx)(p.a,{style:{marginRight:"5px"},size:18}),"Message history is not saved in rooms."]}),Object(r.jsx)("div",{className:"chat-messages",children:("office"===O?x.office.messages:x.roomMessages).map((function(e,t){return Object(r.jsx)(v,{message:e},t)}))}),Object(r.jsx)("div",{className:"chat-controls",children:Object(r.jsxs)("div",{className:"chat-input-container",children:[Object(r.jsx)("input",{value:s,placeholder:"Say something",onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("div",{className:"chat-send",onClick:"office"===O?y:function(){j(!0),x.sendRoomMessage(s),j(!1),c("")},children:d?Object(r.jsx)(m,{}):Object(r.jsx)(p.b,{size:30})})]})})]})})),g=(n(92),n(93),Object(d.a)((function(e){var t=ie.socketStore;return Object(r.jsxs)("div",{className:"room ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"," ").concat(e.bottomRoom&&"bottom-room"),id:"room".concat(e.room._id),children:[Object(r.jsx)("div",{className:"room-top",children:e.room.name}),Object(r.jsx)("div",{className:"room-content",onDoubleClick:function(n){return function(n){var r=document.getElementById("rooms").getBoundingClientRect(),o={room:e.room._id,coordinates:{x:n.clientX-r.left,y:n.clientY-r.top}};t.emitPosition(o)}(n)}}),Object(r.jsx)("div",{className:"room-bottom",children:Object(r.jsx)("div",{className:"room-door",id:"door".concat(e.room._id)})})]})}))),x=(n(94),Object(d.a)((function(e){var t=ie.socketStore;return Object(r.jsx)("div",{className:"hallway ".concat(e.first&&"first-block"," ").concat(e.last&&"last-block"),onDoubleClick:function(e){return function(e){var n=document.getElementById("rooms").getBoundingClientRect(),r={room:-1,coordinates:{x:e.clientX-n.left,y:e.clientY-n.top}};t.emitPosition(r)}(e)}})}))),S=(n(95),Object(d.a)((function(e){var t=ie.officeStore,n=ie.userStore,o=function(){return e.user.silenced?Object(r.jsx)(b.g,{size:22,className:"avatar-voice-volume",color:"#F74040"}):!!e.user.muted&&Object(r.jsx)(b.c,{size:22,className:"avatar-voice-microphone",color:"#F74040"})},s=t.organization.employees.find((function(t){return t._id===e.user.employeeId}));return Object(r.jsxs)("div",{className:"avatar",style:{top:e.user.position.coordinates.y,left:e.user.position.coordinates.x,transition:"all ".concat(e.user.transitionTime,"s linear"),border:"".concat(e.user.employeeId===n.user._id?"2":"1","px solid ").concat(e.user.employeeId===n.user._id?"#1CBF73":"black"),backgroundImage:"url(".concat(function(){var n=t.organization.employees.find((function(t){return t._id===e.user.employeeId}));return n?n.avatar:"laoding..."}(),")")},children:[Object(r.jsx)("div",{className:"avatar-shadow",style:{backgroundColor:o()?"#00000041":"transparent"},children:o()}),Object(r.jsx)("div",{className:"avatar-info",children:Object(r.jsx)("div",{className:"avatar-info-name",children:s.name})})]})}))),y=(n(96),Object(d.a)((function(e){return Object(r.jsx)("div",{className:"furniture ".concat(e.furniture.type),style:{top:e.furniture.position.y,left:e.furniture.position.x,height:e.furniture.height,width:e.furniture.width}})}))),k=Object(d.a)((function(){var e=ie.officeStore,t=e.office.rooms.length;return Object(r.jsxs)("div",{className:"rooms",id:"rooms",children:[Object(r.jsx)("div",{className:"rooms-row",children:e.office.rooms.map((function(e,t){return t%2===0?Object(r.jsx)(g,{room:e,first:0===t}):null}))}),Object(r.jsx)(x,{}),Object(r.jsxs)("div",{className:"rooms-row",children:[e.office.rooms.map((function(e,t){return t%2===1?Object(r.jsx)(g,{room:e,bottomRoom:!0,first:1===t}):null})),t%2===1&&Object(r.jsx)("div",{className:"room-block-empty"})]}),Object(r.jsx)("div",{className:"furniture-layer",children:e.furnitures.map((function(e){return Object(r.jsx)(y,{furniture:e},e.furnitureId)}))}),Object(r.jsx)("div",{className:"user-layer",children:e.users.map((function(e){return Object(r.jsx)(S,{user:e},e.employeeId)}))})]})})),w=(n(97),function(e){return Object(r.jsxs)("div",{className:"loading",children:[Object(r.jsx)("div",{className:"loading-text",children:"Loading Office"}),Object(r.jsx)(m,{})]})}),N=(n(98),Object(d.a)((function(e){var t=ie.officeStore,n=function(e){return t.users.find((function(t){return t.employeeId===e._id}))};return Object(r.jsxs)("div",{className:"coworkers block-shadow",style:{right:e.show?"0px":"-250px"},children:[Object(r.jsx)("div",{className:"coworkers-header",children:"Co-workers"}),Object(r.jsx)("div",{className:"coworkers-header-back",onClick:function(){return e.close()},children:Object(r.jsx)(b.a,{size:25})}),Object(r.jsx)("div",{className:"coworkers-names",children:t.organization.employees.map((function(e){return Object(r.jsxs)("div",{className:"coworkers-user",children:[Object(r.jsx)("div",{className:"coworkers-user-avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),Object(r.jsxs)("div",{className:"coworkers-user-name ".concat(n(e)&&"user-online"),children:[" ",e.name," "]})]})}))})]})}))),I=n(36),z=n(19),M=(n(99),Object(d.a)((function(e){var t=ie.userStore,n=(ie.officeStore,Object(o.useState)("transparent")),s=Object(f.a)(n,2),c=s[0],a=s[1],i=Object(o.useState)(!1),d=Object(f.a)(i,2),p=d[0],j=d[1],h=Object(o.useState)(JSON.parse(JSON.stringify(t.user))),v=Object(f.a)(h,2),O=v[0],g=v[1],x=Object(o.useState)(!1),S=Object(f.a)(x,2),y=S[0],k=S[1];Object(o.useEffect)((function(){a("rgba(64, 65, 69, 0.5)")}),[]);var w=function(e,t){p||j(!0),g(Object(z.a)(Object(z.a)({},O),{},Object(I.a)({},e,t.target.value)))},N=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.next=5,t.updateUser(O);case 5:n=e.sent,k(!1),n?j(!1):alert("could not save user");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"settings-background",style:{background:c},children:Object(r.jsxs)("div",{className:"settings-modal block-shadow",children:[Object(r.jsx)("div",{className:"settings-top-row",children:Object(r.jsx)(b.h,{size:25,style:{margin:"10px",cursor:"pointer"},color:"#404145",onClick:function(){return e.setShowSettings(!1)}})}),Object(r.jsxs)("div",{className:"settings-content",children:[Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsx)("div",{className:"settings-avatar",style:{backgroundImage:"url(".concat(O.avatar,")")}})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Avatar url"}),Object(r.jsx)("input",{value:O.avatar,onChange:function(e){return w("avatar",e)}})]})}),Object(r.jsx)("div",{className:"settings-content-row",children:Object(r.jsxs)("div",{className:"settings-input-row",children:[Object(r.jsx)("div",{className:"settings-input-label",children:"Name"}),Object(r.jsx)("input",{value:O.name,onChange:function(e){return w("name",e)}})]})})]}),Object(r.jsx)("div",{className:"settings-bottom-row",children:Object(r.jsx)("div",{className:"settings-save-button ".concat(p&&"unsaved-changes"),onClick:function(){return N()},children:y?Object(r.jsx)(m,{white:!0}):"Save"})})]})})}))),C=n(77),_=n.n(C),E=Object(d.a)((function(e){var t=ie.officeStore,n=ie.userStore,s=ie.mediaStore,c=Object(o.useState)(!1),a=Object(f.a)(c,2),i=a[0],d=a[1],m=Object(o.useState)(!1),p=Object(f.a)(m,2),j=p[0],v=p[1];return Object(o.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchOffice(n.user.organization);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),t.office?(console.log("peerAudios in mediaStore:",s.peerAudios),Object(r.jsxs)("div",{className:"office",children:[Object(r.jsx)(h,{navigateTo:e.navigateTo,setShowSettings:v}),Object(r.jsxs)("div",{className:"office-body",children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{className:"office-body-scrollable",children:Object(r.jsx)(k,{})})]}),Object(r.jsxs)("div",{className:"office-toggle-coworkers",onClick:function(){return d(!i)},children:[Object(r.jsx)(b.e,{style:{marginRight:"3px"},size:18}),"Co-workers (".concat(t.organization.employees.length,")")]}),Object(r.jsx)(N,{show:i,close:function(){return d(!1)}}),j&&Object(r.jsx)(M,{setShowSettings:v}),s.peerAudios.map((function(e){return Object(r.jsx)(_.a,{playsInline:!0,url:e.stream,playing:!0,style:{height:"0px"},height:"0px",width:"0px"})}))]})):Object(r.jsx)(w,{})})),P=(n(120),Object(d.a)((function(){var e=ie.userStore,t=ie.socketStore,n=Object(o.useState)("login"),s=Object(f.a)(n,2),c=s[0],a=s[1];Object(o.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.checkSignIn();case 2:(r=n.sent).user&&a("office"),t.connectToOffice(r.token,r.user.organization);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,t]);return Object(r.jsx)("div",{className:"App",children:function(){switch(c){case"login":return Object(r.jsx)(j,{navigateTo:a});case"office":return Object(r.jsx)(E,{navigateTo:a});case"controlPanel":default:return Object(r.jsx)(j,{navigateTo:a})}}()})}))),R=n(18),T=n(2),J=n(8),A=n.n(J),B={getOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat("/api/organizations","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={sendOfficeMessage:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat("/api/messages"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function e(t){var n=this;Object(R.a)(this,e),this.rootStore=null,this.office=null,this.organization=null,this.roomMessages=[],this.users=[],this.furnitures=[{type:"meeting-table",height:"150px",width:"85px",position:{x:108,y:85},direction:"right"},{type:"meeting-chair",height:"45px",width:"45px",position:{x:198,y:168},direction:"right"},{type:"meeting-chair",height:"45px",width:"45px",position:{x:198,y:103},direction:"right"},{type:"meeting-chair",height:"45px",width:"45px",position:{x:58,y:168},direction:"right"},{type:"meeting-chair",height:"45px",width:"45px",position:{x:58,y:103},direction:"right"}],this.fetchOffice=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getOrganization(t);case 2:return r=e.sent,Object(T.p)((function(){n.organization=r})),Object(T.p)((function(){n.office=r.office})),console.log("current organization:",n.organization),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setEmployeeStates=function(e){Object(T.p)((function(){n.users=e}))},this.addEmployeeState=function(e){n.users=n.users.concat(e)},this.removeEmployeeState=function(e){n.users=n.users.filter((function(t){return t.employeeId!==e.employeeId}))},this.sendRoomMessage=function(e){n.rootStore.socketStore.emitRoomMessage(e)},this.sendMessage=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.sendOfficeMessage({content:t});case 3:if(!(r=e.sent)){e.next=7;break}return n.office.messages.find((function(e){return e._id===r._id}))||((o=JSON.parse(JSON.stringify(n.office))).messages.unshift(r),Object(T.p)((function(){n.office=o}))),e.abrupt("return",r);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.receiveMessage=function(e){if(!n.office.messages.find((function(t){return t._id===e._id}))){var t=JSON.parse(JSON.stringify(n.office));t.messages.unshift(e),Object(T.p)((function(){n.office=t}))}},this.muteEmployee=function(e,t){var r=JSON.parse(JSON.stringify(n.users));r.find((function(t){return t.employeeId===e})).muted=t,Object(T.p)((function(){n.users=r}))},this.silenceEmployee=function(e,t){var r=JSON.parse(JSON.stringify(n.users));r.find((function(t){return t.employeeId===e})).silenced=t,Object(T.p)((function(){n.users=r}))},this.changePosition=function(e,t,r){var o=JSON.parse(JSON.stringify(n.users));o.find((function(t){return t.employeeId===e})).position=t,o.find((function(t){return t.employeeId===e})).transitionTime=r,Object(T.p)((function(){n.users=o}))},this.receiveRoomMessage=function(e){n.roomMessages.find((function(t){return t._id===e._id}))||Object(T.p)((function(){n.roomMessages=[e].concat(n.roomMessages)}))},this.clearRoomChat=function(){Object(T.p)((function(){n.roomMessages=[]}))},this.rootStore=t,Object(T.n)(this,{rootStore:T.o,office:T.o,organization:T.o,users:T.o,roomMessages:T.o,furnitures:T.o,receiveMessage:T.f,changePosition:T.f,sendMessage:T.f,fetchOffice:T.f,setEmployeeStates:T.f,addEmployeeState:T.f,removeEmployeeState:T.f,receiveRoomMessage:T.f,sendRoomMessage:T.f,clearRoomChat:T.f})},D=n(78),H=function(e){return new Promise((function(t){return setTimeout(t,e)}))},L=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,o){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=ie.officeStore.users.find((function(e){return e.employeeId===o})),r===s.position.room){e.next=16;break}if(-1!==r){e.next=7;break}return e.next=5,W(s,t,n,r,o);case 5:e.next=14;break;case 7:if(-1!==s.position.room){e.next=12;break}return e.next=10,X(s,t,n,r,o);case 10:e.next=14;break;case 12:return e.next=14,Y(s,t,n,r);case 14:e.next=18;break;case 16:return e.next=18,q(o,t,n,r);case 18:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,o,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=G(s,t.position.room),e.next=3,H(1e3*c);case 3:t.employeeId===ie.userStore.user._id&&ie.officeStore.clearRoomChat(),q(s,n,r,o);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o,s){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,o){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=G(t.employeeId,o),e.next=3,H(1e3*s);case 3:t.employeeId===ie.userStore.user._id&&ie.officeStore.clearRoomChat(),q(t.employeeId,n,r,o);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,o){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=G(t.employeeId,t.position.room),e.next=3,H(1e3*s);case 3:return t.employeeId===ie.userStore.user._id&&ie.officeStore.clearRoomChat(),c=G(t.employeeId,o),e.next=7,H(1e3*c);case 7:t.employeeId===ie.userStore.user._id&&ie.officeStore.clearRoomChat(),q(t.employeeId,n,r,o);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),q=function(e,t,n,r){var o=ie.officeStore.users.find((function(t){return t.employeeId===e})),s=t,c=n,a=K(o.position.coordinates.x,o.position.coordinates.y,s,c);return ie.officeStore.changePosition(e,{room:r,coordinates:{x:s,y:c}},a),a},G=function(e,t){var n=ie.officeStore.users.find((function(t){return t.employeeId===e})),r=document.getElementById("door".concat(t)),o=r.offsetLeft+30,s=r.offsetTop,c=K(n.position.coordinates.x,n.position.coordinates.y,o,s);return ie.officeStore.changePosition(e,{room:n.position.room,coordinates:{x:o,y:s}},c),c},K=function(e,t,n,r){var o=Math.abs(e-n),s=Math.abs(t-r);return.01*Math.hypot(o,s)},Q=L,V="/api/sockets",Z={updateState:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.put("".concat(V,"/employeeState"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addRoomMessage:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(V,"/roomMessage"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendSignal:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(V,"/sendSignal"),{employeeId:t,signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),returnSignal:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(V,"/returnSignal"),{employeeId:t,signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},$=function e(t){var n=this;Object(R.a)(this,e),this.rootStore=null,this.socket=null,this.connectToOffice=function(e,t){n.socket=D.io.connect("/",{auth:{token:e}}),n.socket.on("message",(function(e){n.rootStore.officeStore.receiveMessage(e)})),n.socket.on("employeeStates",(function(e){n.rootStore.officeStore.setEmployeeStates(e),n.rootStore.mediaStore.connectToPeers()})),n.socket.on("addEmployeeState",(function(e){n.rootStore.officeStore.addEmployeeState(e)})),n.socket.on("removeEmployeeState",(function(e){n.rootStore.officeStore.removeEmployeeState(e)})),n.socket.on("updateEmployeeState",(function(e){var t=ie.officeStore.users.find((function(t){return t.employeeId===e.employeeId}));t.muted!==e.muted&&ie.officeStore.muteEmployee(e.employeeId,e.muted),t.silenced!==e.silenced&&ie.officeStore.silenceEmployee(e.employeeId,e.silenced),t.position!==e.position&&Q(e.position.coordinates.x,e.position.coordinates.y,e.position.room,e.employeeId)})),n.socket.on("roomMessage",(function(e){n.rootStore.officeStore.receiveRoomMessage(e)}))},this.disconnectSocket=function(){n.socket.disconnect()},this.emitPosition=function(e){var t=ie.userStore.user._id,r=JSON.parse(JSON.stringify(n.rootStore.officeStore.users.find((function(e){return e.employeeId===t}))));Z.updateState(Object(z.a)(Object(z.a)({},r),{},{position:e}))},this.emitMuted=function(e){var t=ie.userStore.user._id,r=JSON.parse(JSON.stringify(n.rootStore.officeStore.users.find((function(e){return e.employeeId===t}))));Z.updateState(Object(z.a)(Object(z.a)({},r),{},{muted:e}))},this.emitSilenced=function(e){var t=ie.userStore.user._id,r=JSON.parse(JSON.stringify(n.rootStore.officeStore.users.find((function(e){return e.employeeId===t}))));Z.updateState(Object(z.a)(Object(z.a)({},r),{},{silenced:e}))},this.emitRoomMessage=function(e){Z.addRoomMessage({content:e})},this.emitStartCall=function(e){Z.startCall(e)},this.rootStore=t,Object(T.n)(this,{rootStore:T.o,socket:T.o,connectToOffice:T.f,disconnectSocket:T.f,emitPosition:T.f,emitMuted:T.f,emitSilenced:T.f})},ee={updateEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.put("".concat("/api/employees","/").concat(t._id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te="/api/signin",ne={signInWithToken:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(te);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signInEmployee:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(te,"/employee"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signInOrganization:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(te,"/organization"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),SignOut:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(te,"/signout"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},re=function e(t){var n=this;Object(R.a)(this,e),this.rootStore=null,this.user=null,this.muted=!1,this.silenced=!1,this.signIn=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.signInEmployee({username:t,password:r});case 2:return o=e.sent,n.user=o.user,console.log("current user:",n.user),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.checkSignIn=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.signInWithToken();case 2:return t=e.sent,Object(T.p)((function(){n.user=t.user})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),this.signOut=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.SignOut();case 2:Object(T.p)((function(){n.user=null}));case 3:case"end":return e.stop()}}),e)}))),this.updateUser=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.updateEmployee(t);case 3:return r=e.sent,n.user=r,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.setMuted=function(e){n.muted=e},this.setSilenced=function(e){n.silenced=e},this.rootStore=t,Object(T.n)(this,{rootStore:T.o,user:T.o,muted:T.o,silenced:T.o,signIn:T.f,checkSignIn:T.f,signOut:T.f,updateUser:T.f,setMuted:T.f,setSilenced:T.f})},oe=n(31),se=n(42),ce=n.n(se),ae=function e(t){var n=this;Object(R.a)(this,e),this.rootStore=null,this.stream=null,this.peers=[],this.peerAudios=[],this.connectToPeers=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(e){n.stream=e,n.isInitiatior()&&n.rootStore.officeStore.users.forEach((function(e){e.employeeId!==n.rootStore.userStore.user._id&&(console.log("createPeer"),console.log(e.employeeId,n.rootStore.userStore.user._id),n.createPeer(e.employeeId))})),n.rootStore.socketStore.socket.on("sendSignal",(function(e){var t=e.signal,r=e.employeeId;console.log("sendSignal received"),n.addPeer(t,r)})),n.rootStore.socketStore.socket.on("returnSignal",(function(e){var t=e.signal,r=e.employeeId;console.log("returnSignal received"),n.peers.find((function(e){return e.employeeId===r})).peer.signal(t)}))}));case 2:case"end":return e.stop()}}),e)}))),this.addPeer=function(e,t){var r=new ce.a({initiator:!1,trickle:!1,stream:n.stream});r.signal(e),r.on("signal",(function(e){console.log("returnSignal sent"),Z.returnSignal(t,e)})),r.on("stream",(function(e){console.log("stream received"),Object(T.p)((function(){n.peerAudios=[].concat(Object(oe.a)(n.peerAudios),[{stream:e,employeeId:t}])}))})),r.on("close",(function(){console.log("connection closed"),n.peer.destroy()})),r.on("error",(function(e){console.log("Peer error: ",e)})),Object(T.p)((function(){n.peers=[].concat(Object(oe.a)(n.peers),[{peer:r,employeeId:t}])}))},this.createPeer=function(e){var t=new ce.a({initiator:!0,trickle:!1,stream:n.stream});t.on("signal",(function(t){console.log("sendSignal sent"),Z.sendSignal(e,t)})),t.on("stream",(function(t){console.log("stream received"),Object(T.p)((function(){n.peerAudios=[].concat(Object(oe.a)(n.peerAudios),[{stream:t,employeeId:e}])}))})),t.on("close",(function(){console.log("connection closed"),n.peer.destroy()})),t.on("error",(function(e){console.log("Peer error: ",e)})),Object(T.p)((function(){n.peers=[].concat(Object(oe.a)(n.peers),[{peer:t,employeeId:e}])}))},this.disconnectPeer=function(){n.peer.destroy()},this.isInitiatior=function(){return n.rootStore.officeStore.users.length>1},this.rootStore=t,Object(T.n)(this,{rootStore:T.o,stream:T.o,peerAudios:T.o,peers:T.o,connectToPeers:T.f,disconnectPeer:T.f})},ie=new function e(){Object(R.a)(this,e),this.officeStore=new U(this),this.userStore=new re(this),this.socketStore=new $(this),this.mediaStore=new ae(this),Object(T.m)(this)};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[180,1,2]]]);
//# sourceMappingURL=main.9a2b5115.chunk.js.map