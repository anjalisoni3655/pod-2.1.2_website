import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import logo from "../resources/images/olaf.gif";
import Snowfall from "react-snowfall";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "20px",
  },
  images: {
    // width: "2",
    // height: "100px",
    borderRadius: "50%",
    marginTop: "5%",
  },
}));

var textArray = [
  "We belong to pod 2.1.2",
  "No, We are actually Open Sourced Olafs",
];
function Intro(props) {
  const classes = useStyles();
  return (
    <div className={props.classes.backgroundDiv} id="aboutUs">
      <Snowfall />
      <div className={props.classes.contentDiv}>
        {/* <Typography
          variant="h3"
          className={props.classes.primaryText}
          id="entry-text"
        >
          {props.primaryText}
        </Typography>

        <Typography variant="h5" className={props.classes.primaryText}>
          {props.secondaryText}
        </Typography> */}
        <ReactTypingEffect
          text={textArray}
          className={props.classes.primaryText}
          speed={100}
          eraseSpeed={100}
          eraseDelay={100}
          typingDelay={100}
        ></ReactTypingEffect>
      </div>
      <center>
        <img src={logo} className={classes.images} alt="loading..." />
      </center>
      {/* {props.pagename === "Home" ? (
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
      ) : null} */}
    </div>
  );
}

export default Intro;
