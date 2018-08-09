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
      dinner,
      cuisine,
      description
    } = this.props;
    return (
      <div className="ListItem">
        <div>
          <div
            className="logo"
            style={{ backgroundImage: `url(${logoURL})` }}
          />
          <div className="name">{name}</div>
        </div>
        <div className="info-container">
          <div>
            <div className="description">{description}</div>
            <div className="otherInfo">
              <div className="price">{priceRange}</div>
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
              <div className="bld-container">
                <div className={`meal-time brunch${brunch ? " filled" : ""}`}>
                  B
                </div>
                <div className={`meal-time lunch${lunch ? " filled" : ""}`}>
                  L
                </div>
                <div className={`meal-time dinner${dinner ? " filled" : ""}`}>
                  D
                </div>
              </div>
            </div>
          </div>
          <div className="cuisine header">
            {cuisine.map(c => {
              return (
                <div key={c} className={`sort`}>
                  {" "}
                  {c}{" "}
                </div>
              );
            })}
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
