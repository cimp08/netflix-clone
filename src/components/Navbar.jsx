import React, { useState } from "react";
import { close, menu } from "../assets/img";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ScrollDirection } from "./ScrollDirection";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRFill, RiMovieFill } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const scrollDirection = ScrollDirection();
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
    <nav
      className={`w-full flex justify-between items-center fixed px-2 bg-black/40 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 transition-all duration-500 z-10`}
    >
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <p className="flex gap-1 items-center text-white font-bold uppercase text-[25px] sm:px-1 ">
            <RiMovieFill className="text-[40px]" />
            Movie<span className="text-[#ffeb15]">me</span>
          </p>
        </Link>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {user?.email ? (
            <>
              <li className="cursor-pointer text-[18px] text-white transition ease-in-out delay-150 hover:text-[#ffeb15] uppercase mr-10">
                <Link to="/watchlist">Watchlist</Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white px-6 py-[10px] rounded cursor-pointer text-gray-700 font-bold uppercase"
                >
                  Log out
                  <RiLogoutBoxRFill className="text-2xl pb-[2px]" />
                </button>
              </li>{" "}
            </>
          ) : (
            <>
              <li className="cursor-pointer text-[18px] text-white transition ease-in-out delay-150 hover:text-[#ffeb15] uppercase mr-10">
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white px-6 py-[10px] rounded cursor-pointer text-gray-700 font-bold uppercase">
                    Sign up
                    <FaUserCircle className="text-2xl pb-[2px]" />
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* MOBILE DEVICES, HAMBURGER MENU */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="navbar menu"
            className="/*  */w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black/60 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {user?.email ? (
                <>
                  <li className="cursor-pointer text-[18px] text-white transition ease-in-out delay-150 hover:text-[#ffeb15] uppercase mb-4">
                    <Link to="/watchlist">Watchlist</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white px-6 py-[10px] rounded cursor-pointer text-gray-700 font-bold uppercase"
                    >
                      Log out
                      <RiLogoutBoxRFill className="text-2xl pb-[2px]" />
                    </button>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className="cursor-pointer text-[18px] text-white transition ease-in-out delay-150 hover:text-[#ffeb15] uppercase mb-4">
                    <Link to="/login">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <button className="transition ease-in-out delay-150 flex items-center gap-2 bg-[#ffeb15] hover:bg-white px-6 py-[10px] rounded cursor-pointer text-gray-700 font-bold uppercase">
                        Sign up
                        <RiLogoutBoxRFill className="text-2xl pb-[2px]" />
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
