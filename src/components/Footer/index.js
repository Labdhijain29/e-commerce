import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border border-t-2 bg-light bg-yellow-50">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Quick-Pick</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">Explore our unique collection of products designed to elevate your lifestyle. Shop with us for quality, style, and sustainability.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP BY CATEGORY</h2>
            <nav className="list-none mb-10">
              <li><span className="text-gray-600 hover:text-gray-800" href="/category1">Electronics</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/category2">Men's clothing</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/category3">Jewelery</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/category4">Women's clothing</span></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
            <nav className="list-none mb-10">
              <li><span className="text-gray-600 hover:text-gray-800" href="/contact">Contact Us</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/faq">FAQ</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/shipping">Shipping Information</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/returns">Returns Policy</span></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <li><span className="text-gray-600 hover:text-gray-800" href="/about">Our Story</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/careers">Careers</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/sustainability">Sustainability</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/blog">Blog</span></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONNECT WITH US</h2>
            <nav className="list-none mb-10">
              <li><span className="text-gray-600 hover:text-gray-800" href="/facebook">Facebook</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/instagram">Instagram</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/twitter">Twitter</span></li>
              <li><span className="text-gray-600 hover:text-gray-800" href="/newsletter">Newsletter Sign Up</span></li>
            </nav>
          </div>
        </div>

      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Quick-Pick -
            <span href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <span className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            <span className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </span>
            <span className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </span>
            <span className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer