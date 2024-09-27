import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
// Time
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function MeetingSchedul({ onClose }) {
  // date
  const [cleared, setCleared] = React.useState(false); // Corrected typing

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white h-[500px] w-[500px] space-y-3 rounded-lg shadow-lg">
          <div className="bg-meeting rounded-t-lg p-2 flex justify-between">
            <h1 className="text-black text-lg mx-3 font-semibold">
              Schedule New Meeting
            </h1>
            <button onClick={onClose} className=" text-3xl">
              <IoMdClose />
            </button>
          </div>

          <form className="space-y-4 p-2">
            {/* Meeting Title */}
            <div className="flex items-center">
              <label
                htmlFor="meeting-title"
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Meeting Title
              </label>
              <input
                type="text"
                id="meeting-title"
                placeholder="Project Kickoff"
                className="w-2/3 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date and Time */}
            <div className="flex items-center ">
              <label
                htmlFor="date-time"
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Date & Time
              </label>
              <div className="flex space-x-2 w-2/3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ width: "100%" }}>
                    <DemoItem>
                      <DesktopDatePicker
                        sx={{ width: "100%" }}
                        slotProps={{
                          field: {
                            clearable: true,
                            onClear: () => setCleared(true),
                          },
                        }}
                      />
                    </DemoItem>
                  </Box>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <TimePicker defaultValue={dayjs("2022-04-17T15:30")} />
                  </DemoItem>
                </LocalizationProvider>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center ">
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Meeting Location"
                className="w-2/3 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div className="flex items-center ">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter Address"
                className="w-2/3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="flex items-center ">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter Description"
                className="w-2/3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Reminder */}
            <div className="flex items-center ">
              <label
                htmlFor=""
                className="text-sm font-medium text-gray-700 w-1/4 mx-2"
              >
                Reminder
              </label>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Reminder
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={time}
                    label="Select Reminder"
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
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center space-x-9 ">
              <button
                type="button"
                className=" px-7 bg-red-100 border border-red-500 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" px-7 bg-green-300 border-[2px] border-green-400 text-black rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MeetingSchedul;
