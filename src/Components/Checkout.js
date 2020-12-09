import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CartHeader from './CartHeader';

const Checkout = (props) => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const submitOrder = () => {
    setOrderSubmitted(true)
    props.resetCart();
  }

  const styles={
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '70px',
      fontSize: '1.2rem',
    },
    checkoutTotal: {
      marginTop: '50px',
      fontSize: '1.4rem',
      fontWeight: '600',
    },
    submitOrderBtn: {
      padding: '15px 30px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: 'purple',
      border: 'none',
      borderRadius: '7px',
      cursor: 'pointer',
    }
  }

  return (
    <div>
      <header>
        <CartHeader cartQuantity={props.cartQuantity} />
      </header>
      <main>
        { orderSubmitted
          ? <div style={styles.mainContainer}>
              <p>Order placed</p>
              <p>You will be contacted shortly after payment with additional details for delivery</p>
              <Link to={ {pathname: "/shop"} }>
                <button>Back to Shop</button>
              </Link>
            </div>
          : <div style={styles.mainContainer}>
              <p>Shipping: To be confirmed after order is placed</p>
              <p>Payment: Due within 48 hours after order is placed</p>
              <p>Estimated Delivery Time: 2 Months</p>
              <p style={styles.checkoutTotal}>Total: {props.cart.reduce((a, item) => a + item.cost, 0)} credits</p>
              <button style={styles.submitOrderBtn} onClick={submitOrder}>Submit Order</button>
            </div> 
        }
      </main>
    </div>
  );
}

export default Checkout;