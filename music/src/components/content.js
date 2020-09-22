import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import coffeeMakerList from "./constants";
const Content = () => {
  const getCofeeMakerCard = (coffeeMakerObject) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObject} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeeMakerList.map((coffeeMakerObject) =>
        getCofeeMakerCard(coffeeMakerObject)
      )}
    </Grid>
  );
};
export default Content;
