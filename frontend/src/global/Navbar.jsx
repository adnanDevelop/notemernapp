import React from "react";
// import { MdLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  //   const [icon, setIcon] = useState(true);
  //   const [theme, setTheme] = useState(
  //     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("theme", theme);
  //     const localTheme = localStorage.getItem("theme");

  //     document.querySelector("html").setAttribute("data-theme", localTheme);
  //   }, [theme]);

  //   const switchTheme = (event) => {
  //     if (localStorage.getItem("theme") === "light") {
  //       setTheme("dark");
  //       setIcon(true);
  //     } else {
  //       setTheme("light");
  //       setIcon(false);
  //     }
  //   };

  return (
    <nav className=" bg-dark_blue  py-[15px]">
      <div className="container flex items-center justify-between  ">
        {/* Logo */}
        <div>
          <img
            className="sm:w-[150px] w-[120px] object-cover"
            src="/image/logo.svg"
            alt=""
          />
        </div>
        {/* Search bar */}
        <div className="search_bar md:block hidden">
          <label className="input input-bordered h-[35px] w-[400px] bg-light_blue flex items-center gap-2">
            <input
              type="text"
              className="grow text-xs text-white"
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
              <h4 className="leading-none text-white sm:text-sm text-xs transition duration-300 hover:text-green">
                Uername
              </h4>
              <button className="text-white sm:text-xs text-[10px] leading-none transition duration-300 hover:text-green">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
