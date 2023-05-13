import React from 'react';
import styles from './style.js';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCen}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
      {/* Main */}
      <div className={`bg-primary ${styles.flexStrt}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
    </div>
  );
};

export default App;
