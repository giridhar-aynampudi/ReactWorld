import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard
          title={"Pen"}
          subtitle={"$2.99"}
          desc={"Clearance"}
          avatarSrc={
            "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/65/652/5256/532/1/505993420/505993420_1_720x928.jpg"
          }
          imgSrc={
            "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/65/652/5256/532/1/505993420/505993420_1_720x928.jpg"
          }
        />
      </Grid>
      {/* <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid> */}
    </Grid>
  );
};

export default Content;
