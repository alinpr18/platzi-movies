import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export default function Categories() {
  const { category, getCategoryMovie } = useApi();

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
            <Link to={`/category/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
