import React from "react";
import Champion from "../data/iChampion";
import ChampionCard from "../components/ChampionCard";
import { getAllChampions } from "../service/ChampionService";

interface State {
  champions: Champion[];
  filter: string;
}

class Champions extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      champions: [],
      filter: "",
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    ).then((response) => response.json());
    const version = response[0];

    getAllChampions(version).then((champions: Champion[]) => {
      // delay to show loading
      this.setState({ champions: champions });
    });
  }

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredChampions = this.state.champions.filter((champion) =>
      champion.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="champions">
        <div className="champions-filter">
          <label>
            Filter by name:
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </label>
        </div>
        <div className="champions-list">
          {filteredChampions.length > 0 ? (
            filteredChampions.map((champion: Champion) => (
              <a href={`/champions/${champion.name}`} key={champion.name}>
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
            ))
          ) : (
            <h1>No champions found.</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Champions;
