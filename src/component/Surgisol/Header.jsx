import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProfileHR from "../Surgisol/Img/profile hr.svg";
import Notification from "./DashboardCompo/Model/Notification"; // Import the notification component
function Header({ openside }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Function to toggle notification modal visibility
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav
        className="fixed w-full text-center justify-between items-center flex bg-white shadow-md
       py-3 shadow-slate-500 text-slate-400"
      >
        <div className=" ml-64 space-x-2">
          <MenuOutlinedIcon onClick={openside} className="mx-4" />
          <span className=" border-slate-400 border-[1px] p-2 rounded-full">
            <input
              type="text"
              placeholder="Search for anything..."
              className="rounded-full w-52 bg-transparent outline-none px-2"
            />
            <SearchOutlinedIcon />
          </span>
        </div>
        <div className="flex space-x-5 mr-6">
          <span className="space-x-4 py-1 flex">
            <ForumOutlinedIcon className="text-slate-600" />

            <span class="relative flex h-3 w-3">
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

              <NotificationsActiveOutlinedIcon
                className="text-slate-600 cursor-pointer"
                onClick={toggleNotification} // Trigger notification popup
              />
              <span class="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-100"></span>
            </span>
          </span>
          <span className="text-sm flex items-center">
            <img src={ProfileHR} alt="" className="h-6 w-6 bg-white mr-2" />
            HR
          </span>
        </div>
      </nav>

      {/* Notification Modal */}
      {isNotificationOpen && <Notification />}
    </>
  );
}

export default Header;
