import React, { useState, useEffect } from "react";
import moviesPool from "../json/SearchPool.json"; 
import "../styles/FilmGallery.css"; 

function MovieRow() {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const apiKey = "2348edbf"; 

  const getRandomMovies = (count) => {
    const shuffled = moviesPool.sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, count); 
  };

  const fetchMoviesData = async () => {
    setLoading(true);
    const randomMovies = getRandomMovies(6);
    try {
      const promises = randomMovies.map((movie) =>
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movie.title}`).then((res) =>
          res.json()
        )
      );

      const results = await Promise.all(promises); 
      setMovies(results); 
    } catch (err) {
      console.error("Errore nel caricamento dei film:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="image"
              />
            ) : (
              <p className="noPoster">Poster non disponibile</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
