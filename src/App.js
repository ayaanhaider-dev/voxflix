import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Lost from "./Pages/Lost";
import Movies from "./Pages/Movies";
import SingleMovie from "./Pages/SingleMovie";
import Watch from "./Pages/Watch";
import TvShows from "./Pages/TvShows";
import Entertainment from "./Pages/Entertainment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<TvShows />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;
