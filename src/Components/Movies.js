import React from "react";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

function Movies({ movie }) {
  return (
    <>
    <div className="border border-border p-1 hover:scale-90 transitions relative rounded overflow-hidden">
        <Link to={`/movie/${movie.name}`} className="w-full">
            <img src={movie.image} alt={movie.name} className="w-full h-64 object-cover" />
        </Link>
        <div className="flex-btn absolute gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3 ">
            <h1 className="font-semibold truncate">{movie?.name}</h1>
            <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-subMain border-2 rounded-md bg-subMain text-white">
                <MdFavorite />
            </button>
        </div>
    </div>
    </>
  );
}

export default Movies;
