import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Movies from "../components/Movies";

export default function MovieDetail() {
  return (
    <React.Fragment>
      <header className="relative md:container md:m-auto">
        <div className="bg-slate-400 w-full h-[480px]"></div>
        <Link to="/" className="absolute top-0 px-6 pt-10">
          ⬅️
        </Link>
      </header>
      <main className="rounded-3xl md:container md:m-auto">
        <section className="px-6 flex flex-col gap-4">
          <div className="flex items-center pt-8">
            <h1 className="text-[28px] flex-1 text-[#2A0646] font-extrabold">
              Deadpool 2
            </h1>
            <span className="font-bold text-[#2A0646]">🌟 7.6</span>
          </div>
          <p className=" text-[#2A0646]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            inventore provident facilis nostrum, accusamus earum soluta officiis
            nam harum quod assumenda sunt perspiciatis, a iste reiciendis animi
            deleniti nemo dignissimos!
          </p>
          <Categories />
        </section>
        <section className="pt-6 flex flex-col gap-4 pb-[50px]">
          <h2 className="px-6 text-lg font-bold text-[#3E0F64]">
            Películas similares
          </h2>
          <div className="flex gap-4 overflow-auto">
            <Movies />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
