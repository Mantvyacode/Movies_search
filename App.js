import { useEffect, useState } from 'react';
import './App.css';
import Moviecard from './MovieCard';
import SearchIcon from './search.svg';

// 9793048a

const API_URL = 'http://WWW.omdbapi.com?apikey=9793048a';
const movie1 = {
    "Title": "Superman IV: The Quest for Peace",
    "Year": "1987",
    "imdbID": "tt0094074",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkODhlYjEtMDEyZS00YjZmLWJjMDctZGI3MGJiNDEyNTE2XkEyXkFqcGc@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Superman')
    }, []);
    return (
        <div className='app'>
            <h1>Cinematic Hub</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    values="{searchTerm}"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <Moviecard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;