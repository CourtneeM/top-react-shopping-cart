import React from 'react';

import CartHeader from './CartHeader';

const Shop = (props) => {
  const products = [
    {id: '001', name: 'laser sword', image: '#'}, 
    {id: '002', name: 'blaster', image: '#'}, 
    {id: '003', name: 'thermal detonator', image: '#'}, 
    {id: '004', name: 'wookie fur pillow', image: '#'}, 
    {id: '005', name: 'miniature sand crawler', image: '#'}
  ];

  const editItem = () => {

  }

  const styles = {
    itemsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    itemCard: {
      width: '200px',
      height: '200px',
      textAlign: 'center',
      color: 'red',
      border: '1px solid #000',
    },
    itemEditBtns: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '75px',
      margin: '0 auto',
    },
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
          {products.map(({id, name, img}, index) => (
            <div style={styles.itemCard}>
              {name}
              <div style={styles.itemEditBtns}>
                <i onClick={() => props.handleDecrementClick(id, index)} class="fas fa-minus"></i>
                <p>{props.cart[index].total}</p>
                <i onClick={() => props.handleIncrementClick(id, index)} class="fas fa-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;