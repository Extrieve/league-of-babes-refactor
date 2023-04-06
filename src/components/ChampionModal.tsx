import React from "react";
import Champion from "../data/iChampion";
import ChampionCard from "../components/ChampionCard";

interface Props {
  champions: Champion;
}

class ChampionModal extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="modal fade" id="championModal" tabIndex={-1} role="dialog" aria-labelledby="championModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="championModalLabel">{this.props.champions.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <ChampionCard
                key={this.props.champions.id}
                name={this.props.champions.name}
                title={this.props.champions.title}
                id={this.props.champions.id}
                image={this.props.champions.imageUrl}
                blurb={this.props.champions.blurb}
                cardSize={72}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionModal;