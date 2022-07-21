import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

export default function Search() {
  return (
    <React.Fragment>
      <header className="bg-gradient-to-b from-pink-300 to-pink-200]">
        <div className="flex flex-col px-6 pt-[43px] gap-4 md:container md:m-auto ">
          <Link to="/" className=" ">
            ⬅️
          </Link>
          <h1 className="text-2xl text-[#2A0646] font-extrabold before:bg-slate-500 before:w-[30px] before:h-[30px] before:rounded-md flex items-center gap-3">
            Acción
          </h1>
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
