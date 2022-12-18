import React from 'react'
import { MapSidebar, LeafletMap } from '../components'

const Map = () => {
  return (
    <div className='flex flex-row h-[93vh]'>
      <MapSidebar/>
      <LeafletMap/>
    </div>
  )
}

export default Map