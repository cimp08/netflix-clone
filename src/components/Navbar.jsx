import React, { useState, useEffect, useRef } from "react";
import { debounce } from "../utilities/helpers";
import { close, menu } from "../assets/img";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRFill, RiMovieFill, RiToggleFill } from "react-icons/ri";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const ref = useRef();

  /* console.log(user.email) */


  const navbarStyles = {
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70px",
    zIndex: "10",
    transition: "top 0.6s",
    paddingLeft: "5px",
    paddingRight: "5px" 
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
      setToggle((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  return (
    <nav
      style={{ ...navbarStyles, top: visible ? "0" : "-70px" }}
      className={prevScrollPos !== 0 && "bg-black/40"}
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
                <Link
                  to="/watchlist"
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  Watchlist
                </Link>
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
                <Link
                  to="/signup"
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
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

        <div
          className="sm:hidden flex flex-1 justify-end items-center"
          ref={ref}
        >
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
                    <Link
                      to="/watchlist"
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                    >
                      Watchlist
                    </Link>
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
                    <Link
                      to="/login"
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                    >
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
