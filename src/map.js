import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript  } from '@react-google-maps/api';

import Point from './point'
import TextInput from './textInput'

import mapStyles from "./mapStyles"

const googleMapsLibraries = ['drawing', 'visualization', 'places']

const containerStyle = {
    width: '90vw',
    height: '90vh'
  };
  
  const center = { 
    lat: 41.287908,
    lng: 2.071366
  };

  const onClick = (...args) => {
    console.log('onClick args: ', args)
  }

const Map = () => {
  const [mapRef, setMapRef] = useState(null);
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyAYXH968-ohEYh2_SzMjdJ-kGkBxc5nv88"
        libraries={googleMapsLibraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          // styles={mapStyles}
          onClick={onClick}

          onLoad={map => setMapRef(map)}
        >
           <TextInput ref={mapRef}/> 
          <Point />

          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
//   Map.propTypes = {
//   }
  
//   Map.defaultProps = {}
  
  export default Map
  