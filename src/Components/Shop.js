import React, { useState } from 'react';

import CartHeader from './CartHeader';

const Shop = (props) => {
  const [editMode, setEditMode] = useState(false);

  const updateCart = () => {    
    setEditMode(false);
    props.updateCart();
  }

  const styles = {
    shopContainer: {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#333',
    },
    currentInvTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      fontFamily: 'sans-serif',
      color: '#eee',
      textAlign: 'center',
    },
    itemsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    itemCard: {
      minWidth: '200px',
      width: '20%',
      height: '350px',
      margin: '0 15px 40px',
      textAlign: 'center',
      backgroundColor: '#f2f2f2',
      border: '5px solid #666',
      borderRadius: '5px',
    },
    itemEditBtns: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '75px',
      margin: '15px auto 0',
    },
    editItemQuantity: {
      width: '22px',
      padding: '4px 8px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#fff',
      border: '1px solid #aaa',
      borderRadius: '10px',
    },
    addToCartBtn: {
      marginTop: '15px',
      backgroundColor: '#fff',
      borderRadius: '5px',
    }
  }

  return (
    <div className="shop" style={styles.shopContainer}>
      <header style={{position: "relative"}}>
        <CartHeader cartQuantity={props.cartQuantity} />
      </header>
      <main>
        <p style={styles.currentInvTitle}>Current Inventory</p>
        <div className="products" style={styles.itemsContainer}>
          {props.products.map(({name, image, price}, index) => (
            <div style={styles.itemCard}>
              <p>{name}</p>
              <img src={image} />
              <p>{`${price} credits`}</p>
              { editMode
                ? <div style={styles.itemEditBtns}>
                    <i onClick={() => props.decrementCart(price, index)} class="fas fa-minus"></i>
                    <input type="text" style={styles.editItemQuantity} value={props.cart[index].quantity} />
                    <i onClick={() => props.incrementCart(price, index)} class="fas fa-plus"></i>
                    <button style={styles.addToCartBtn} onClick={updateCart}>Add to Cart</button>
                  </div>
                : <div style={styles.itemEditBtns}>
                    <input 
                      type="text" 
                      style={styles.editItemQuantity} 
                      value={props.cart[index].quantity} 
                      onClick={() => setEditMode(true)}  
                    />
                  </div>
              }
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;