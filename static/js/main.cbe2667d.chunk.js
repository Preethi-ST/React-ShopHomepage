(this["webpackJsonpreact-task2"]=this["webpackJsonpreact-task2"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(14),n=a.n(r),i=(a(21),a(3)),l=(a(22),a.p,a.p+"static/media/shooping.b8f6f9fc.jpg"),d=(a.p,a(0));var o=function(){return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid jumbotron-image",style:{backgroundImage:"url(".concat(l,")")},children:Object(d.jsxs)("div",{className:"container text-white",children:[Object(d.jsx)("h1",{className:"display-4",children:"Shop with Styles"}),Object(d.jsx)("p",{className:"lead",children:"Checkout the latest arrivals and grab the best!"})]})})},j=a.p+"static/media/StyleLogo.3d2762f2.png";var b=function(e){var t=e.cart;return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light bg-light",children:[Object(d.jsx)("img",{className:"brand-img pr-5",src:j}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",style:{fontWeight:"bolder",color:"hotpink"},children:[Object(d.jsxs)("ul",{className:"navbar-nav pr-md-5",children:[Object(d.jsx)("li",{className:"nav-item active pr-md-5",children:Object(d.jsxs)("a",{className:"nav-link text-info",href:"#",children:["Home ",Object(d.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item pr-md-5",children:Object(d.jsx)("a",{className:"nav-link text-info",href:"#",children:"About"})}),Object(d.jsxs)("li",{className:"nav-item dropdown pr-md-5",children:[Object(d.jsx)("a",{className:"nav-link dropdown-toggle text-info",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Shop"}),Object(d.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(d.jsx)("a",{className:"dropdown-item text-info",href:"#",children:"All Products"}),Object(d.jsx)("div",{className:"dropdown-divider"}),Object(d.jsx)("a",{className:"dropdown-item text-info",href:"#",children:"Popular Items"}),Object(d.jsx)("a",{className:"dropdown-item text-info",href:"#",children:"New Arrival"})]})]})]}),Object(d.jsx)("div",{class:"ml-auto",children:Object(d.jsxs)("button",{className:"btn btn-outline-info",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"})," Cart  ",Object(d.jsx)("span",{className:"items_added",children:t})]})})]})]})},m=a(5),h=a.n(m),p=a(15),x=a(16),u=a.n(x);var O=function(e){var t=e.product,a=e.cart,c=e.setCart,r=e.rating,n=Object(s.useState)("Add to Cart"),l=Object(i.a)(n,2),o=l[0],j=l[1];return Object(d.jsx)("div",{className:"card mb-3",style:{width:"100%"},children:Object(d.jsxs)("div",{className:"row no-gutters",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:t.image,className:"card-img text-center ",alt:"..."})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.title}),Object(d.jsx)("p",{className:"card-text",children:t.description}),Object(d.jsx)("p",{children:function(e){for(var t=[],a=0;a<e;a++)t.push(Object(d.jsx)("span",{className:"fill-star",children:Object(d.jsx)("i",{class:"fas fa-star"})},a));for(var s=e;s<5;s++)t.push(Object(d.jsx)("span",{className:"fill-star",children:Object(d.jsx)("i",{class:"fal fa-star"})},s));return t}(r)}),Object(d.jsxs)("p",{className:"card-text",children:["$",t.price]}),Object(d.jsx)("button",{className:"btn ".concat("Add to Cart"===o?"btn-success":"btn-danger"),onClick:function(e){console.log(e),"Add to Cart"===e.target.innerText?(c(a+1),j("Remove")):(c(a-1),j("Add to Cart"))},children:o})]})})]})})};var v=function(e){var t=e.cart,a=e.setCart,c=[4,5,5,4,4,5,5,5,3,4,4,3,5,5,5,5,4,3,4,4],r=Object(s.useState)([]),n=Object(i.a)(r,2),l=n[0],o=n[1];return Object(s.useEffect)(Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://fakestoreapi.com","/products")).then((function(e){return o(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(d.jsxs)("div",{className:"container",children:[console.log(l),Object(d.jsx)("div",{class:"all-products",children:l.map((function(e,s){return Object(d.jsx)(O,{product:e,cart:t,setCart:a,rating:c[s]},e.id)}))})]})};var f=function(){return Object(d.jsx)("div",{className:"footer",children:"Copyright \xa9 Style 2021"})};var N=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{cart:a}),Object(d.jsx)(o,{}),Object(d.jsx)(v,{cart:a,setCart:c}),Object(d.jsx)(f,{})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cbe2667d.chunk.js.map