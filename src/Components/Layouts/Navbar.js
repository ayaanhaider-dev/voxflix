import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BiX } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../Configs/firebase-config";

const auth = getAuth(app);

function Navbar() {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
  const NavHover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-dry shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="https://i.ibb.co/Tb835hk/image-removebg-preview-1.png"
                alt=""
                className="w-full h-35 object-contain"
              />
            </Link>
          </div>
          <div className="col-span-2 font-medium text-sm hidden xl:gap-4 2xl:gap-10 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/" className={Hover}>
              Home
            </NavLink>
            <NavLink to="/shows" className={Hover}>
              Tv Shows
            </NavLink>
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/entertainment" className={Hover}>
              Entertainment
            </NavLink>
          </div>
          <div className="col-span-3 flex items-center">
            <div className="container mx-auto py-3 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
              <div className="col-span-3 flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="font-medium placeholder:text-gray text-sm h-10 lg:h-10 bg-transparent border border-gray-500 rounded-full px-20 text-white pl-10"
                  />
                  <div className="absolute inset-y-0 left-0  bottom-0 pl-3 flex items-center pointer-events-none hover:text-main">
                    <BiSearchAlt className="text-gray-500 " />
                  </div>
                </div>
                <div className="col-span-1 font-medium text-sm lg:hidden">
                  <button className={inActive} onClick={toggleDrawer}>
                    <ImMenu />
                  </button>
                  {isOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ease-in-out">
                      <div className="flex justify-end p-4">
                        <button className="text-white" onClick={toggleDrawer}>
                          <BiX />
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-center h-screen">
                        <NavLink
                          to="/movies"
                          className={NavHover}
                          onClick={toggleDrawer}
                        >
                          Movies
                        </NavLink>
                        <NavLink
                          to="/shows"
                          className={NavHover}
                          onClick={toggleDrawer}
                        >
                          Tv Shows
                        </NavLink>
                        <NavLink
                          to="/entertainment"
                          className={NavHover}
                          onClick={toggleDrawer}
                        >
                          Entertainment
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 font-medium text-sm hidden xl:gap-4 2xl:gap-10 justify-between lg:flex xl:justify-end items-center">
            {user ? (
              <div className="flex justify-between items-center">
                <Link to="/profile" className={`${Hover} ml-3`}>
                  <img
                    src={user.photoURL || "/"}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </Link>
                <button onClick={handleLogout} className={`${Hover} ml-3`}>
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" className={`${Hover} ml-3`}>
                <FaUser className="w-6 h-6" />
              </NavLink>
            )}
            <NavLink to="/favorite" className={`${Hover} relative`}>
              <MdFavorite className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                1
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
