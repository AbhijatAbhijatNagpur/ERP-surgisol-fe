import React, { useEffect, useState } from "react";
import ViewBoard from "./DashboardCompo/ViewBoard";
import Calendar from "./DashboardCompo/CalendarChart";
import StatusOverview from "./DashboardCompo/StatusOverview";
import WelcomeCountry from "./DashboardCompo/WelcomeCountry";
import Header from "./Header";
function Dashboard() {
  // Main return
  return (
    <>
      <div className="w-full bg-[#E5E4E0] h-full">
        <div className="ml-64">
          {/* first boxes hello and country */}
          <WelcomeCountry />

          {/* Second boxes */}
          <ViewBoard />

          {/* Calendar and charts */}
          <Calendar />

          {/* Staus Overview stacked list */}
          <StatusOverview />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
