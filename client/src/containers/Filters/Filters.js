import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Filters.scss";
import { setFilters } from "actions/controls";
import StarRatingComponent from "react-star-rating-component";
import MaterialIcon from "material-icons-react";

class Filters extends React.Component {
  handleFilterChange = (filterType, value) => {
    console.log(filterType, value);
  };
  render() {
    const { restaurants } = this.props;
    return (
      <div className="Filters">
        {/* <StarRatingComponent
            name="rate3"
            editing={true}
            starCount={5}
            renderStarIcon={(index, value, name, id) => {
              const isFilled = index < value;
              return (
                <MaterialIcon
                  icon={isFilled ? "star" : "star_border"}
                  color="red"
                  size={16}
                />
              );
            }}
            value={0}
          /> */}
        <div className="filter-container price-filter">
          <div className={`filter`}>$</div>
          <div className={`filter`}>$$</div>
          <div className={`filter`}>$$$</div>
          <div className={`filter`}>$$$$</div>
        </div>
        <div className="filter-container time-filter">
          <div className={`filter`}>Brunch</div>
          <div className={`filter`}>Lunch</div>
          <div className={`filter`}>Dinner</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
  filters: state.filters
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilters
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
