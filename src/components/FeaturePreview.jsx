/* eslint-disable no-unused-vars */
import React from 'react';
import { featureList } from '../constants';
import styles, { layout } from '../style';
import GetStarted from './GetStarted';
import { featureui } from '../assets';

const FeatureCard = ({ id, icon, title, content, index }) => (
  <div
    className={`flex flex-row p-10 rounded-[20px] ${
      index !== featureList.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCen} bg-dimbeige `}
    >
      <img
        src={icon}
        alt='icons'
        className='h-[100%] w-[100%] object-contain'
      />
    </div>
    <div className='flex flex-1 flex-col ml-4'>
      <h3 className='font-semibold font-poppins text-dimwhite text-[18px] leading-[28px] mb-1'>
        {title}
      </h3>
      <p className='font-normal font-poppins text-[15px] leading-[24px] text-mahogred'>
        {content}
      </p>
    </div>
  </div>
);
const FeaturePreview = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionImg}>
        <img
          src={featureui}
          alt='featureprev'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='white__gradient absolute top-0 w-[50%] h-[70%] z-[3] -left-1/2 rounded-full' />
        <div className='blue__gradient absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[70%] rounded-full' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {featureList.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default FeaturePreview;
