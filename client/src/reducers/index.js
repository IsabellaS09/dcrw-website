import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { displayMode } from "./controls";
import { restaurants } from "./restaurants";
export default combineReducers({
  displayMode,
  restaurants,
  router: routerReducer
});
