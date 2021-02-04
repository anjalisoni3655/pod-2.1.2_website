import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from "@material-ui/core";
import facebookIcon from "../resources/icons/facebook.png";
import instagramIcon from "../resources/icons/instagram.png";
import linkedinIcon from "../resources/icons/linkedin.png";
import youtubeIcon from "../resources/icons/youtube.png";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    position: "relative",
    width: "100%",
    height: "100px",
    bottom: 0,
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
  },
  item: {
    margin: "2px",
  },
  attributeText: {
    fontSize: "8px",
  },
  container: {
    marginTop: "40px",
  },
}));

function AppFooter() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      className={classes.topContainer}
    >
      <Grid item xs={12} sm={9} md={7}>
        <Grid
          container
          spacing={2}
          justify="center"
          className={classes.container}
        >
          <Grid item xs={2} sm={1} className={classes.item}>
            <Link href="https://www.instagram.com/electronicsclubiitg/">
              <img src={instagramIcon} alt="Instagram" width="32" height="32" />
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://www.facebook.com/electronics.iitg">
              <img src={facebookIcon} alt="Facebook" width="32" height="32" />
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://www.linkedin.com/company/electronicsclubiitg/">
              <img src={linkedinIcon} alt="LinkedIn" width="32" height="32" />
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://www.youtube.com/channel/UClPWjFXGdtjKYjZvulnUViw">
              <img src={youtubeIcon} alt="YouTube" width="32" height="32" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <center>
          <Typography className={classes.attributeText} color="inherit">
            {"Items made by "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              color="inherit"
            >
              Freepik
            </Link>
            {" and "}
            <Link
              href="https://www.flaticon.com/authors/pixel-perfect"
              color="inherit"
            >
              Pixel perfect
            </Link>
            {" from "}
            <Link href="https://www.flaticon.com/" color="inherit">
              www.flaticon.com
            </Link>
          </Typography>
        </center>
      </Grid>
    </Grid>
  );
}

export default AppFooter;
