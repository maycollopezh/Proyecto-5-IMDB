import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [isRequestDone, setIsRequestDone] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=f64c8d4263de80c245540bce115e9542`)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                setMovieDetail(json);
                setIsRequestDone(true);
            })
            .catch(error => {
                console.log('An error occurred');
                console.log(error);
            });
    }, [id]);

    return (
        <>
            {isRequestDone && (
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} className="img-fluid rounded-start" alt={movieDetail.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{movieDetail.title}</h1>
                                <p className="card-text">{movieDetail.overview}</p>
                                <p className="card-text"><small className="text-muted">Rating: {movieDetail.vote_average}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieDetail;

