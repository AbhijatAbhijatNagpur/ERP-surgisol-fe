import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import AddEmployee from "../DashboardCompo/Model/AddEmployee";

function WelcomeCore() {
  const [addEmp, setAddEmp] = useState(false);
  return (
    <div className="flex bg-white rounded-2xl shadow-sm shadow-white mx-5 p-5 space-x-5">
      <h1 className="flex flex-col font-bold text-2xl">
        Employee Information System{" "}
        <span className="font-semibold">Hi, Welcome ABC!</span>
      </h1>{" "}
      <Link className="bg-gray-400 flex items-center rounded-3xl text-white font-semibold px-1">
        <CiCirclePlus
          onClick={() => setAddEmp(true)}
          className="mx-1 font-bold text-xl"
        />
        Add Employee
      </Link>
      {addEmp && <AddEmployee onClose={() => setAddEmp(false)} />}
    </div>
  );
}

export default WelcomeCore;
