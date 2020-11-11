import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Nal Hutta Trading Post</h1>
      <main>
        <h3><Link to="/shop">Enter</Link></h3>
      </main>
    </div>
  );
}

export default Home;