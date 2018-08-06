import fetch from "isomorphic-fetch";
import { API_RESTAURANTS } from "common/constants/urls";

const RESTAURANTS_REQUESTED = "restaurants/RESTAURANTS_REQUESTED";
const RESTAURANTS_RECEIVED = "restaurants/RESTAURANTS_RECEIVED";
const RESTAURANTS_ERRORED = "restaurants/RESTAURANTS_ERRORED";

const requestRestaurants = () => ({
  type: RESTAURANTS_REQUESTED
});

const receiveRestaurants = restaurants => ({
  type: RESTAURANTS_RECEIVED,
  payload: { restaurants }
});

const handleRestaurantsError = error => ({
  type: RESTAURANTS_ERRORED,
  payload: { error }
});

const fetchRestaurants = () => {
  return (dispatch, getState) => {
    dispatch(requestRestaurants());
    return fetch(API_RESTAURANTS, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(restaurants => {
        dispatch(receiveRestaurants(restaurants));
      })
      .catch(e => {
        dispatch(handleRestaurantsError(e));
        console.warn(e);
      });
  };
};

export {
  RESTAURANTS_REQUESTED,
  RESTAURANTS_RECEIVED,
  RESTAURANTS_ERRORED,
  requestRestaurants,
  receiveRestaurants,
  handleRestaurantsError,
  fetchRestaurants
};
