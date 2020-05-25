import React from "react";
import bottle from "./../bottle9.png";
import "./../App.scss";

class Bottle extends React.Component {
  constructor() {
    super();

    this._clicked = this._clicked.bind(this);
  }

  _clicked() {
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
      <div disabled={this.props.isSpinning} onClick={this._clicked}>
        <img src={bottle} className={className} alt="bottle" />
      </div>
    );
  }
}

export default Bottle;
