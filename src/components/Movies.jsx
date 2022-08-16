import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export default function Movies() {
  const { movies, getTrendingMovies, search, getSearchMovies } = useApi();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <React.Fragment>
      {movies.map((item) => (
        <article key={item.id}>
          <Link to={`/movie-detail/${item.id}`}>
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
