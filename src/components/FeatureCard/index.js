import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({cards = []}) => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-gray-800 tracking-widest font-medium title-font mb-1">SHOP BY CATEGORY</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800">FIND WHAT YOU LOVE</h1>
                <p className="mt-2 text-gray-600">Explore our curated selection across various categories.</p>         
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    cards?.map((card) => {
                        return (
                            <Link to={`/categories/${card}`} className="p-4 md:w-1/3 cursor-pointer">
                                <div className="flex rounded-lg h-full bg-white shadow-lg p-8 flex-col transition-transform transform hover:scale-105">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || 'Example Card'}</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base text-gray-700">Discover a wide range of unique products that stand out in style and quality.</p>
                                        <span className="mt-3 text-indigo-500 inline-flex items-center hover:text-indigo-700 transition-colors" >See More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
    
    )}

export default FeatureCard