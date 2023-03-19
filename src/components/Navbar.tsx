import React from "react";
import Champion from "../data/DataModel";


class Navbar extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <h1>League of Legends</h1>
      </div>
    );
  }
}

export default Navbar;