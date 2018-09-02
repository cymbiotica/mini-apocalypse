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
    // console.log(dice.die1.d6())
    return (
      <div>
        <Dice />
      </div>
    );
  }
}

export default PlayerArea;
