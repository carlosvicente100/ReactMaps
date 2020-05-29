import React from "react";
import ReactDOM from "react-dom";

import Map from './map'
import MyMapWithAutocomplete from './input'

class HelloMessage extends React.Component {
  render() {
    return (<div>Hello
        <Map />
{/* <MyMapWithAutocomplete /> */}
    </div>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);