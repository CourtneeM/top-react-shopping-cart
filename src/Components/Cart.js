import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
      </heading>
      <main>
        <button onClick={() => props.history.goBack()}>Back to Shop</button>
        <div>
          {props.location.state.cart.map((item) => (
            <div>
              <p>{`ID: ${item.id} | Total: ${item.total}`}</p>
              <p onClick={() => props.location.state.updateCart('d')}>-</p>
              <p>+</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Cart;

// fri - make new array and send back to parent

// create temp cart when updating item quantity.
// send temp cart back up to parent component to update actual cart array
// will need to send array back


// display product with - + buttons to decrease or increase quantity