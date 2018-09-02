import React, { Component } from "react";

import Dice from "../components/Dice.js";

class PlayerArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlayer1: true
    };
  }

  render() {
    return (
      <div className="border">
        <h3>Player {this.props.key} Area </h3>
        <Dice />
      </div>
    );
  }
}

export default PlayerArea;
