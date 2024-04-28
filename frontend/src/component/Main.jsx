import React, { useState } from "react";
import Card from "./Card";
import { FaPlus } from "react-icons/fa6";
import EditInputForm from "./EditInputForm";

export default function Main() {
  return (
    <main className="bg-light_blue py-[30px] ">
      <section className="container ">
        {/* Header */}
        <div className="flex items-center justify-between header">
          <h1 className="text-content_color text-[25px] font-medium leading-none">
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Modal for creating new note  */}
        <dialog id="create_modal" className="modal ">
          <div className="overflow-hidden rounded-md modal-box bg-dark_blue">
           
            {/* Edit Input Form */}
            <EditInputForm />
          </div>
        </dialog>
      </section>
    </main>
  );
}
