import React from "react";
import LeaderboardEntry from "../data/iLeaderboardEntry";

interface State {
  entries: LeaderboardEntry[];
}

class Leaderboard extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/leaderboard")
      .then(response => response.json())
      .then((entries: LeaderboardEntry[]) => {
        this.setState({
          entries: entries
        });
      });
  }

  render() {
    return (
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map((entry: LeaderboardEntry, index: number) => {
              return (
                <tr key={entry.name}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;