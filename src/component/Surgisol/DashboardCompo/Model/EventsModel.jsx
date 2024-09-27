import React from "react";
import { CiEdit } from "react-icons/ci";

function EventsModel({ onClose }) {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white overflow-y-auto h-[500px] w-[500px] hide-scrollbar">
        <div className="bg-events flex justify-between p-5 px-6">
          <h1 className="text-xl font-bold">Add New Events</h1>

          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-blue-500"
          >
            X
          </button>
        </div>

        {/* Input */}
        <div className="p-12 space-y-4">
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Event Title:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Title]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Event Description:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Description]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>{" "}
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Event Date:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Date]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>{" "}
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Start Time:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Time]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>{" "}
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Location:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Location]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>{" "}
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Organizer:
            </label>
            <input
              type="text"
              placeholder="[Enter Organizer Name]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>{" "}
          <div className="space-x-3">
            <label htmlFor="" className="font-bold">
              Category:
            </label>
            <input
              type="text"
              placeholder="[Enter Event Category]"
              className="border-none border-b-2 outline-none outline- "
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#709EB1] px-3 py-1 rounded-xl">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EventsModel;
