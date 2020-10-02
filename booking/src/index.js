import React from "react";
import ReactDOM from "react-dom";
import MaterialUIPickers from "./components/MaterialUIPickers";
// import Test from "./components/test";
// import Calender from "./components/calender";
import Vendor from "./components/vendor";
import RainbowDatePicker from "./components/rainbowDatePicker";
const App = () => {
  return (
    <div>
      {/* <Calender /> */}
      <Vendor />
      {/* <MaterialUIPickers /> */}
      {/* <RainbowDatePicker /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
