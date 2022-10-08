import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password);
      // After login get navigate to Home
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full h-screen sign-section">
        <div className="max-w-[600px] h-[500px] mx-auto bg-black/75 text-white">
          <div className="max-w-[600px] mx-auto py-16 px-20">
            <h2 className="text-3xl font-bold uppercase">Sign In</h2>
            <form
              onSubmit={handleSubmit}
              className="sm:w-[300px] w-[215px] flex flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-200 rounded text-black"
                type="email"
                placeholder="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-200 rounded text-black"
                type="password"
                placeholder="Password"
              />
              {error && <p className="p-3 bg-red-400 my-2">{error}</p>}
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-[#ffeb15] hover:bg-white py-3 my-6 rounded text-gray-700 font-bold uppercase"
              >
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-10">
                <span className="text-gray-400">New to Netflix?</span>
                <Link
                  to="/signup"
                  className="transition ease-in-out delay-150 hover:text-[#ffeb15]"
                >
                  {" "}
                  Register here!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
