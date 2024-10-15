import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';
import Hamburger from './Hamburger';
import Close from './Close';

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [burgerOn, setBurger] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const burgerClicked = () => {
    setBurger(!burgerOn);
  };

  return (
    <nav className={`flex justify-end space-x-6 bg-primary font-semibold px-8 ${burgerOn ? 'mb-32' : 'mb-8'}`}>

      {/* Desktop Menu */}
      <div className='hidden md:p-6 md:flex md:justify-end md:space-x-6'>
        <Link to="hero" smooth={true} duration={700} className="cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={700} className="cursor-pointer">About</Link>
        <LinkRouter to="/subjectmaterials">Subject Materials</LinkRouter>
        <Link to="contact" smooth={true} duration={700} className="cursor-pointer">Contact</Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className='md:hidden p-6' onClick={burgerClicked}>
        {!burgerOn ? <Hamburger/> : <Close/>}
        </button>

      {/* Mobile Menu */}
      {burgerOn && (
        <div className='absolute top-16 right-0 w-full  bg-primary p-4 shadow-lg z-20 md:hidden'>
          <Link to="hero" smooth={true} duration={700} className=" block px-4 py-2 text-sm text-gray-700" onClick={burgerClicked}>Home</Link>
          <Link to="about" smooth={true} duration={700} className=" block px-4 py-2 text-sm text-gray-700" onClick={burgerClicked}>About</Link>
          <Link to="contact" smooth={true} duration={700} className=" block px-4 py-2 text-sm text-gray-700" onClick={burgerClicked}>Contact</Link>

          {/* Subject Materials dropdown in mobile menu */}
          <button
            onClick={toggleDropdown}
            className='px-4 py-2 text-sm text-gray-700 w-full text-left focus:outline-none flex items-center'
          >
            <span>Subject Materials</span>
            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {/* {isDropdownOpen && (
            <div className='pl-4'>
              <Link
                to="subject-materials-neb-xi"
                smooth={true}
                duration={700}
                className='block px-4 py-2 text-sm text-gray-700'
                onClick={() => {
                  toggleDropdown();
                  burgerClicked();
                }}
              >
                Neb-XI
              </Link>
              <Link
                to="subject-materials-neb-xii"
                smooth={true}
                duration={700}
                className='block px-4 py-2 text-sm text-gray-700'
                onClick={() => {
                  toggleDropdown();
                  burgerClicked();
                }}
              >
                Neb-XII
              </Link>
            </div>
          )} */}
        </div>
      )}
    </nav>
  );
}
