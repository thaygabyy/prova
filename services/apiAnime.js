import axios from "axios";

const apiAnime = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
})

export default apiAnime