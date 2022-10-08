import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      // After signup get navigate to Home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full h-screen sign-section">
        <div className="max-w-[600px] h-[500px] mx-auto bg-black/75 text-white">
          <div className="max-w-[600px] mx-auto py-16 px-20">
            <h2 className="text-3xl font-bold uppercase">Sign Up</h2>
            <form
              onSubmit={handleSubmit}
              className="sm:w-[300px] w-[215px] flex flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-200 rounded text-black "
                value={email}
                type="Email"
                placeholder="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-200 rounded text-black"
                value={password}
                type="Password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-[#ffeb15] hover:bg-white py-3 my-6 rounded text-gray-700 font-bold uppercase"
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-10">
                <span className="text-gray-400">
                  Already subscribed to Netflix?
                </span>
                <Link
                  to="/login"
                  className="transition ease-in-out delay-150 hover:text-[#ffeb15]"
                >
                  {" "}
                  Sign In!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
