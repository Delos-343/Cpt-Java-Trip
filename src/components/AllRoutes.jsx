import React from 'react'

const AllRoutes = () => {
    return (
        <div className='lg:grid lg:grid-cols-3 flex flex-col gap-3 drop-shadow-xl mx-6 my-4 text-stone-100'>
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
                <img src="/images/motoran_gan.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                    End to End Route
                </h3>
                <p className='mx-5'>
                    Feeling like going on a long haul? this 384 Km route is just for you!
                </p>
                <a href="/our-routes/2" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
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
                <img src="/images/gedung-sate.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                    Top Landmarks Route
                </h3>
                <p className='mx-5'>
                    Just want to see the different landmark in the many cities in java? this one is for you!
                </p>
                <a href="/our-routes/4" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
                    View Route →
                </a>
            </div>
            <div className='relative bg-stone-500 lg:h-[28rem] md:h-[20rem] h-[22rem] w-full '>
                <img src="/images/sunrise.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48'/>
                <h3 className='md:text-3xl text-xl font-semibold mt-4 mx-5 mb-1'>
                    Scenic Route
                </h3>
                <p className='mx-5'>
                    Love taking scenic photos? This route will provide you the best photo you can get in java!
                </p>
                <a href="/our-routes/5" className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
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
    )
}

export default AllRoutes