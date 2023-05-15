/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './style.js';
import {
  Bussi,
  Button,
  CalltoAction,
  CardD,
  Certificate,
  FeaturePreview,
  Footer,
  GetStarted,
  Main,
  Navbar,
  ReviewCard,
  Stats,
} from './components';
import { navLinks } from './constants';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCen}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary $ ${styles.flexStrt}`}>
        <div className={`${styles.boxWidth}`}>
          <Main />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStrt}`}>
        <div className={`${styles.boxWidth}`}>
          <Bussi />
          <Button />
          <CalltoAction />
        </div>
      </div>
    </div>
  );
};

export default App;
