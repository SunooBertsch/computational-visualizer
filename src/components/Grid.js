import React, { Component } from "react";
import Block from "./Block";
import * as actions from "../actions";
import { connect } from "react-redux";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [<Block />]
    };
    this.createRows = this.createRows.bind(this);
  }

  createRows() {
    let array = this.state.array;
    if (this.props.blockCount.index < 1000) {
      this.props.addBlock(this.props.blockCount.index);
      array.push(<Block />);
      this.setState({ array: array });
    }
    console.log(array);
    setTimeout(return <div>{array}</div>);
  }

  render() {
    return <div>{this.createRows()}</div>;
  }
}

function mapStateToProps({ blockCount }) {
  return {
    blockCount
  };
}

export default connect(mapStateToProps, actions)(Grid);
