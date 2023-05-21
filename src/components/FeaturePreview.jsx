/* eslint-disable no-unused-vars */
import React from 'react';
import { featureList } from '../constants';
import styles, { layout } from '../style';
import GetStarted from './GetStarted';

const FeaturePreview = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>FeaturePic</div>

      <div className={`${layout.sectionImg} flex-col`}>
        {featureList.map((feature, idx) => {})}
      </div>
    </section>
  );
};

export default FeaturePreview;
