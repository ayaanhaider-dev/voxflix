import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import Layouts from "../Components/Layouts";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "../Configs/firebase-config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: userName,
        photoURL: "http://localhost:3000/favicon.png",
      });

      setUserName("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      
      // Perform additional actions if needed after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <Layouts>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border"
          onSubmit={handleSignup}
        >
          <img
            src="https://i.ibb.co/Tb835hk/image-removebg-preview-1.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <div className="text-sm w-full">
              <label className="text-border font-semibold">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your UserName"
                className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="text-sm w-full">
              <label className="text-border font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
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
                name="password"
                placeholder="Password"
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
            <FiUserPlus size={20} /> Sign Up
          </button>
          <button
            type="button"
            className="bg-red-600 text-white p-4 rounded-lg w-full mt-4"
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </button>
          <p className="text-center text-border">
            Already have an account?{" "}
            <Link className="text-dryGray font-semibold ml-2" to="/login">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </Layouts>
  );
}

export default Signup;
