import React from 'react'
import { RouteCard } from '.'

const MapSidebar = () => {
  return (
    <aside className="bg-stone-200 text-stone-600 w-[25rem] h-full px-4 py-8 flex-col">
      <a href="" className="fill-stone-600 transition-colors hover:fill-stone-400 hover:text-stone-400 flex ">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        <p className=' ml-2 font-semibold'>See Other Routes</p>
      </a>
      <h1 className='font-bold text-4xl text-justify mt-5'>Route Name</h1>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum blanditiis nobis ab dolorem vitae. Provident praesentium explicabo dolor, expedita sit nihil, atque recusandae quasi dolorem ex vitae qui quia debitis.</p>
      <div className='border border-stone-600 rounded my-4 px-3 py-2'>
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
      <div className='overflow-auto bg-stone-100 h-[28rem] rounded p-2'>
        <RouteCard SpotName={"Disneyland"} SpotNum={1}/>
        <RouteCard SpotName={"Ancol"} SpotNum={2}/>
        <RouteCard SpotName={"Indomie"} SpotNum={3}/>
        <RouteCard SpotName={"Cipta Bumi Indah"} SpotNum={4}/>
        <RouteCard SpotName={"AmerikaLand"} SpotNum={5}/>
        <RouteCard SpotName={"Djarum Factory"} SpotNum={6}/>
        <RouteCard SpotName={"Banjarmasin"} SpotNum={7}/>
        <RouteCard SpotName={"Banjar"} SpotNum={8}/>
        <RouteCard SpotName={"Pelabuhan"} SpotNum={9}/>
        <RouteCard SpotName={"PT.KAI"} SpotNum={10}/>
      </div>
    </aside>
  )
}

export default MapSidebar