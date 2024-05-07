import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserToken } from "../feature/user/userSlice";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const getData = async (value) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (response.ok) {
        reset("");
        navigate("/home");
        dispatch(setUserToken(data.token)); //Storing user token
        toast.success(data.message);
      } else {
        console.log(data);
        toast.error(data.message);
      }
    } catch (err) {
      console.log("Error while login ", err);
    }
  };

  return (
    <main className="flex items-center justify-center w-full h-screen bg-light_blue">
      <form
        className=" sm:w-[450px] w-full h-full sm:h-auto block  sm:p-[30px] p-[15px] rounded-lg bg-dark_blue shadow-lg"
        onSubmit={handleSubmit(getData)}
      >
        {/* Header */}
        <div className="mb-6 text-center text-white">
          <h2 className="text-[35px] font-semibold">
            Log<span className="text-green">in</span>
          </h2>
          <p className="text-sm font-light ">Remeber everything is important</p>
        </div>

        {/* name */}
        <div className="mb-3">
          <div className="label">
            <span className="text-white label-text">Email:</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter username"
            className="w-full text-xs text-white input input-bordered bg-light_blue"
            {...register("email", { required: true })}
          />
        </div>

        {/* Password*/}
        <div className="mb-6">
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

        <div className="mt-2">
          <button
            type="submit"
            className="block w-full h-[45px] rounded-lg bg-green transition duration-300 hover:bg-[#3ba460] text-white"
          >
            Login
          </button>
          <p className="mt-3 text-xs font-light text-center text-white">
            Don't have an account{" "}
            <Link to="/register" className="underline ms-1 text-green">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
