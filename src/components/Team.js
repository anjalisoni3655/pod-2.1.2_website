import React from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import teamDetails from "../content/TeamDetails";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "60px",
  },
  slider: {
    width: "85%",
    marginTop: "40px",
  },
  images: {
    width: "130%",
    borderRadius: "50%",
  },
  container: {
    paddingLeft: "60px",
    paddingRight: "60px",
    marginBottom: "30px",
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <center>
        <Typography variant="h3">Our Team</Typography>
        <Slider
          className={classes.slider}
          swipe={false}
          duration={400}
          autoplay={true}
          autoplaySpeed={4000}
        >
          {teamDetails.map((teamPage) => (
            <div>
              <Grid container spacing={2}>
                {teamPage.map((member) => (
                  <Grid item sm={3} lg={3}>
                    <Grid container spacing={2} className={classes.container}>
                      <Grid item xs={12}>
                        <img
                          src={member.img}
                          alt=""
                          className={classes.images}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5">{member.name}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {member.position}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Slider>
      </center>
    </div>
  );
}

export default Team;
