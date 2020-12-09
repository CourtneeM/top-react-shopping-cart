import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CheckoutHeader from './CheckoutHeader';

const Checkout = (props) => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const orderedItems = [...props.cart];

  const submitOrder = () => {
    setOrderSubmitted(true)
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
    },
    orderDetails: {
      margin: '40px 0',
      padding: '15px 40px',
      textAlign: 'center',
      border: '1px solid #000',
      borderRadius: '8px',
    },
    orderContents: {
      fontWeight: '600',
      textDecoration: 'underline',
    }
  }

  return (
    <div>
      <header>
        <CheckoutHeader />
      </header>
      <main>
        { orderSubmitted
          ? <div style={styles.mainContainer}>
              <p>Order placed</p>
              <p>You will be contacted shortly after payment with additional details for delivery</p>
              <div style={styles.orderDetails}>
                <p style={styles.orderContents}>Order Contents</p>
                { orderedItems.filter((item) => item.quantity !== 0).map((item) => (
                  <p>{item.name} x{item.quantity}</p>
                )) }
              </div>
              <Link to={ {pathname: "/shop"} }>
                <button onClick={() => props.resetCart()}>Back to Shop</button>
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