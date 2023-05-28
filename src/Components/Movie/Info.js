import React from "react";
import FlexMoviesItems from "../FlexMoviesItems";
import { TiMediaPlay } from "react-icons/ti";
import { ImCloudDownload } from "react-icons/im";
import { Link } from "react-router-dom";

function Info({ movie }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={movie.image}
        alt={movie.name}
        className="w-full hidden xl:inline-block h-full object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute left-0 top-0 bottom-0 right-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={movie.titleImage}
              alt={movie.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <FlexMoviesItems movie={movie} />
              </div>
              <p className="text-text text-sm leading-7">{movie.desc}</p>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                  <Link
                    to={`/watch/${movie.name}`}
                    className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                  >
                    <TiMediaPlay className="w-5 h-5"/> Watch
                  </Link>
                </div>
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                  <Link
                    to={`/Download/${movie.name}`}
                    className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                  >
                    <ImCloudDownload className="h-5 w-5"/> Download 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
