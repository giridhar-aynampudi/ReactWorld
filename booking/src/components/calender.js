import React from "react";
import { TextField } from "@material-ui/core";
// import { classes } from "@material-ui/core";
const calender = () => {
  return (
    <div>
      <form noValidate>
        <TextField
          id="date"
          label="Choose a date"
          type="date"
          //   defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};

export default calender;
