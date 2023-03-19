import React from "react";
import Champion from "../data/DataModel";


class Navbar extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <img src="https://i.imgur.com/0Q2Z1XK.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/champions">Champions</a></li>
            <li><a href="/match">Match</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;