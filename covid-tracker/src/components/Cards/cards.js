import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./cards.module.css";

const Cards = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Read Date</Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recover
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Read Date</Typography>
            <Typography variant="body2">
              Number of recoveries cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Read Date</Typography>
            <Typography variant="body2">
              Number of deaths cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
