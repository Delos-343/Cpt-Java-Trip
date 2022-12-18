import React from 'react'

const FeaturedRoutes = () => {
    return (
        <section className='py-10 px-8 text-stone-100'>
            <h2 className='font-semibold text-center text-stone-800 lg:text-4xl text-3xl pb-1'>
                Featured Routes
            </h2>

            <p className='text-stone-800 text-center lg:mb-7 py-4'>
                Don't know what route you want to have or just feeling lucky? Here we have some of our top-curated routes you might like!
            </p>

            <div className='w-full flex lg:flex-row flex-col gap-3 drop-shadow-xl'>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/jakarta-panorama.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                        Jabodetabek Route
                    </h3>
                    <p className='mx-5'>
                        A fairly short distanced route that packs with places to visit!
                    </p>
                    <a href="/our-routes/1" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/borobudur.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                        Major Temples Route
                    </h3>
                    <p className='mx-5'>
                        Going for a more a trip to the past? let's visit the many temple here in java!
                    </p>
                    <a href="/our-routes/3" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
                <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                    <img src="/images/sate.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                    <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                        Gourmet Route
                    </h3>
                    <p className='mx-5'>
                        Love taking scenic photos? This route will provide you the best photo you can get in java!
                    </p>
                    <a href="/our-routes/6" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                        View Route →
                    </a>
                </div>
            </div>
            <div className='flex align-middle'>
                <a href="/our-routes" className='text-2xl text-center bg-yellow-600 mx-auto my-14 px-14 py-3 transition-colors hover:bg-yellow-500'>
                    See More Routes
                </a>
            </div>
        </section>
    )
}

export default FeaturedRoutes