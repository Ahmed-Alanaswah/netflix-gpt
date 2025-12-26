import { Logo_Img } from "../utils/imageUrls";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
        <img className="w-44" src={Logo_Img} alt="logo" />
        {user && (
          <div className="flex p-2 w-20">
            <img src={user?.photoURL} alt="profile image" />
            <button
              className="text-white font-bold w-full cursor-pointer"
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
