/* eslint-disable no-unused-vars */
import React from 'react';
import { uparrow } from '../assets';
import styles from '../style';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCen}  rounded-full h-[140px] w-[140px] opacity-80 bg-pink-gradient p-[2px] cursor-pointer  `}
      style={{
        boxShadow: '0 2px 3px rgba(94,55, 77, 0.3)',
      }}
    >
      <div
        className={`${styles.flexCen} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStrt} flex-row opacity-[100]`}>
          <div className='font-poppins font-medium text-[17px] leading-[22px]'>
            <span className='text-gradient'>Get</span>
            <p className='text-gradient'>Started</p>
          </div>
          <img
            src={uparrow}
            alt='arrowicon'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
