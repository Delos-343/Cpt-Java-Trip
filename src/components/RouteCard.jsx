import React from 'react'

const RouteCard = (props) => {
  return (
    <div className="bg-stone-500 text-gray-100 w-full h-20 rounded flex overflow-clip mb-2 transition hover:shadow-xl hover:bg-stone-400 hover:-translate-y-0.5 active:translate-y-0.5 active:bg-stone-600">
      <img src="https://loremflickr.com/320/320/Tourist" alt="thumbnail"  />
      <div className='flex flex-col justify-center pl-3'>
        <h3 className='font-bold text-2xl'>{props.SpotName}</h3>
        <p className='text-sm'>Spot {props.SpotNum}</p>
      </div>
    </div>
  )
}

export default RouteCard;