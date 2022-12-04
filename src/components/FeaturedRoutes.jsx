import React from 'react'

const FeaturedRoutes = () => {
    return (
        <section className='py-10 px-8 text-stone-100'>
            <h2 className='font-semibold text-center text-stone-800 lg:text-4xl text-3xl mb-1'>
                Featured Routes
            </h2>

            <p className='text-stone-800 text-center lg:mb-7 mb-4'>
                Don't know what route you want to have or just feeling lucky? Here we have some of our top-curated routes you might like!
            </p>

            <div className='w-full flex lg:flex-row flex-col gap-3 drop-shadow-xl'>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/maskeran_gan.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>Majestic Route</h3>
                    <p className='mx-5'>
                        A short majestic route from Jakarta to Bandung with lots of fun things to do!
                    </p>
                    <a href="/our-routes" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/motoran_gan.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>Long-Hauler Route</h3>
                    <p className='mx-5'>
                        Feeling like going on a long haul? this 384 Km route is just for you!
                    </p>
                    <a href="/our-routes" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/sunrise.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>Scenic Route</h3>
                    <p className='mx-5'>
                        Love taking scenic photos? This route will provide you the best photo you can get in java!
                    </p>
                    <a href="/our-routes" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
            </div>
            <div className='flex'>
                <a href="/our-routes" className='text-2xl bg-yellow-600 mx-auto mt-5 px-14 py-3 transition-colors hover:bg-yellow-500'>See more routes</a>
            </div>
        </section>
    )
}

export default FeaturedRoutes