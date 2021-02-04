import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import ImgMediaCard from "./components/cardUser";
import RecipeReviewCard from "./components/cardProjects";
import { Card, Grid, Icon } from "tabler-react";

//import { Row, Col, Grid } from "react-bootstrap";

//import { render } from "react-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="maincontainer">
        <Grid.Row>
          <Grid.Col>
            <Navbar></Navbar>
          </Grid.Col>

          <Grid.Col>
            <ImgMediaCard></ImgMediaCard>
          </Grid.Col>
          <Grid.Col>
            <RecipeReviewCard></RecipeReviewCard>
          </Grid.Col>
          <Grid.Col>
            <Footer></Footer>
          </Grid.Col>
        </Grid.Row>
      </div>
    );
  }
}

export default App;
