/* eslint-disable no-unused-vars */
import React from 'react';
import { peopleIconpeng } from '../assets';

const ClientCard = ({ name, content, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-4 client-card'>
    <img
      src={peopleIconpeng}
      alt='peopleIcon'
      className='w-[40px] h-[40px] object-contain'
    />
    <p className='font-normal text-white font-poppins text-[18px] leading-[32px] my-10'>
      {content}
    </p>
    <div className='flex flex-row'>
      <img src={img} alt={name} className='h-[87px] w-[87px] rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-semibold text-mahogred text-[18px] leading-[32px] font-poppins'>
          {name}
        </h4>
        <p className='text-mahogred opacity-80 font-normal text-[17px] leading-[24px] font-poppins'>
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default ClientCard;
