import React from 'react';
import { Link } from 'react-router-dom';

const CartHeader = (props) => {
  const styles = {
    title: {
      fontSize: '2rem',
      fontFamily: 'sans-serif',
      color: '#eee',
    },
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative', 
      width: '90%',
      margin: '0 auto 10px',
      borderBottom: '1px solid #ccc',
    },
    cartContainer: {
      position: 'relative',
    },
    cartTotal: {
      position: 'absolute',
      top: '10px',
      right: '-15px',
    }
  }

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Nal Hutta Trading Post</h1>
      <div style={styles.cartContainer}>
        <Link to={ {pathname: "/cart"} }>
            <i className="fas fa-shopping-bag fa-2x"></i>
        </Link>
        <p style={styles.cartTotal}>{props.cartQuantity}</p>
      </div>
    </div>
  );
}

export default CartHeader;