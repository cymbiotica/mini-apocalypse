import React, { Component } from "react";

import Dice from "../components/Dice.js";
import Meeple from "../components/Meeple.js";

class PlayerArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1
    };
  }

  // setPlayer = () => {
  //   if (this.state.isPlayer1) {
  //     this.setState(prevState =>({ isPlayer1: !prevState.isPlayer1 }))
  //     return '1'
  //   } else {
  //     this.setState(prevState =>({ isPlayer1: !prevState.isPlayer1 }))
  //     return '2'
  //   }
  // };

  componentDidMount() {
    if (this.state.activePlayer === 1) {
      console.log("first part of if statement :" + this.state.activePlayer)
      this.setState(prevState =>({ isPlayer1: !prevState.activePlayer }))
    } else {
      console.log("else part of if statement :" + this.state.activePlayer)
      this.setState(prevState =>({ isPlayer1: !prevState.activePlayer }))
    }
  }
  render() {
    return (
      <div className="border">
        <h3> Player {this.state.isPlayer1 ? 1 : 2} Area</h3>
        <Dice />
        <Meeple/>
        <Meeple/>
        <Meeple/>
        <Meeple/>
        <Meeple/>
      </div>
    );
  }
}

export default PlayerArea;
