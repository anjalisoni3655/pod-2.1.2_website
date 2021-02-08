


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import snow from "../resources/images/snow_8.jpg";
import { css } from "../style/style.css";
import logo from "../resources/images/olaf_bugs.gif";
import Snowfall from "react-snowfall";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "20px",
  },
  images: {
    marginTop: "5%",
    height: "200px",
    borderRadius: "25%",
    // boxShadow: "0px 0px 10px 10px #BDDFFB",
  },
  secondaryText: {
    paddingBottom: "5%",
    color: "#000",
    marginTop: "0px",
    fontFamily: "'Roboto Condensed', cursive",
    // fontSize: "30px",
    // textShadow: "2px 2px #1fb9f6",
  },
}));


function Description(props) {
  const classes = useStyles();
  return (
      <div className={classes.secondaryText}>
        <center>
            <Typography
            variant="h3"
            >
            We're Olaf and we like warm <del>hugs</del> bugs!
            </Typography>
            <img src={logo} className={classes.images} alt="loading..." />
        </center>
      </div>
  );
}

export default Description;

