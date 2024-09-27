import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function InputView() {
  const [designitaion, setDesignitaion] = React.useState("");

  const handleChange = (event) => {
    setDesignitaion(event.target.value);
  };
  return (
    <>
      <div className="flex space-x-6 items-center justify-center">
        <input
          type="text"
          className="rounded-md w-1/4 py-3 text-xl px-3"
          placeholder="Employee ID"
        />
        <input
          type="text"
          className="rounded-md py-3 w-1/4 text-xl px-3"
          placeholder="Employee Name"
        />
        <FormControl className="rounded-2xl" sx={{ m: 1, minWidth: 300 }}>
          <InputLabel className="" id="demo-simple-select-helper-label">
            Select Designation
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            className="bg-white rounded-full"
            value={designitaion}
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
        <button className="bg-green-300 rounded-xl w-1/6 py-3 text-xl px-10">
          Search
        </button>
      </div>
    </>
  );
}

export default InputView;
