/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../style';
import { landingPerf } from '../constants';

const LandingPerfomance = () => {
  return (
    <section className={`${styles.flexCen} flex-row flex-wrap sm:mb-20 mb-6`}>
      {landingPerf.map((perf) => (
        <div
          key={perf.id}
          className={`flex-1 flex justify-start items-center flex-row m-3 `}
        >
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {perf.value}
          </h4>
          <p className='font-poppins font-medium xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3'>
            {perf.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default LandingPerfomance;
