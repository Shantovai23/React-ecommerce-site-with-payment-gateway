(this["webpackJsonpreact-ecommerce-with-fake-payment-gateway"]=this["webpackJsonpreact-ecommerce-with-fake-payment-gateway"]||[]).push([[0],{40:function(A,e,c){},67:function(A,e,c){"use strict";c.r(e);var t=c(0),s=c(14),a=c.n(s),i=(c(40),c(13)),n=c(2),r=c(22),l=c(16),d=c(9),j=function(A,e){var c,t,s,a,i=A.shoppingCart,n=A.totalPrice,r=A.qty;switch(e.type){case"ADD_TO_CART":return i.find((function(A){return A.id===e.id}))?A:((c=e.product).qty=1,s=r+1,t=n+c.price,{shoppingCart:[c].concat(Object(d.a)(i)),totalPrice:t,qty:s});case"INC":return(c=e.cart).qty=c.qty+1,t=n+c.price,s=r+1,a=i.findIndex((function(A){return A.id===e.id})),i[a]=c,{shoppingCart:Object(d.a)(i),totalPrice:t,qty:s};case"DEC":return(c=e.cart).qty>1?(c.qty=c.qty-1,t=n-c.price,s=r-1,a=i.findIndex((function(A){return A.id===e.id})),i[a]=c,{shoppingCart:Object(d.a)(i),totalPrice:t,qty:s}):A;case"DELETE":var l=i.filter((function(A){return A.id!==e.id}));return s=r-(c=e.cart).qty,t=n-c.price*c.qty,{shoppingCart:Object(d.a)(l),totalPrice:t,qty:s};case"EMPTY":return{shoppingCart:[],totalPrice:0,message:"",qty:0};default:return A}},o=c(1),m=Object(t.createContext)(),g=function(A){var e=Object(t.useReducer)(j,{shoppingCart:[],totalPrice:0,qty:0}),c=Object(l.a)(e,2),s=c[0],a=c[1];return Object(o.jsx)(m.Provider,{value:Object(r.a)(Object(r.a)({},s),{},{dispatch:a}),children:A.children})},u=function(){var A=Object(t.useContext)(m).qty;return Object(o.jsxs)("nav",{children:[Object(o.jsx)("ul",{className:"left",children:Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"KenaKata.com"})})}),Object(o.jsx)("ul",{className:"right",children:Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"cart",children:Object(o.jsxs)("span",{className:"shoppingCart",children:[Object(o.jsx)("i",{className:"fas fa-cart-plus"}),Object(o.jsx)("span",{className:"cartCount",children:A})]})})})})]})},p=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"not-found",children:Object(o.jsx)("h2",{children:"Page Not Found"})})})},b=c.p+"static/media/dslr.a1516502.jpg",B=c.p+"static/media/iphone.03c118a8.jpg",h=c.p+"static/media/microphone.6a82ab39.jpg",x=c.p+"static/media/perfume.4a8665f2.jpg",E=c.p+"static/media/rings.6f9d579a.jpg",Q=c.p+"static/media/shoes.3be50997.jpg",O=c.p+"static/media/watch.80f2eae6.jpg",C=Object(t.createContext)(),I=function(A){var e=Object(t.useState)([{id:1,name:"Dslr",price:300,image:b,status:"hot"},{id:2,name:"Head Phone",price:100,image:"data:image/jpeg;base64,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",status:"new"},{id:3,name:"Iphone",price:999,image:B,status:"hot"},{id:4,name:"Blue Yetti",price:200,image:h,status:"hot"},{id:5,name:"Perfume",price:100,image:x,status:"new"},{id:6,name:"Ring",price:350,image:E,status:"new"},{id:7,name:"Shoes",price:90,image:Q,status:"hot"},{id:8,name:"Watch",price:190,image:O,status:"new"}]),c=Object(l.a)(e,1)[0];return Object(o.jsx)(C.Provider,{value:{products:Object(d.a)(c)},children:A.children})},y=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"headerText",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Exclussive Collections"}),Object(o.jsx)("p",{children:"Enjoy Shopping With KenaKata.com"})]})})})},f=function(){var A=Object(t.useContext)(C).products,e=Object(t.useContext)(m).dispatch;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(y,{}),Object(o.jsx)("div",{className:"products",children:A.map((function(A){return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsx)("div",{className:"product-image",children:Object(o.jsx)("img",{src:A.image,alt:"not-found"})}),Object(o.jsxs)("div",{className:"product-details",children:[Object(o.jsx)("div",{className:"product-name",children:A.name}),Object(o.jsxs)("div",{className:"product-price",children:["$",A.price,".00"]})]}),Object(o.jsx)("div",{className:"add-to-cart",onClick:function(){return e({type:"ADD_TO_CART",id:A.id,product:A})},children:"Add to Cart"}),"hot"===A.status?Object(o.jsx)("div",{className:"hot",children:"Hot"}):"","new"===A.status?Object(o.jsx)("div",{className:"new",children:"New"}):""]},A.id)}))})]})},w=c(21),U=c.n(w),N=c(33),D=c(34),R=c.n(D),F=c(35),T=c.n(F),M=c(11);c(66);M.a.configure();var Y=function(A){var e=Object(t.useContext)(m),c=e.shoppingCart,s=e.totalPrice,a=e.qty,i=e.dispatch,n=function(){var e=Object(N.a)(U.a.mark((function e(c){var t,a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:"All Products",price:s},e.next=3,T.a.post("https://w7gqb.sse.codesandbox.io/checkout",{token:c,product:t});case 3:a=e.sent,n=a.data.status,console.log(n),"success"===n?(i({type:"EMPTY"}),A.history.push("/"),M.a.success("You have Paid Successfully",{position:M.a.POSITION.BOTTOM_RIGHT})):M.a.error("Low Balance",{position:M.a.POSITION.BOTTOM_RIGHT});case 7:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"cart-container",children:[Object(o.jsx)("div",{className:"cart-details",style:{marginTop:"100px"},children:c.length>0?c.map((function(A){return Object(o.jsxs)("div",{className:"cart",children:[Object(o.jsx)("span",{className:"cart-image",children:Object(o.jsx)("img",{src:A.image,alt:"not found"})}),Object(o.jsx)("span",{className:"cart-product-name",children:A.name}),Object(o.jsxs)("span",{className:"cart-product-price",children:["$",A.price,".00"]}),Object(o.jsx)("span",{className:"inc",onClick:function(){return i({type:"INC",id:A.id,cart:A})},children:Object(o.jsx)("i",{className:"fas fa-plus"})}),Object(o.jsx)("span",{className:"product-quantity",children:A.qty}),Object(o.jsx)("span",{className:"dec",onClick:function(){return i({type:"DEC",id:A.id,cart:A})},children:Object(o.jsx)("i",{className:"fas fa-minus"})}),Object(o.jsxs)("span",{className:"product-total-price",children:["$",A.price*A.qty,".00"]}),Object(o.jsx)("span",{className:"delete-product",onClick:function(){return i({type:"DELETE",id:A.id,cart:A})},children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})})]},A.id)})):"Sorry your cart is currently empty"}),c.length>0&&Object(o.jsx)("div",{className:"cart-summery",children:Object(o.jsxs)("div",{className:"summery",children:[Object(o.jsx)("h3",{children:"Cart Summery"}),Object(o.jsxs)("div",{className:"total-items",children:[Object(o.jsx)("div",{className:"items",children:" Total Items"}),Object(o.jsxs)("div",{className:"items-count",children:[" ",a]})]}),Object(o.jsxs)("div",{className:"total-price-section",children:[Object(o.jsx)("div",{className:"just-title",children:"Total Price"}),Object(o.jsxs)("div",{className:"items-price",children:["$",s,".00"]})]}),Object(o.jsx)("div",{className:"stripe-section",children:Object(o.jsx)(R.a,{pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg:!0,stripeKey:"pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg",token:n,billingAddress:!0,shippingAddress:!0,amount:100*s,name:"All Products"})})]})})]})};var H=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(I,{children:Object(o.jsx)(g,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(n.c,{children:[Object(o.jsx)(n.a,{path:"/React-ecommerce-site-with-payment-gateway",exact:!0,component:f}),Object(o.jsx)(n.a,{path:"/React-ecommerce-site-with-payment-gateway/cart",exact:!0,component:Y}),Object(o.jsx)(n.a,{component:p})]})]})})})})};a.a.render(Object(o.jsx)(H,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e4c58e20.chunk.js.map