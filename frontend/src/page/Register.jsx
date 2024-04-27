import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = (value) => {
    console.log(value);
  };

  return (
    <main className=" bg-light_blue w-full h-screen flex items-center justify-center">
      <form
        className="max-w-[500px] sm:w-[450px] w-full h-full sm:h-auto block  sm:p-[30px] p-[15px] rounded-lg bg-dark_blue shadow-lg"
        onSubmit={handleSubmit(getData)}
      >
        {/* Header */}
        <div className="text-center text-white mb-6">
          <h2 className="text-[35px] font-semibold">
            Sign<span className="text-green">Up</span>
          </h2>
          <p className="font-light text-sm ">Remeber everything is important</p>
        </div>

        {/* name */}
        <div className="mb-3">
          <div className="label">
            <span className="label-text text-white">Name:</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full focus:border-green bg-light_blue text-white text-xs"
            {...register("name", { required: true })}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <div className="label">
            <span className="label-text text-white">Email:</span>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:border-green bg-light_blue text-white text-xs"
            {...register("email", { required: true })}
          />
        </div>
        {/* Password */}
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
            Register
          </button>
          <p className="text-white mt-3 text-xs text-center font-light">
            Already have an account{" "}
            <Link to="/" className="ms-1 underline text-green">
              Login in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
