import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { EventData } from "../Data/Eventsdata";
import EventsModel from "../DashboardCompo/Model/EventsModel";

function Events() {
  const [openevent, setOpenevent] = useState(false);
  return (
    <>
      {" "}
      <div className="overflow-y-auto w-[400px] bg-[#F6F6F6] h-[350px] rounded-xl shadow-md hide-scrollbar">
        <div className="flex p-5 justify-between bg-[#CAD2FF8A]">
          <h1 className="flex text-xl items-center">
            Events{" "}
            <CiCirclePlus
              onClick={() => setOpenevent(true)}
              className="mx-1 font-bold hover:text-red-500 cursor-pointer text-xl"
            />
          </h1>
          {openevent && <EventsModel onClose={() => setOpenevent(false)} />}

          <button className="flex items-center hover:text-green-400">
            See all <FaArrowRight className="mx-1 cursor-pointer " />
          </button>
        </div>
        <div>
          <ul className="p-5 space-y-3">
            {EventData.map(({ events, time }) => (
              <li className="flex space-x-1 items-center justify-between">
                <h1 className="text-center w-[300px]">{events}</h1>
                <h1 className=""> {time}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Events;
