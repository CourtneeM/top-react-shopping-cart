import React from 'react';

const CheckoutHeader = () => {
  const styles = {
    title: {
      fontSize: '2rem',
      fontFamily: 'sans-serif',
      color: '#eee',
    },
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative', 
      width: '90%',
      margin: '0 auto 10px',
      borderBottom: '1px solid #ccc',
    },
  }

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Nal Hutta Trading Post</h1>
    </div>
  );
}

export default CheckoutHeader;