import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../content/projects";
//import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: "30px",
    marginTop: "40px",
    width: "100% !important",
  },
  card: {
    marginTop: "40px",
  },
  icon: {
    fontSize: "50px",
    color: "#06c",
  },
  button: {
    margin: "auto",
    marginTop: "20px",
  },
  heading: {
    fontWeight: 600,
  },
}));

function ProjectCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container} id="projects">
      <Grid item xs={12} className={classes.alignCenter}>
        <Typography variant="h3">Our Projects</Typography>
      </Grid>
      {projects
        ? projects.map((item, index) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Grid container spacing={3} className={classes.card}>
                <Grid item xs={12} className={classes.alignCenter}>
                  {/* <Icon className={classes.icon}>{item.img}</Icon> */}
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbE6APktdcqrf_wE21zAc1hE1QmeSLdsOgg&usqp=CAU"
                    }
                    alt="project"
                    className="img-responsive"
                  />
                </Grid>
                <Grid item xs={12} className={classes.alignCenter}>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.heading}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.alignCenter}>
                  <Typography variant="body1">{item.content}</Typography>
                </Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  href="/projects"
                >
                  {item.buttonText}
                </Button>
              </Grid>
            </Grid>
          ))
        : null}
    </Grid>
  );
}

export default ProjectCard;
