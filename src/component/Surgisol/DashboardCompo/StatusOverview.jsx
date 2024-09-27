import React, { useState } from "react";
import { Employee } from "../Data/StatusOverview";
function StatusOverview() {
  // Status overview

  // Number of items per page
  const itemsPerPage = 5;

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(Employee.length / itemsPerPage);

  // Function to get employees for the current page
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Employee.slice(startIndex, endIndex);
  };

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      {" "}
      <div className="px-4 mt-3 pb-2">
        <div className="overflow-y-auto bg-white h-[200px] rounded-xl shadow-sm p-4 hide-scrollbar">
          <h1 className="mb-4 text-md px-4 text-slate-400">
            Employee Status Overview
          </h1>
          <hr />
          <table className="w-full">
            <thead className="border-b-[3px]">
              <tr className="text-left text-slate-500 text-sm">
                <th className="pl-3 py-2">Employee Name</th>
                <th className="py-2">Department</th>
                <th className="py-2">Active Project</th>
                <th className="py-2">Upcoming Leaves</th>
                <th className="py-2">Status</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>

            <tbody>
              {getPaginatedData().map(
                ({
                  profile,
                  empName,
                  department,
                  ActProj,
                  UpcProj,
                  Status,
                  Notes,
                }) => (
                  <tr className="border-b" key={empName}>
                    <td className="flex py-2 items-center">
                      {profile}
                      <span className="mx-2">{empName}</span>
                    </td>
                    <td className="py-2">{department}</td>
                    <td className="py-2">{ActProj}</td>
                    <td className="py-2">{UpcProj}</td>
                    <td className="py-2">{Status}</td>
                    <td className="py-2">{Notes}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <div className="space-x-2">
              <button
                className=" bg-slate-300 text-white px-1 rounded-full"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className=" bg-slate-300 text-white px-1 rounded-full"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusOverview;
