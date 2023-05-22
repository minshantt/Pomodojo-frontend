/* eslint-disable no-unused-vars */
import React from 'react';
import { featureList } from '../constants';
import styles, { layout } from '../style';
import GetStarted from './GetStarted';

const FeatureCard = ({ id, icon, title, content, index }) => (
  <div>
    <div
      className={`flex flex-row p-10 rounded-[20px] ${
        index !== featureList.length - 1 ? 'mb-6' : 'mb-0'
      }`}
    >
      <img src={icon} alt='icons' className='h-[7%] w-[7%] object-contain' />
    </div>
  </div>
);

/* onst FeaturePreview = () => {
  // Helper function to map feature ID to logo icon
  const getLogoIcon = (featureId) => {
    switch (featureId) {
      case 'feature-1':
        return logo1;
      case 'feature-2':
        return logo2;
      case 'feature-3':
        return logo3;
      default:
        return null;
    }
  }; */

const FeaturePreview = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>FeaturePic</div>

      <div className={`${layout.sectionImg} flex-col`}>
        {featureList.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default FeaturePreview;
