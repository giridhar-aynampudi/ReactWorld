// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import Input from "./input";
// import FormReact from "./form";

// class App extends Component {
//   state = { intro: "yo" };

//   constructor(props) {
//     super(props);
//   }

//   changeText = (event) => {
//     event.preventDefault();
//     console.log("clicked me");
//     this.setState({ intro: "yo, hello world!!" });
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         {this.state.intro}
//         {/* <Button onClick={this.changeText} variant="contained" color="primary">
//           Robo
//         </Button> */}

//         {/* <div>
//           <Input />
//         </div> */}
//         <div>
//           <FormReact />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./header";
import Content from "./content";
const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
