import React from "react";

interface ChampionCardProps {
  name: string;
  image: string;
  id: string;
  blurb: string;
  cardSize: number;
}

class ChampionCard extends React.Component<ChampionCardProps> {

  constructor(props: ChampionCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{ width: `${this.props.cardSize}rem` }}>
        <img src={this.props.image} className="card-img-top" alt={this.props.name} />
        <div className="card-body card-item">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{ this.props.blurb }</p>
          <a href="#" className="button">Full Page</a>
        </div>
      </div>
    );
  }
}

export default ChampionCard;