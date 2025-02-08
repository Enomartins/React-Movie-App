const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "f1f5843ec62cdaf13d0f90dbba218284"

export const getPopularMovies = async() => {
    const response = await fetch(
        `${API_URL}/movie/popular
        ?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async(query) => {
    const response = await fetch(
        `${API_URL}/movie/popular
        ?api_key=${API_KEY}
        &query=${encodedURIComponent(query)}`)
    const data = await response.json()
    return data.results
}