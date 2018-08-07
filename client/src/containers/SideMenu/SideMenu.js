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
    const { restaurants } = this.props;
    return (
      <div className="SideMenu">
        {restaurants &&
          restaurants.map(r => {
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
  restaurants: state.restaurants.restaurants
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
