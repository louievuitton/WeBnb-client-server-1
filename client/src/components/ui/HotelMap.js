import React from "react";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import MapMarker from "../ui/MapMarker";
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types'

class HotelMap extends React.Component {


  renderHotelMarkers = () => {
    return this.props.hotels.map(hotel => (
      <MapMarker
        key={hotel.id}
        price={hotel.rooms[0].price}
        lat={hotel.latitude}
        lng={hotel.longitude}
        id={hotel.id}
      />
    ));
  };

  static defaultProps = {
    zoom: 10
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude}}
          defaultZoom={this.props.zoom}
          // zoom={15}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAPS_API_KEY,
            language: "en"
          }}
        >
          {this.renderHotelMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(state => state.search)(withRouter(HotelMap));