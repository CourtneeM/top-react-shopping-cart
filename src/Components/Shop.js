import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const products = [
    {id: 1, image: '#'}, 
    {id: 2, image: '#'}, 
    {id: 3, image: '#'}, 
    {id: 4, image: '#'}, 
    {id: 5, image: '#'}
  ];

  // useEffect(() => {
  //   console.log(props.cart);
  // });

  const handleDecrementClick = (id, index) => {
    const decrementCartTotal = () => {
      if (props.cartTotal === 0) return;
      props.updateCartTotal('-');
    }
  
    const removeCartItem = (id, index) => {
      let updatedCart = [...props.cart];
      updatedCart[index] = {
        id,
        total: updatedCart[index].total - 1
      }
      if (updatedCart[index].total === 0) {
        updatedCart.splice(index, 1);
      }

      props.updateCart(updatedCart);
    }

    decrementCartTotal();
    removeCartItem(id, index);
  }

  const handleIncrementClick = (id, index) => {
    const incrementCartTotal = () => {
      props.updateCartTotal('+');
    }
  
    const addCartItem = (id, index) => {
      let updatedCart = [...props.cart];
      if (updatedCart[index] === undefined) {
        updatedCart[index] = {total: 0}
      }
      updatedCart[index] = {
        id,
        total: updatedCart[index].total + 1
      }
  
      props.updateCart(updatedCart);
      // console.log(props.cart)
    }

    incrementCartTotal();
    addCartItem(id, index);
  }

  const updateCart = (newCart) => {
    props.updateCart(newCart);

    // will need to update cartTotal - maybe map through cart and add up totals
    props.updateCartTotal();
  }

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