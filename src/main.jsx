import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./component/Surgisol/Dashboard.jsx";
import AllNotification from "./component/Surgisol/DashboardCompo/AllNotification.jsx";
import CoreHR from "./component/Surgisol/CoreHR.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="allnotification" element={<AllNotification />} />
      <Route path="corehr" element={<CoreHR />} />
      {/* // <Route path="payroll" element={<Dashboard />} />
      // <Route path="attendance" element={<Dashboard />} />
      // <Route path="onboarding" element={<Dashboard />} />
      // <Route path="expense" element={<Dashboard />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
