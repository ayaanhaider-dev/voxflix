import React from "react";
import Layouts from "../Components/Layouts";
import { useParams } from "react-router-dom";
import MovieData from "../Contexts/Datas/MovieData";
import Info from '../Components/Movie/Info'

function SingleMovie() {
  const { id } = useParams();
  const movie = MovieData.find((movie) => movie.name === id);

  return (
  <Layouts>
    <Info movie={movie}/>
  </Layouts>
  );
}

export default SingleMovie;
