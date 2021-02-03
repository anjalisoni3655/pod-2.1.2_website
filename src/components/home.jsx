import React, { Component } from "react";
import UserCard from "react-ui-cards";

class Home extends Component {
  render() {
    return (
      <div>
        <UserCard
          className="user-card"
          href="www.github.com"
          header="www.facebook.com"
          avatar="https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
          name="Anjali Soni"
          positionName="developer"
          //stats=[""]
        ></UserCard>
      </div>
    );
  }
}

export default Home;
