import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-detail/:id" element={<MovieDetail />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/category/:id" element={<Category />} />
    </Routes>
  );
}
