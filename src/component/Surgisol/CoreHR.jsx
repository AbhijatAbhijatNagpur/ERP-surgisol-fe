import React from "react";
import WelcomeCore from "./CoreHRComponent/WelcomeCore";
import ViewBoard from "./DashboardCompo/ViewBoard";
import InputView from "./CoreHRComponent/InputView";
import Hearchy from "./CoreHRComponent/Hearchy";
import PieChartCore from "./CoreHRComponent/PieChartCore";
import Events from "./CoreHRComponent/Events";
import EmployeeList from "./CoreHRComponent/EmployeeList";

function CoreHR() {
  return (
    <>
      <div className="w-full bg-[#E5E4E0] h-full">
        <div className="ml-64 space-y-3 py-16">
          <WelcomeCore />
          <ViewBoard />
          <InputView />
          <div className="flex p-2 px-4 space-x-4">
            <Hearchy />
            <PieChartCore />
            <Events />
          </div>
          <EmployeeList />
        </div>
      </div>
    </>
  );
}

export default CoreHR;
