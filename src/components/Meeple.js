import React, { Component } from "react";

export default class Meeple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meepleStatus: {
        isStanding: ["Standing", false],
        isInShelter: ["Shelter", false],
        isCarryingBox: ["Box", false]
      }
    };
  }

  handleClick = props => {
    switch (this.state.meepleStatus) {
      case this.state.isInShelter:
        break;
      case this.state.isCarryingBox:
        break;
      default:
        break;
    }
  };


  onDragStart = (e, mName) => {
    console.log('dragstart:',mName);
    e.dataTransfer.setData('name', mName)
  }


  render() {
    return (
      <div
        draggable
        onDragStart = { (e) => this.onDragStart(e, this.props.name) }
        className={
          this.props.player === 1 ? "meeple-player1" : "meeple-player2"
        }
      >
        down
      </div>
    );
  }
}
