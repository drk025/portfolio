import React from 'react'
import HeroImg from '../assets/heroImg.png'
import Button from './Button'
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <section id="hero" className='hero-container p-4 flex flex-col lg:flex lg:flex-row items-center justify-around py-12 mb-6 m-6' >
            <div>
                <img src={HeroImg} alt="heroimg" />
            </div>
            <div>

                <div>
                    <div className='text-3xl font-bold py-6 text-blue-700 '>Welcome to my portfolio!</div>
                    <h2 className='text-xl font-bold pb-8 '> I'm Dansuram Koirala, a passionate chemistry teacher <br /> dedicated to inspiring curiosity and fostering <br /> a love for science in my students.</h2>
                    <div className="stats-container flex space-x-4 py-4 pt-8 text-sm md:text-md mb-12">
                        <div className="experience">
                            <div className='text-2xl'>20+ <sub className='text-sm'>YEARS OF EXPERIENCE</sub></div>
                        </div>
                        <div className="influence ">
                            <div className='text-2xl'>1K+ <sub className='text-sm'>STUDENTS INSPIRED</sub></div>
                        </div>
                        <div />
                    </div>
                    <Link to="subjectmaterials" className=' p-4 rounded-xl sm:text-md bg-black text-white w-48 text-center mt-8 hover:bg-slate-900'>Explore Courses</Link>

                </div>
            </div>
        </section>
    )
}

export default Hero