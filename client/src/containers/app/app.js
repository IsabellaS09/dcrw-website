import React from "react";
import RestaurantMap from "containers/RestaurantMap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setDisplayMode } from "actions/controls";
//import dcrw from 'dcrw/dcrw';
import "./app.scss";
//const { getRestaurants } = dcrw.dcRW;

class App extends React.Component {
  // async componentDidMount() {
  //   const restaurants = await getRestaurants("LNB86y2b5vgWFQxsyHTu7Od4VRlg4pgZ");
  //   console.log(restaurants);
  // }

  render() {
    const { displayMode } = this.props;
    return (
      <div className={displayMode}>
        <main>
          <RestaurantMap />
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
      setDisplayMode
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
