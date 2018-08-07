import { SET_DISPLAY_MODE, SET_HOVERED_RESTAURANT } from "../actions/controls";
import { DARK } from "common/constants/theme";

const displayMode = (state = DARK, action) => {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return action.payload.displayMode;
    default:
      return state;
  }
};

const hoveredRestaurant = (state = null, action) => {
  switch (action.type) {
    case SET_HOVERED_RESTAURANT:
      return action.payload.hoveredRestaurant;
    default:
      return state;
  }
};

export { displayMode, hoveredRestaurant };
