import Champion from "../data/iChampion";
import { getChampionById } from "../service/ChampionService";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChampionCard from "../components/ChampionCard";

interface State {
  champion?: Champion;
}

const ChampionPage: React.FC = () => {
  const [champion, setChampion] = useState<State>({ champion: undefined });
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const winner = new URLSearchParams(location.search).get('winner');
  const match = new URLSearchParams(location.search).get('match');

  useEffect(() => {
    const fetchChampionData = async () => {
      const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => response.json())
      const version = response[0];
      if (id) { // Add this check to make sure id is defined
        const championData = await getChampionById(id, version);
        setChampion({ champion: championData });
      }
    };
    fetchChampionData();
  }, [id]);
  return (
    <div className="home">
      {winner ? <h1>Match Winner ❤️</h1> : <></>} {/* conditional rendering of "winner" message */}
      {champion.champion ? (
        <div className="center-text">
          <h1>{champion.champion.name}</h1>
          <ChampionCard
            key={champion.champion.id}
            name={champion.champion.name}
            title={champion.champion.title}
            id={champion.champion.id}
            image={champion.champion.imageUrl}
            blurb={champion.champion.blurb}
            cardSize={72}
          />
        </div>
      ) : (
        <p>Loading champion data...</p>
      )}
    </div>
  );
};

export default ChampionPage;
