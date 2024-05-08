import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

export default function Card({ data }) {
  return (
    <>
      <div className="text-white w-full p-[20px] rounded-lg bg-dark_blue shadow-md cursor-pointer border-b-2 border-b-green transition duration-300">
        {/* Card Header */}
        <div className="card_header">
          <h2 className="text-lg leading-none text-white text-start">
            {data ? data.title : "Title"}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs ">
              {" "}
              {data
                ? new Date(data.createdOn).toLocaleDateString()
                : "6th April 2024"}
            </p>
            <button
              type="button"
              className="text-lg text-white transition duration-300 cursor-pointer hover:text-green focus:text-green focus:scale-125"
            >
              <MdOutlinePushPin />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="mt-3 card_body">
          <p className="text-sm font-light text-justify text-content_color">
            {data ? data.content : "Content"}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between mt-3 card_footer">
          <div className="tags"> </div>
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="text-lg text-white transition duration-300 cursor-pointer hover:text-green focus:text-green hover:scale-125"
              onClick={() =>
                document.getElementById("create_modal").showModal()
              }
            >
              <MdModeEdit />
            </button>
            <button
              type="button"
              className="text-lg text-white transition duration-300 cursor-pointer hover:text-green focus:text-green hover:scale-125"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
