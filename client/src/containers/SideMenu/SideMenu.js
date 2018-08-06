import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import "./SideMenu.scss";

class MenuReact16 extends Menu {
  static getDerivedStateFromProps(nextProps) {
    if (
      typeof nextProps.isOpen !== "undefined" &&
      nextProps.isOpen !== this.state.isOpen
    ) {
      this.toggleMenu();
    }
  }
}

class MenuWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: "none" };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "28px",
    right: "12px",
    top: "12px",
    background: "white"
  },
  bmBurgerBars: {
    background: "#2b2b2b"
  },
  bmCrossButton: {
    display: "none",
    height: "24px",
    width: "24px",
    marginRight: "15px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#2b2b2b",
    padding: "12px 12px 12px 12px",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "white"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.7)"
  }
};

class SideMenu extends React.Component {
  state = {
    checked: true
  };

  formatGroupLabel = data => (
    <div>
      <span style={{ fontSize: "10px" }}>{data.label}</span>
    </div>
  );

  render() {
    return (
      <div className="SideMenu">
        <MenuWrap wait={20}>
          <MenuReact16 right styles={styles}>
            <div>derp</div>
          </MenuReact16>
        </MenuWrap>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
