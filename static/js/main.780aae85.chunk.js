(this.webpackJsonpustraa=this.webpackJsonpustraa||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(14),r=t.n(n),i=(t(19),t(20),t(21),t(0)),l=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{className:"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light mt-2",style:{boxShadow:"10px 5px 10px #000"},children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("a",{className:"navbar-brand",style:{letterSpacing:"3px",color:"rgb(65, 161, 224)",fontWeight:"bold"},href:"#",children:"USTRAA"}),Object(i.jsx)("p",{children:"GROMING FOR MEN"})]}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)("a",{className:"nav-link",href:"#",children:["Beard ",Object(i.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"Hair Growth"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"Hair Oil"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"Face Wash"})})]}),Object(i.jsxs)("div",{className:"form-group has-search",children:[Object(i.jsx)("span",{className:"fa fa-search form-control-feedback"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Search"})]}),Object(i.jsx)("div",{className:"mr-2",style:{height:"50px",padding:"0.4rem"},children:Object(i.jsx)("i",{className:"fas fa-cart-plus "})})]})]})})},o=t(4),j=t(3),d=t.n(j),b=function(e){var a=Object(c.useState)([]),t=Object(o.a)(a,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){d.a.get("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(e.category_id)).then((function(e){n(e.data.products),console.log("resdata",e.data.products)}))}),[]),Object(c.useEffect)((function(){if(e.category_name&&0==s.length)return!1}),[s]),Object(i.jsx)("div",{})},h=function(e){console.log("propsHeader",e);var a=Object(c.useState)([]),t=Object(o.a)(a,2),s=t[0],n=t[1];Object(c.useEffect)((function(){d.a.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob").then((function(e){n(e.data.category_list),console.log(e.data.category_list)})).catch((function(e){console.log(e)}))}),[]);return Object(i.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(i.jsx)("h1",{className:"container mt-2",children:"Our Products"}),s.map((function(a){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"containers",children:[Object(i.jsx)("a",{onClick:function(){console.log("searchheader",e.searchInput)},children:Object(i.jsx)("img",{className:"img_category",src:a.category_image,alt:"category_img"},a.category_id)}),Object(i.jsxs)("span",{className:"centered",children:[a.category_name,Object(i.jsx)(b,{category_name:a.category_name,category_id:a.category_id})]})]})})}))]})},O=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){d.a.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob").then((function(e){s(e.data.product_list.products),console.log(e.data.product_list.products)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsx)("div",{className:"container",children:t.map((function(e,a){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"cards",children:[Object(i.jsx)("img",{src:e.image_urls.x520,class:"card-img-top",alt:e.name}),Object(i.jsxs)("div",{className:"cardDetails",children:[Object(i.jsx)("h5",{class:!0,children:e.name}),Object(i.jsxs)("p",{children:[e.weight,e.weight_unit]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:Object(i.jsx)("i",{class:"fas fa-rupee-sign"})}),e.final_price]}),Object(i.jsxs)("p",{style:{textDecoration:"line-through"},children:[Object(i.jsx)("span",{children:Object(i.jsx)("i",{class:"fas fa-rupee-sign"})}),e.price_new]}),Object(i.jsxs)("p",{children:[e.rating," ",Object(i.jsx)("span",{children:Object(i.jsx)("i",{class:"fas fa-star"})})]}),Object(i.jsx)("p",{children:e.is_in_stock?Object(i.jsx)("button",{style:{backgroundColor:"green"},children:"ADD TO CART"}):Object(i.jsx)("button",{style:{background:"gray"},children:"OUT OF STOCK"})})]})]})})}))})};var u=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{}),Object(i.jsx)(O,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.780aae85.chunk.js.map