(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),l=a(12),s=(a(37),a(5)),o=a.n(s),m=a(20),p=a(13),u=a(7),d=a(8),b=a(10),h=a(9),g=a(1),f=a(16),v=a.n(f);a(39),a(43);v.a.initializeApp({apiKey:"AIzaSyCakuGtMOFHix8NY6rdItd1oMtgWF6rkU0",authDomain:"piccuu-db.firebaseapp.com",databaseURL:"https://piccuu-db.firebaseio.com",projectId:"piccuu-db",storageBucket:"piccuu-db.appspot.com",messagingSenderId:"753952757294",appId:"1:753952757294:web:22de410f3fc29ca1f7b1bf",measurementId:"G-TZWX761ZZC"});var k=function(){var e=Object(p.a)(o.a.mark((function e(t,a){var n,r,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=E.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(m.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error while creating user ",e.t0);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),w=v.a.auth(),E=v.a.firestore(),y=new v.a.auth.GoogleAuthProvider;y.setCustomParameters({prompt:"select_account"});var N=function(){return w.signInWithPopup(y)},O=(v.a,a(45),a(11)),U=(a(46),Object(g.f)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,t),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),j=(a(51),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(O.a)(e,["id"]);return r.a.createElement(U,Object.assign({key:t},a))})))}}]),a}(n.Component)),C=(a(52),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(j,null))}),S=(a(53),function(e){e.id;var t=e.name,a=e.price,n=e.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},a)))}),x=(a(54),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(O.a)(e,["id"]);return r.a.createElement(S,Object.assign({key:t},a))}))))}),B=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={collections:B},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"shop-page"},e.map((function(e){var t=e.id,a=Object(O.a)(e,["id"]);return r.a.createElement(x,Object.assign({key:t},a))})))}}]),a}(n.Component);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=r.a.createElement("title",null,"Group"),A=r.a.createElement("desc",null,"Created with Sketch."),G=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),J=function(e){var t=e.svgRef,a=e.title,n=T(e,["svgRef","title"]);return r.a.createElement("svg",I({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?W:a?r.a.createElement("title",null,a):null,A,G)},D=r.a.forwardRef((function(e,t){return r.a.createElement(J,I({svgRef:t},e))})),M=(a.p,a(55),function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/"},r.a.createElement(D,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return w.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN")))}),R=(a(56),a(15)),F=(a(57),function(e){var t=e.handleChange,a=e.label,n=Object(O.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),z=(a(58),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(O.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),L=(a(59),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,i=a.password,e.prev=2,e.next=5,w.signInWithEmailAndPassword(r,i);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(R.a)({},r,a))},n.state={email:"",password:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I have already an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",null,r.a.createElement(F,{label:"Email",type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),r.a.createElement(F,{label:"Password",type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{onClick:this.handleSubmit},"Sign In"),r.a.createElement(z,{onClick:N,isGoogleSignIn:!0},"Sign In with Google"))))}}]),a}(n.Component)),q=(a(60),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,r,i,c,l,s,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,i=a.email,c=a.password,l=a.confirmPassword,c===l){e.next=5;break}return alert("Password do not match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,w.createUserWithEmailAndPassword(i,c);case 8:return s=e.sent,m=s.user,e.next=12,k(m,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(R.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with email and password"),r.a.createElement("form",{className:"sign-up",onSubmit:this.handleSubmit},r.a.createElement(F,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(F,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(F,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(F,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(z,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),H=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(L,null),r.a.createElement(q,null))},V=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).unSubscribeFromAuth=null,n.componentDidMount=function(){n.unSubscribeFromAuth=w.onAuthStateChanged(function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,k(t);case 3:e.sent.onSnapshot((function(e){n.setState({currentUser:Object(m.a)({id:e.id},e.data)})}));case 5:n.setState({currentUser:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},n.componentDidUnmount=function(){n.unSubscribeFromAuth()},n.state={currentUser:null},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{currentUser:this.state.currentUser}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:C}),r.a.createElement(g.a,{path:"/shop",component:P}),r.a.createElement(g.a,{path:"/signin",component:H})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(l.a,{basename:"/piccuu-clothing"},r.a.createElement(V,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f6a0c44d.chunk.js.map