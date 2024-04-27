import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const getData = (value) => {
    console.log(value);
  };

  return (
    <main className=" bg-light_blue w-full h-screen flex items-center justify-center">
      <form
        className=" sm:w-[450px] w-full h-full sm:h-auto block  sm:p-[30px] p-[15px] rounded-lg bg-dark_blue shadow-lg"
        onSubmit={handleSubmit(getData)}
      >
        {/* Header */}
        <div className="text-center text-white mb-6">
          <h2 className="text-[35px] font-semibold">
            Log<span className="text-green">in</span>
          </h2>
          <p className="font-light text-sm ">Remeber everything is important</p>
        </div>

        {/* name */}
        <div className="mb-3">
          <div className="label">
            <span className="label-text text-white">Username:</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter username"
            className="input input-bordered w-full  bg-light_blue text-white text-xs"
            {...register("name", { required: true })}
          />
        </div>

        {/* Password*/}
        <div className="mb-6">
          <div className="mb-2">
            <span className="label-text text-white">Password:</span>
          </div>

          <label className="input input-bordered border bg-light_blue flex items-center gap-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="grow  text-white text-xs"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
            </button>
          </label>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="block w-full h-[45px] rounded-lg bg-green transition duration-300 hover:bg-[#3ba460] text-white"
          >
            Login
          </button>
          <p className="text-white mt-3 text-xs text-center font-light">
            Don't have an account{" "}
            <Link to="/register" className="ms-1 underline text-green">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}