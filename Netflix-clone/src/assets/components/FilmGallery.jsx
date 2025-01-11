import React, { useState, useEffect } from "react";
import moviesPool from "../json/SearchPool.json"; // Importa il file JSON con i film

function MovieRow() {
  const [movies, setMovies] = useState([]); // Stato per i film
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const apiKey = "2348edbf"; // Inserisci qui la tua API key

  // Funzione per prendere 6 film casuali dalla pool
  const getRandomMovies = (count) => {
    const shuffled = moviesPool.sort(() => 0.5 - Math.random()); // Mescola la lista
    return shuffled.slice(0, count); // Prendi i primi `count` film
  };

  // Funzione per recuperare i dati reali dei 6 film
  const fetchMoviesData = async () => {
    setLoading(true);
    const randomMovies = getRandomMovies(6); // Pesca 6 film casuali
    try {
      const promises = randomMovies.map((movie) =>
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movie.title}`).then((res) =>
          res.json()
        )
      );

      const results = await Promise.all(promises); // Attendi tutte le chiamate API
      setMovies(results); // Salva i risultati nello stato
    } catch (err) {
      console.error("Errore nel caricamento dei film:", err);
    } finally {
      setLoading(false); // Disabilita il caricamento
    }
  };

  // Effettua la chiamata API quando il componente viene montato
  useEffect(() => {
    fetchMoviesData();
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {movies.map((movie, index) => (
          <div key={index} style={styles.card}>
            {movie.Poster && movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={styles.image}
              />
            ) : (
              <p style={styles.noPoster}>Poster non disponibile</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "1200px", // Limita la larghezza totale del contenitore
    margin: "0 auto",
  },
  row: {
    display: "flex",
    justifyContent: "space-between", // Spazio uniforme tra le card
    alignItems: "center", // Allineamento verticale
    gap: "10px", // Spazio tra le card
    overflowX: "auto", // Permette lo scroll orizzontale se lo spazio è insufficiente
  },
  card: {
    flex: "0 0 calc(16.66% - 10px)", // Ogni card occupa 1/6 dello spazio disponibile
    maxWidth: "180px", // Limita la dimensione massima della card
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "270px", // Altezza fissa per uniformare le immagini
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  noPoster: {
    fontSize: "14px",
    color: "#555",
  },
};

export default MovieRow;
