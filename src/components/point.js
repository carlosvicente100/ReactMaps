import React from 'react'
import { Marker } from '@react-google-maps/api'

const Point = ({ location }) => {
  return <Marker position={location} animation={'BOUNCE'} title={location.name} />
}
export default Point
