import React from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import ContactForm from "../components/ContactUs";
import Intro from "../components/Intro";
import Projects from "./projectCards";
import Team from "../components/Team";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../resources/images/snow.jpg";
//
const useStyles = makeStyles((theme) => ({
  backgroundDiv: {
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    //backgroundColor: "#141415",
    backgroundPosition: "center",
    marginBottom: "0px",
    // position: "relative",
    backgroundRepeat: "no-repeat",

    // background-position: center,
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
    paddingTop: "260px",
    textAlign: "center",
  },
  primaryText: {
    color: "#fff",
    marginTop: "100%",
    marginBottom: "100%",
    fontFamily: "'Roboto Condensed', cursive",
    fontSize: "40px",
    textShadow: "2px 2px #1fb9f6",
  },
  secondaryText: {
    color: "#1fb9f6",
    marginTop: "20px",
    marginBottom: "50px",
    fontFamily: "'Roboto Condensed', cursive",
    fontSize: "30px",
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
      <Projects pagename="projects" />
      <hr className={classes.line}></hr>
      <Team pagename="team" />
      <ContactForm pagename="ContactUs" />

      <AppFooter />
    </div>
  );
}

export default Home;
