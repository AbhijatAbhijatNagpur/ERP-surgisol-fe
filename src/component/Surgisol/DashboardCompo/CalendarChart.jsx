import React, { useState } from "react";
// Calendar
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import SquareIcon from "@mui/icons-material/Square";
import { IconButton } from "@mui/material"; // Import IconButton
import AddIcon from "@mui/icons-material/Add"; // Import AddIcon

// chart
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TuneIcon from "@mui/icons-material/Tune";

import Phamplet from "../Img/spacielPhamplet.png";
import MeetingSchedul from "./Model/MeetingSchedul";

function Calendar() {
  const data = [
    {
      name: "Sales",
      pv: 40,
      amt: 100,
    },
    {
      name: "IT",
      pv: 60,
      amt: 100,
    },
    {
      name: "Marketing",
      pv: 86,
      amt: 100,
    },
    {
      name: "Legal",
      pv: 60,
      amt: 100,
    },
    {
      name: "API",
      pv: 40,
      amt: 100,
    },
  ];

  // Calendar

  function CustomDay(props) {
    const { day, outsideCurrentMonth, ...other } = props;
    const isWeekend = day.day() === 0 || day.day() === 6; // Sunday = 0, Saturday = 6
    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        sx={{
          color: isWeekend ? "red" : "inherit", // Apply red color for weekends
        }}
      />
    );
  }
  // calendar buttons
  function CustomCalendarHeader(props) {
    const { currentMonth, onMonthChange } = props;
    return (
      <div className="flex items-center justify-between">
        <IconButton
          onClick={() =>
            onMonthChange(dayjs(currentMonth).subtract(1, "month"))
          }
        >
          {"<"} {/* Left arrow */}
        </IconButton>

        <h6 className="text-lg font-semibold">
          {dayjs(currentMonth).format("MMMM YYYY")}
        </h6>

        {/* Plus button */}
        <IconButton className="mx-2 ">
          <AddIcon
            onClick={() => setShowMeeting(true)}
            className=" border-[2px] border-sky-400 rounded-full hover:bg-blue-400 hover:text-white"
          />
        </IconButton>

        <IconButton
          onClick={() => onMonthChange(dayjs(currentMonth).add(1, "month"))}
        >
          {">"} {/* Right arrow */}
        </IconButton>
      </div>
    );
  }
  const [showMeeting, setShowMeeting] = useState(false);

  return (
    <>
      <div className=" flex mb-2 px-7 mt-4 space-x-14">
        {/*Calendar  */}
        <div className="bg-white ml-3 shadow-md shadow-slate-300 flex flex-col items-center w-[400px] h-[340px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              showDaysOutsideCurrentMonth
              fixedWeekNumber={1}
              views={["year", "month", "day"]}
              slots={{
                day: CustomDay, // Custom day rendering for the calendar
                calendarHeader: CustomCalendarHeader, // Custom header with plus button
              }}
            />
          </LocalizationProvider>
          <p className="flex space-x-4 text-xs pb-2">
            <span>
              <SquareIcon fontSize="2px" className="text-red-600" /> Govt
              Holiday
            </span>
            <span>
              <SquareIcon fontSize="2px" className="text-blue-600" /> Leave
            </span>
            <span>
              <SquareIcon fontSize="2px" className="text-[#A69F00]" /> Meetings
            </span>
          </p>
          {showMeeting && (
            <MeetingSchedul onClose={() => setShowMeeting(false)} />
          )}
        </div>

        {/* chart */}
        <div className="w-[400px] h-[320px] bg-white">
          <div className="flex justify-between px-3">
            <p>Weekly Attendance </p>
            <button>
              <TuneIcon />
            </button>
          </div>
          <ResponsiveContainer
            width="100%"
            height="100%"
            Title=""
            className="p-2 bg-white"
          >
            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis
                dataKey="name"
                tick={{ angle: -45, dy: 10, fontSize: "12px" }}
              />
              <YAxis
                domain={[0, 100]} // Setting Y-axis range to 0-100 for percentage
                tickFormatter={(tick) => `${tick}%`} // Formatting ticks to show percentages
              />
              <Tooltip formatter={(value) => `${value}%`} />{" "}
              {/* Tooltip shows percentage */}
              <Bar
                dataKey="pv"
                fill="blue"
                barSize={30}
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Phamplet */}
        <div className="">
          <img
            src={Phamplet}
            alt=""
            className=" w-[400px] h-[340px] shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default Calendar;
