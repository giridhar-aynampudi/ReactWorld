import React from "react";
import ReactDOM from "react-dom";

import Calender from "./components/calender";

const App = () => {
  return (
    <div>
      Hello World!
      <Calender />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
