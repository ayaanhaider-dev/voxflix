import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layouts from "../Components/Layouts";
import MovieData from "../Contexts/Datas/MovieData";
import { MdOutlineArrowBackIosNew, MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa"

function Watch() {
  let { id } = useParams();
  const movie = MovieData.find((movie) => movie.name === id);
  const [play, setPlay] = useState(false);

  return (
    <Layouts>
      <div className="container mx-auto Obg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${movie?.name}`}
            className="md:text-xl flex gap-3 text-sm items-center font-bold text-dryGray"
          >
            <MdOutlineArrowBackIosNew />
            {movie?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions text-white px-3 py-3 rounded-lg text-sm bg-opacity-30 ">
              <MdFavorite />
            </button>
          </div>
          {
            play ? (
              <video controls loop autoPlay className="w-full h-full rounded">
                <source src={movie?.video} type="video/mp4" title={movie?.name}></source>
              </video>
            ):(
              <div className="w-full h-screen rounded-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-main bg-opacity-30 flex-colo">
                  <button onClick={() => setPlay(true)} className="bg-white text-dry flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl hover:text-subMain">
                    <FaPlay />
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </Layouts>
  );
}

export default Watch;
