import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import 'utilities/leaflet-shims';
import { getRestaurantID } from "utilities/helpers";
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";
import { setFilteredRestaurants } from "actions/controls";
import { Map, TileLayer } from "react-leaflet";
import RestaurantMarker from "components/RestaurantMarker";

class RestaurantMap extends React.Component {
  render() {
    const { restaurants, hoveredRestaurant, filteredRestaurants } = this.props;
    const restaurantsToMap = filteredRestaurants
      ? filteredRestaurants
      : restaurants;
    return (
      <div className="RestaurantMap">
        <Map center={[38.9072, -77.0369]} zoom={10} attribution={false}>
          <TileLayer
            crossOrigin
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          {restaurantsToMap &&
            restaurantsToMap.map(r => {
              const id = getRestaurantID(r);
              return (
                <RestaurantMarker
                  key={id}
                  {...r}
                  hovered={id === hoveredRestaurant}
                />
              );
            })}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //displayMode: state.displayMode,
  restaurants: state.restaurants.restaurants,
  hoveredRestaurant: state.hoveredRestaurant,
  filteredRestaurants: state.filteredRestaurants
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilteredRestaurants
      //setDisplayMode,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantMap);
