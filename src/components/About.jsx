import React from 'react'
import UserImg from '../assets/my photo.jpg'

export default function () {
    return (
        <section id="about" className=' p-4 py-8 m-8 my-16 md:ml-20'>
            <div className='flex items-start space-x-3'>
            <h1 className='text-5xl pr-5 font-bold mb-10 '>About</h1>
            <div className='w-2 bg-green-600 h-6'></div>
            </div>

            <div className='justify-between md:justify-evenly flex items-center' >

                <div>
                    <img src={UserImg} alt="" className='lg:w-72 lg:h-72  w-48 h-48'/>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                        Dansuram Koirala
                    </div>
                    <div>
                        Masters Degree in Chemistry
                        <br /> Tribhuvan University
                    </div>
                    <br />

                    <div className='mb-4'>
                        <div className='font-semibold'>
                            Head of Department
                        </div>
                        Department of Chemistry
                        <br />
                        St.Lawrence College
                        <br />
                        Chabahil, Kathmandu
                    </div>

                    <div>
                        <div className='font-semibold'>
                            Head of Department
                        </div>
                        Department of Chemistry
                        <br />
                        WhiteField Int'l College
                        <br />
                        Nayabazaar, Kathmandu
                    </div>
                </div>

            </div>
        </section>
    )
}
