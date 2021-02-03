import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";

//import { render } from "react-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
