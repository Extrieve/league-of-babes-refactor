import axios from 'axios';

const external_api = 'http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json';

const getAllChampions = async () => {
    const response = await axios.get(external_api)
    .then(response => {
        return response.data.data;
    })
    .catch(error => {
        console.log(error);
    });
    return response;
}

export default {
    getAllChampions
}