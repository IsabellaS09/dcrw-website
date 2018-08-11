import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Filters.scss";
import { setFilters, setFilteredRestaurants } from "actions/controls";
import { getInitialFilterState } from "reducers/controls";
import StarRatingComponent from "react-star-rating-component";
import MaterialIcon from "material-icons-react";

class Filters extends React.Component {
  handleFilterChange = (filterType, value) => {
    const { restaurants } = this.props;
    var tempFilters = this.props.filters ? this.props.filters : {};
    if (this.props.filters[filterType]) {
      var ind = this.props.filters[filterType].indexOf(value);
      if (ind > -1) {
        this.props.filters[filterType].splice(ind, 1);
        tempFilters = this.props.filters;
      } else {
        if (tempFilters[filterType].length === 0) {
          tempFilters[filterType] = [value];
        } else {
          tempFilters[filterType].push(value);
        }
      }
    } else {
      tempFilters[filterType] = [value];
    }
    const priceRangeMap = {
      $: "DOLLAR1",
      $$: "DOLLAR2",
      $$$: "DOLLAR3",
      $$$$: "DOLLAR4"
    };
    var filtered = [];
    if (restaurants) {
      filtered = restaurants.filter(r => {
        var toReturn;
        if (
          tempFilters.price &&
          tempFilters.price.indexOf(priceRangeMap[r.priceRange]) > -1
        ) {
          toReturn = true;
        }
        var meal;
        if (tempFilters.mealTime) {
          if (tempFilters.mealTime.indexOf("brunch") > -1 && r.brunch) {
            meal = true;
          }
          if (tempFilters.mealTime.indexOf("lunch") > -1 && r.lunch) {
            meal = true;
          }
          if (tempFilters.mealTime.indexOf("dinner") > -1 && r.dinner) {
            meal = true;
          }
        }

        return tempFilters.mealTime && tempFilters.price
          ? toReturn && meal
          : tempFilters.mealTime
            ? meal
            : tempFilters.price
              ? toReturn
              : false;
      });
      this.props.setFilteredRestaurants(filtered);
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
    const { restaurants, setFilteredRestaurants, setFilters } = this.props;
    setFilteredRestaurants(restaurants);
    setFilters(getInitialFilterState());
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
            Reset Filters
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
  filters: state.filters,
  filteredRestaurants: state.filteredRestaurants
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilters,
      setFilteredRestaurants
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
