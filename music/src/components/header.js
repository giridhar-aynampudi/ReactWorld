import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          My ebay
          <AddShoppingCartIcon />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
