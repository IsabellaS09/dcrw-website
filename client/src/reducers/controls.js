import {
  SET_DISPLAY_MODE,
  SET_HOVERED_RESTAURANT,
  SET_FILTERS,
  SET_FILTERED_RESTAURANTS
} from "../actions/controls";
import { DARK } from "common/constants/theme";
import {
  BRUNCH,
  LUNCH,
  DINNER,
  DOLLAR1,
  DOLLAR2,
  DOLLAR3,
  DOLLAR4
} from "common/constants/properties";

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
const getInitialFilterState = () => ({
  mealTime: [BRUNCH, LUNCH, DINNER],
  price: [DOLLAR1, DOLLAR2, DOLLAR3, DOLLAR4]
});

const filters = (state = getInitialFilterState(), action) => {
  switch (action.type) {
    case SET_FILTERS:
      return action.payload.filters;
    default:
      return state;
  }
};

const filteredRestaurants = (state = null, action) => {
  switch (action.type) {
    case SET_FILTERED_RESTAURANTS:
      return action.payload.filteredRestaurants;
    default:
      return state;
  }
};

export {
  displayMode,
  hoveredRestaurant,
  filters,
  filteredRestaurants,
  getInitialFilterState
};
