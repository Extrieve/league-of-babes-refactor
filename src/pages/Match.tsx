import React from "react";
import Champion from "../data/DataModel";
import { getAllChampions } from "../service/ChampionService";
import ChampionCard from "../components/ChampionCard";

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
    const { champion1, champion2, votes1, votes2 } = this.state;
    return (
      <div>
        <h1>Match</h1>
        <div className="row">
          <div className="col">
            <ChampionCard
              name={champion1?.name || ''}
              image={champion1?.imageUrl || ''}
              id={champion1?.id || ''}
              blurb={champion1?.blurb || ''}
              cardSize={56}
            />
            <div>
              <button onClick={() => this.setState({ votes1: votes1 + 1 })}>Vote</button>
              <p>Votes: {votes1}</p>
            </div>
          </div>
          <div className="col">
            <ChampionCard
              name={champion2?.name || ''}
              image={champion2?.imageUrl || ''}
              id={champion2?.id || ''}
              blurb={champion2?.blurb || ''}
              cardSize={56}
            />
            <div>
              <button onClick={() => this.setState({ votes2: votes2 + 1 })}>Vote</button>
              <p>Votes: {votes2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;