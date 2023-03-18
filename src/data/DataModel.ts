export default interface Champion {
    id: string;   
    name: string;
    title: string;
    blurb: string;
    imageUrl: string; // full image url is: https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{id}_0.jpg
    tags: string[];
}

// export default interface BoardEntry {
//     id: string;
//     name: string;
//     imageUrl: string;
//     votes: number;
//     blurb: string;
//     tags: string[];
// }