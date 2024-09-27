import React from "react";

function EmployeeListDetails({ employee, onClose }) {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white overflow-y-auto h-[400px] w-[500px] hide-scrollbar">
        {/* Profile */}

        <div className="flex p-4 space-x-4 justify-between items-center bg-Employee">
          <div className="flex space-x-4">
            {employee.profile}
            <h1 className="flex flex-col">
              <strong>{employee.empName}</strong>
              <span className="text-sm">{employee.Designation}</span>
              <span className="text-sm">{employee.eml}</span>
            </h1>
          </div>
          <div className="place-self-top">
            <button
              onClick={onClose}
              className="bg-blue-600 font-bold hover:text-red-500 p-2 rounded-xl px-4 text-white"
            >
              Close
            </button>
          </div>
        </div>

        {/* Data */}
        <div className="p-5">
          <h2 className="flex justify-between px-5 font-bold">
            <span>Field</span>
            <span>Details</span>
          </h2>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>Employee ID</span>
            <span>{employee.empid}</span>
          </h1>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>Company</span>
            <span></span>
          </h1>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>Employee Name</span>
            <span>{employee.empName}</span>
          </h1>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>Phone Number</span>
            <span>{employee.phone}</span>
          </h1>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>department</span>
            <span>{employee.department}</span>
          </h1>
          <hr />
          <h1 className="flex justify-between px-5 py-4">
            <span>Joining</span>
            <span>{employee.joining}</span>
          </h1>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default EmployeeListDetails;
