import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import MovieData from "../../Contexts/Datas/MovieData";
import FlexMoviesItems from "../FlexMoviesItems";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

SwiperCore.use([Autoplay]);

export default function HomeBanner() {
  return (
    <>
      <div className="relative w-full h-full">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          loop={true}
          speed={300}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48"
        >
          {MovieData.slice(0, 6).map((movie, index) => (
            <SwiperSlide key={index} className="relative rounded overflow-hidden ">
              <img
                src={`${movie.image}`}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 botton-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
               <br />
                <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                  {movie.name}
                </h1>
                <div className="flex gap-5 items-center text-dryGray">
                  <FlexMoviesItems movie={movie}/>
                </div>
                <div className="flex gap-5 items-center">
                  <Link to={`/movie/${movie.name}`} className="bg-subMain hover:text-main transition text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                    Play
                  </Link>
                  <button className="bg-white hover:text-main transition text-white px-4 py-3 rounded text-sm bg-opacity-30 ">
                    <MdFavorite/>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
