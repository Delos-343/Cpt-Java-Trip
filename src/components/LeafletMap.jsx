import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = ['-7.2798189387667795, 112.79663873648443']

const LeafletMap = () => {
  return (
    <MapContainer center={center} zoom={15} className="w-full h-full my-4">
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=GgI2ThFcdA3XHtKATVgg"
        attribution='
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap
          </a>'
      >
  
      </TileLayer>
  </MapContainer>
  )
}

export default LeafletMap