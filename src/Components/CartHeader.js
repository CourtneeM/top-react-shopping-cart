import React from 'react';
import { Link } from 'react-router-dom';

const CartHeader = (props) => {
  return (
    <div style={{position: 'relative', marginBottom: '10px'}}>
      <Link to={ {pathname: "/cart"} }>
          <i className="fas fa-shopping-bag fa-2x"></i>
      </Link>
      <p style={{position: "absolute", bottom: "-25px", left: "30px"}} className="cart-total" >{props.cartTotal}</p>
    </div>
  );
}

export default CartHeader;