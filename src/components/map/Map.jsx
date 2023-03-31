import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 51.515968,
         lng: -0.174970
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC2cVIa--afAFbfhAciJaVhWfCMi7MXXWw'
})(MapContainer);
