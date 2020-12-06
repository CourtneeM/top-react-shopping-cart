import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const Routes = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([{id: '001', total: 3}, {id: '002', total: 5}]);

  const updateCartTotal = (operator) => {
    if (operator === '+') {
      setCartTotal((prevCartTotal) => prevCartTotal + 1);
    } else if (operator === '-') {
      setCartTotal((prevCartTotal) => prevCartTotal - 1);
    }
  }

  const updateCart = () => {

  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" render={() => (
          <Shop 
            cartTotal={cartTotal} 
            cart={cart} 
            updateCartTotal={updateCartTotal} 
            updateCart={updateCart}
          /> 
        )}/> 
        <Route exact path="/cart" render={() => (
          <Cart 
            cartTotal={cartTotal} 
            cart={cart} 
            updateCartTotal={updateCartTotal}
            updateCart={updateCart}
          /> 
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

// look at browser router history api - pushState, replaceState, popState