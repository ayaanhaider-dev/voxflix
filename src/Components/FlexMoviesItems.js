import React from "react";
import { BiMoviePlay, BiTime } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

function FlexMoviesItems({ movie }) {
  return (
    <>
      <div className="flex item-center gap-2">
        <BiMoviePlay className="text-subMain w-4 h-4 font-bold" />
        <span className="text-sm font-medium font-bold">{movie.category}</span>
      </div>
      <div className="flex item-center gap-2">
        
        <FaRegCalendarAlt className="text-subMain w-4 h-4 font-bold" />
        <span className="text-sm font-medium font-bold">{movie.year}</span>
      </div>
      <div className="flex item-center gap-2">
        <BiTime className="text-subMain w-4 h-4 font-bold" />
        <span className="text-sm font-medium font-bold">{movie.time}</span>
      </div>
      
    </>
  );
}

export default FlexMoviesItems;
