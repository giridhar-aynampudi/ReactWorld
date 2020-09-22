import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  inputChange = (event) => {
    this.setState({ value: event.target.value });
    console.log("input changed", this.state);
  };

  render() {
    return (
      <div>
        <TextField
          onChange={(event) => this.inputChange(event)}
          value={this.state.value}
          id="standard-basic"
          label="enter input"
        />
      </div>
    );
  }
}

export default Index;
