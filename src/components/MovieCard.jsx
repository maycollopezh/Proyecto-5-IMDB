import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ titleName, posterPath, movieId }) => {
    const posterPathImageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={posterPathImageUrl} className="card-img-top" alt={titleName} />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/movieDetail/${movieId}`}>{titleName}</Link>
                </h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Género 1</li>
                <li className="list-group-item">Género 2</li>
                <li className="list-group-item">Género 3</li>
            </ul>
            
        </div>
    );
}

export default MovieCard;
