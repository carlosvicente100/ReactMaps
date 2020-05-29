import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import Map from './components/map'

ReactDOM.render(
  <Provider store={store}>
    <Map></Map>
  </Provider>,
  document.getElementById('app')
)
