const DELIMITER = "||";
const getRestaurantID = ({ name, openTableID }) =>
  `${name}${DELIMITER}${openTableID}`;
export { DELIMITER, getRestaurantID };
