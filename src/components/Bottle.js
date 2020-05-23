import React from "react";
import bottle from "./../bottle2.png";
import "./../App.scss";

class Bottle extends React.Component {
  constructor() {
    super();

    this.state = {
      className: "App-logo",
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.props.setSpin();
    this.props.spin();
  }

  render() {
    let className = "App-logo";
    if (this.props.isSpinning) {
      className = "App-logo spinning";
    } else {
      className = "App-logo still";
    }

    return (
      <button
        className="bottle-button"
        disabled={this.props.isSpinning}
        onClick={this.clicked}
      >
        <img src={bottle} className={className} alt="bottle" />
      </button>
    );
  }
}

export default Bottle;
