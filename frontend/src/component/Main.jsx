import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import EditInputForm from "./EditInputForm";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Main() {
  const [noteData, storeNoteData] = useState(null);
  const userToken = useSelector((state) => state.userToken);

  const fetchNoteData = async () => {
    const getUser = await fetch("http://localhost:5000/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    const userResponse = await getUser.json();
    const userId = userResponse.message._id;

    const fetchData = await fetch("http://localhost:5000/api/getnote");
    const response = await fetchData.json();

    const filterNotes = response.Data.filter((element) => {
      return element.userId === userId;
    });

    storeNoteData(filterNotes);
  };

  useEffect(() => {
    fetchNoteData();
  }, []);

  return (
    <main className="bg-light_blue pb-[30px] h-full pt-[100px] ">
      <section className="container ">
        {/* Header */}
        <div className="flex items-center justify-end md:justify-between header">
          <h1 className="text-content_color text-[25px] font-medium leading-none md:block hidden">
            Start a new note-taking
          </h1>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 text-sm font-normal text-white capitalize transition duration-300 border-none rounded-md btn hover:bg-green bg-green"
            onClick={() => document.getElementById("create_modal").showModal()}
          >
            <FaPlus className="" />
            Create Note
          </button>
        </div>

        {/* Note Card */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[25px] gap-[15px]">
          {noteData
            ? noteData.map((element, _) => {
                return <Card data={element} key={element.id} />;
              })
            : [1, 2, 3].map((_, index) => {
                return (
                  <div className="w-full h-[200px] skeleton" key={index} />
                );
              })}
        </div>

        {/* Modal for creating new note  */}
        <dialog id="create_modal" className="modal ">
          <div className="overflow-hidden rounded-md modal-box bg-dark_blue">
            {/* Edit Input Form */}
            <EditInputForm fetchNoteData={fetchNoteData} />
          </div>
        </dialog>
      </section>
    </main>
  );
}
