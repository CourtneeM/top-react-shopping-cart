import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
      </heading>
      <main>
        <Link to="/shop"><button>Back to Shop</button></Link>
      </main>
    </div>
  )
}

export default Cart;