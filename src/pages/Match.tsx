import React from "react";
import Champion from "../data/DataModel";
import { getAllChampions } from "../service/ChampionService";
import ChampionCard from "../components/ChampionCard";

interface MatchSate {
  champions: Champion[];
  champion1: Champion;
  champion2: Champion;
  votes1: number;
  votes2: number;
  winner?: Champion;
}

class Match extends React.Component<any, MatchSate> {

  constructor(props: any) {
    super(props);
    this.state = {
      champions: [],
      champion1: {
        id: '',
        name: '',
        imageUrl: '',
        blurb: '',
        title: "",
        tags: []
      },
      champion2: {
        id: '',
        name: '',
        imageUrl: '',
        blurb: '',
        title: "",
        tags: []
      },
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
        champion1: champions[0],
        champion2: champions[1],
        champions: champions.slice(2),
      });
    });
  }

  handleVote(champion: Champion) {
    if (champion.id === this.state.champion1?.id) {
      this.setState({ votes1: this.state.votes1 + 1, votes2: 0, champion2: this.state.champions[0] });
      this.state.champions.shift();
    } else {
      this.setState({ votes2: this.state.votes2 + 1, votes1: 0, champion1: this.state.champions[0] });
      this.state.champions.shift();
    }

    if (this.state.votes1 > 3 || (this.state.votes1 > this.state.votes2 && this.state.champions.length === 0)) {
      this.setState({ winner: this.state.champion1 });
      alert(this.state.champion1.name + " wins!");
    } else if (this.state.votes2 > 3 || (this.state.votes2 > this.state.votes1 && this.state.champions.length === 0)) {
      this.setState({ winner: this.state.champion2 });
      alert(this.state.champion2.name + " wins!");
    }
      
  }

  render() {
    console.log(this.state.champion2);
    return (
      <div>
        <h1>Match</h1>
        <div className="row">
          <div className="col">
            <ChampionCard
              name={this.state.champion1?.name || ''}
              image={this.state.champion1?.imageUrl || ''}
              id={this.state.champion1?.id || ''}
              blurb={this.state.champion1?.blurb || ''}
              cardSize={56}
            />
            <div>
              <button onClick={() => this.handleVote(this.state.champion1)}>Vote</button>
              <p>Votes: {this.state.votes1}</p>
            </div>
          </div>
          <div className="col">
            <ChampionCard
              name={this.state.champion2?.name || ''}
              image={this.state.champion2?.imageUrl || ''}
              id={this.state.champion2?.id || ''}
              blurb={this.state.champion2?.blurb || ''}
              cardSize={56}
            />
            <div>
              <button onClick={() => this.handleVote(this.state.champion2)}>Vote</button>
              <p>Votes: {this.state.votes2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;