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
    this.props.addBlock(this.props.block);

    console.log("BLOCK", this.props.block);
    let array = [<Block />, <Block />, <Block />, <Block />];
    return <div>{array}</div>;
  }

  render() {
    return <div>{this.createRow()}</div>;
  }
}

function mapStateToProps({ block }) {
  return {
    block
  };
}

export default connect(mapStateToProps, actions)(Grid);
