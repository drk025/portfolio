import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import Hamburger from "./Hamburger";
import Close from "./Close";

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [burgerOn, setBurger] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const burgerClicked = () => setBurger(!burgerOn);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-cream"} border-b border-warm-100`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link
          to="hero"
          smooth={true}
          duration={700}
          className="cursor-pointer font-bold text-lg text-terracotta tracking-wide"
        >
          {/* DK<span className="text-brown-warm"> Chemistry</span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-brown-warm">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-terracotta transition-colors"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-terracotta transition-colors"
          >
            About
          </Link>
          <Link
            to="subjectmaterials"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-terracotta transition-colors"
          >
            Subject Materials
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            <span className="bg-terracotta text-white px-5 py-2 rounded-full hover:bg-terracotta-dark transition-colors">
              Contact
            </span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-brown-warm"
          onClick={burgerClicked}
        >
          {!burgerOn ? <Hamburger /> : <Close />}
        </button>
      </div>

      {/* Mobile Menu */}
      {burgerOn && (
        <div className="md:hidden bg-white border-t border-warm-100 px-6 py-4 space-y-3 font-medium text-brown-warm">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            className="block py-2 hover:text-terracotta"
            onClick={burgerClicked}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            className="block py-2 hover:text-terracotta"
            onClick={burgerClicked}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="block py-2 hover:text-terracotta"
            onClick={burgerClicked}
          >
            Contact
          </Link>
          <Link
            to="subjectmaterials"
            smooth={true}
            duration={700}
            className="block py-2 hover:text-terracotta"
            onClick={burgerClicked}
          >
            Subject Materials
          </Link>
        </div>
      )}
    </nav>
  );
}
