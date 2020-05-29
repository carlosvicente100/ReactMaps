import { fetchSetMarker } from '../actions'

export const initialState = {
  markers: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case fetchSetMarker:
      return {
        ...state,
        markers: [...state.markers, action.data]
      }
    default:
      return {
        ...state
      }
  }
}
