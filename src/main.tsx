import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./utils/ErrorPage";
import Home from "./pages/Home";
import DashboardPage from "./pages/Ventures";
import AboutLibetras from "@/pages/About";
// import TradingPlatform from "./trading/TradingPlatform";
import SignalValidationPage from "./libertas/signal_page/page";
import Dashboard from "./libertas/admin_dashboard/Dashboard";
import TradingViewData from "./TradingViewData";
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
    path: "/ventures/:id",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/signal",
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
