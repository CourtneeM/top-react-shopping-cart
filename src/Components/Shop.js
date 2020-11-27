import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  
  const [cart, setCart] = useState([{id: '001', total: 3}, {id: '002', total: 5}]);
  
  const products = [
    {id: 1, image: '#'}, 
    {id: 2, image: '#'}, 
    {id: 3, image: '#'}, 
    {id: 4, image: '#'}, 
    {id: 5, image: '#'}
  ];

  // useEffect(() => {
  //   console.log(cart);
  // });

  const handleDecrementClick = (id, index) => {
    const decrementCartTotal = () => {
      if (cartTotal === 0) return;
      setCartTotal((prevCartTotal) => prevCartTotal - 1);
    }
  
    const removeCartItem = (id, index) => {
      let updatedCart = [...cart];
      updatedCart[index] = {
        id,
        total: updatedCart[index].total - 1
      }
      if (updatedCart[index].total === 0) {
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
    }

    decrementCartTotal();
    removeCartItem(id, index);
  }

  const handleIncrementClick = (id, index) => {
    const incrementCartTotal = () => {
      setCartTotal((prevCartTotal) => prevCartTotal + 1);
    }
  
    const addCartItem = (id, index) => {
      let updatedCart = [...cart];
      if (updatedCart[index] === undefined) {
        updatedCart[index] = {total: 0}
      }
      updatedCart[index] = {
        id,
        total: updatedCart[index].total + 1
      }
  
      setCart(updatedCart);
      // console.log(cart)
    }

    incrementCartTotal();
    addCartItem(id, index);
  }

  const updateCart = (newCart) => {
    setCart(newCart);

    // will need to update cartTotal - maybe map through cart and add up totals
    setCartTotal();
  }

  return (
    <div className="shop">
      <header style={{position: "relative"}}>
        <h1>Nal Hutta Trading Post</h1>
        <Link 
          to={{
            pathname: "/cart",
            state: {
              cart,
            }
           }}
        >
          <i className="fas fa-shopping-bag fa-2x"></i>
        </Link>
        <p style={{position: "absolute", bottom: "-25px", left: "30px"}} className="cart-total" >{cartTotal}</p>
      </header>
      <main>
        <p>Inventory Varies Daily</p>
        <div className="products">
          {products.map(({id, img}, index) => (
            <div>
              {id}
              <br />
              <i onClick={() => handleDecrementClick(id, index)} class="fas fa-minus"></i>
              <i onClick={() => handleIncrementClick(id, index)} class="fas fa-plus"></i>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;