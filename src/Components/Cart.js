import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartHeader from './CartHeader';

const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(props.cart.reduce((a, item) => a + item.cost, 0));
  const [emptyCart, setEmptyCart] = useState(true);

  const updateCart = () => {
    let updatedCartTotal = props.cart.reduce((a, item) => a + item.cost, 0)
    setCartTotal(updatedCartTotal);

    props.updateCart();
  }

  const removeFromCart = (index) => {
    props.removeFromCart(index);
    
    let updatedCartTotal = props.cart.reduce((a, item) => a + item.cost, 0);
    setCartTotal(updatedCartTotal);

    const cartLength = props.cart.filter((item) => item.quantity !== 0);
    if (cartLength.length === 0) setEmptyCart(true);
    console.log(cartLength.length);
  }

  useEffect(() => {
    props.cart.forEach((item) => {
      if (item.quantity !== 0) setEmptyCart(false);
    });
  });

  const styles = {
    backToShopBtn: {
      margin: '20px 0 0 55px',
      fontSize: '0.6rem',
    },
    shoppingCartTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    },
    cartContainer: {
      display: 'flex',
      marginTop: '50px',
    },
    itemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexBasis: '60%',
    },
    itemCard: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      border: '1px solid #000',
    },
    itemCardInfo: {
      margin: '0 auto',
      fontSize: '1.2rem',
    },
    itemImage: {
      width: '150px',
      height: '150px',
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
      height: '200px',
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
      <header>
        <CartHeader cartQuantity={props.cartQuantity} />
      </header>
      <main>
        <div style={styles.backToShopBtn}>
          <Link to={ {pathname: "/shop"} }>
            <i class="fas fa-store fa-2x">Back to Shop</i>
          </Link>
        </div>
        <p style={styles.shoppingCartTitle}>Shopping Cart</p>
        <div style={styles.cartContainer}>
          <div style={styles.itemsContainer}>
            { props.cart.map(({name, quantity}, index) => (
              <div style={{width: '70%'}}>
                { quantity !== 0
                  ? <div style={styles.itemCard}>
                      <img style={styles.itemImage} src={props.products[index].image} alt={props.products[index].name} />
                      <div style={styles.itemCardInfo}>
                        <p>{name} x{quantity}</p>
                        <p>{props.products[index].price} credits each [{props.cart[index].cost} credits] </p>
                        <div style={styles.itemEditBtns}>
                          <i onClick={() => props.decrementCart(props.products[index].price, index)} class="fas fa-minus"></i>
                          <i onClick={() => props.incrementCart(props.products[index].price, index)} class="fas fa-plus"></i>
                          <button style={styles.updateBtn} onClick={updateCart}>Update</button>
                          <p style={styles.removeFromCart} onClick={() => removeFromCart(index)}>Remove from Cart</p>
                        </div>
                      </div>
                    </div>
                  : null
                }
              </div>
            ))}
          </div>
          <div style={styles.checkoutBox}>
            { emptyCart
              ? <div>
                  <p>Your cart is currently empty</p>
                  <Link to={ {pathname: '/shop'} }>
                    <button>Back to shop</button>
                  </Link>
                </div>
              : <div>
                  <p>Total ({props.cartQuantity} items):</p>
                  <p style={styles.cartTotalPrice}>
                    {cartTotal} credits
                  </p>
                  <Link to={ {pathname: '/checkout'} }>
                    <button style={styles.checkoutBtn}>Checkout</button>
                  </Link>
                </div>
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;