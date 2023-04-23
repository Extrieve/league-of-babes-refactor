import React from "react";
import Champion from "../data/iChampion";
import ChampionCard from "../components/ChampionCard";
import { getAllChampions } from "../service/ChampionService";

interface State {
  champions: Champion[];
}

class Champions extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      champions: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => response.json())
    const version = response[0];
    
    getAllChampions(version).then((champions: Champion[]) => {
      // delay to show loading
      setTimeout(() => {
      this.setState({
        champions: champions,
      });
      }, 1000);
    });
  }

  render() {
    return (
      <div className="champions">
        <div className="champions-list">
          {this.state.champions[0] ? this.state.champions.map((champion: Champion) => (
            <a href={`/champions/${champion.name}`}>
              <ChampionCard
                key={champion.id}
                name={champion.name}
                title={champion.title}
                id={champion.id}
                image={champion.imageUrl}
                blurb={champion.blurb}
                cardSize={24}
              />
            </a>
          )) : <h1>Loading champions...</h1>}
        </div>
      </div>
    );
  }
}

export default Champions;