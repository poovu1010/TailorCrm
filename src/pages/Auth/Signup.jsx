import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [show, toShow] = useState(false);
  const navigate = useNavigate()
  function submit(e){
    e.preventDefault();
    toast.success("login success")
    setTimeout(()=>{
       navigate("/Dashboard")
    },2000)
 
  }


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header - Logo Section */}
      <div className="flex gap-2.5 items-center p-5 pt-10">
        <img src="" alt="logo" className="w-8 h-8" />
        <h1 className="text-2xl font-medium text-purple-600">Fit the world</h1>
      </div>

      {/* Main Form Section - Centers vertically */}
      <div className="flex-1 flex flex-col justify-center px-5">
        <h1 className="font-bold text-2xl text-center">Welcome Back!</h1>
        <p className="text-gray-700 text-sm text-center mt-2">
          Login to Your Account!
        </p>

        <form className="flex flex-col gap-4 mt-8">
          {/* Email or phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="EmailorPhone" className="text-sm font-medium">
              Email or Phone
            </label>
            <input
              type="text"
             
              id="EmailorPhone"
              className="border border-gray-300 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
              placeholder="Enter email or phone"
            />
            <p className="text-xs text-red-500 hidden">Error message</p>
          </div>

          {/* password */}
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="Password" className="text-sm font-medium">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="Password"
              className="border border-gray-300 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
              placeholder={show ? ".........." : "Enter the password"}
            />
            <button
              type="button"
              onClick={() => toShow(!show)}
              alt="eye"
              className="absolute right-2 top-1/2 bg-amber-200"
            >
              {show ? (
                <img src="👁️" alt="close"></img>
              ) : (
                <img src="🔐" alt="show"></img>
              )}
            </button>

            <p className="text-xs text-red-500 hidden">Error message</p>
          </div>

          {/* Forget Password */}
          <div className="flex justify-end">
            <p className="text-sm text-purple-600 cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button
          onClick={submit}
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-lg font-medium mt-4 hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* Footer - Sign Up Link */}
      <div className="p-5 pb-8 text-center">
        <p className="text-gray-600">
          Don't have an account?
          <span className="text-purple-600 font-medium ml-1 cursor-pointer">
            <Link to={"/"}> Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
