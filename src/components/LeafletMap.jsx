import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center =['-7.2798189387667795, 112.79663873648443', '-7.2798189387667795, 112.79663873648443', '-7.2798189387667795, 112.79663873648443'];
const title = '&copy; MapTiler'
const credits = '&copy; OpenStreetMap'

const LeafletMap = () => {
  return (
    <>
      {center.map((core) => {
        <MapContainer center={center} key={core} zoom={15} className="w-full h-full my-4">
          <TileLayer url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=GgI2ThFcdA3XHtKATVgg"
                    attribution={`
                      <a href="https://www.maptiler.com/copyright/" target="_blank">
                        ${title}
                      </a>
                      <a href="https://www.openstreetmap.org/copyright" target="_blank">
                        ${credits}
                      </a>
                    `}
          />
        </MapContainer>
        }
      )}
    </>
  )
}

export default LeafletMap