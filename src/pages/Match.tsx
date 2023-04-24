import React, { useEffect, useState } from 'react';
import Champion from '../data/iChampion';
import { getAllChampions } from '../service/ChampionService';
import ChampionCard from '../components/ChampionCard';
import { useNavigate } from 'react-router-dom';

interface MatchState {
  champions: Champion[];
  champion1: Champion;
  champion2: Champion;
  votes1: number;
  votes2: number;
  winner?: Champion;
}

const Match: React.FC = () => {
  const [state, setState] = useState<MatchState>({
    champions: [],
    champion1: {
      id: '',
      name: '',
      imageUrl: '',
      blurb: '',
      title: '',
      tags: [],
    },
    champion2: {
      id: '',
      name: '',
      imageUrl: '',
      blurb: '',
      title: '',
      tags: [],
    },
    votes1: 0,
    votes2: 0,
  });

  const navigate = useNavigate();

  const shuffleInPlace = (array: Champion[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => response.json());
      const version = response[0];

      getAllChampions(version).then((champions: Champion[]) => {
        shuffleInPlace(champions);
        setState({
          champion1: champions[0],
          champion2: champions[1],
          champions: champions.slice(2),
          votes1: 0,
          votes2: 0,
        });
      });
    }

    fetchData();
  }, []);

  const handleVote = (champion: Champion) => {
    if (champion.id === state.champion1.id) {
      setState((prevState) => ({
        ...prevState,
        votes1: prevState.votes1 + 1,
        votes2: 0,
        champion2: prevState.champions[0],
        champions: prevState.champions.slice(1),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        votes2: prevState.votes2 + 1,
        votes1: 0,
        champion1: prevState.champions[0],
        champions: prevState.champions.slice(1),
      }));
    }

    if (state.votes1 > 4 || (state.votes1 > state.votes2 && state.champions.length === 0)) {
      setState((prevState) => ({ ...prevState, winner: prevState.champion1 }));
      navigate(`/champions/${state.champion1.name}?winner=true&match=1`);
    } else if (state.votes2 > 4 || (state.votes2 > state.votes1 && state.champions.length === 0)) {
      setState((prevState) => ({ ...prevState, winner: prevState.champion2 }));
      navigate(`/champions/${state.champion2.name}?winner=true&match=2`);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <ChampionCard
            name={state.champion1.name || ''}
            title={state.champion1.title || ''}
            image={state.champion1.imageUrl || ''}
            id={state.champion1.id || ''}
            blurb={state.champion1.blurb || ''}
            cardSize={24}
          />
          <button className="btn btn-primary" onClick={() => handleVote(state.champion1)}>
            Vote
          </button>
        </div>
        <div className="col">
          <ChampionCard
            name={state.champion2.name || ''}
            title={state.champion2.title || ''}
            image={state.champion2.imageUrl || ''}
            id={state.champion2.id || ''}
            blurb={state.champion2.blurb || ''}
            cardSize={24}
          />
          <button className="btn btn-primary" onClick={() => handleVote(state.champion2)}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Match;