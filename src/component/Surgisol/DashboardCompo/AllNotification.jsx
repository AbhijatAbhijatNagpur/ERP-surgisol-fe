import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AllNotify } from "../Data/AllNotificationData"; // Importing your data

function AllNotification() {
  const [noti, setNoti] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const itemsPerPage = 7; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(AllNotify.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get current items based on the current page
  const currentItems = AllNotify.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChange = (event) => {
    setNoti(event.target.value);
  };

  return (
    <>
      <div className="w-full bg-[#E5E4E0] h-screen">
        <div className="ml-64 p-20 space-y-10">
          {/* first box */}
          <div className="flex bg-white px-2 py-3 items-center justify-between rounded-xl shadow-md">
            <h1 className="text-3xl font-bold">All Notifications</h1>
            <FormControl sx={{ m: 1, minWidth: 400 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select Reminder
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={noti}
                label="Select Notification"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={5}>5 Min Before</MenuItem>
                <MenuItem value={10}>10 Min Before</MenuItem>
                <MenuItem value={15}>15 Min Before</MenuItem>
                <MenuItem value={20}>20 Min Before</MenuItem>
                <MenuItem value={25}>25 Min Before</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* second box with pagination */}
          <div className="flex flex-col bg-white py-5 px-5 rounded-xl shadow-md">
            <div>
              <ul>
                {currentItems.map(({ noti }, index) => (
                  <li key={index} className="flex space-x-2 my-4">
                    <h1>
                      [Date] - <span>{noti}</span>{" "}
                    </h1>
                    <button className="bg-[#709EB1] text-white p-1 text-sm rounded-md">
                      Action
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" space-x-3">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
                className="bg-gray-200 text-black p-2 text-xs rounded-xl"
              >
                Previous
              </button>
              <span className="text-md font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
                className="bg-gray-200 text-black p-2 text-xs rounded-xl"
              >
                Next
              </button>
            </div>
          </div>

          {/* Pagination controls */}
        </div>
      </div>
    </>
  );
}

export default AllNotification;
