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
      case isInShelter:
        break;
      case isCarryingBox:
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={
          this.props.player === 1 ? "meeple-player1" : "meeple-player2"
        }
      >
        down
      </div>
    );
  }
}
