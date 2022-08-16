import React from "react";
import { Link } from "react-router-dom";
import ButtonSearch from "../components/ButtonSearch";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

export default function Search() {
  return (
    <React.Fragment>
      <header className="flex flex-col px-6 pt-[43px] gap-4 md:container md:m-auto">
        <Link to="/" className=" ">
          ⬅️
        </Link>
        <ButtonSearch />
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
