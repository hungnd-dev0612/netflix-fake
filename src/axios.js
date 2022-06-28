import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})
console.log(instance);
export default instance;