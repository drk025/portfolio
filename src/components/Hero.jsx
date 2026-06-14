import React from 'react'
import HeroImg from '../assets/heroImg.png'
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" className="relative bg-cream overflow-hidden">
      {/* Warm decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-100 rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text side */}
        <div className="flex-1 order-2 lg:order-1">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3">Hello I am</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-brown-warm leading-tight mb-4">
            Dansuram Koirala
          </h1>
          <p className="text-lg text-brown-light mb-8 leading-relaxed max-w-md">
            A passionate chemistry teacher dedicated to inspiring curiosity and fostering a love for science in students.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            <div className="border-l-4 border-terracotta pl-4">
              <div className="text-3xl font-bold text-brown-warm">25+</div>
              <div className="text-xs text-brown-light uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="border-l-4 border-warm-300 pl-4">
              <div className="text-3xl font-bold text-brown-warm">10K+</div>
              <div className="text-xs text-brown-light uppercase tracking-wider">Students Inspired</div>
            </div>
          </div>

          <Link
            to="subjectmaterials"
            smooth={true}
            duration={700}
            className="inline-block cursor-pointer bg-terracotta text-white font-semibold px-8 py-3 rounded-full hover:bg-terracotta-dark transition-colors shadow-md"
          >
            Explore Materials
          </Link>
        </div>

        {/* Image side */}
        <div className="flex-1 order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-warm-200 rounded-3xl rotate-3 scale-95 opacity-60" />
            <img
              src={HeroImg}
              alt="Hero illustration"
              className="relative rounded-3xl shadow-xl max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
