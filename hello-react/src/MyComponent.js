import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNum, children } = this.props;
    return (
      <div>
        My name is {name}.<br />
        children is {children}.<br />
        My favorite number is {favoriteNum}
        <br />
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본 이름",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNum: PropTypes.number.isRequired,
};
export default MyComponent;
