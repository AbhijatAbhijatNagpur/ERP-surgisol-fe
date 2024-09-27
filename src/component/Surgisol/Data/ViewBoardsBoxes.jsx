import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
const ViewBoardBoxes = [
  {
    Title: "Total Employees ",
    Percentage: (
      <p className="mx-2 bg-green-300 text-green-600 rounded-full text-sm px-1">
        <TrendingUpOutlinedIcon className="text-xs" /> 10.0%
      </p>
    ),
    Total: "856",
    bottomTitle: "Employee",
  },
  {
    Title: "Job View ",
    Percentage: (
      <p className="mx-2 bg-green-300 text-green-600 rounded-full text-sm px-1">
        <TrendingUpOutlinedIcon className="text-xs" /> 22.0%
      </p>
    ),
    Total: "3,342",
    bottomTitle: "Viewers",
  },
  {
    Title: "Job Applied ",
    Percentage: (
      <p className="mx-2 bg-green-300 text-green-600 rounded-full text-sm px-1">
        <TrendingUpOutlinedIcon className="text-xs" /> 12.0%
      </p>
    ),
    Total: "77",
    bottomTitle: "Applicants",
  },
  {
    Title: "Resigned Employees ",
    Percentage: (
      <p className="mx-2 bg-red-300 text-red-600 rounded-full text-sm px-1">
        <TrendingDownOutlinedIcon className="text-xs" /> 7.0%
      </p>
    ),
    Total: "17",
    bottomTitle: "Employee",
  },
];

export { ViewBoardBoxes };
