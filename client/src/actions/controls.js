const SET_DISPLAY_MODE = "controls/SET_DISPLAY_MODE";
const SET_FILTERS = "controls/SET_FILTERS";
const SET_HOVERED_RESTAURANT = "controls/SET_HOVERED_RESTAURANT";

const setHoveredRestaurant = hoveredRestaurant => {
  return dispatch => {
    dispatch({
      type: SET_HOVERED_RESTAURANT,
      payload: { hoveredRestaurant }
    });
  };
};

const setDisplayMode = displayMode => {
  return dispatch => {
    dispatch({
      type: SET_DISPLAY_MODE,
      payload: { displayMode }
    });
  };
};

const setFilters = filters => {
  return dispatch => {
    dispatch({
      type: SET_FILTERS,
      payload: { filters }
    });
  };
};

export {
  SET_DISPLAY_MODE,
  SET_HOVERED_RESTAURANT,
  SET_FILTERS,
  setDisplayMode,
  setHoveredRestaurant,
  setFilters
};
