const SET_DISPLAY_MODE = "controls/SET_DISPLAY_MODE";
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

export {
  SET_DISPLAY_MODE,
  SET_HOVERED_RESTAURANT,
  setDisplayMode,
  setHoveredRestaurant
};
