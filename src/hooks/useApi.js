import { useState } from "react";
import { api } from "../utils/api";

export function useApi() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState([]);

  const getTrendingMovies = async () => {
    try {
      const { data } = await api.get("/trending/movie/day");
      setMovies(data.results);
    } catch (error) {
      throw error;
    }
  };

  const getCategoryMovie = async () => {
    try {
      const { data } = await api.get("/genre/movie/list");
      setCategory(data.genres);
    } catch (error) {
      throw error;
    }
  };

  const getSearchMovies = async () => {
    try {
      const { data } = await api.get("/search/movie", {
        params: {
          query: "batman",
        },
      });
      setSearch(data.results);
    } catch (error) {
      throw error;
    }
  };

  return {
    movies,
    getTrendingMovies,
    category,
    getCategoryMovie,
    search,
    getSearchMovies,
  };
}
