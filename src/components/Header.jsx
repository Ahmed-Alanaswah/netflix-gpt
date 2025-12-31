import { Logo_Img } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { showGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGpt = useSelector((state) => state.gpt.showGptSearch);
  const handleShowGpt = () => {
    dispatch(showGptSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent w-screen flex justify-between z-10 flex-col md:flex-row">
        <img className="w-44 mx-auto md:mx-0" src={Logo_Img} alt="logo" />
        {user && (
          <div className="flex p-2 justify-between">
            <button
              className="text-white w-20 cursor-pointer bg-red-500"
              onClick={handleShowGpt}
            >
              {!showGpt ? "show gpt" : "home page"}
            </button>
            <img
              src={user?.photoURL}
              alt="profile image"
              className="w-20 hidden md:block"
            />
            <button
              className="text-white font-bold  cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
