import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

export default function Search() {
  return (
    <React.Fragment>
      <header className="flex flex-col px-6 pt-[43px] gap-4 md:container md:m-auto">
        <Link to="/" className=" ">
          ⬅️
        </Link>
        <div className=" rounded-md overflow-hidden w-full flex min-h-[51px]">
          <input
            placeholder="Buscar"
            className="bg-[#EEEAF2] px-4 w-full"
            type="text"
          />
          <button className="bg-[#3E0F64] min-w-[51px] flex items-center justify-center">
            🔍
          </button>
        </div>
      </header>
      <main>
        <section className="flex gap-4 flex-wrap px-6 justify-center pt-8">
          <Movies />
        </section>
        <button className="bg-[#3E0F64] w-[100px] h-[31px]  rounded-md text-white flex justify-center items-center m-auto mt-10">
          Ver más
        </button>
      </main>
      <Footer />
    </React.Fragment>
  );
}
