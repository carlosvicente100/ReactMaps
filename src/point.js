import React, { Component } from 'react';
import { Marker } from '@react-google-maps/api';

const dummyPosition = {
  lat: 41.287908,
  lng: 2.071366
  }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  const setSelected = (event) => {
    console.log('')
  }

const Point = ({position = dummyPosition }) => {
  return(
    <Marker
    onLoad={onLoad}
    position={position}
    onClick={setSelected}
/>
)
}
export default Point