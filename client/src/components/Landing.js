import React, { Component } from "react";

class Landing extends Component {
  style = {
    textAlign: "center"
  };
  render() {
    return (
      <div style={this.style}>
        <h1>Emelia</h1>
        <p>Collect feedback from your users</p>
      </div>
    );
  }
}

export default Landing;
