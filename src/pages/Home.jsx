import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import {getPopularMovies, searchMovies} from "../services/api"

function Home() {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const loadPopularMovies = async () => {
            try{
                const c = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies!!!")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])

    const handleSearch = async(e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search Movies!!! ")
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movie..."  
                className="search-input" 
                id="" 
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}/>

                <input type="submit" 
                className="search-button" 
                value="Search" />
            </form>

            {error&& <div className="error-message">
                <h3>{error}</h3>
            </div> }
            
            {loading?(
                <div className="loading">
                    <h3>LOADING!!!</h3>
                </div>
            ):(
                <div className="movie-grid">
                {
                    movies.map((movie) =>( 
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>
            )}
        </div>
    )
}
export default Home