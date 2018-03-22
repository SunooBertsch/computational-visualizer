import React, { Component } from "react";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }
  render() {
    return (
      <div
        style={{ height: "5px", width: "5px", "background-color": "black", margin: "auto" }}
      />
    );
  }
}

export default Block;
