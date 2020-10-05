import React from "react";

function App() {
  return (
    <Navbar>
      <li>x</li>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export default App;
