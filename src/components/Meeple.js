import React, { Component } from 'react'

export default class Meeple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standing: false,
      inShelter: false,
      carryingBox: false
    }
    
  }
  render() {
    return (
      <div className="meeple">
        down
      </div>
    )
  }
}
