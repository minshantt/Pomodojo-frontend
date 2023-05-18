/* eslint-disable no-unused-vars */
import React from 'react';
import { uparrow } from '../assets';
import styles from '../style';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCen} rounded-full h-[140px] w-[140px] bg-tomato-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCen} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStrt} flex-row`}>
          <p className='font-poppins font-medium text-[17px] leading-[22px]'>
            <span className='text-gradient'>Get</span>
            <p className='text-gradient'>Started</p>
          </p>
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
