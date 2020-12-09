import React from 'react';

import CartHeader from './CartHeader';

const Checkout = (props) => {
  return (
    <div>
      <header>
        <CartHeader cartQuantity={props.cartQuantity} />
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default Checkout;