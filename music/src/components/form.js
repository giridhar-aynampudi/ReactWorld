import React from "react";
import TextField from "@material-ui/core/TextField";

const FormReact = () => {
  return (
    // <form>
    //   <label>
    //     Name:
    //     <input type="text" name="name" />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
    <form className="inputForm" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
};
export default FormReact;
