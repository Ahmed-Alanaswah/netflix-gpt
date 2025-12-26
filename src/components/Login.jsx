import Header from "./Header";
import { Login_Img } from "../utils/imageUrls";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Login_Img} alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-3">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 bg-gray-600 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-2 bg-gray-600 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-2 bg-gray-600 w-full"
        />
        <button className="my-6 p-2 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignIn
            ? "Already Registered? Sign In Now"
            : "New To Netflix? Sign Up Now"}
        </p>
      </form>
      =
    </div>
  );
};

export default Login;
