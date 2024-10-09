import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='p-6 flex justify-end space-x-6 font-semibold px-8'>
      <Link to="hero" smooth={true} duration={700} className= "cursor-pointer">Home</Link>
      <Link to="about" smooth={true} duration={700} className= "cursor-pointer">About</Link>

      {/* Subject Materials with Dropdown */}
      <div className='relative inline-block '>
        <button
          onClick={toggleDropdown}
          className='font-semibold focus:outline-none flex items-center'
        >
          <div>Subject Materials </div> <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
        </button>
        {isDropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-transparent shadow-lg rounded-md z-10'>
            <Link
              to="subject-materials-neb-xi"
              smooth={true}
              duration={700}
              className='block px-4 py-2 text-sm text-gray-700 hover:text-gray-500'
              onClick={() => setDropdownOpen(false)} // Close dropdown on click
            >
              Neb-XI
            </Link>
            <Link
              to="subject-materials-neb-xii"
              smooth={true}
              duration={700}
              className='block px-4 py-2 text-sm text-gray-700 hover:text-gray-500'
              onClick={() => setDropdownOpen(false)} // Close dropdown on click
            >
              Neb-XII
            </Link>
          </div>
        )}
      </div>

      <Link to="contact" smooth={true} duration={700} className= "cursor-pointer">Contact</Link>
    </nav>
  );
}
