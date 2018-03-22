import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Block from "./Block";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-sm-4" />
        <Block className="col-sm-4" />

        <Block className="col-sm-4" />
        <Block className="col-sm-4" />

        <Block className="col-sm-4" />
        <Block className="col-sm-4" />

        <Block className="col-sm-4" />
        <Block className="col-sm-4" />

        <Block className="col-sm-4" />
        <Block className="col-sm-4" />

        <Block className="col-sm-4" />
        <div className="col-sm-4" />
      </div>
    );
  }
}

export default App;
