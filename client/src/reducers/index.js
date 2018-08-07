import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { displayMode, hoveredRestaurant, filters } from "./controls";
import { restaurants } from "./restaurants";
export default combineReducers({
  displayMode,
  filters,
  restaurants,
  hoveredRestaurant,
  router: routerReducer
});
