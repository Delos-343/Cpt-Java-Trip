import React from 'react'

const HomeStats = () => {
    return (
        <section className='py-10 px-8 text-stone-900'>
            <div className='w-full flex md:flex-row flex-col md:gap-0 gap-8'>
                <div className='relative w-full text-center '>
                    <p className='text-6xl'>10</p>
                    <p className='text-xl font-semibold mt-2'>Routes Available</p>
                </div>
                <div className='relative w-full text-center '>
                    <p className='text-6xl'>50</p>
                    <p className='text-xl font-semibold mt-2'>Total Spots</p>
                </div>
                <div className='relative w-full text-center '>
                    <p className='text-6xl'>10.000 Km</p>
                    <p className='text-xl font-semibold mt-2'>Collective Distance</p>
                </div>
                <div className='relative w-full text-center '>
                    <p className='text-6xl'>2</p>
                    <p className='text-xl font-semibold mt-2'>Users Registered</p>
                </div>
            </div>
        </section>
    )
}

export default HomeStats;