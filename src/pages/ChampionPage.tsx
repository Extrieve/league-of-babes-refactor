import Champion from "../data/iChampion";
import { getChampionById } from "../service/ChampionService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

  console.log("LOGGING CHAMPION");

  return (
    <div>
      <h1>Champion</h1>
      {champion.champion ? (
        <div>
          <h2>{champion.champion.name}</h2>
          {/* <p>{champion.champion.description}</p> */}
        </div>
      ) : (
        <p>Loading champion data...</p>
      )}
    </div>
  );
};

export default ChampionPage;
