import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import EditInputForm from "./EditInputForm";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Main() {
  const [userId, setUserId] = useState("");
  const [noteData, storeNoteData] = useState(null);
  const [isNoteEdit, setIsNoteEdit] = useState("createNote");
  const [updateNoteId, setUpdateNoteId] = useState("");
  const userToken = useSelector((state) => state.userToken);

  // Getting user id
  const getUserId = async () => {
    try {
      const getUser = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const userResponse = await getUser.json();
      setUserId(userResponse.message._id);
    } catch (err) {
      console.log("error while getting user id", err);
    }
  };

  // Fetching note data
  const fetchNoteData = async () => {
    try {
      const fetchData = await fetch("http://localhost:5000/api/getnote");
      const response = await fetchData.json();

      if (response && response.Data) {
        const filteredNotes = response.Data.filter(
          (note) => note.userId === userId
        );
        storeNoteData(filteredNotes);
      } else {
        console.error("Error: Invalid data received from the server");
      }
    } catch (error) {
      console.error("Error fetching note data:", error);
    }
  };

  useEffect(() => {
    getUserId();

    userId && fetchNoteData();
  }, [userId, userToken]);

  return (
    <main className=" pb-[100px]  pt-[100px] h-screen overflow-y-auto scrollbar ">
      <section className="container ">
        {/* Header */}
        <div className="flex items-center justify-end md:justify-between header">
          <h1 className="text-content_color text-[25px] font-medium leading-none md:block hidden">
            Start a new note-taking
          </h1>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 text-sm font-normal text-white capitalize transition duration-300 border-none rounded-md btn hover:bg-green bg-green"
            onClick={() => {
              document.getElementById("create_modal").showModal();
              setIsNoteEdit("createNote");
            }}
          >
            <FaPlus className="" />
            Create Note
          </button>
        </div>

        {/* Note Card */}
        {!noteData || noteData.length < 1 ? (
          <div className="text-white w-full h-[30vh] text-[30px] font-medium capitalize flex items-center justify-center">
            No <span className="text-green ms-2">data</span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[25px] gap-[15px]">
            {noteData.map((element, index) => (
              <Card
                data={element}
                key={index}
                fetchNoteData={fetchNoteData}
                setUpdateNoteId={setUpdateNoteId}
                isNoteEdit={isNoteEdit}
                setIsNoteEdit={setIsNoteEdit}
              />
            ))}
          </div>
        )}

        {/* Modal for creating new note  */}
        <dialog id="create_modal" className="modal ">
          <div className="overflow-hidden rounded-md modal-box bg-dark_blue">
            {/* Edit Input Form */}
            <EditInputForm
              userId={userId}
              fetchNoteData={fetchNoteData}
              isNoteEdit={isNoteEdit}
              updateNoteId={updateNoteId}
            />
          </div>
        </dialog>
      </section>
    </main>
  );
}
