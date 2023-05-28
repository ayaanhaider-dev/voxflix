import React from "react";
import Layouts from "../Components/Layouts";
import Filters from "../Components/Filters";
import Movie from "../Components/Movies";
import MovieData from "../Contexts/Datas/MovieData";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";

function Movies({ movie }) {
  const MaxPage = 5;
  const [page, setPage] = useState(MaxPage);
  const HandleLoadingMore = () => {
    setPage(page + MaxPage);
  };
  return (
    <Layouts>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies?.length}</span>{" "}
          Items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid.cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {MovieData.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
          >
            Loading <ImSpinner9 className="animate-spin" />
          </button>
        </div>
      </div>
    </Layouts>
  );
}

export default Movies;
