import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRestaurantID } from "utilities/helpers";
import { setHoveredRestaurant } from "actions/controls";
import ListItem from "components/ListItem";
import "./SideMenu.scss";

class SideMenu extends React.Component {
  handleRestaurantMouseOver = id => {
    this.props.setHoveredRestaurant(id);
  };
  render() {
    const { restaurants, filters } = this.props;
    const priceRangeMap = {
      $: "DOLLAR1",
      $$: "DOLLAR2",
      $$$: "DOLLAR3",
      $$$$: "DOLLAR4"
    };
    console.log(filters);
    var filtered = [];
    if (restaurants) {
      var filtered = restaurants.filter(r => {
        var toReturn;
        if (
          filters.price &&
          filters.price.indexOf(priceRangeMap[r.priceRange]) > -1
        ) {
          toReturn = true;
        }
        var meal;
        if (filters.mealTime) {
          if (filters.mealTime.indexOf("brunch") > -1) {
            meal = true;
          }
          if (filters.mealTime.indexOf("lunch") > -1) {
            meal = true;
          }
          if (filters.mealTime.indexOf("dinner") > -1) {
            meal = true;
          }
        }
        return toReturn && meal;
      });
    }

    return (
      <div className="SideMenu">
        {restaurants &&
          filtered.map(r => {
            const id = getRestaurantID(r);
            return (
              <div
                onMouseOver={() => this.handleRestaurantMouseOver(id)}
                key={id}
                className="list-item"
              >
                <ListItem {...r} />
              </div>
            );
          })}
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
      setHoveredRestaurant
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
