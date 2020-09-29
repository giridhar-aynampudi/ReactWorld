import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/test";
import Calender from "./components/calender";

const App = () => {
  return (
    <div>
      Hello World!
      <Calender />
    </div>
  );
};

ReactDOM.render(<Test />, document.querySelector("#root"));
