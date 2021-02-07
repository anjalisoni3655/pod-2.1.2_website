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
    height: "200px",
    borderRadius: "50%",
    marginTop: "10px",
    boxShadow: "0px 0px 5px 5px #BEE1FD",
  },
}));

var textArray = [
  "Wondering who we are?",
  "Haven't guessed it yet?",
  "Wait for it...",
  "Open Sourced Olaf! :D",
];
function Intro(props) {
  const classes = useStyles();
  return (
    <div className={props.classes.backgroundDiv} id="aboutUs">
      <Snowfall color="white" snowflakeCount={200} />
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
          >
            I'm Olaf and I like warm <del>hugs</del> bugs!
          </Typography>
        </center>
      ) : null}
    </div>
  );
}

export default Intro;
