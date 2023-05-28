import React from "react";
import Img from "../Assest/404.svg";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Lost() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img src={Img} alt="Not Found" />
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <p className="font-medium text-border leading-7">
      Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        className="bg-white hover:bg-subMain transition-transform text-black flex-rows gap-4 font-medium py-3 px-4 rounded-full"
        to="/"
      >
       <FaHome /> Go To Home
      </Link>
    </div>
  );
}

export default Lost;
