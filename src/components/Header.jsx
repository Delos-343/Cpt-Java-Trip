import React from 'react'
import captainLogo from '../assets/logo/Logo-Default-Rectangular.png'

const Header = () => {
  return (
    <nav className="w-full bg-white border-stone-200 px-2 sm:px-4 py-2.5 dark:bg-stone-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/home" className="flex items-center">
                <img src={captainLogo} className="h-6 mr-4 sm:h-9" alt="Our Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-stone-100">
                    Captain Java Trip
                </span>
            </a>
            {/*
            <div className="flex md:order-2">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-10 py-2.5 text-center mr-3 md:mr-0 border border-blue-300 dark:bg-transparent dark:hover:bg-blue-600 dark:focus:ring-blue-300"> LOGIN </button>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            */}
            <div className="items-stretch justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="flex flex-col p-4 mt-4 border border-stone-100 rounded-lg bg-stone-50 md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-stone-800 md:dark:bg-stone-900 dark:border-stone-700">
                    <li>
                        <a href="/home" className="block text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/our-routes" className="block text-stone-700 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-white dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-stone-700">
                            Our Routes
                        </a>
                    </li>
                    <li>
                        <a href="/our-spots" className="block text-stone-700 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-white dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-stone-700">
                            Our Spots
                        </a>
                    </li>
                    <li>
                        <button className='text-yellow-600 font-semibold border border-yellow-600 px-3 transition-color hover:bg-yellow-600 hover:text-white hover:border-0'>
                            LOGOUT
                        </button>
                    </li>
                    </ul>
            </div>
        </div>
    </nav>

  )
}

export default Header