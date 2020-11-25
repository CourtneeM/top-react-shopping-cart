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
        {console.log(props.location.state)}
      </main>
    </div>
  )
}

export default Cart;