import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";
import Input from "./input";

class App extends Component {
  state = { intro: "yo" };

  constructor(props) {
    super(props);
  }

  changeText = (event) => {
    event.preventDefault();
    console.log("clicked me");
    this.setState({ intro: "yo, hello world!!" });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.intro}
        <Button onClick={this.changeText} variant="contained" color="primary">
          Robo
        </Button>
        <div>
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
