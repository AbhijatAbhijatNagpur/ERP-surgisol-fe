import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Surgisol/Header";
import SideBar from "./component/Surgisol/SideBar";
import Admin from "./component/Login/Admin";
import CandidateLogin from "./component/Login/CandidateLogin";
import Sales from "./component/Login/Sales";
import SuperAdmin from "./component/Login/SuperAdmin";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      {sidebar && <SideBar />}
      <Header openside={() => setSidebar(!sidebar)} />
      <Outlet />
      {/* <Admin /> */}
      {/* <CandidateLogin /> */}
      {/* <Sales /> */}
      {/* <SuperAdmin /> */}
    </>
  );
}

export default App;
