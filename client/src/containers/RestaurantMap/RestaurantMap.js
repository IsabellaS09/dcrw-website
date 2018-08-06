import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import 'utilities/leaflet-shims';
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";

class RestaurantMap extends React.Component {
  render() {
    return (
      <div className="RestaurantMap">
        <Map
          center={[39.5, -98.35]}
          zoom={5}
          attribution={false}
          onClick={this.handleMapClick}
        >
          <TileLayer
            crossOrigin
            url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"
          />
          <TileLayer
            crossOrigin
            url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //displayMode: state.displayMode,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //setDisplayMode,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantMap);
