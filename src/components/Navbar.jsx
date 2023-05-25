/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { pomodojo_logo, close, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center '>
      <img
        src={pomodojo_logo}
        alt='pomodojoLogo'
        className='w-[124px] h-[32px] cursor-pointer'
      />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] cursor-pointer text-white ${
              idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggleMenu ? close : menu}
          alt='toggleMenu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className={`${
            toggleMenu ? 'flex' : 'hidden'
          } p-6 bg-pink-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex justify-end items-center flex-1 flex-col'>
            {navLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[16px] text-white ${
                  idx === navLinks.length - 1 ? 'mr-0' : 'mb-10'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
