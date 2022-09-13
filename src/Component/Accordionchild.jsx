import React, { Component } from "react";

export default class Accordionchild extends Component {
  state = {
    showInfo: false,
  }
  toggle = () =>{
    this.setState({showInfo:!this.state.showInfo})
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>

        <button onClick={this.toggle}>{this.state.showInfo?"-":"+"}</button>
        {this.state.showInfo && <p>{this.props.info}</p>}
      </div>
    );
  }
}
