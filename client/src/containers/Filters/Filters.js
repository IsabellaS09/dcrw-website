import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Filters.scss";
import { setFilters } from "actions/controls";
import StarRatingComponent from "react-star-rating-component";
import MaterialIcon from "material-icons-react";

class Filters extends React.Component {
  handleFilterChange = (filterType, value) => {
    var tempFilters = {};
    if (this.props.filters[filterType]) {
      var ind = this.props.filters[filterType].indexOf(value);
      if (ind > -1) {
        this.props.filters[filterType].splice(ind, 1);
        tempFilters = this.props.filters;
      } else {
        tempFilters[filterType] = [value];
      }
    } else {
      tempFilters[filterType] = [value];
    }
    this.props.setFilters(tempFilters);
  };
  isSelected = (filterType, value) => {
    var className = `filter `;
    if (
      this.props.filters[filterType] &&
      this.props.filters[filterType].indexOf(value) > -1
    ) {
      className += "selected";
    }
    return className;
  };
  resetFilters = () => {
    this.props.setFilters({});
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
          <div
            className={`${this.isSelected("price", "DOLLAR1")}`}
            onClick={() => this.handleFilterChange("price", "DOLLAR1")}
          >
            $
          </div>
          <div
            className={`${this.isSelected("price", "DOLLAR2")}`}
            onClick={() => this.handleFilterChange("price", "DOLLAR2")}
          >
            $$
          </div>
          <div
            className={`${this.isSelected("price", "DOLLAR3")}`}
            onClick={() => this.handleFilterChange("price", "DOLLAR3")}
          >
            $$$
          </div>
          <div
            className={`${this.isSelected("price", "DOLLAR4")}`}
            onClick={() => this.handleFilterChange("price", "DOLLAR4")}
          >
            $$$$
          </div>
        </div>
        <div className="filter-container time-filter">
          <div
            className={`${this.isSelected("mealTime", "brunch")}`}
            onClick={() => this.handleFilterChange("mealTime", "brunch")}
          >
            Brunch
          </div>
          <div
            className={`${this.isSelected("mealTime", "lunch")}`}
            onClick={() => this.handleFilterChange("mealTime", "lunch")}
          >
            Lunch
          </div>
          <div
            className={`${this.isSelected("mealTime", "dinner")}`}
            onClick={() => this.handleFilterChange("mealTime", "dinner")}
          >
            Dinner
          </div>
        </div>
        <div className="filter-container reset-filter">
          <div className={`filter`} onClick={() => this.resetFilters()}>
            Clear Filters
          </div>
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