import React, { useContext, useState } from "react";
import AuthDetails from "../../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Signup from "./Signup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { authData, manageAuthData } = useContext(AuthDetails);
  const navigate = useNavigate();

  // input get
  const [input, GetInput] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPasswoed: "",
  });

  const [Errors, SetErrors] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPasswoed: "",
  });

  const validate = () => {
    const nameRegex = /^[A-Za-z ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    let newErrors = {};

    if (!input.FullName) {
      newErrors.FullName = "name is required";
    }
    if (!input.Email) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(input.Email)) {
      newErrors.Email = "Enter valid Email";
    }

    // Password validation
    if (!input.Password) {
      newErrors.Password = "Password is required";
    } else if (!passwordRegex.test(input.Password)) {
      newErrors.Password =
        "At least 8 characters,1 lowercase,1 uppercase,1 number,1 special character";
    }
    if (!input.ConfirmPasswoed) {
      newErrors.ConfirmPasswoed = "Enter the Confirm password";
    } else if (input.Password != input.ConfirmPasswoed) {
      newErrors.ConfirmPasswoed = "password is miss match";
    }

    SetErrors(newErrors);
    // console.log(newErrors);
    return newErrors;
  };

  let Handleinput = (e) => {
    const { name, value } = e.target;

    let updated = { ...input, [name]: value };
    GetInput(updated);

    return updated;
  };
  // let data = JSON.stringify(input)

  function submit(e) {
    e.preventDefault();

    let demo = validate();
    if (Object.keys(demo).length == 0) {
      (manageAuthData({
        FullName: input.FullName,
        Email: input.Email,
        Password: input.Password,
      }),
        toast.success("registered"));

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error("Registrtion failed");
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex gap-2.5 items-center p-5 pt-10">
          <img src="" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-medium text-purple-600">
            Fit the world
          </h1>
        </div>
        {/* <p>{data}</p> */}

        <div className="flex-1 flex flex-col justify-center px-5">
          <h1 className="font-bold text-2xl text-center">Create Account</h1>
          <p className="text-gray-700 text-sm text-center mt-2">
            Sign up to get started!
          </p>

          <form className="flex flex-col gap-1 mt-8">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>
              <input
                name="FullName"
                value={input.Fullname}
                onChange={Handleinput}
                type="text"
                id="fullName"
                className="border border-gray-300 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
                placeholder="Enter your full name"
              />
              <p className="text-red-500 text-xs h-3 place-items-center flex">
                {Errors.FullName}
              </p>
            </div>

            {/* Email or Phone */}
            <div className="flex flex-col gap-1">
              <label htmlFor="emailOrPhone" className="text-sm font-medium">
                Email or Phone
              </label>
              <input
                name="Email"
                onChange={Handleinput}
                value={input.Email}
                type="text"
                id="emailOrPhone"
                className="border border-gray-300 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
                placeholder="Enter email or phone number"
              />
              <p className="text-red-500 text-xs h-3 place-items-center flex">
                {Errors.Email}
              </p>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  name="Password"
                  onChange={Handleinput}
                  value={input.Password}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:border-purple-500 focus:outline-none pr-10"
                  placeholder="Create password"
                />
                <p className="text-red-500 text-xs h-auto place-items-center flex">
                  {Errors.Password}
                </p>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  name="ConfirmPasswoed"
                  onChange={Handleinput}
                  value={input.ConfirmPasswoed}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:border-purple-500 focus:outline-none pr-10"
                  placeholder="Confirm your password"
                />
                <p className="text-red-500 text-xs h-3 place-items-center flex">
                  {Errors.ConfirmPasswoed}
                </p>

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-purple-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-purple-600">Terms of Service</span> and{" "}
                <span className="text-purple-600">Privacy Policy</span>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 rounded-lg font-medium mt-4 hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer - Login Link */}
        <div className="p-5 pb-8 text-center">
          <p className="text-gray-600">
            Already have an account?
            
            <span className="text-purple-600 font-medium ml-1 cursor-pointer">
              <Link to={"/login"}> Login</Link>
             
              
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
