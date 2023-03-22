import React from "react";
import Champion from "../data/DataModel";
import ChampionCard from "../components/ChampionCard";
import { getAllChampions } from "../service/ChampionService";

interface State {
  champions: Champion[];
}

class Champions extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      champions: []
    };
  }

  componentDidMount() {
    getAllChampions().then((champions: Champion[]) => {
      this.setState({
        champions: champions
      });
    });
  }

  render() {
    return (
      <div className="champions">
        <h1>Champions</h1>
        <div className="champions-list">
          {this.state.champions.map((champion: Champion) => {
            return (
              <ChampionCard
                key={champion.id}
                name={champion.name}
                id={champion.id}
                image={champion.imageUrl}
                blurb={champion.blurb}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Champions;