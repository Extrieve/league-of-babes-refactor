import React from "react";
import Champion from "../data/iChampion";

interface ChampionProps{
  champion: Champion;
}

class ChampionPage extends React.Component<ChampionProps, any> {

  constructor(props: ChampionProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.champion.name}</h1>
      </div>
    );
  }
}

export default ChampionPage;