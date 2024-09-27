import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const items = [
  { value: 10, label: "IT" },
  { id: "id_B", value: 15, label: "Marketing" },
  { id: "id_C", value: 20, label: "HR" },
  { id: "id_D", value: 5, label: "Finance" },
];

function PieChartCore() {
  return (
    <div className=" bg-white shadow-md flex flex-col h-[350px] w-[400px] p-4">
      {/* Heading */}
      <Typography variant="h6" component="div" className="mb-4 text-center">
        % of Employees in Different Departments
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <PieChart
          series={[
            {
              data: items,
            },
          ]}
          width={400}
          height={300}
          margin={{ right: 200 }}
        />
      </Stack>
    </div>
  );
}

export default PieChartCore;
