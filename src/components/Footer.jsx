import React from 'react'
import {Link as LinkScroll} from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";

function Footer() {
  return (
    
    

<footer className="bg-white  shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/Sujan-Koirala021" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-gray-500">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                About Developer
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <LinkScroll to="about" className="hover:underline me-4 md:me-6 cursor-pointer">About</LinkScroll>
                </li>
                <li>
                    <LinkRouter to="subjectmaterials" className="hover:underline me-4 md:me-6 cursor-pointer">Subject Materials</LinkRouter>
                </li>
                <li>
                    <LinkScroll to="contact" className="hover:underline me-4 md:me-6 cursor-pointer">Contact</LinkScroll>
                </li>
                {/* <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li> */}
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Dansuram Koirala™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer