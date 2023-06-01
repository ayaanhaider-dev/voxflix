import React from "react";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

const isAuthenticated = true;

function MobileFooter() {
  return (
    <>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1 border border-black">
          <NavLink
            className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
            to="/movies"
          >
            <BsCollectionPlayFill />
          </NavLink>
          <NavLink
            className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
            to="/favorite"
          >
            <div className="relative">
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                0
              </div>
              <MdFavorite />
            </div>
          </NavLink>
          {isAuthenticated ? (
            <div className="flex items-center">
              <img
                src="/favicon.png"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
            </div>
          ) : (
            <NavLink
              className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
              to="/login"
            >
              <FaUser />
            </NavLink>
          )}
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
