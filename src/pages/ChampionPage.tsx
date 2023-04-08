import Champion from "../data/iChampion";
import { getChampionById } from "../service/ChampionService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChampionCard from "../components/ChampionCard";

interface State {
  champion?: Champion;
}

const ChampionPage: React.FC = () => {
  const [champion, setChampion] = useState<State>({ champion: undefined });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchChampionData = async () => {
      const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => response.json())
      const version = response[0];
      console.log("Champion id: " + id);
      const championData = await getChampionById(id, version);
      setChampion({ champion: championData });
    };
    fetchChampionData();
  }, [id]);

  return (
    <div className="home">
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
