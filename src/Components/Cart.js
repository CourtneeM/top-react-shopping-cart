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
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Cart;

// create temp cart when updating item quantity.
// send temp cart back up to parent component to update actual cart array
// will need to send array back