import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  
  const [cart, setCart] = useState([]);
  
  const products = [
    {id: 1, image: '#'}, 
    {id: 2, image: '#'}, 
    {id: 3, image: '#'}, 
    {id: 4, image: '#'}, 
    {id: 5, image: '#'}
  ];


  
  const decrementCartTotal = (id, index) => {
    if (cartTotal === 0) {
      return;
    }
    setCartTotal((prevCartTotal) => prevCartTotal - 1);

    let updatedCart = [...cart];
    updatedCart[index] = {
      id,
      total: updatedCart[index].total - 1
    }

    setCart(updatedCart);
  }
  
  function incrementCartTotal(id, index) {
    setCartTotal((prevCartTotal) => prevCartTotal + 1);
    
    let updatedCart = [...cart];
    if (updatedCart[index] === undefined) {
      updatedCart[index] = {total: 0}
    }
    updatedCart[index] = {
      id,
      total: updatedCart[index].total + 1
    }

    setCart(updatedCart);
  }

  return (
    <div className="shop">
      <header style={{position: "relative"}}>
        <h1>Nal Hutta Trading Post</h1>
        <Link 
          to={{
            pathname: "/cart",
            state: {
              cart
            }
           }}
        >
          <i className="fas fa-shopping-bag fa-2x"></i>
        </Link>
        <p style={{position: "absolute", bottom: "-25px", left: "30px"}}>{cartTotal}</p>
      </header>
      <main>
        <p>Inventory Varies Daily</p>
        <div className="products">
          {products.map(({id, img}, index) => (
            <div>
              {id}
              <br />
              <i onClick={() => decrementCartTotal(id, index)} class="fas fa-minus"></i>
              <i onClick={() => incrementCartTotal(id, index)} class="fas fa-plus"></i>
            </div>
          ))}
          {console.log(props.history)}
        </div>
      </main>
    </div>
  );
}

export default Shop;