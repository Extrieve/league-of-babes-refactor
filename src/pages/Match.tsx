import React from "react";
import Champion from "../data/DataModel";
import { getAllChampions } from "../service/ChampionService";

interface MatchSate {
  champions: Champion[];
  champion1: Champion | null;
  champion2: Champion | null;
  votes1: number;
  votes2: number;
}

class Match extends React.Component<any, MatchSate> {

  constructor(props: any) {
    super(props);
    this.state = {
      champions: [],
      champion1: null,
      champion2: null,
      votes1: 0,
      votes2: 0
    };
  }

  shuffleInPlace(array: Champion[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  componentDidMount() {
    getAllChampions().then((champions: Champion[]) => {
      this.shuffleInPlace(champions);
      this.setState({
        champions: champions,
        champion1: champions[0],
        champion2: champions[1]
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Match</h1>
      </div>
    );
  }
}

export default Match;