import React, { useState, useEffect } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

const Routes = () => {
  const products = [
    {id: '001', name: 'Laser Sword', image: '/images/lightsaber.png', price: 2000}, 
    {id: '002', name: 'Blaster', image: '/images/blaster.png', price: 800}, 
    {id: '003', name: 'Thermal Detonator', image: '/images/thermaldet.png', price: 200}, 
    {id: '004', name: 'Wookie Fur Pillow', image: '/images/wookiepillow.png', price: 1200}, 
    {id: '005', name: 'Miniature Sand Crawler', image: '/images/minisand.png', price: 50}
  ];
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([
                                    {id: '001', name: 'Laser Sword', quantity: 0, cost: 0}, 
                                    {id: '002', name: 'Blaster', quantity: 0, cost: 0}, 
                                    {id: '003', name: 'Thermal Detonator', quantity: 0, cost: 0},
                                    {id: '004', name: 'Wookie Fur Pillow', quantity: 0, cost: 0},
                                    {id: '005', name: 'Miniature Sand Crawler', quantity: 0, cost: 0} 
                                  ]);
  const [updatedCart, setUpdatedCart] = useState([...cart]);

  const decrementCart = (price, index) => {
    let tempCart = [...updatedCart];

    if (updatedCart[index].quantity === 0) return;
    tempCart[index].quantity -= 1;
    tempCart[index].cost = tempCart[index].quantity * price;
    setUpdatedCart(tempCart);
  }
  
  const incrementCart = (price, index) => {
    let tempCart = [...updatedCart];

    tempCart[index].quantity += 1;
    tempCart[index].cost = tempCart[index].quantity * price;
    setUpdatedCart(tempCart);
  }

  const updateCart = () => {
    const updatedCartQuantity = updatedCart.reduce((a, item) => a + item.quantity, 0);

    setCartQuantity(updatedCartQuantity);
    setCart(updatedCart);
  }

  const removeFromCart = (index) => {
    let tempCart = [...cart];
    tempCart[index].quantity = 0;
    tempCart[index].cost = 0;

    updateCart();
  }

  const resetCart = () => {
    const tempCart = [...cart];
    tempCart.map((item) => {
      item.quantity = 0;
      item.cost = 0;
    });

    setCartQuantity(0);
    setCart(tempCart);
  }

  useEffect(() => {
    console.log(cart);
  });

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" render={() => (
          <Shop 
            products={products}
            cartQuantity={cartQuantity} 
            cart={cart} 
            decrementCart={decrementCart}
            incrementCart={incrementCart}
            updateCart={updateCart}
          /> 
        )}/> 
        <Route exact path="/cart" render={() => (
          <Cart 
            products={products}
            cartQuantity={cartQuantity} 
            cart={cart}
            decrementCart={decrementCart}
            incrementCart={incrementCart}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
          /> 
        )}/>
        <Route exact path="/checkout" render={() => (
          <Checkout 
            cartQuantity={cartQuantity}
            cart={cart}
            resetCart={resetCart}
          />
        )} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;