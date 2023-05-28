import React from "react";
import Title from "../../Contexts/Title";
import { BsCollectionPlayFill } from "react-icons/bs";
import MovieData from "../../Contexts/Datas/MovieData";
import Movies from "../Movies";

function Popular() {
  return (
    <>
      <div className="my-16">
        <Title title="Popular Movies" Icon={BsCollectionPlayFill}/>
        <div className="grid sm:mt-12 mt-6 grid-col-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {MovieData.slice(0, 8).map((movie, index) => (
            <Movies key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
