import React from "react";
import Title from "../../Contexts/Title";
import { BsStarFill } from "react-icons/bs";
import MovieRank from "../../Contexts/Datas/MovieRank";
import Movies from "../Movies";

function Top() {
  return (
    <>
      <div className="my-16">
        <Title title="Top Ranking" Icon={BsStarFill}/>
        <div className="grid sm:mt-12 mt-6 grid-col-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {MovieRank.slice(0, 8).map((movie, index) => (
            <Movies key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Top;
