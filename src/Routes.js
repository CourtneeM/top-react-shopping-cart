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

  const handleDecrementClick = (id, index) => {
    const decrementCartTotal = () => {
      if (cartTotal === 0) return;
      if (cart[index].total === 0) return;

      setCartTotal((prevCartTotal) => prevCartTotal - 1);
    }
  
    const removeCartItem = (id, index) => {
      let updatedCart = [...cart];
      updatedCart[index] = {
        id,
        total: updatedCart[index].total - 1
      }
      if (updatedCart[index].total < 0) {
        return;
      }

      setCart(updatedCart);
    }

    removeCartItem(id, index);
    decrementCartTotal();
  }

  const handleIncrementClick = (id, index) => {
    const incrementCartTotal = () => {
      setCartTotal((prevCartTotal) => prevCartTotal + 1);
    }
  
    const addCartItem = (id, index) => {
      let updatedCart = [...cart];
      updatedCart[index] = {
        id,
        total: updatedCart[index].total + 1
      }
  
      setCart(updatedCart);
      // console.log(cart)
    }

    incrementCartTotal();
    addCartItem(id, index);
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
            handleDecrementClick={handleDecrementClick}
            handleIncrementClick={handleIncrementClick}
          /> 
        )}/> 
        <Route exact path="/cart" render={() => (
          <Cart 
            cartTotal={cartTotal} 
            cart={cart} 
            handleDecrementClick={handleDecrementClick}
            handleIncrementClick={handleIncrementClick}
          /> 
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

// look at browser router history api - pushState, replaceState, popState