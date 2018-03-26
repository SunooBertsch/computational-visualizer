import React, { Component } from "react";
import Block from "./Block";
import * as actions from "../actions";
import { connect } from "react-redux";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [<Block key={0} />]
    };
  }
  componentDidMount(){
    let array = this.state.array;
      this.props.addBlock(this.props.blockCount.index);
      array.push(<Block key={this.props.blockCount.index} />);
      this.setState({ ...array });
    
  }

  componentDidUpdate() {
    let array = this.state.array;
    if (this.props.blockCount.index < 1000) {
      this.props.addBlock(this.props.blockCount.index);
      array.push(<Block key={this.props.blockCount.index} />);
      this.setState({ ...array });
    }
  }

  render() {
    return <div>{this.state.array}</div>;
  }
}

function mapStateToProps({ blockCount }) {
  return {
    blockCount
  };
}

export default connect(mapStateToProps, actions)(Grid);
