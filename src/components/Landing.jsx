/* eslint-disable no-unused-vars */
import React from 'react';
import { home_girltomato, timer, timerpng } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Landing = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStrt} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-timer-gradient rounded-[10px] mb-2`}
        >
          <img src={timerpng} alt='timerIcon' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className='text-white'> perfect blend of focus, {'  '}</span>
            <span className='text-white'>discipline</span>
          </p>
        </div>

        <div className='flex flex-row justify-between item-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[45px] text-white text-[52px] ss:leading-[86px] leading-[50px]'>
            Master your tasks
            <br className='sm:block hidden' />
            <span className='text-gradient text-[60px] font-bold'>
              with Pomodojo+
            </span>
            <br />
            <span>the ultimate productivity tool</span>
          </h1>
        </div>
        <img src={home_girltomato} className='w-[500px] h-[500px]' />
      </div>
    </section>
  );
};

export default Landing;
