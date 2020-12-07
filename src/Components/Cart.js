import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
      </heading>
      <main>
        <button onClick={() => console.log(props)}>Back to Shop</button>
        <div>
          { props.cart.filter((item) => item.total != 0).map((item, index) => (
            <div>
              <p>{`ID: ${item.id} | Total: ${item.total}`}</p>
              <p onClick={() => props.handleDecrementClick(item.id, index)}>-</p>
              <p onClick={() => props.handleIncrementClick(item.id, index)}>+</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Cart;