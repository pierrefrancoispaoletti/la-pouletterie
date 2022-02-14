"use strict";(self.webpackChunkpouletterie=self.webpackChunkpouletterie||[]).push([[411],{8052:function(n,e,t){t.d(e,{sk:function(){return o},A1:function(){return i},SK:function(){return d}});var r,a,s,c=t(168),u=t(5751),o=u.ZP.main(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),i=u.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  h2 {\n    width: 50%;\n  }\n  span {\n    display: inline-block;\n    font-weight: bold;\n    font-size: 1.3em;\n  }\n"]))),d=u.ZP.div(s||(s=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n"])))},411:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,s,c,u=t(1413),o=t(4925),i=t(2791),d=t(6030),l=t(3504),p=t(1707),f=t(168),h=t(5751),m=h.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),v=h.ZP.div(a||(a=(0,f.Z)(["\n  align-self: flex-start;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  text-decoration: underline;\n"]))),x=h.ZP.details(s||(s=(0,f.Z)(["\n  display: block;\n  align-self: flex-start;\n  margin-left: 1em;\n"]))),y=h.ZP.ul(c||(c=(0,f.Z)(["\n  list-style: none;\n"]))),Z=t(184),g=function(n){var e=Object.assign({},n),t=e.date,r=e.products,a=e.status;return(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(v,{children:[t,(0,Z.jsxs)("div",{children:["Total :",r.reduce((function(n,e){return n+e.price*e.quantity}),0).toFixed(2),"\u20ac"]})]}),(0,Z.jsx)(x,{children:(0,Z.jsx)(y,{children:(0,Z.jsxs)("summary",{children:[(0,Z.jsxs)("span",{children:["status de la commande: ",a]}),r.map((function(n){var e=n._id,t=n.name,r=n.price,a=n.quantity;return(0,Z.jsx)("li",{children:(0,Z.jsx)("div",{children:"".concat(t," ").concat(null===e?"(indisponible)":""," x ").concat(a," = ").concat(r*a.toFixed(2)," \u20ac")})})}))]})})})]})},P=t(3740),j=t(6368),w=t(3638),k=t(8052),_=t(1448),b=["user"],E=function(){!function(){var n=(0,d.I0)(),e=(0,d.v9)(j.Uy),t=(0,d.v9)(j.vI);(0,i.useEffect)((function(){(0,P.DT)(e.user._id,t,n)}),[n,t,e.user._id])}();var n=(0,d.v9)(w.qI);return n.length?(0,Z.jsxs)(_.Q,{children:[(0,Z.jsx)(p.Z,{children:"Mes Commandes"}),n.map((function(n){n.user;var e=(0,o.Z)(n,b);return(0,Z.jsx)(g,(0,u.Z)({},e),e._id)}))]}):(0,Z.jsx)(_.Q,{children:(0,Z.jsxs)(k.SK,{children:["Vous n'avez pas de commandes pour le moment",(0,Z.jsx)(l.rU,{to:"/",children:"Retour \xe0 la boutique"})]})})}},1448:function(n,e,t){t.d(e,{Q:function(){return s}});var r,a=t(168),s=t(5751).ZP.main(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])))},3740:function(n,e,t){t.d(e,{LV:function(){return P},h_:function(){return Z},dl:function(){return g},DT:function(){return y},Cs:function(){return j}});var r=t(1413),a=t(4925),s=t(5861),c=t(7757),u=t.n(c),o=t(4569),i=t.n(o),d=t(3623),l=t(4719),p=t(6214),f=function(n){return{type:p.p.GET_ORDERS_BY_USER_ID,payload:n}},h=function(n){return{type:p.p.GET_ALL_ORDERS,payload:n}},m=function(n){return{type:p.p.GET_ALL_RAW_ORDERS,payload:n}},v=t(4519),x=["products"],y=function(){var n=(0,s.Z)(u().mark((function n(e,t,r){var a,s,c,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r((0,d.o4)()),n.prev=1,n.next=4,i()({method:"GET",url:"".concat(v.Q,"/api/orders/").concat(e),headers:{Authorization:"Bearer ".concat(t)}});case 4:a=n.sent,s=a.data,c=s.orders,o=s.message,r((0,d.o4)()),r(f(c)),r((0,d.PJ)({status:"success",message:o})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),r((0,d.o4)()),r((0,d.PJ)({status:"error",message:n.t0.response.data.message}));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e,t,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,s.Z)(u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i()({method:"GET",url:"".concat(v.Q,"/api/orders/all"),headers:{Authorization:"Bearer ".concat(e)}});case 3:r=n.sent,a=r.data.orders,t(h(a)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t((0,d.PJ)({status:"error",message:n.t0.response.data.message}));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,s.Z)(u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t((0,d.o4)()),n.prev=1,n.next=4,i()({method:"GET",url:"".concat(v.Q,"/api/orders/all-raw"),headers:{Authorization:"Bearer ".concat(e)}});case 4:r=n.sent,a=r.data.orders,t(m(a)),t((0,d.o4)()),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),t((0,d.o4)()),t((0,d.PJ)({status:"error",message:n.t0.response.data.message}));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}(),P=function(){var n=(0,s.Z)(u().mark((function n(e,t,s,c){var o,p,f,h,m;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s((0,d.o4)()),o=t.products,p=(0,a.Z)(t,x),f=(0,r.Z)((0,r.Z)({},p),{},{products:o.map((function(n){return{_id:n._id,quantity:n.quantity,name:n.name,price:n.price}}))}),n.prev=3,n.next=6,i()({method:"POST",url:"".concat(v.Q,"/api/orders/add"),data:{order:f},headers:{Authorization:"Bearer ".concat(e)}});case 6:h=n.sent,m=h.data.message,s((0,d.o4)()),s((0,d.PJ)({status:"success",message:m})),s((0,l.UY)()),c("/vos-commandes"),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(3),s((0,d.o4)()),s((0,d.PJ)({status:"error",message:n.t0.response.data.message}));case 18:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(e,t,r,a){return n.apply(this,arguments)}}(),j=function(){var n=(0,s.Z)(u().mark((function n(e,t,r){var a,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r((0,d.o4)()),n.prev=1,n.next=4,i()({method:"POST",url:"".concat(v.Q,"/api/orders/update"),data:{update:t},headers:{Authorization:"Bearer ".concat(e)}});case 4:a=n.sent,s=a.data.message,r((0,d.o4)()),r((0,d.PJ)({status:"success",message:s})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),r((0,d.o4)()),r((0,d.PJ)({status:"error",message:n.t0.response.data.message}));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t,r){return n.apply(this,arguments)}}()},3638:function(n,e,t){t.d(e,{qI:function(){return s},pi:function(){return c},bH:function(){return u}});var r=t(6916),a=function(n){return n.order},s=(0,r.P1)([a],(function(n){return n.userOrders})),c=(0,r.P1)([a],(function(n){return n.allOrders})),u=(0,r.P1)([a],(function(n){return n.rawOrders}))}}]);
//# sourceMappingURL=411.9ca05e66.chunk.js.map