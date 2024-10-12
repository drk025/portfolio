import React from 'react'
import UserImg from '../assets/my photo.jpg'

export default function () {
    return (
        <section id="about" className=' p-4 py-8 m-8 my-16 md:ml-20'>
            <div className='flex items-start space-x-3 sm:pl-2 pl-8'>
            <h1 className='text-3xl lg:text-5xl pr-5 font-bold mb-10 '>About</h1>
            <div className='w-2 bg-green-600 h-6'></div>
            </div>

            {/* <div className='justify-between md:justify-evenly  items-center flex  sm:flex sm:flex-col' > */}
            <div className='flex flex-col sm:flex-row justify-between md:justify-evenly items-center'>


                <div className='pb-5'>
                    <img src={UserImg} alt="" className='lg:w-72 lg:h-72 md:w-48 md:h-48 w-32 h-32 '/>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                        Dansuram Koirala
                    </div>
                    <div>z
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
                            Lecturer
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
