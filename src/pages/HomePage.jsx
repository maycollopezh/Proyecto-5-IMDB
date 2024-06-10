import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const HomePage = () => {
      const [movieLis, setMovieList] = useState({});
      const[isRequestDone, setIsRequestDone] = useState(false);
  
      useEffect(() =>{
          const request = fetch ('https://api.themoviedb.org/3/discover/movie?api_key=f64c8d4263de80c245540bce115e9542')
          .then((response) => response.json())
          .then(json => {
              console.log(json)
              setMovieList(json)
              setIsRequestDone (true)
      })
              
          .catch(error => {
              console.log('Ah error ocurred');
              console.log(error);
          },);
      }, [isRequestDone]);
      return(
          <>
          <div>
              <h1>Aqui van mis cards </h1>
  
              {
                  movieLis.results?.map((movie, index) => <MovieCard titleName={movie.title} 
                  posterPath={movie.poster_path} descripcion={movie.overview} movieId={movie.id}/>)
              }
              
  
          </div>
          </>
      )

}

  
export default HomePage;