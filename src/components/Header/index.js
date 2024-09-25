import React from 'react'
import { Link } from 'react-router-dom'

const navigations = [
    {
        name: 'Home',
        path: '/'

    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: ' About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]
const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-lg bg-indigo-100">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={`/`} className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-1 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full mt-3" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl mt-3 font-bold text-indigo-800">Quick-Pick</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center font-semibold">
            {
                navigations.map((navigation) => (
                    <Link key={navigation.path} to={navigation.path} className='mr-5 text-indigo-800 hover:text-indigo-500 transition-colors duration-200'>{navigation.name}</Link>
                ))
            }
        </nav>
        
        <Link to={'/cart'} className="inline-flex items-center bg-indigo-600 border-0 py-3 px-7 focus:outline-none hover:bg-indigo-700 rounded text-xl text-white mt-4 md:mt-0 transition-colors duration-200">
            Go to Cart
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </Link>
    </div>
</header>
    )
}

export default Header