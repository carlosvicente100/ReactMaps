import React, { useState } from 'react'
import { StandaloneSearchBox } from '@react-google-maps/api'
import styled from 'styled-components'
import '../styles.css'

const Input = styled.input`
  boxsizing: border-box;
  border: 1px solid transparent;
  width: 240px;
  height: 32px;
  padding: 0 12px;
  borderradius: 50px;
  boxshadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  fontsize: 44px;
  outline: none;
  textoverflow: ellipses;
  position: absolute;
  top: 10px;
  right: 0px;
  left: 0px;
  margin: auto;
`

const TextInput = ({ setMarker }) => {
  const [aref, setAref] = useState({})
  const [inputValue, setinputValue] = useState('')

  const setFilter = (newMarker) => {
    setMarker(newMarker)
  }

  const onPlacesChanged = () => {
    setFilter(aref.getPlaces())
    setinputValue('')
  }

  const onLoad = (ref) => setAref(ref)
  return (
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged} options={{}}>
      <Input
        type="text"
        placeholder="Search Places to mark"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
    </StandaloneSearchBox>
  )
}
export default TextInput
