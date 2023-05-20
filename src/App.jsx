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
  Landing,
  Navbar,
  ReviewCard,
  LandingPerfomance,
} from './components';
import { navLinks, landingPerf } from './constants';

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
          <Landing />
          ss
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
