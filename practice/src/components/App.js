import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    title: "",
    body: "",
    posts: [],
  };
  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api/name")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("data received!");
      })
      .catch(() => {
        alert("error retrieving data!");
      });
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
        this.getBlogPost();
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

  displayBlogPost = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));
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
        <div className="blog">{this.displayBlogPost(this.state.posts)}</div>
      </div>
    );
  }
}

export default App;
