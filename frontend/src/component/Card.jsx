import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

export default function Card() {
  return (
    <>
      <button
        className="text-white w-full p-[20px] rounded-lg bg-dark_blue shadow-md cursor-pointer border-b-2 border-b-green transition duration-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {/* Card Header */}
        <div className="card_header">
          <h2 className="text-white text-lg leading-none">
            Practice mind meditation
          </h2>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs ">6th April 2024</p>
            <button
              type="button"
              className="text-white text-lg transition duration-300 hover:text-green focus:text-green focus:scale-125 cursor-pointer"
            >
              <MdOutlinePushPin />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="card_body mt-3">
          <p className="text-sm text-justify font-light text-content_color">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            officiis maxime repellat distinctio molestiae.
          </p>
        </div>

        {/* Card Footer */}
        <div className="card_footer mt-3 flex items-center justify-between">
          <div className="tags"> </div>
          <div className=" flex items-center gap-x-2">
            <button
              type="button"
              className="text-white text-lg transition duration-300 hover:text-green focus:text-green hover:scale-125 cursor-pointer"
            >
              <MdModeEdit />
            </button>
            <button
              type="button"
              className="text-white text-lg transition duration-300 hover:text-green focus:text-green hover:scale-125 cursor-pointer"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </button>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
