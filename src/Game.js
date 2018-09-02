import React, { Component } from "react";

import "../src/styles/App.css";
import PlayerArea from "./containers/PlayerArea.js"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <PlayerArea />;
  }
}

export default Game;
