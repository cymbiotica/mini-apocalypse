import React, { Component } from "react";

import "../src/styles/App.css";
import PlayerArea from "./containers/PlayerArea.js";
import Header from './containers/Header.js'
import Board from './containers/Board.jsx'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <PlayerArea 
          key={1}
          player={1}
        />
        <PlayerArea 
          key={2}
          player={2}
        />
        <Board />
      </div>
    );
  }
}

export default Game;
