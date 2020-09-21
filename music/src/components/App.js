import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";

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

  //   bt = (event) => {
  //     event.preventDefault();
  //     console.log("clicked me");
  //     // this.props.onSubmit(this.state.click);
  //   };
  render() {
    return (
      <div>
        {this.state.intro}
        <Button onClick={this.changeText} variant="contained" color="primary">
          Robo
        </Button>
      </div>
    );
  }
}

export default App;
