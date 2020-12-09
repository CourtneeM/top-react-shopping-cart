import React from 'react';
import { Link } from 'react-router-dom';

import CartHeader from './CartHeader';

const Cart = (props) => {
  const styles = {
    cartContainer: {
      display: 'flex',
    },
    itemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexBasis: '60%',
    },
    itemCard: {
      display: 'flex',
      width: '100%',
      textAlign: 'center',
      border: '1px solid #000',
    },
    itemCardInfo: {
      margin: '0 auto',
      fontSize: '1.2rem',
    },
    itemEditBtns: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100px',
      margin: '0 auto',
    },
    updateBtn: {
      width: '80px',
      margin: '12px 0',
    },
    removeFromCart: {
      fontSize: '0.8rem',
      textDecoration: 'underline',
      cursor: 'pointer',
      color: 'red',
    },
    checkoutBox: {
      flexBasis: '30%',
      textAlign: 'center',
      fontSize: '1.2rem',
      border: '1px solid #000',
    },
    checkoutBtn: {
      padding: '15px 30px',
      color: '#fff',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '7px',
      cursor: 'pointer',
    },
    cartTotalPrice: {
      fontSize: '1.4rem',
      fontWeight: '600',
    }
  }

  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
        <CartHeader cartQuantity={props.cartQuantity} />
      </heading>
      <main>
        <div>
          <Link to={ {pathname: "/shop"} }>
            <i class="fas fa-store fa-2x"></i>
          </Link>
        </div>
        <div style={styles.cartContainer}>
          <div style={styles.itemsContainer}>
            { props.cart.map(({name, quantity}, index) => (
              <div style={{width: '70%'}}>
                { quantity !== 0
                  ? <div style={styles.itemCard}>
                      <img src={props.products[index].image} alt={props.products[index].name} />
                      <div style={styles.itemCardInfo}>
                        <p>{`${name} x${quantity}`}</p>
                        <div style={styles.itemEditBtns}>
                          <i onClick={() => props.decrementCart(index)} class="fas fa-minus"></i>
                          <i onClick={() => props.incrementCart(index)} class="fas fa-plus"></i>
                          <button style={styles.updateBtn} onClick={() => props.updateCart()}>Update</button>
                          <p style={styles.removeFromCart} onClick={() => props.removeFromCart(index)}>Remove from Cart</p>
                        </div>
                      </div>
                    </div>
                  : null
                }
              </div>
            ))}
          </div>
          <div style={styles.checkoutBox}>
            {/* REPLACE PLACEHOLDER TOTAL */}
            <p>{`Total (${props.cartQuantity} items):`}</p>
            <p style={styles.cartTotalPrice}>200 credits</p>
            <Link to={ {pathname: '/checkout'} }>
                <button style={styles.checkoutBtn}>Checkout</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;