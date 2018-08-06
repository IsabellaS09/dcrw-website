import React from "react";
import RestaurantMap from "containers/RestaurantMap";
import SideMenu from "containers/SideMenu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setDisplayMode } from "actions/controls";
import { fetchRestaurants } from "actions/restaurants";
import "./app.scss";

class App extends React.Component {
  componentDidMount() {
    const { fetchRestaurants } = this.props;
    fetchRestaurants();
  }

  render() {
    const { displayMode } = this.props;
    return (
      <div className={displayMode}>
        <main>
          <RestaurantMap />
          <SideMenu />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayMode: state.displayMode
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDisplayMode,
      fetchRestaurants
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
