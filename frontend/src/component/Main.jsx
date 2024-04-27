import React, { useState } from "react";
import Card from "./Card";
import { FaPlus } from "react-icons/fa6";

export default function Main() {
  const [tags, storeTags] = useState([""]);

  return (
    <main className="bg-light_blue py-[30px] ">
      <section className="container ">
        {/* Header */}
        <div className="header flex items-center justify-between">
          <h1 className="text-content_color text-[25px] font-medium leading-none">
            Start a new note-taking
          </h1>
          <button
            type="button"
            className="text-sm btn border-none hover:bg-green font-normal capitalize px-4 py-3 rounded-md bg-green text-white transition duration-300 flex items-center gap-2"
            onClick={() => document.getElementById("create_modal").showModal()}
          >
            <FaPlus className="" />
            Create Note
          </button>
        </div>

        {/* Note Card */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[25px] gap-[15px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Modal for creating new note  */}
        <dialog id="create_modal" className="modal ">
          <div className="modal-box rounded-md overflow-hidden bg-dark_blue">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white transition duration-300 hover:rotate-[180deg] hover:scale-125 hover:text-green">
                ✕
              </button>

              {/* Title */}
              <div className="mb-3 mt-5">
                <div className="label">
                  <span className="label-text text-white">Title:</span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title.."
                  className="input input-bordered w-full rounded-md  bg-light_blue text-white text-xs"
                  //   {...register("name", { required: true })}
                />
              </div>

              {/* Content */}
              <div className="mb-0">
                <div className="label">
                  <span className="label-text text-white">Content:</span>
                </div>
                <textarea
                  className="textarea w-full rounded-md bg-light_blue text-white text-xs resize-none !h-[120px] overflow-y-auto"
                  placeholder="Content..."
                ></textarea>
              </div>

              {/* Tags */}
              <div className="mb-3">
                <div className="label">
                  <span className="label-text text-white">Tags</span>
                </div>
                <div className="w-full rounded-md flex gap-1 overflow-x-auto h-[40px]  bg-light_blue text-white text-xs"></div>
                {/* Tag input */}
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title.."
                    className="input h-[40px] input-bordered  rounded-md  bg-light_blue text-white text-xs"
                    //   {...register("name", { required: true })}
                  />
                  <button
                    type="submit"
                    className=" w-[40px] h-[40px] flex items-center justify-center rounded-md bg-green transition duration-300 hover:bg-[#3ba460] text-white"
                  >
                    <FaPlus className="" />
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="block w-full h-[45px] rounded-md bg-green transition duration-300 hover:bg-[#3ba460] text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </section>
    </main>
  );
}
