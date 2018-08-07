import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";
import StarRatingComponent from "react-star-rating-component";
import MaterialIcon from "material-icons-react";

class ListItem extends React.Component {
  render() {
    const {
      name,
      yelpRating,
      logoURL,
      priceRange,
      brunch,
      lunch,
      dinner
    } = this.props;
    return (
      <div className="ListItem">
        <div className="name">{name}</div>
        <div className="logo" style={{ backgroundImage: `url(${logoURL})` }} />
        <div className="info-container">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            renderStarIcon={(index, value, name, id) => {
              const isColored = index < value;
              return (
                <MaterialIcon
                  icon={isColored ? "star" : "star_border"}
                  color="red"
                  size={16}
                />
              );
            }}
            renderStarIconHalf={() => (
              <MaterialIcon icon="star_half" color="red" size={16} />
            )}
            value={yelpRating}
          />
          <div className="price">{priceRange}</div>
          <div className="bld-container">
            <div className={`meal-time brunch${brunch ? " filled" : ""}`}>
              B
            </div>
            <div className={`meal-time lunch${lunch ? " filled" : ""}`}>L</div>
            <div className={`meal-time dinner${dinner ? " filled" : ""}`}>
              D
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  yelpRating: PropTypes.number.isRequired
};

export default ListItem;