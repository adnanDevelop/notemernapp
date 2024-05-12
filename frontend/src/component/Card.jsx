import React, { useState } from "react";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

export default function Card({ data, fetchNoteData, setIsNoteEdit }) {
  const [loading, setLoading] = useState(false);

  // Delete note
  const deleteNote = async (value) => {
    setLoading(true);

    try {
      const deleteSingleNote = await fetch(
        "http://localhost:5000/api/delete-note",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: value }),
        }
      );

      const response = await deleteSingleNote.json();

      if (deleteSingleNote.ok) {
        setLoading(false);
        toast.success(response.message);
        fetchNoteData();
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log("Error while note", err);
    }
  };

  const modalId = `delete_modal_${data._id}`;

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
        <div className="flex items-center justify-end mt-3 card_footer">
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="text-lg text-white transition duration-300 cursor-pointer hover:text-green focus:text-green hover:scale-125"
              onClick={() => {
                document.getElementById("create_modal").showModal();
                setIsNoteEdit("editNote");
              }}
            >
              <MdModeEdit />
            </button>
            <button
              type="button"
              className="text-lg text-white transition duration-300 cursor-pointer hover:text-green focus:text-green hover:scale-125"
              onClick={() => {
                document.getElementById(modalId).showModal();
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for deleting */}
      <dialog id={modalId} className="modal">
        <div className="overflow-hidden rounded-md modal-box bg-dark_blue">
          <h3 className="text-white text-center text-[30px] leading-none font-medium">
            Delete <span className=" text-green">Note</span>
          </h3>
          <p className="pt-4 text-base text-center text-white">
            Are you sure you want to delete this note.
          </p>
          <div className="flex items-center justify-center modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="flex items-center text-white btn-error btn"
              onClick={() => deleteNote(data._id)}
            >
              {loading ? ( // Render spinner if loading
                <span className="text-white loading loading-spinner leading-[45px]"></span>
              ) : (
                "Delete"
              )}
            </button>
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
