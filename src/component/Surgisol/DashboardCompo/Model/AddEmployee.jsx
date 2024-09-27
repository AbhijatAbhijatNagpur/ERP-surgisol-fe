import React from "react";
import { CiEdit } from "react-icons/ci";

function AddEmployee({ onClose }) {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white overflow-y-auto h-[500px] w-[800px] hide-scrollbar">
        <div className="bg-events flex justify-between p-5 px-6">
          <h1 className="text-xl font-bold">Add New Employee</h1>

          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-blue-500"
          >
            X
          </button>
        </div>

        {/* Input */}
        <div className="px-7 py-4 space-y-2">
          <p className="mt-0">
            Please fill out the following details to add a new employee to the
            system
          </p>
          <hr />

          <form>
            {/* Employee Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="empId" className="font-medium">
                  Emp ID:
                </label>
                <input
                  type="text"
                  id="empId"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="employeeName" className="font-medium">
                  Employee Name:
                </label>
                <input
                  type="text"
                  id="employeeName"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="qualification" className="font-medium">
                  Qualification:
                </label>
                <div className="flex gap-2">
                  <label>
                    <input type="checkbox" /> SSC
                  </label>
                  <label>
                    <input type="checkbox" /> HSC
                  </label>
                  <label>
                    <input type="checkbox" /> UG
                  </label>
                  <label>
                    <input type="checkbox" /> PG
                  </label>
                  <label>
                    <input type="checkbox" /> PhD
                  </label>
                  <label>
                    <input type="checkbox" /> Diploma
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="grade" className="font-medium">
                  Grade:
                </label>
                <input
                  type="text"
                  id="grade"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="birthDate" className="font-medium">
                  Birth Date:
                </label>
                <input
                  type="date"
                  id="birthDate"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="maritalStatus" className="font-medium">
                  Marital Status:
                </label>
                <select
                  id="maritalStatus"
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="anniversaryDate" className="font-medium">
                  Anniversary Date:
                </label>
                <input
                  type="date"
                  id="anniversaryDate"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            {/* Contact Information */}
            <h3 className="text-lg font-semibold mt-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-medium">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="alternatePhone" className="font-medium">
                  Alternate Phone Number:
                </label>
                <input
                  type="tel"
                  id="alternatePhone"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="emergencyContact" className="font-medium">
                  Emergency Contact No.:
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="relationWithPerson" className="font-medium">
                  Relation with Emergency Contact:
                </label>
                <select
                  id="relationWithPerson"
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="parent">Parent</option>
                  <option value="spouse">Spouse</option>
                  <option value="sibling">Sibling</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="officialEmail" className="font-medium">
                  Official Email ID:
                </label>
                <input
                  type="email"
                  id="officialEmail"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="personalEmail" className="font-medium">
                  Personal Email ID:
                </label>
                <input
                  type="email"
                  id="personalEmail"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            {/* Job Information */}
            <h3 className="text-lg font-semibold mt-6">Job Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="department" className="font-medium">
                  Department:
                </label>
                <select
                  id="department"
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="jobTitle" className="font-medium">
                  Job Title:
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="salary" className="font-medium">
                  Salary:
                </label>
                <input
                  type="number"
                  id="salary"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startDate" className="font-medium">
                  Start Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            {/* Bank Details */}
            <h3 className="text-lg font-semibold mt-6">Bank Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="bankName" className="font-medium">
                  Bank Name:
                </label>
                <select
                  id="bankName"
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Bank</option>
                  <option value="HDFC">HDFC</option>
                  <option value="SBI">SBI</option>
                  <option value="ICICI">ICICI</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="branchName" className="font-medium">
                  Branch Name:
                </label>
                <input
                  type="text"
                  id="branchName"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="accountNumber" className="font-medium">
                  Account Number:
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="ifscCode" className="font-medium">
                  IFSC Code:
                </label>
                <input
                  type="text"
                  id="ifscCode"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
