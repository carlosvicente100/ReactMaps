import React,{useRef} from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api'

const TextInput = (ref) => {
  let searchBox = useRef(ref);
  console.log('searchBox',searchBox)



  const onPlacesChanged = () => console.log(searchBox.getPlaces());
  const onLoad = ref => searchBox = ref;
 
  return(
    <StandaloneSearchBox
             onLoad={onLoad}
      onPlacesChanged={
        onPlacesChanged
      }>
    <input
      type='text'
      placeholder='Customized your placeholder'
      // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
      style={{
        boxSizing: `border-box`,
        border: `1px solid transparent`,
        width: `240px`,
        height: `32px`,
        padding: `0 12px`,
        borderRadius: `3px`,
        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
        fontSize: `14px`,
        outline: `none`,
        textOverflow: `ellipses`,
        position: 'absolute',
        top: '10px',
        right: '10px',
      }}
    />
  </StandaloneSearchBox>
)
}
export default TextInput