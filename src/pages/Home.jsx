import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import {getPopularMovies, searchMovies} from "../services/api.js"

function Home() {
    
    const [searchQuery, setSearchQuery] = useState("")

    const movies=getPopularMovies()

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
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
            
            <div className="movie-grid">
                {
                    movies.map((movie) =>( 
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Home