import React, { Component } from "react";

export default class Home2 extends Component {
  state = {
    legenda: "Valor Inicial",
  };

  resetLegenda() {
    this.setState({
      legenda: "Valor Inicial",
    });
  }

  render() {
    return (
      <div>
        <h1>Home 2</h1>
        <h2>{this.props.msg}</h2>
        <h2>{this.state.legenda}</h2>
        <input
          type="text"
          value={this.state.legenda}
          onChange={(e) => this.setState({ legenda: e.target.value })}
        />
        <button onClick={() => this.resetLegenda()}>Reset Legenda</button>
      </div>
    );
  }
}
