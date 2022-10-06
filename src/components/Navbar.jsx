import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa"
import { RiLogoutBoxRFill } from "react-icons/ri"

const Navbar = () => {
  
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  /* console.log(user.email) */

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="p-4 z-[100] w-full absolute">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-[#ffeb15] sm:text-4xl text-xl font-bold cursor-pointer uppercase">
            movieme
          </h1>
        </Link>
        {user?.email ? (
          <div className="flex items-center align-middle">
            <Link to="/watchlist">
              <button className="text-white font-bold text-uppercase pr-4 uppercase">
                Watchlist
              </button>
            </Link>
            <button
              onClick={handleLogOut}
              className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white sm:px-6 sm:py-[10px] px-4 py-1 rounded cursor-pointer text-gray-700 font-bold uppercase"
            >
              Log out
              <RiLogoutBoxRFill className="text-2xl pb-[2px]" />
            </button>
          </div>
        ) : (
          <div className="flex items-center align-middle">
            <Link to="/login">
              <button className="text-white pr-5 uppercase">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white sm:px-6 sm:py-[10px] px-3 py-2 rounded cursor-pointer text-gray-700 font-bold uppercase">
                Sign Up
                <FaUserCircle className="text-2xl pb-[2px]" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
