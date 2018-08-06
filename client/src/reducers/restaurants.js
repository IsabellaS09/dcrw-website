import {
  RESTAURANTS_REQUESTED,
  RESTAURANTS_RECEIVED,
  RESTAURANTS_ERRORED
} from "../actions/restaurants";

const initialRestaurantState = {
  restaurants: null,
  fetching: false,
  error: false
};

const restaurants = (state = initialRestaurantState, action) => {
  switch (action.type) {
    case RESTAURANTS_REQUESTED:
      return {
        ...state,
        fetching: true
      };
    case RESTAURANTS_RECEIVED:
      return {
        ...state,
        restaurants: action.payload.restaurants,
        fetching: false,
        error: false
      };
    case RESTAURANTS_ERRORED:
      return {
        ...state,
        restaurants: null,
        fetching: false,
        error: true
      };
    default:
      return state;
  }
};

export { restaurants };
