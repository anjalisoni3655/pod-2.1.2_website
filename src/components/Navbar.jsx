import React, { Component } from "react";
import "./NavBar.css";

//import { render } from "react-dom";
//import Hello from "./Hello";
import NavBar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";

import Loader from "react-loader-spinner";
// import logo from "./logo.png";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {
    isLoading: true,
  };

  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <NavBar
        logo={
          "https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
        }
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",

            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: " Our Team",
            icon: faBookOpen,
            isAuth: () => {
              return true;
            },
          },
          {
            title: "Projects",
            icon: faGlobe,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("I need another cup of coffee...");
            },
          },

          {
            title: "Contact Us",
            icon: faChartPie,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              this.setState({ isLoading: true }, () =>
                setTimeout(() => {
                  this.setState({ isLoading: false });
                }, 3000)
              );
            },
          },
        ]}
      />
    );
  }
}

export default Navbar;
