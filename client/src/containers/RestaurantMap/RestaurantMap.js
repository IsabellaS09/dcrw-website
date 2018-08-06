import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import 'utilities/leaflet-shims';
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import RestaurantMarker from "components/RestaurantMarker";

class RestaurantMap extends React.Component {
  render() {
    const { restaurants } = this.props;
    console.log(restaurants);
    return (
      <div className="RestaurantMap">
        <Map center={[38.9072, -77.0369]} zoom={10} attribution={false}>
          <TileLayer
            crossOrigin
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          {restaurants &&
            restaurants.map(r => {
              return <RestaurantMarker key={r["openTableID"]} {...r} />;
            })}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //displayMode: state.displayMode,
  restaurants: state.restaurants.restaurants
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
