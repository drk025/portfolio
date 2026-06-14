import React from 'react'
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brown-warm text-warm-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            {/* <div className="font-bold text-lg text-white mb-1">Dansuram Koirala</div> */}
            <a
              href="https://github.com/Sujan-Koirala021"
              className="text-warm-200 text-sm hover:text-terracotta transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Developer
            </a>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-warm-200">
            <li>
              <LinkScroll to="about" className="hover:text-terracotta cursor-pointer transition-colors">About</LinkScroll>
            </li>
            <li>
              <LinkRouter to="/subjectmaterials" className="hover:text-terracotta transition-colors">Subject Materials</LinkRouter>
            </li>
            <li>
              <LinkScroll to="contact" className="hover:text-terracotta cursor-pointer transition-colors">Contact</LinkScroll>
            </li>
          </ul>
        </div>

        <div className="border-t border-warm-600 mt-8 pt-6 text-sm text-warm-200 text-center">
          © 2023 <a href="#" className="hover:text-terracotta transition-colors">Dansuram Koirala™</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
