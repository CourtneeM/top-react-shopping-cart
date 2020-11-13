import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [{id: 1, image: '#'}, {id: 2, image: '#'}, {id: 3, image: '#'}, {id: 4, image: '#'}, {id: 5, image: '#'}];

  return (
    <div className="shop">
      <header>
        <h1>Nal Hutta Trading Post</h1>
        <Link to="/cart">
          <i className="fas fa-shopping-bag fa-2x"></i>
        </Link>
      </header>
      <main>
        <p>Inventory Varies Daily</p>
        <div className="products">
          {products.map(({id, image}) => (
            <div>
              {id}
              <i class="fas fa-minus"></i>
              <i class="fas fa-plus"></i>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;