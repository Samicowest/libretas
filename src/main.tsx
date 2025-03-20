import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./utils/ErrorPage";
import Home from "./pages/Home";
import DashboardPage from "./pages/Ventures";
import AboutLibetras from "@/pages/About";
import SignalValidationPage from "./libertas/signal_page/page";
import Dashboard from "./libertas/admin_dashboard/Dashboard";
import TradingViewData from "./TradingViewData";
import AdminLayout from "./libertas/admin/AdminLayout";
import AdminSignals from "./libertas/admin/AdminSignals";
import AdminAnalyst from "./libertas/admin/AdminAnalyst";
import SignalList from "./libertas/admin/SignalList";
import CreateSignal from "./libertas/CreateSignal";
import LoginForm from "./libertas/LoginForm";
import RegistrationForm from "./libertas/Registration";
import TradingHistory from "./libertas/admin/TradingHistory";
import ProjectFormOrig from "./pages/Ventures/venture_form/ProjectFormOrig";
export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutLibetras />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ventures/:id",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/createventure/:id",
    element: <ProjectFormOrig />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signal/:id",
    element: <SignalValidationPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trading",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/viewTrade",
    element: <TradingViewData />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreateSignal />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminSignals />,
      },
      {
        path: "analyst",
        element: <AdminAnalyst />,
      },
      {
        path: "listsignal",
        element: <SignalList />,
      },
      {
        path: "history",
        element: <TradingHistory />,
      },
    ],
  },
  // Catch-all route for unmatched paths
  {
    path: "*",
    element: <ErrorPage />, // Render the ErrorPage for unmatched routes
  },
]);
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
