import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Notification() {
  return (
    <>
      {" "}
      <div className="absolute backdrop:blur-md space-y-3 right-10 top-12 w-[300px] bg-white shadow-xl transition ease-in-out duration-500 rounded-lg p-4 z-50">
        <div className="">
          <h1 className="flex justify-between px-3">
            <span className="font-bold">Notifications</span>
            <NavLink to="allnotification" className="flex items-center">
              See All <FaAngleDoubleRight className="mx-1 " />
            </NavLink>
          </h1>
        </div>
        <div>
          <h1 className="space-y-3 flex flex-col text-sm p-1 text-left">
            <span>
              {" "}
              New Message Received: Arpit Deshpande's birthday greeting has been
              successfully sent!
            </span>

            <span>
              Reminder: Anjali Mehta’s onboarding documents are due for
              submission today.
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Notification;
