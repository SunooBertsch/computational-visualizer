import React from "react";
import Block from "./Block";
import * as actions from "../actions";

class Grid extends Component {
  constructor(props) {
    super(props);
  }
  createrow(){

  }
  render(){
    return
  }
}

function mapStateToProps({ block }) {
  return {
    block
  };
}

export default connect(mapStateToProps, actions)(Grid);
