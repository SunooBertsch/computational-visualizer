import React, { Component } from "react";
import Block from "./Block";
import * as actions from "../actions";
import { connect } from "react-redux";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.createRow = this.createRow.bind(this);
  }

  createRow() {
    if(this.props.blockCount.index < 100){
    this.props.addBlock(this.props.blockCount.index);
  }
    console.log("BLOCK", this.props.blockCount.index);
    let array = [<Block />];

    return <div>{array}</div>;
  }

  render() {
    return <div>{this.createRow()}</div>;
  }
}

function mapStateToProps({ blockCount }) {
  return {
    blockCount
  };
}

export default connect(mapStateToProps, actions)(Grid);
