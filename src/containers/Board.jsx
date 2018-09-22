import React, { Component } from "react";

import Meeple from "../components/Meeple.js";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meeples: []
    };
  }
  onDrop = e => {
    let mName = e.dataTransfer.getData("name");
    this.setState({
      meeples: [...this.state.meeples, mName]
    });
  };
  onDragOver = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        className="board"
        onDrop={e => this.onDrop(e)}
        onDragOver={e => this.onDragOver(e)}
      >
        <h3>Board</h3>
        {this.state.meeples.map(meeple => {
          return <Meeple name={this.props.name}/>
        })}
      </div>
    );
  }
}

export default Board;
