import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieDetail = () => {

    const {id} = useParams();

    const[isRequestDone, setIsRequestDone] = useState(false);
    const[movieDetail, setMovieDetail] = useState ({});


    useEffect(() =>{
        const request = fetch (`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=f64c8d4263de80c245540bce115e9542`)
        .then((response) => response.json())
        .then(json => {
            console.log(json)
            setMovieDetail(json)
            setIsRequestDone (true)
    })
            
        .catch(error => {
            console.log('Ah error ocurred');
            console.log(error);
        },);
    }, [isRequestDone]);
    
    return (
        <>
            <h1>{movieDetail.title}</h1>
            <p>{movieDetail.overview}</p>
            <p>Rating{movieDetail.vote_average}</p>

        </>
    )
}


export default MovieDetail;