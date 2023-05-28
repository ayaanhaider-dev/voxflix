import React from "react";
import Layouts from "../Components/Layouts";
import { Link } from "react-router-dom";
import Logo from '../../Assest/logo.png'

function Login() {
  return (
    <Layouts>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
          <img
            src={Logo}
            alt="VoxFlix"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <div className="text-sm w-full">
              <label className="text-border font-semibold">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email Here"
                className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="text-sm w-full">
              <label className="text-border font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>{" "}
            Sign In
          </button>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link className="text-dryGray font-semibold ml-2" to="/signup">
              Create One
            </Link>
          </p>
        </form>
      </div>
    </Layouts>
  );
}
export default Login;
