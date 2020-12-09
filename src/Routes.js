import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const Routes = () => {
  const products = [
    {id: '001', name: 'Laser Sword', image: '/images/lightsaber.png'}, 
    {id: '002', name: 'Blaster', image: '/images/blaster.png'}, 
    {id: '003', name: 'Thermal Detonator', image: '/images/thermaldet.png'}, 
    {id: '004', name: 'Wookie Fur Pillow', image: '/images/wookiepillow.png'}, 
    {id: '005', name: 'Miniature Sand Crawler', image: '/images/minisand.png'}
  ];
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([
                                    {id: '001', name: 'Laser Sword', total: 0}, 
                                    {id: '002', name: 'Blaster', total: 0}, 
                                    {id: '003', name: 'Thermal Detonator', total: 0},
                                    {id: '004', name: 'Wookie Fur Pillow', total: 0},
                                    {id: '005', name: 'Miniature Sand Crawler', total: 0} 
                                  ]);
  const [updatedCart, setUpdatedCart] = useState([...cart]);

  const decrementCart = (index) => {
    let tempCart = [...updatedCart];

    if (updatedCart[index].total === 0) return;
    tempCart[index].total -= 1;
    setUpdatedCart(tempCart);
  }

  const incrementCart = (index) => {
    let tempCart = [...updatedCart];

    tempCart[index].total += 1;
    setUpdatedCart(tempCart);
  }

  const updateCart = () => {
    const updatedCartTotal = updatedCart.reduce((a, item) => a + item.total, 0);

    setCartTotal(updatedCartTotal);
    setCart(updatedCart);
  }

  const removeFromCart = (index) => {
    let tempCart = [...cart];
    tempCart[index].total = 0;

    updateCart();
  }

  useEffect(() => {
    console.log(cart);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" render={() => (
          <Shop 
            products={products}
            cartTotal={cartTotal} 
            cart={cart} 
            decrementCart={decrementCart}
            incrementCart={incrementCart}
            updateCart={updateCart}
          /> 
        )}/> 
        <Route exact path="/cart" render={() => (
          <Cart 
            products={products}
            cartTotal={cartTotal} 
            cart={cart}
            decrementCart={decrementCart}
            incrementCart={incrementCart}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
          /> 
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;