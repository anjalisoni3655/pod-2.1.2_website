import React, { useState } from "react";
import { css } from "../style/style.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Hidden,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0px 0px 10px 10px grey",
  },
  menuButton: {
    //  position: "left",
    marginRight: theme.spacing(1),
    color: "blue",
  },
  title: {
    fontSize: 22,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  appBar: {
    background: "#B1DDF7",
  },
  drawerPaper: {
    color: theme.palette.common.white,
    backgroundColor: "#B1DDF7",
  },
  toolbar: {
    paddingRight: "2px",
    boxShadow: "0px 0px 15px 15px #7B9CB6",
    position: "fixed",
    width: "100%",
    zIndex: 6,
    backdropFilter:"blur(20px)",
 //  backdropFilter: blur(10px),
  },
  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  button: {
    height: "20px",
    fontSize: "16px",
    cursor: "pointer",
 //  textDecoration:"underline"
    
  },
}));

function AppHeader(props) {
  const classes = useStyles();
  let [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  const menuItemList = [
    ["About Us", "#aboutUs"],
    ["Our Team", "#team"],
    ["Projects", "#projects"],
    ["Contact Us", "#contactUs"],
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* <Button color="blue" href="/" className={classes.title}>
            {props.appBarTitle}
          </Button> */}
          <div className={classes.menu}>
            <Hidden smDown>
              <Button color="blue" href="#top" className={classes.button}>
                About Us
              </Button>
              <Button color="blue" href="#projects" className={classes.button}>
                Projects
              </Button>
              <Button color="blue" className={classes.button} href="#team">
                Team
              </Button>
              <Button color="blue" href="#contactUs" className={classes.button}>
                Contact
              </Button>
            </Hidden>

            <Hidden mdUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="#000"
                aria-label="menu"
                //position="left"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                className={classes.drawer}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <List>
                  {/* {menuItemList.map((item) => (
                      <ListItem button key={item[0]} href={item[1]}>
                        <ListItemText primary={item[0]} />
                      </ListItem>
                    ))} */}
                  <ListItem button key="About Us" href="#top">
                    <Button color="blue" href="#top" className={classes.button}>
                      About Us
                    </Button>
                  </ListItem>
                  <ListItem button key="Projects" href="#projects">
                    <Button
                      color="blue"
                      href="#projects"
                      className={classes.button}
                    >
                      Projects
                    </Button>
                  </ListItem>
                  <ListItem button key="Team" href="#team">
                    <Button
                      color="blue"
                      href="#team"
                      className={classes.button}
                    >
                      Team
                    </Button>
                  </ListItem>
                  <ListItem button key="Contact" href="#contactUs">
                    <Button
                      color="blue"
                      href="#contactUs"
                      className={classes.button}
                    >
                      Contact
                    </Button>
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;
