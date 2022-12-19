import React from 'react'

const RouteCard = (props) => {
  return (
    <div className='relative bg-stone-500 md:h-[19rem] h-[14rem] w-full text-white'>
        <p className='w-8 h-8 bg-white absolute top-2 left-2 rounded-full font-bold text-xl text-stone-700 text-center shadow'>
            {props.SpotNum}
        </p>
        <img src={`${props.ImgSrc}`} alt="Route Image" className='object-cover w-full lg:h-40 h-24'/>
        <h3 className='md:text-3xl text-2xl font-semibold mt-4 mx-5 mb-1'>
            {props.SpotName}
        </h3>
        <p className='mx-5'>
            Spot {props.SpotDesc}
        </p>
        <a href={`${props.HrefTo}`} className='absolute bottom-0 w-full text-right font-bold transition ease-in-out bg-stone-600 hover:bg-stone-400 py-2 px-5'>
            View Spot →
        </a>
    </div>
  )
}

export default RouteCard;