import axios from 'axios';
import Champion from '../data/iChampion';


const internal_api = 'http://localhost:8080/api/v1/';

export const getAllChampions = async (version: string): Promise<any> => {
    const external_api = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
    console.log(external_api);
    const response = await axios.get(external_api)
    .then(response => {
        const champions: Champion[] = [];
        for (const key in response.data.data) {
            const champion = response.data.data[key];
            champions.push({
                id: champion.key,
                name: champion.name,
                title: champion.title,
                blurb: champion.blurb,
                imageUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
                tags: champion.tags
            });
        }
        return champions;
    })
    .catch(error => {
        console.log(error);
    });
    return response;
}

export const getChampionById = async (id: string, version: string) => {
    const external_api = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
    const response = await axios.get(external_api);
    const champion = response.data.data[id];
    return champion;
}