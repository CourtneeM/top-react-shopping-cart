import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CartHeader from './CartHeader';

const Cart = (props) => {
  const styles = {
    itemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    itemCard: {
      display: 'flex',
      width: '400px',
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
  }

  return (
    <div>
      <heading>
        <h1>Nal Hutta Trading Post</h1>
        <CartHeader cartTotal={props.cartTotal} />
      </heading>
      <main>
        <div>
          <Link to={ {pathname: "/shop"} }>
            <i class="fas fa-store fa-2x"></i>
          </Link>
        </div>
        <div style={styles.itemsContainer}>
          { props.cart.map(({name, total}, index) => (
            <div>
              { total !== 0
                ? <div style={styles.itemCard}>
                    <img src={props.products[index].image} />
                    <div style={styles.itemCardInfo}>
                      <p>{`${name} x${total}`}</p>
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
      </main>
    </div>
  )
}

export default Cart;