import React, { Component } from "react";
import Counter from "./components/Counter";

import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Header title="My Counter" />
        <Counter />
      </div>
    );
  }
}
