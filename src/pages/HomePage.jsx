import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
    const [movieList, setMovieList] = useState([]);
    const [filteredMovieList, setFilteredMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);

    useEffect(() => {
        fetchMovies();
    }, [page, minRating, maxRating]);

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f64c8d4263de80c245540bce115e9542&page=${page}&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                setMovieList(json.results);
                setFilteredMovieList(json.results);
                setTotalPages(json.total_pages);
                setIsRequestDone(true);
            })
            .catch(error => {
                console.log('An error occurred');
                console.log(error);
            });
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleFilterChange = () => {
        const filteredMovies = movieList.filter(movie => movie.vote_average >= minRating && movie.vote_average <= maxRating);
        setFilteredMovieList(filteredMovies);
    };

    return (
        <div className="container">
            
            <div className="row">
                {isRequestDone &&
                    filteredMovieList.map((movie, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <MovieCard
                                titleName={movie.title}
                                posterPath={movie.poster_path}
                                descripcion={movie.overview}
                                movieId={movie.id}
                            />
                        </div>
                    ))
                }
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                        <Link to="#" className="page-link" onClick={handlePrevPage}>Anterior</Link>
                    </li>
                    <li className="page-item"><span className="page-link">{page}</span></li>
                    <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                        <Link to="#" className="page-link" onClick={handleNextPage}>Siguiente</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;
