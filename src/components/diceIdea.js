import React, { Component } from "react";

const Chance = require("chance");

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 0,
      die2: 0,
      result: 0
    };
  }

  rollDice = () => {
    const rollDie = new Chance();
    this.setState({
      // this works for the two dice
      die1: rollDie.d6(),
      die2: rollDie.d6(),

      // this is always a step behind, so first click will show 0
      // second click will show result of first click
      // I have tried this with a function () => {return die1+die2}
      // that returns either blank or NaN
      result: this.die1 + this.die2
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