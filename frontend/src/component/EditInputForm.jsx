import React from "react";
import { useForm } from "react-hook-form";

export default function EditInputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = (value) => {
    console.log(value);
  };

  return (
    <div>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white transition duration-300 hover:rotate-[180deg] hover:scale-125 hover:text-green">
          ✕
        </button>

        {/* Title */}
        <div className="mt-5 mb-3">
          <div className="label">
            <span className="text-white label-text">Title:</span>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title.."
            className="w-full text-xs text-white rounded-md input input-bordered bg-light_blue"
            {...register("title", { required: true })}
          />
        </div>

        {/* Content */}
        <div className="mb-0">
          <div className="label">
            <span className="text-white label-text">Content:</span>
          </div>
          <textarea
            className="textarea w-full rounded-md bg-light_blue text-white text-xs resize-none !h-[120px] overflow-y-auto"
            placeholder="Content..."
            name="content"
            {...register("content", { required: true })}
          ></textarea>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full h-[45px] rounded-md bg-green transition duration-300 hover:bg-[#3ba460] text-white"
            onClick={handleSubmit(getData)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
