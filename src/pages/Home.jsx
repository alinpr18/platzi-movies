import React from "react";
import ButtonSearch from "../components/ButtonSearch";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

export default function Home() {
  return (
    <React.Fragment>
      <header className="flex flex-col px-6 pt-[43px] gap-4 md:container md:m-auto">
        <h1 className="text-2xl text-[#2A0646] font-extrabold">PlatziMovies</h1>
        <ButtonSearch />
      </header>
      <main className="md:container md:m-auto">
        <section className=" pt-[52px] gap-[22px] flex flex-col">
          <div className="flex px-6">
            <h2 className="text-lg flex-1  text-[#2A0646] font-bold">
              Tendencias
            </h2>
            <button className="bg-[#3E0F64] w-[72px] h-[31px]  rounded-md text-white">
              Ver más
            </button>
          </div>
          <div className="flex gap-4 overflow-auto">
            <Movies />
          </div>
        </section>
        <section className="px-6 pt-[48px] flex flex-col gap-6">
          <h2 className="text-lg flex-1  text-[#2A0646] font-bold">
            Categorías
          </h2>
          <Categories />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
