import React, { Component } from "react";

import "../src/styles/App.css";
import PlayerArea from "./containers/PlayerArea.js";
import Header from "./containers/Header.js";
import Board from "./containers/Board.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Total: 0,
      player2Total: 0
    };
  }

  setPlayerTotal = (num, player) => {
    player === 1
      ? this.setState({ player1Total: num })
      : this.setState({ player2Total: num });
  };

  render() {
    return (
      <div>
        <Header />
        <PlayerArea key={1} player={1} playerTotal={this.setPlayerTotal} />
        <PlayerArea key={2} player={2} playerTotal={this.setPlayerTotal} />
        <Board />
      </div>
    );
  }
}

export default Game;
