import React, { Component } from "react";

const Chance = require("chance");

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 0,
      die2: 0,
      result: null
    };
  }

  rollDice = () => {
    const rollDie1 = new Chance();
    const rollDie2 = new Chance();
    const die1 = rollDie1.d6()
    const die2 = rollDie2.d6()
    const result = die1 + die2
    this.setState({
      die1: die1,
      die2: die2,
      result: result
    });
  };
  render() {
    return (
      <div>
        <label className="die">Die1 result: {this.state.die1}</label>
        <br />
        <label className="die">Die2 result: {this.state.die2}</label>
        <br />
        <label className="result">Total : {this.state.result}</label>
        <br/>
        <button onClick={this.rollDice}>Roll Dice</button>
      </div>
    );
  }
}

export default Dice;
