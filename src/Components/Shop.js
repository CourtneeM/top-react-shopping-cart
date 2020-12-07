import React from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const products = [
    {id: '001', image: '#'}, 
    {id: '002', image: '#'}, 
    {id: '003', image: '#'}, 
    {id: '004', image: '#'}, 
    {id: '005', image: '#'}
  ];

  return (
    <div className="shop">
      <header style={{position: "relative"}}>
        <h1>Nal Hutta Trading Post</h1>
        <Link to={ {pathname: "/cart"} }>
          <i className="fas fa-shopping-bag fa-2x"></i>
        </Link>
        <p style={{position: "absolute", bottom: "-25px", left: "30px"}} className="cart-total" >{props.cartTotal}</p>
      </header>
      <main>
        <p>Inventory Varies Daily</p>
        <div className="products">
          {products.map(({id, img}, index) => (
            <div>
              {id}
              <br />
              <i onClick={() => props.handleDecrementClick(id, index)} class="fas fa-minus"></i>
              <i onClick={() => props.handleIncrementClick(id, index)} class="fas fa-plus"></i>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;