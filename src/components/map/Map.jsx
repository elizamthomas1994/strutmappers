import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Map google={google} initialCenter={userLocation} zoom={18}>
        <Marker position={userLocation} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2cVIa--afAFbfhAciJaVhWfCMi7MXXWw"
})(MapContainer);