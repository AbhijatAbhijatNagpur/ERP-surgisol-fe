import React, { useState } from "react";
import { Employee } from "../Data/StatusOverview";
import { FaEye } from "react-icons/fa"; // Import the eye icon
import EmployeeListDetails from "../DashboardCompo/Model/EmployeeListDetails"; // Modal component to show employee details

function EmployeeList() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(Employee.length / itemsPerPage);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  // Handle showing the modal with employee details
  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  return (
    <>
      <div className="px-4 mt-3 pb-2">
        <div className="overflow-y-auto bg-white h-[400px] rounded-xl shadow-sm p-4 hide-scrollbar">
          <h1 className="mb-4 text-md px-4 text-slate-400">Employee List</h1>
          <hr />
          <table className="w-full">
            <thead className="border-b-[3px]">
              <tr className="text-left text-slate-500 text-sm">
                <th className="pl-3 py-2">Employee Name</th>
                <th className="py-2">Employee ID</th>
                <th className="py-2">Phone No</th>
                <th className="py-2">Joining Date</th>
                <th className="py-2">Designation</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {getPaginatedData().map((employee, index) => (
                <tr className="border-b" key={index}>
                  <td className="flex py-2 items-center">
                    {employee.profile}
                    <span className="mx-2">{employee.empName}</span>
                  </td>
                  <td className="py-2">{employee.empid}</td>
                  <td className="py-2">{employee.phone}</td>
                  <td className="py-2">{employee.joining}</td>
                  <td className="py-2">{employee.Designation}</td>
                  <td className="py-2">
                    <button
                      onClick={() => handleViewDetails(employee)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEye /> {/* Eye Icon */}
                    </button>
                  </td>
                </tr>
              ))}
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
                className="bg-slate-300 text-white px-1 rounded-full"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className="bg-slate-300 text-white px-1 rounded-full"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Employee Details */}
      {showModal && (
        <EmployeeListDetails
          employee={selectedEmployee}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default EmployeeList;
