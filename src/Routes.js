import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} /> 
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

// look at browser router history api - pushState, replaceState, popState