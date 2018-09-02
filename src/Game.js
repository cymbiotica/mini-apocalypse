import React, { Component } from "react";

import "../src/styles/App.css";
import PlayerArea from "./containers/PlayerArea.js";
import Header from './containers/Header.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <PlayerArea key={1}/>
        <PlayerArea key={2}/>
      </div>
    );
  }
}

export default Game;
