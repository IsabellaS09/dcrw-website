import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  displayMode,
  hoveredRestaurant,
  filters,
  filteredRestaurants
} from "./controls";
import { restaurants } from "./restaurants";
export default combineReducers({
  displayMode,
  filters,
  restaurants,
  hoveredRestaurant,
  filteredRestaurants,
  router: routerReducer
});
