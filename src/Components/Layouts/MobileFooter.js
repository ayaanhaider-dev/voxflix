import React from "react";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { NavLink} from "react-router-dom";

function MobileFooter() {
  return (
    <>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div class="bg-dry rounded-md flex-btn w-full p-1 border border-black">
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
            <div class="relative">
              <div class="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                0
              </div>
              <MdFavorite />
            </div>
          </NavLink>
          <NavLink
            className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
            to="/login"
          >
            <FaUser />
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
