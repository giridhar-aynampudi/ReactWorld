import axios from "axios";
import React from "react";

class Test extends React.Component {
  state = {
    text: "",
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
      })
      .catch(() => {
        console.log("internal client-server error");
      });
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
      </div>
    );
  }
}

export default Test;
