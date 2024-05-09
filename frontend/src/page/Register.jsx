import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  // Submitting data
  const getData = async (value) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const userData = await response.json();
      if (response.ok) {
        reset();
        navigate("/");
        toast.success(userData.message);
      } else {
        toast.error(userData.message);
      }
    } catch (error) {
      console.log("Error while submitting data of register form ", error);
    }
  };

  return (
    <main className="flex items-center justify-center w-full h-screen bg-light_blue">
      <form
        className="max-w-[500px] sm:w-[450px] w-full h-full sm:h-auto block  sm:p-[30px] p-[15px] rounded-lg bg-dark_blue shadow-lg"
        onSubmit={handleSubmit(getData)}
      >
        {/* Header */}
        <div className="mb-6 text-center text-white">
          <h2 className="text-[35px] font-semibold">
            Sign<span className="text-green">Up</span>
          </h2>
          <p className="text-sm font-light ">Remeber everything is important</p>
        </div>

        {/* name */}
        <div className="mb-3">
          <div className="label">
            <span className="text-white label-text">Name:</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full text-xs text-white input input-bordered focus:border-green bg-light_blue"
            {...register("name", { required: true })}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <div className="label">
            <span className="text-white label-text">Email:</span>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-xs text-white input input-bordered focus:border-green bg-light_blue"
            {...register("email", { required: true })}
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <div className="mb-2">
            <span className="text-white label-text">Password:</span>
          </div>

          <label className="flex items-center gap-2 border input input-bordered bg-light_blue">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="text-xs text-white grow"
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

        {/* Submit button */}
        <div className="mt-2">
          <button
            type="submit"
            className="block w-full h-[45px] rounded-lg bg-green transition duration-300 hover:bg-[#3ba460] text-white"
          >
            Register
          </button>
          <p className="mt-3 text-xs font-light text-center text-white">
            Already have an account{" "}
            <Link to="/" className="underline ms-1 text-green">
              Login in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
