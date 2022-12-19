import React from 'react'
import { Footer,RouteCard } from '../../components'

const Route4 = () => {
  return (
    <div>
      <img src="/images/gedung-sate.jpg" alt="Route Image" className='object-cover w-full lg:h-72 h-48 mb-6'/>
      <div className='lg:mx-40 md:mx-10 mx-8'>
        <h1 className='font-semibold text-center text-stone-800 lg:text-6xl text-3xl pb-1 mt-6'>
          Top Landmarks Route
        </h1>
        <p className='text-stone-800 text-center py-4'>
          Just want to see the different landmark in the many cities in java? this one is for you!
        </p>
        <div className='border border-stone-600 rounded my-4 px-3 py-2 md:w-[20rem] mx-auto'>
        <table>
            <tbody>
            <tr>
                <td className='font-bold pr-3'>Total Distance </td>
                <td>: 1000 km</td>
            </tr>
            <tr>
                <td className='font-bold pr-3'>Total Spots </td>
                <td>: 10</td>
            </tr>
            <tr>
                <td className='font-bold pr-3'>Est. Duration </td>
                <td>: 1-5 Days</td>
            </tr>
            <tr>
                <td className='font-bold pr-3'>Price Range </td>
                <td>: 100-500k IDR</td>
            </tr>
            <tr>
                <td className='font-bold pr-3'>Rating </td>
                <td>: Good</td>
            </tr>
            </tbody>
        </table>
      </div>
      <div className='flex align-middle'>
          <a href="/map/4" className='text-white text-2xl text-center bg-yellow-600 mx-auto mb-8 px-14 py-3 transition-colors hover:bg-yellow-500'>
              View in map
          </a>
      </div>
      <div className='mx-auto lg:grid lg:grid-cols-3 flex flex-col gap-3 drop-shadow-xl mb-4'>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={1}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={2}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={3}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={4}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={5}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={6}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={7}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={8}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={9}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={10}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={11}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={12}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={13}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={14}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={15}/>
        <RouteCard ImgSrc={"https://loremflickr.com/320/320/Tourist"} SpotName={"Disneyland"} HrefTo={"/our-spot/1"} SpotNum={16}/>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Route4;