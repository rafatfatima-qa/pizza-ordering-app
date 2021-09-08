(this["webpackJsonppizza-ordering-app"]=this["webpackJsonppizza-ordering-app"]||[]).push([[0],{65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(26),a=c.n(i),s=(c(65),c(52)),j=c(56),o=c(1);function l(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(s.a,{bg:"primary",variant:"dark",children:Object(o.jsx)(j.a,{children:Object(o.jsx)(s.a.Brand,{href:"/Home",children:"Pizzaria.com"})})})})}var d=c(18);var h=function(){return Object(o.jsx)("div",{className:"text-center optionsDiv",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)(d.b,{to:"/orderlist",className:"btn btn-primary",children:"View All Orders"}),Object(o.jsx)("hr",{}),Object(o.jsx)(d.b,{to:"/placeorder",className:"btn btn-primary",children:"Place an Order"}),Object(o.jsx)("hr",{}),Object(o.jsx)(d.b,{to:"/cancelorder",className:"btn btn-primary",children:"Cancel Order"})]})})},b=c(4),O=c(12),x=(c(55),c(24)),u=c(9);var p=function(){var e=Object(u.f)(),t=Object(r.useState)([]),c=Object(b.a)(t,2),n=c[0],i=c[1];return Object(r.useEffect)((function(){fetch("https://order-pizza-api.herokuapp.com/api/orders").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"All Orders"}),n.map((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)(O.a,{className:"App",style:{width:"22rem",padding:"10px 40px"}}),Object(o.jsxs)("div",{className:"orderDivText",children:[Object(o.jsxs)(O.a.Body,{children:[Object(o.jsxs)(O.a.Title,{children:["Crust: ",t.Crust]}),Object(o.jsxs)(O.a.Title,{children:["Flavor: ",t.Flavor]}),Object(o.jsxs)(O.a.Title,{children:["Size: ",t.Size]})]}),Object(o.jsx)(x.a,{className:"btn btn-primary",style:{alignItems:"center"},onClick:function(){return e.push("/options")},children:"Back"})]})]})}))]})},f=c(17),m=c(46);var v=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(""),a=Object(b.a)(i,2),s=a[0],j=a[1],l=Object(r.useState)(""),d=Object(b.a)(l,2),h=d[0],u=d[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(O.a,{className:"placeOrderDivText",children:Object(o.jsxs)(O.a.Body,{children:[Object(o.jsxs)(O.a.Title,{children:[Object(o.jsx)("label",{for:"crust",children:"Crust:"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:"Crust",variant:"dark",onChange:function(e){n(e.target.value)},children:[Object(o.jsx)(f.a.Item,{value:"thin",children:"Thin"}),Object(o.jsx)(f.a.Item,{value:"thick",children:"Thick"}),Object(o.jsx)(f.a.Item,{value:"stuffed",children:"Stuffed"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(O.a.Title,{children:[Object(o.jsx)("label",{for:"flavor",children:"Flavour:"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:"Flavor",variant:"dark",onChange:function(e){j(e.target.value)},children:[Object(o.jsx)(f.a.Item,{href:"#/action-1",children:"BBQ"}),Object(o.jsx)(f.a.Item,{href:"#/action-2",children:"Fajita"}),Object(o.jsx)(f.a.Item,{href:"#/action-3",children:"Veggie Lover"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(O.a.Title,{children:[Object(o.jsx)("label",{for:"size",children:"Size:"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:"Size",variant:"dark",onChange:function(e){u(e.target.value)},children:[Object(o.jsx)(f.a.Item,{href:"#/action-1",children:"Pan"}),Object(o.jsx)(f.a.Item,{href:"#/action-2",children:"Medium"}),Object(o.jsx)(f.a.Item,{href:"#/action-3",children:"Large"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(x.a,{className:"btn btn-primary",onClick:function(){if(console.log(c,s,h),""==c||""==s||""==h)alert("please select appropriate options");else{var e={Flavor:s,Crust:c,Size:h,Table_No:0,Timestamp:new Date},t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzEwODgzNjksIm5iZiI6MTYzMTA4ODM2OSwianRpIjoiMWRiYjdlMjctMmZlZi00ZGEzLWI1NzEtNzM2NGJhOGQ2OWNjIiwiZXhwIjoxNjMxMDg5MjY5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.MC5RwhMTsU2yr1H-GPTQ5IVXqSzRnSmaIOYjLT1eJug")},body:JSON.stringify(e)};fetch("https://order-pizza-api.herokuapp.com/api/orders",t).then((function(e){201==e.status&&alert("Your order has been registered")}))}},children:"Place Order"})]})})})};var z=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("https://order-pizza-api.herokuapp.com/api/orders",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:e.Crust}),Object(o.jsx)("div",{children:e.Flavor}),Object(o.jsx)("div",{children:e.Size}),Object(o.jsx)("button",{onClick:function(){return e.Order_ID,void fetch("https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){200==e.status&&alert("Cancelled successfully"),window.location.reload()}))},children:"Cancel Order"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}))})})},g=c(53),I=c.p+"static/media/pizza-logo.685ff9ec.jpg";var C=function(){var e=Object(u.f)();return Object(o.jsx)("div",{children:Object(o.jsx)(O.a,{className:" logoDiv text-center",children:Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(g.a,{children:Object(o.jsx)(g.a.Image,{width:450,height:450,alt:"pizza-logo",src:I,roundedCircle:!0})}),Object(o.jsx)(O.a.Text,{children:Object(o.jsx)("h4",{children:"Proceed to order your favorite pizza!"})}),Object(o.jsx)(x.a,{className:"btn btn-primary",onClick:function(){return e.push("/options")},children:"Start Here"})]})})})};function T(){return Object(o.jsx)(d.a,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(C,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/home",children:Object(o.jsx)(C,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/pizza-ordering-app",children:Object(o.jsx)(C,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/options",children:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{path:"/orderlist",children:Object(o.jsx)(p,{})}),Object(o.jsx)(u.a,{path:"/placeorder",children:Object(o.jsx)(v,{})}),Object(o.jsx)(u.a,{path:"/cancelorder",children:Object(o.jsx)(z,{})})]})})}c(71);function y(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(T,{})]})}var N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d.a,{children:Object(o.jsx)(y,{})})}),document.getElementById("root")),N()}},[[72,1,2]]]);
//# sourceMappingURL=main.a9142ca1.chunk.js.map