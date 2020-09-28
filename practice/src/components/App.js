import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    title: "",
    body: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body,
    };
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data is sent to server");
        this.resetuserInputs();
      })
      .catch(() => {
        console.log("internal server error");
      });
  };

  resetuserInputs = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    console.log("state:", this.state);
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Enter title"
            />
          </div>
          <div className="form-input">
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              placeholder="body"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
