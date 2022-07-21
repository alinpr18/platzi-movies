import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  async function getTrendingMovies() {
    try {
      const { data } = await api.get("/trending/movie/day");
      setMovies(data.results);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <React.Fragment>
      {movies.map((item) => (
        <article key={item.id}>
          <Link to={"/movie-detail"}>
            <img
              className="bg-slate-400 max-w-[150px] h-[225px] rounded-md "
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
            />
          </Link>
        </article>
      ))}
    </React.Fragment>
  );
}
