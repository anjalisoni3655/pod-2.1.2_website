import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import theme from "./components/theme";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ContactForm from "./components/ContactUs";
import ProjectCard from "./components/projectCards";
import Team from "./components/Team";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <ThemeProvider theme={theme}>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/projects" component={ProjectCard} />
              <Route exact path="/ContactUs" component={ContactForm} />
            </ThemeProvider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
