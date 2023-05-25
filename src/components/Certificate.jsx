/* eslint-disable no-unused-vars */
import React from 'react';
import { clientReview } from '../constants';
import styles from '../style';
import { ClientCard } from '../components';

const Certificate = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCen} relative flex-col`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-60 blue__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>
        What others are <br className='sm:block hidden' /> saying about us
      </h1>
      <div className='w-full md:mt-0 mt-6 '>
        <p
          className={`${styles.paragraph} font-semibold italic  max w-[450px] text-left text-mahogred opacity-70`}
        >
          Discover the Power <br />
          to Thrive and Expand Your Time & Task
        </p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full clint-container relative z-[1]'>
      {clientReview.map((clientInfo) => (
        <ClientCard key={clientInfo.id} {...clientInfo} />
      ))}
    </div>
  </section>
);

export default Certificate;
