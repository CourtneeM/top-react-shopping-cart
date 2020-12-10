import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const styles = {
    homeContainer: {
      color: '#eee',
      backgroundColor: '#333',
    },
    title: {
      fontSize: '2.6rem',
    },
    enterBtn: {
      padding: '15px 30px',
      fontSize: '1.4rem',
      fontWeight: '600',
      backgroundColor: 'yellow',
      border: 'none',
      borderRadius: '7px',
      cursor: 'pointer',
    }
  }

  return (
    <div className="Home" style={styles.homeContainer}>
      <h1 style={styles.title}>Nal Hutta Trading Post</h1>
      <main>
        <Link to="/shop">
          <button style={styles.enterBtn}>Enter</button>
        </Link>
      </main>
    </div>
  );
}

export default Home;