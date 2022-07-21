import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

export default function Categories() {
  const [category, setCategory] = useState([]);

  async function getCategoryMovie() {
    try {
      const { data } = await api.get("/genre/movie/list");
      setCategory(data.genres);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getCategoryMovie();
  }, []);
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-y-2">
        {category.map((item) => (
          <li
            key={item.id}
            className="before:content-[''] flex items-center before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px]"
          >
            <Link
              to="/category"
              dangerouslySetInnerHTML={{ __html: item.name }}
            ></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
