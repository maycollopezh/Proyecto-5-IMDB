import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Filtrado = () => {
    const [movieList, setMovieList] = useState([]);
    const [filteredMovieList, setFilteredMovieList] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);

    useEffect(() => {
        fetchMovies();
    }, [minRating, maxRating]);

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f64c8d4263de80c245540bce115e9542&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                setMovieList(json.results);
                filterMovies(); // Filtrar inmediatamente después de obtener las películas
            })
            .catch(error => {
                console.log('An error occurred');
                console.log(error);
            });
    };

    // Manejar cambio en calificación mínima
    const handleMinRatingChange = (e) => {
        const min = parseFloat(e.target.value);
        setMinRating(min);
    };

    // Manejar cambio en calificación máxima
    const handleMaxRatingChange = (e) => {
        const max = parseFloat(e.target.value);
        setMaxRating(max);
    };

    
    const filterMovies = () => {
        const filteredMovies = movieList.filter(movie => movie.vote_average >= minRating && movie.vote_average <= maxRating);
        setFilteredMovieList(filteredMovies);
    };

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="minRating" className="form-label">Calificación mínima:</label>
                    <input type="number" className="form-control" id="minRating" min="0" max="10" step="1" value={minRating} onChange={handleMinRatingChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="maxRating" className="form-label">Calificación máxima:</label>
                    <input type="number" className="form-control" id="maxRating" min="0" max="10" step="1" value={maxRating} onChange={handleMaxRatingChange} />
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={filterMovies}>Filtrar</button>
            </div>

            
            <div className="row">
                {filteredMovieList.map((movie, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <MovieCard
                            titleName={movie.title}
                            posterPath={movie.poster_path}
                            descripcion={movie.overview}
                            movieId={movie.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filtrado;
