import React, { Component } from "react";

// import Dice from "../components/Dice.js";
import Meeple from "../components/Meeple.js";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class PlayerArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      meeples: new Array(5).fill(<Meeple />)
    };
  }

  render() {
    const player1DiceFace = (this.faceColor = "#0000ff");
    const player1DiceDot = (this.dotColor = "#ffff00");
    const player2DiceFace = (this.faceColor = "#ffff00");
    const player2DiceDot = (this.dotColor = "#0000ff");
    return (
      <div className="border">
        <h3> Player {this.props.player === 1 ? 1 : 2} Area</h3>
        <button onClick={this.rollAll}>Roll Dice</button>
        <ReactDice
          numDice={2}
          rollTime={0.5}
          rollDone={this.rollDoneCallback}
          ref={dice => (this.reactDice = dice)}
          disableIndividual={true}
          faceColor={
            this.props.player === 1 ? player1DiceFace : player2DiceFace
          }
          dotColor={this.props.player === 1 ? player1DiceDot : player2DiceDot}
        />

        {this.state.meeples.map((meeple, idx) => {
          return (
            <Meeple key={idx} meeple={meeple} player={this.props.player} />
          );
        })}
      </div>
    );
  }

  rollAll = () => {
    this.reactDice.rollAll();
  };

  rollDoneCallback = num => {
    this.props.playerTotal(num, this.props.player);
  };
}

export default PlayerArea;
