import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "20px",
  },
}));

function Intro(props) {
  const classes = useStyles();
  return (
    <div className={props.classes.backgroundDiv} id="aboutUs">
      <div className={props.classes.contentDiv}>
        <Typography variant="h3" className={props.classes.primaryText}>
          {props.primaryText}
        </Typography>
        <Typography variant="h5" className={props.classes.primaryText}>
          {props.secondaryText}
        </Typography>
      </div>
      {props.pagename === "Home" ? (
        <center>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="large"
            href="www.mlh.com"
          >
            Check MLH Website
          </Button>
        </center>
      ) : null}
    </div>
  );
}

export default Intro;
