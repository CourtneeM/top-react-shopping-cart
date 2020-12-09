import React, { useState } from 'react';

import CartHeader from './CartHeader';

const Shop = (props) => {
  const [editMode, setEditMode] = useState(false);

  const updateCart = () => {    
    setEditMode(false);
    props.updateCart();
  }

  const styles = {
    itemsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    itemCard: {
      width: '200px',
      height: '300px',
      textAlign: 'center',
      backgroundColor: '#f2f2f2',
      border: '1px solid #000',
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
      marginTop: '8px',
    }
  }

  return (
    <div className="shop">
      <header style={{position: "relative"}}>
        <h1>Nal Hutta Trading Post</h1>
        <CartHeader cartTotal={props.cartTotal} />
      </header>
      <main>
        <p>Inventory Varies Daily</p>
        <div className="products" style={styles.itemsContainer}>
          {props.products.map(({name, image}, index) => (
            <div style={styles.itemCard}>
              <p>{name}</p>
              <img src={image} />
              { editMode
                ? <div style={styles.itemEditBtns}>
                    <i onClick={() => props.decrementCart(index)} class="fas fa-minus"></i>
                    <input type="text" style={styles.editItemQuantity} value={props.cart[index].total} />
                    <i onClick={() => props.incrementCart(index)} class="fas fa-plus"></i>
                    <button style={styles.addToCartBtn} onClick={updateCart}>Add to Cart</button>
                  </div>
                : <div style={styles.itemEditBtns}>
                    <input 
                      type="text" 
                      style={styles.editItemQuantity} 
                      value={props.cart[index].total} 
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