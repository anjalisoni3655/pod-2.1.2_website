import React from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import ContactForm from "../components/ContactUs";
import Intro from "../components/Intro";
import Projects from "./projectCards";
import Team from "../components/Team";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../resources/images/snow_8.jpg";
//

const useStyles = makeStyles((theme) => ({
  backgroundDiv: {
    // boxShadow: "0px 0px 10px 10px #BDDFFB",
    height: "900px",
    marginBottom: "0px",
  },
  attributeText: {
    fontSize: "8px",
    position: "absolute",
    bottom: "10px",
    right: "0",
  },
  contentDiv: {
    position: "relative",
    width: "100%",
    margin: "auto",
    paddingTop: "15%",
    textAlign: "center",
  },
  primaryText: {
    color: "#000",
    marginTop: "100%",
    marginBottom: "100%",
    fontFamily: "'Roboto Condensed', cursive",
    fontSize: "30px",
    //textShadow: "2px 2px #1fb9f6",
  },
  secondaryText: {
    color: "#000",
    marginTop: "0px",
    marginBottom: "50px",
    fontFamily: "'Roboto Condensed', cursive",
    fontSize: "30px",
    // textShadow: "2px 2px #1fb9f6",
  },
  line: {
    marginTop: "60px",
    marginLeft: "inherit",
    marginRight: "inherit",
    border: "none",
    borderTop: "5px dotted #bbbfca",
    height: "5px",
    width: "10%",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <AppHeader appBarTitle="Pod Website" />
      <Intro
        primaryText="JUST HACK IT"
        secondaryText="WE LOVE HACKING"
        pagename="Home"
        classes={classes}
      />
      <center>
        <Typography
          variant="h6"
          className={classes.secondaryText}
          id="entry-text"
        >
          We're Olafs and we like warm <del>hugs</del> bugs!
        </Typography>
      </center>
      <Projects pagename="projects" />
      {/* <hr className={classes.line}></hr> */}
      <Team pagename="team" />
      <ContactForm pagename="ContactUs" />
      <AppFooter />
    </div>
  );
}

export default Home;
