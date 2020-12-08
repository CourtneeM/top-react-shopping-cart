import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
      </heading>
      <main>
        <Link to={ {pathname: "/shop"} }>
          <i class="fas fa-store fa-2x"></i>
        </Link>
        <div>
          { props.cart.map((item, index) => (
            <div>
              { item.total !== 0
                ? <div>
                    <p>{`ID: ${item.id} | Total: ${item.total}`}</p>
                    <p onClick={() => props.handleDecrementClick(item.id, index)}>-</p>
                    <p onClick={() => props.handleIncrementClick(item.id, index)}>+</p>
                  </div>
                : null
              }
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Cart;