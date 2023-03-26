import React from "react";
import Champion from "../data/iChampion";
import ChampionCard from "../components/ChampionCard";
import { getAllChampions } from "../service/ChampionService";

interface State {
  champions: Champion[];
}

interface ChampionsProps {
  version: Promise<string>;
}

class Champions extends React.Component<ChampionsProps, State> {

  constructor(props: ChampionsProps) {
    super(props);
    this.state = {
      champions: [],
    };
  }

  async componentDidMount() {
    getAllChampions(await this.props.version).then((champions: Champion[]) => {
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
          {this.state.champions.map((champion: Champion) => {
            return (
              <ChampionCard
                key={champion.id}
                name={champion.name}
                id={champion.id}
                image={champion.imageUrl}
                blurb={champion.blurb}
                cardSize={24}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Champions;