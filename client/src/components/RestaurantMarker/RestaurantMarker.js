import React from "react";
import PropTypes from "prop-types";
import "./RestaurantMarker.scss";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

class RestaurantMarker extends React.Component {
  render() {
    const { lat, lon, name, cuisine, hovered } = this.props;
    return (
      <Marker
        zIndexOffset={1000}
        position={[lat, lon]}
        icon={L.divIcon({
          className: `RestaurantMarker${hovered ? " hovered" : ""}`,
          iconSize: hovered ? [20, 20] : [12, 12]
        })}
      >
        <Popup>
          <div className="restaurant-popup">
            <div className="name">{name}</div>
            <div className="cuisine">
              {cuisine.map(k => <span key={k}>{k}</span>)}
            </div>
          </div>
        </Popup>
      </Marker>
    );
  }
}

RestaurantMarker.propTypes = {
  hovered: PropTypes.bool.isRequired
};

export default RestaurantMarker;
