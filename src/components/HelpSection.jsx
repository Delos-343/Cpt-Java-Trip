import React from 'react'

const HelpSection = () => {
    return (
        <section className='py-16 px-8 text-stone-900'>
            <div className='w-full flex flex-col align-middle'>
                <h2 className='font-semibold text-center text-stone-800 lg:text-4xl text-3xl mb-1'>
                    Need Help?
                </h2>
                
                <a href="/our-routes" className='text-2xl text-center text-stone-100 bg-yellow-600 mx-auto mt-5 px-24 py-3 transition-colors hover:bg-yellow-500'>
                    Get Help
                </a>
                
            </div>
        </section>
    )
}

export default HelpSection