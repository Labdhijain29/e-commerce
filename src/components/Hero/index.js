import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font mt-0 bg-light bg-yellow-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-indigo-800">
                    Shop Smart, Live Better:
                    <br className="hidden lg:inline-block" />Your One-Stop Marketplace!
                </h1>
                <p className="mb-8 leading-relaxed text-lg font-semibold text-indigo-600">
                    Discover the freedom to express yourself with every outfit!
                </p>
                <div className="flex justify-center mt-3 p-3">
                    <button className="inline-flex text-white bg-indigo-600 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-700 rounded text-xl transition-colors duration-300">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />
                        Shop Now
                    </button>
                    <button className="ml-4 inline-flex text-indigo-700 border-2 border-indigo-500 py-3 px-10 focus:outline-none hover:bg-indigo-100 rounded text-xl transition-colors duration-300">
                        View All
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded shadow-lg" alt="hero" src="https://img.freepik.com/free-photo/expressive-young-brunette-posing-against-blue-background-attractive-darkhaired-girl-pink-dress-stylish-glasses-listening-music-enjoying_291650-2197.jpg" />
            </div>
        </div>
    </section>
    

    )}
export default Hero;