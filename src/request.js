const API_KEY = "b2d481c2caed575d6a15b45f6080a677";
const requests = {
    fetchNowplaying: `/now_playing?api_key=${API_KEY}&language=vi`,
    fetchPopular: `/popular?api_key=${API_KEY}&language=vi`,
    fetchToprated: `/top_rated?api_key=${API_KEY}&language=vi`,
    fetchUpcoming: `/upcoming?api_key=${API_KEY}&language=vi`,
    fetchBanner: `https://api.themoviedb.org/4/list/1?page=1&api_key=b2d481c2caed575d6a15b45f6080a677&language=vi`,
    fetchMarvel :`https://api.themoviedb.org/4/list/1?page=1&api_key=b2d481c2caed575d6a15b45f6080a677&language=vi`,
    fetchDC:`https://api.themoviedb.org/4/list/3?page=1&api_key=b2d481c2caed575d6a15b45f6080a677&language=vi`
}
export default requests;