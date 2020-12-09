import React from 'react';

import CartHeader from './CartHeader';

const Shop = (props) => {
  const products = [
    {id: '001', name: 'laser sword', image: '/images/lightsaber.png'}, 
    {id: '002', name: 'blaster', image: '/images/blaster.png'}, 
    {id: '003', name: 'thermal detonator', image: '/images/thermaldet.png'}, 
    {id: '004', name: 'wookie fur pillow', image: '/images/wookiepillow.png'}, 
    {id: '005', name: 'miniature sand crawler', image: '/images/minisand.png'}
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
          {products.map(({id, name, image}, index) => (
            <div style={styles.itemCard}>
              {name}
              <img src={image} />
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