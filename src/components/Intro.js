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
    marginTop: "20px",
  },
}));

var textArray = [
  "Wondering who we are?",
  "haven't guessed it yet?",
  "wait for it..",
  "Open Sourced Olaf! :D",
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
          speed={30}
          eraseSpeed={20}
          eraseDelay={1250}
          typingDelay={75}
        ></ReactTypingEffect>
      </div>
      <center>
        <img src={logo} className={classes.images} alt="loading..." />
      </center>
      {props.pagename === "Home" ? (
        <center>
          <Typography
          variant="h6"
          className={props.classes.secondaryText}
          id="entry-text"
        >I'm Olaf and I like warm <del>hugs</del> bugs!
        </Typography>
        </center>
      ) : null}
    </div>
  );
}

export default Intro;
