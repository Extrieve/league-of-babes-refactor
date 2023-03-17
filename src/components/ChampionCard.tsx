import React from "react";

interface ChampionCardProps {
  name: string;
  image: string;
}

class ChampionCard extends React.Component<ChampionCardProps> {

  constructor(props: ChampionCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="champion-card">
        <div className="champion-card-image">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="champion-card-name">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default ChampionCard;