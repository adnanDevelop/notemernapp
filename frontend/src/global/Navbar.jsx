import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../feature/user/userSlice";

export default function Navbar() {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.userToken);

  const getUserData = async () => {
    try {
      const getUser = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const response = await getUser.json();
      setUserData(response.message);
    } catch (error) {
      console.error("Error while fetching user data");
    }
  };

  useEffect(() => {
    getUserData();
  });

  const capitalizeEachWord = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav className=" bg-dark_blue  py-[15px] fixed w-full top-0 left-0">
      <div className="container flex items-center justify-between ">
        {/* Logo */}
        <div>
          <img
            className="sm:w-[150px] w-[120px] object-cover"
            src="/image/logo.svg"
            alt=""
          />
        </div>
        {/* Search bar */}
        <div className="hidden search_bar md:block">
          <label className="input input-bordered h-[35px] w-[400px] bg-light_blue flex items-center gap-2">
            <input
              type="text"
              className="text-xs text-white grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-[20px] h-[20px] text-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* User Profile */}
        <div className="flex items-center">
          {/* User Profile */}
          <div className="flex items-center gap-x-3">
            <img
              src="/image/user-logo.jpg"
              className="sm:w-[45px] w-[35px] sm:h-[45px] h-[35px] cursor-pointer object-cover rounded-full"
              alt=""
            />
            <div className="flex flex-col items-start gap-1 cursor-pointer">
              <h4 className="text-xs leading-none text-white transition duration-300 sm:text-sm hover:text-green">
                {userData ? capitalizeEachWord(userData.name) : "Username"}
              </h4>
              <button
                type="button"
                className="text-white sm:text-xs text-[10px] leading-none transition duration-300 hover:text-green"
                onClick={() => {
                  dispatch(logoutUser(""));
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
