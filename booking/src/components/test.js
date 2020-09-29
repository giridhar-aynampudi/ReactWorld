import axios from "axios";
import React from "react";

class Test extends React.Component {
  state = {
    text: "",
    display: [],
  };

  componentDidMount = () => {
    this.getTestData();
  };

  handleChange = ({ target }) => {
    const name = target;
    console.log(name.value);
    this.setState({ text: name.value });
  };

  submit = (event) => {
    event.preventDefault();
    alert(`Button submit successful ${this.state.text}`);

    const payload = {
      text: this.state.text,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data is sent to server");
        this.getTestData();
        this.displayData();
      })
      .catch(() => {
        console.log("internal client-server error");
      });
  };

  getTestData = () => {
    axios.get("/api/test").then((response) => {
      const data = response.data;
      this.setState({ display: data });
      // console.log(data);
    });
  };

  displayData = (display) => {
    if (!display.length) return null;
    return display.map((d, index) => (
      <div key={index}>
        <h1>{d.text}</h1>
      </div>
    ));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Enter title"
            />
          </div>
          <button>Submit</button>
        </form>
        <div>{this.displayData(this.state.display)}</div>
      </div>
    );
  }
}

export default Test;
