import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ButtonSearch() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form
      className=" rounded-md overflow-hidden w-full flex min-h-[51px]"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Buscar"
        className="bg-[#EEEAF2] px-4 w-full"
        type="text"
        onChange={handleChange}
        value={keyword}
      />
      <Link
        to={`/search/${keyword}`}
        className="bg-[#3E0F64] min-w-[51px] flex items-center justify-center"
      >
        <button
          type="submit"
          // className="bg-[#3E0F64] min-w-[51px] flex items-center justify-center"
        >
          🔍
        </button>
      </Link>
    </form>
  );
}
