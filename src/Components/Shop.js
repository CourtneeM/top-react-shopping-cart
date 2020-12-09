import React, { useState } from 'react';

import CartHeader from './CartHeader';

const Shop = (props) => {
  const products = [
    {id: '001', name: 'Laser Sword', image: '/images/lightsaber.png'}, 
    {id: '002', name: 'Blaster', image: '/images/blaster.png'}, 
    {id: '003', name: 'Thermal Detonator', image: '/images/thermaldet.png'}, 
    {id: '004', name: 'Wookie Fur Pillow', image: '/images/wookiepillow.png'}, 
    {id: '005', name: 'Miniature Sand Crawler', image: '/images/minisand.png'}
  ];

  const [editMode, setEditMode] = useState(false);

  const addToCart = () => {    
    setEditMode(false);
    props.addToCart();
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
          {products.map(({name, image}, index) => (
            <div style={styles.itemCard}>
              <p>{name}</p>
              <img src={image} />
              { editMode
                ? <div style={styles.itemEditBtns}>
                    <i onClick={() => props.decrementCart(index)} class="fas fa-minus"></i>
                    <input type="text" style={styles.editItemQuantity} value={props.cart[index].total} />
                    <i onClick={() => props.incrementCart(index)} class="fas fa-plus"></i>
                    <button style={styles.addToCartBtn} onClick={addToCart}>Add to Cart</button>
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