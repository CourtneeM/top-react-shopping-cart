import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const Routes = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([
                                    {id: '001', name: 'laser sword', total: 0}, 
                                    {id: '002', name: 'blaster', total: 0}, 
                                    {id: '003', name: 'thermal detonator', total: 0},
                                    {id: '004', name: 'wookie fur pillow', total: 0},
                                    {id: '005', name: 'miniature sand crawler', total: 0} 
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

  const addToCart = () => {
    const updatedCartTotal = updatedCart.reduce((a, item) => a + item.total, 0);

    setCartTotal(updatedCartTotal);
    setCart(updatedCart);
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
            cartTotal={cartTotal} 
            cart={cart} 
            decrementCart={decrementCart}
            incrementCart={incrementCart}
            addToCart={addToCart}
          /> 
        )}/> 
        <Route exact path="/cart" render={() => (
          <Cart 
            cartTotal={cartTotal} 
            cart={cart} 
            addToCart={addToCart}
          /> 
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;