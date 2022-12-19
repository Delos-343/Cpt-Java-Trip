import React from 'react'

const Hero2 = () => {
  return (
    <section className="relative bg-[url(/images/marlioboro.jpg)] bg-cover bg-center bg-no-repeat">
    <div className="w-screen absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-700/50"></div>
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[33rem] md:h-[49rem] lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-6xl font-bold sm:text-7xl text-gray-100">
                OUR <strong className="block font-bold text-yellow-700"> Routes </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-100">
                Browse our catalog of selected routes and set your trip on the go. From urban conglomerates to forested peaks, just sit back, relax, and enjoy the ride.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a href="#" className="block w-full bg-yellow-700 hover:border text-gray-100 hover:border-stone-100 px-12 py-3 text-2xl shadow hover:bg-transparent focus:outline-none focus:ring active:bg-stone-300 sm:w-auto">
                    See More
                </a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero2