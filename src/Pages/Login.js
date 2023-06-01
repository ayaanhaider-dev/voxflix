import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { RiLoginCircleLine } from "react-icons/ri";
import Layouts from "../Components/Layouts";
import { app } from "../Configs/firebase-config";

const auth = getAuth(app);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Redirect to the home page if the user is already logged in
        navigate("/");
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <Layouts>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border"
          onSubmit={handleLogin}
        >
          <img
            src="https://i.ibb.co/Tb835hk/image-removebg-preview-1.png"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <RiLoginCircleLine size={24} /> Sign In
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
