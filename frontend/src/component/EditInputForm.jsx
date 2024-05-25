import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function EditInputForm({
  userId,
  fetchNoteData,
  isNoteEdit,
  updateNoteId,
}) {
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit, setValue } = useForm();

  // Create note
  const createNote = async (value) => {
    setLoading(true);
    try {
      // Store note data
      const storeData = await fetch("http://localhost:5000/api/createnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...value, userId }),
      });

      const response = await storeData.json();
      if (storeData.ok) {
        reset();
        toast.success(response.message);
        setLoading(false);
        fetchNoteData();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log("Error while creating note in frontend ", error);
    }
  };

  // Update note
  const updateNote = async () => {
    setLoading(true);
    try {
      const callApi = await fetch("http://localhost:5000/api/update-note", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updateNoteId }),
      });

      const response = await callApi.json();

      if (response.ok) {
        setLoading(false);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("error while updating note", error);
    }
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
            onClick={handleSubmit(
              isNoteEdit === "createNote" ? createNote : updateNote
            )}
          >
            {loading ? ( // Render spinner if loading
              <span className="text-white loading loading-spinner leading-[45px]"></span>
            ) : isNoteEdit === "createNote" ? (
              "Add"
            ) : (
              "Update"
            )}
          </button>
          <button className="block w-full h-[45px] rounded-md bg-[#dc2626] hover:bg-[#491c1c] transition duration-300 text-white mt-3">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
