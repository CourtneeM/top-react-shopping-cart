(this["webpackJsonptop-react-shopping-cart"]=this["webpackJsonptop-react-shopping-cart"]||[]).push([[0],{26:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),c=n.n(i),a=n(19),o=n.n(a),s=n(9),l=n(8),d=n(6),u=n(2),p=(n(26),function(){var t={homeContainer:{color:"#eee",backgroundColor:"#333"},title:{fontSize:"2.6rem"},enterBtn:{padding:"15px 30px",fontSize:"1.4rem",fontWeight:"600",backgroundColor:"yellow",border:"none",borderRadius:"7px",cursor:"pointer"}};return Object(r.jsxs)("div",{className:"Home",style:t.homeContainer,children:[Object(r.jsx)("h1",{style:t.title,children:"Nal Hutta Trading Post"}),Object(r.jsx)("main",{children:Object(r.jsx)(d.b,{to:"/shop",children:Object(r.jsx)("button",{style:t.enterBtn,children:"Enter"})})})]})}),j=function(t){var e={title:{fontSize:"2rem",fontFamily:"sans-serif",color:"#eee"},mainContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",width:"90%",margin:"0 auto 10px",borderBottom:"1px solid #ccc"},cartContainer:{position:"relative",fontWeight:"600",color:"yellow"},cartIcon:{color:"yellow"},cartTotal:{position:"absolute",top:"10px",right:"-15px"}};return Object(r.jsxs)("div",{style:e.mainContainer,children:[Object(r.jsx)("h1",{style:e.title,children:"Nal Hutta Trading Post"}),Object(r.jsxs)("div",{style:e.cartContainer,children:[Object(r.jsx)(d.b,{to:{pathname:"/cart"},children:Object(r.jsx)("i",{className:"fas fa-shopping-bag fa-2x",style:e.cartIcon})}),Object(r.jsx)("p",{style:e.cartTotal,children:t.cartQuantity})]})]})},x=function(t){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),c=n[0],a=n[1],o=function(){a(!1),t.updateCart()},s={shopContainer:{width:"100vw",minHeight:"100vh",backgroundColor:"#333"},currentInvTitle:{fontSize:"1.4rem",fontWeight:"600",fontFamily:"sans-serif",color:"#eee",textAlign:"center"},itemsContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap"},itemCard:{minWidth:"200px",width:"20%",height:"350px",margin:"0 15px 40px",textAlign:"center",backgroundColor:"#f2f2f2",border:"5px solid #666",borderRadius:"5px"},itemEditBtns:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",width:"75px",margin:"15px auto 0"},editItemQuantity:{width:"22px",padding:"4px 8px",margin:"0 auto",textAlign:"center",backgroundColor:"#fff",border:"1px solid #aaa",borderRadius:"10px"},addToCartBtn:{marginTop:"15px",backgroundColor:"#fff",borderRadius:"5px"}};return Object(r.jsxs)("div",{className:"shop",style:s.shopContainer,children:[Object(r.jsx)("header",{style:{position:"relative"},children:Object(r.jsx)(j,{cartQuantity:t.cartQuantity})}),Object(r.jsxs)("main",{children:[Object(r.jsx)("p",{style:s.currentInvTitle,children:"Current Inventory"}),Object(r.jsx)("div",{className:"products",style:s.itemsContainer,children:t.products.map((function(e,n){var i=e.name,l=e.image,d=e.price;return Object(r.jsxs)("div",{style:s.itemCard,children:[Object(r.jsx)("p",{children:i}),Object(r.jsx)("img",{src:l}),Object(r.jsx)("p",{children:"".concat(d," credits")}),c?Object(r.jsxs)("div",{style:s.itemEditBtns,children:[Object(r.jsx)("i",{onClick:function(){return t.decrementCart(d,n)},class:"fas fa-minus"}),Object(r.jsx)("input",{type:"text",style:s.editItemQuantity,value:t.cart[n].quantity}),Object(r.jsx)("i",{onClick:function(){return t.incrementCart(d,n)},class:"fas fa-plus"}),Object(r.jsx)("button",{style:s.addToCartBtn,onClick:o,children:"Add to Cart"})]}):Object(r.jsx)("div",{style:s.itemEditBtns,children:Object(r.jsx)("input",{type:"text",style:s.editItemQuantity,value:t.cart[n].quantity,onClick:function(){return a(!0)}})})]})}))})]})]})},b=function(t){var e=Object(i.useState)(t.cart.reduce((function(t,e){return t+e.cost}),0)),n=Object(l.a)(e,2),c=n[0],a=n[1],o=Object(i.useState)(!0),s=Object(l.a)(o,2),u=s[0],p=s[1],x=function(){var e=t.cart.reduce((function(t,e){return t+e.cost}),0);a(e),t.updateCart()};Object(i.useEffect)((function(){t.cart.forEach((function(t){0!==t.quantity&&p(!1)}))}));var b={mainCartContainer:{minHeight:"100vh",color:"#eee",backgroundColor:"#333"},backToShopBtn:{margin:"20px 0 0 55px",fontSize:"0.6rem"},backToShopIcon:{color:"#eee"},shoppingCartTitle:{fontSize:"1.4rem",fontWeight:"600",fontFamily:"sans-serif",textAlign:"center"},cartContainer:{display:"flex",marginTop:"50px"},itemsContainer:{display:"flex",flexDirection:"column",alignItems:"center",flexBasis:"60%"},itemCard:{display:"flex",alignItems:"center",width:"100%",textAlign:"center",border:"5px solid #666",borderRadius:"5px"},itemCardInfo:{margin:"0 auto",fontSize:"1.2rem"},itemImage:{width:"150px",height:"150px"},itemEditBtns:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"100px",margin:"0 auto"},updateBtn:{width:"80px",margin:"12px 0",padding:"5px",backgroundColor:"#ccc",border:"none",borderRadius:"5px"},removeFromCart:{fontSize:"1rem",textDecoration:"underline",cursor:"pointer",color:"red"},checkoutBox:{flexBasis:"30%",height:"200px",textAlign:"center",fontSize:"1.2rem",border:"5px solid #666",borderRadius:"5px"},checkoutBtn:{padding:"15px 30px",fontWeight:"600",backgroundColor:"yellow",border:"none",borderRadius:"7px",cursor:"pointer"},cartTotalPrice:{fontSize:"1.4rem",fontWeight:"600"}};return Object(r.jsxs)("div",{style:b.mainCartContainer,children:[Object(r.jsx)("header",{children:Object(r.jsx)(j,{cartQuantity:t.cartQuantity})}),Object(r.jsxs)("main",{children:[Object(r.jsx)("div",{style:b.backToShopBtn,children:Object(r.jsx)(d.b,{to:{pathname:"/shop"},children:Object(r.jsx)("i",{class:"fas fa-store fa-2x",style:b.backToShopIcon,children:"Back to Shop"})})}),Object(r.jsx)("p",{style:b.shoppingCartTitle,children:"Shopping Cart"}),Object(r.jsxs)("div",{style:b.cartContainer,children:[Object(r.jsx)("div",{style:b.itemsContainer,children:t.cart.map((function(e,n){var i=e.name,c=e.quantity;return Object(r.jsx)("div",{style:{width:"70%"},children:0!==c?Object(r.jsxs)("div",{style:b.itemCard,children:[Object(r.jsx)("img",{style:b.itemImage,src:t.products[n].image,alt:t.products[n].name}),Object(r.jsxs)("div",{style:b.itemCardInfo,children:[Object(r.jsxs)("p",{children:[i," x",c]}),Object(r.jsxs)("p",{children:[t.products[n].price," credits each [",t.cart[n].cost," credits] "]}),Object(r.jsxs)("div",{style:b.itemEditBtns,children:[Object(r.jsx)("i",{onClick:function(){return t.decrementCart(t.products[n].price,n)},class:"fas fa-minus"}),Object(r.jsx)("i",{onClick:function(){return t.incrementCart(t.products[n].price,n)},class:"fas fa-plus"}),Object(r.jsx)("button",{style:b.updateBtn,onClick:x,children:"Update"}),Object(r.jsx)("p",{style:b.removeFromCart,onClick:function(){return function(e){t.removeFromCart(e);var n=t.cart.reduce((function(t,e){return t+e.cost}),0);a(n),0===t.cart.filter((function(t){return 0!==t.quantity})).length&&p(!0)}(n)},children:"Remove"})]})]})]}):null})}))}),Object(r.jsx)("div",{style:b.checkoutBox,children:u?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Your cart is currently empty"}),Object(r.jsx)(d.b,{to:{pathname:"/shop"},children:Object(r.jsx)("button",{children:"Back to shop"})})]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Total (",t.cartQuantity," items):"]}),Object(r.jsxs)("p",{style:b.cartTotalPrice,children:[c," credits"]}),Object(r.jsx)(d.b,{to:{pathname:"/checkout"},children:Object(r.jsx)("button",{style:b.checkoutBtn,children:"Checkout"})})]})})]})]})]})},h=function(){var t={title:{fontSize:"2rem",fontFamily:"sans-serif",color:"#eee"},mainContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",width:"90%",margin:"0 auto 10px",borderBottom:"1px solid #ccc"}};return Object(r.jsx)("div",{style:t.mainContainer,children:Object(r.jsx)("h1",{style:t.title,children:"Nal Hutta Trading Post"})})},m=function(t){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),c=n[0],a=n[1],o=Object(s.a)(t.cart),u={checkoutContainer:{minHeight:"100vh",backgroundColor:"#333"},mainContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"70px",fontSize:"1.2rem",color:"#eee"},checkoutTotal:{marginTop:"50px",fontSize:"1.4rem",fontWeight:"600"},submitOrderBtn:{padding:"15px 30px",fontSize:"1.1rem",fontWeight:"600",backgroundColor:"yellow",border:"none",borderRadius:"7px",cursor:"pointer"},orderDetails:{margin:"40px 0",padding:"15px 40px",textAlign:"center",border:"5px solid #666",borderRadius:"5px"},orderContents:{fontWeight:"600",textDecoration:"underline"},backToShopBtn:{padding:"15px 30px",fontWeight:"600",backgroundColor:"yellow",border:"none",borderRadius:"7px",cursor:"pointer"}};return Object(r.jsxs)("div",{style:u.checkoutContainer,children:[Object(r.jsx)("header",{children:Object(r.jsx)(h,{})}),Object(r.jsx)("main",{children:c?Object(r.jsxs)("div",{style:u.mainContainer,children:[Object(r.jsx)("p",{children:"Order placed"}),Object(r.jsx)("p",{children:"You will be contacted shortly after payment with additional details for delivery"}),Object(r.jsxs)("div",{style:u.orderDetails,children:[Object(r.jsx)("p",{style:u.orderContents,children:"Order Contents"}),o.filter((function(t){return 0!==t.quantity})).map((function(t){return Object(r.jsxs)("p",{children:[t.name," x",t.quantity]})}))]}),Object(r.jsx)(d.b,{to:{pathname:"/shop"},children:Object(r.jsx)("button",{style:u.backToShopBtn,onClick:function(){return t.resetCart()},children:"Back to Shop"})})]}):Object(r.jsxs)("div",{style:u.mainContainer,children:[Object(r.jsx)("p",{children:"Shipping: To be confirmed after order is placed"}),Object(r.jsx)("p",{children:"Payment: Due within 48 hours after order is placed"}),Object(r.jsx)("p",{children:"Estimated Delivery Time: 2 Months"}),Object(r.jsxs)("p",{style:u.checkoutTotal,children:["Total: ",t.cart.reduce((function(t,e){return t+e.cost}),0)," credits"]}),Object(r.jsx)("button",{style:u.submitOrderBtn,onClick:function(){a(!0)},children:"Submit Order"})]})})]})},f=function(){var t=[{id:"001",name:"Laser Sword",image:"/images/lightsaber.png",price:2e3},{id:"002",name:"Blaster",image:"/images/blaster.png",price:800},{id:"003",name:"Thermal Detonator",image:"/images/thermaldet.png",price:200},{id:"004",name:"Wookie Fur Pillow",image:"/images/wookiepillow.png",price:1200},{id:"005",name:"Miniature Sand Crawler",image:"/images/minisand.png",price:50}],e=Object(i.useState)(0),n=Object(l.a)(e,2),c=n[0],a=n[1],o=Object(i.useState)([{id:"001",name:"Laser Sword",quantity:0,cost:0},{id:"002",name:"Blaster",quantity:0,cost:0},{id:"003",name:"Thermal Detonator",quantity:0,cost:0},{id:"004",name:"Wookie Fur Pillow",quantity:0,cost:0},{id:"005",name:"Miniature Sand Crawler",quantity:0,cost:0}]),j=Object(l.a)(o,2),h=j[0],f=j[1],O=Object(i.useState)(Object(s.a)(h)),y=Object(l.a)(O,2),g=y[0],C=y[1],v=function(t,e){var n=Object(s.a)(g);0!==g[e].quantity&&(n[e].quantity-=1,n[e].cost=n[e].quantity*t,C(n))},k=function(t,e){var n=Object(s.a)(g);n[e].quantity+=1,n[e].cost=n[e].quantity*t,C(n)},S=function(){var t=g.reduce((function(t,e){return t+e.quantity}),0);a(t),f(g)},w=function(t){var e=Object(s.a)(h);e[t].quantity=0,e[t].cost=0,S()},T=function(){var t=Object(s.a)(h);t.map((function(t){t.quantity=0,t.cost=0})),a(0),f(t)};return Object(i.useEffect)((function(){console.log(h)})),Object(r.jsx)(d.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(r.jsx)(u.a,{exact:!0,path:"/shop",render:function(){return Object(r.jsx)(x,{products:t,cartQuantity:c,cart:h,decrementCart:v,incrementCart:k,updateCart:S})}}),Object(r.jsx)(u.a,{exact:!0,path:"/cart",render:function(){return Object(r.jsx)(b,{products:t,cartQuantity:c,cart:h,decrementCart:v,incrementCart:k,updateCart:S,removeFromCart:w})}}),Object(r.jsx)(u.a,{exact:!0,path:"/checkout",render:function(){return Object(r.jsx)(m,{cartQuantity:c,cart:h,resetCart:T})}})]})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),c(t),a(t)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.87d50ada.chunk.js.map