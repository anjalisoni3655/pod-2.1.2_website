import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import theme from "./components/theme";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <ThemeProvider theme={theme}>
              <Route exact path="/" component={Home} />
            </ThemeProvider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
