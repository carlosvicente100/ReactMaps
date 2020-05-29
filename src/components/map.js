import React, { Component, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSetMarker } from '../redux/actions'
import { googleMapsLibraries, apiKey } from '../utils'

import Point from './point'
import TextInput from './textInput'

const containerStyle = {
  width: '98vw',
  height: '96vh'
}

const center = {
  lat: 41.287908,
  lng: 2.071366
}

const Map = () => {
  const dispatch = useDispatch()
  const { markers } = useSelector((state) => state)
  const [mapRef, setMapRef] = useState(null)

  const setMarker = (marker) => {
    console.log('marker', marker[0])
    dispatch({
      type: fetchSetMarker,
      data: {
        location: {
          lat: marker[0].geometry.location.lat(),
          lng: marker[0].geometry.location.lng(),
          name: marker[0].formatted_address
        }
      }
    })
  }

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={googleMapsLibraries}>
      <GoogleMap
        options={{ mapTypeControl: false }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => setMapRef(map)}
      >
        <TextInput parentRef={mapRef} setMarker={setMarker} />
        {markers.length > 0 && markers.map((marker, index) => <Point key={index} {...marker} />)}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
//   Map.propTypes = {
//   }

//   Map.defaultProps = {}

export default Map
