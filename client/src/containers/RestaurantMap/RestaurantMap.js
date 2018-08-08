import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import 'utilities/leaflet-shims';
import { getRestaurantID } from "utilities/helpers";
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import RestaurantMarker from "components/RestaurantMarker";

class RestaurantMap extends React.Component {
  render() {
    const { restaurants, hoveredRestaurant, filters } = this.props;
    const priceRangeMap = {
      $: "DOLLAR1",
      $$: "DOLLAR2",
      $$$: "DOLLAR3",
      $$$$: "DOLLAR4"
    };
    var filtered = [];
    if (restaurants) {
      var filtered = restaurants.filter(r => {
        var toReturn;
        if (
          filters.price &&
          filters.price.indexOf(priceRangeMap[r.priceRange]) > -1
        ) {
          toReturn = true;
        }
        var meal;
        if (filters.mealTime) {
          if (filters.mealTime.indexOf("brunch") > -1) {
            meal = true;
          }
          if (filters.mealTime.indexOf("lunch") > -1) {
            meal = true;
          }
          if (filters.mealTime.indexOf("dinner") > -1) {
            meal = true;
          }
        }
        return toReturn && meal;
      });
    }
    return (
      <div className="RestaurantMap">
        <Map center={[38.9072, -77.0369]} zoom={10} attribution={false}>
          <TileLayer
            crossOrigin
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          {restaurants &&
            restaurants.map(r => {
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
  filters: state.filters
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
