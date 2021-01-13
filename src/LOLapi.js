import axios from "axios";

// const LOLapi = axios.create({
//     baseURL:"https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{}",
//     params:{
//         api_key:"RGAPI-d44c41a0-7d1e-4a7c-b4bd-6a90877e86b4"
//     }    
// })

const MovieApi = axios.create({
    baseURL: "https://yts.mx/api/v2/list_movies.json"})

export const MyApi = {
    PHBoon:()=>MovieApi.get()
}
