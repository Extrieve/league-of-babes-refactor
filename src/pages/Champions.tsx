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
      this.setState({
        champions: champions,
      });
    });
  }

  render() {
    return (
      <div className="champions">
        <h1>Champions</h1>
        <div className="champions-list">
          {this.state.champions.map((champion: Champion) => (
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
          ))}
        </div>
      </div>
    );
  }
}

export default Champions;