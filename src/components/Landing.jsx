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
          <h1 className='flex-1 font-poppins font-semibold ss:text-[45px] text-white text-[52px] ss:leading-[86px] leading-[80px]'>
            Master your tasks
            <br className='sm:block hidden' />
            <span className='text-gradient text-[60px] font-bold'>
              with Pomodojo+
            </span>
            <br />
            <span>the ultimate productivity tool</span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 mt-5'>
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimwhite`}>
          Bring discipline and focus to your work. <br />
          Stay organized and accomplish more. <br />
          Boost your efficiency and achieve your
        </p>
      </div>

      <div className=''>
        <img
          src={home_girltomato}
          alt='tomatogirl'
          className='w-full h-full relative z-[5]'
        />
        <div className='absolute z-0 w-40% h-35% top-0 pink__gradient left' />
      </div>
    </section>
  );
};

export default Landing;
