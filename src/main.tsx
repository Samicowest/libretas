import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./utils/ErrorPage";

const Home = React.lazy(() => import("./pages/Home"));
const AboutLibetras = React.lazy(() => import("@/pages/About"));
const LoginForm = React.lazy(() => import("./libertas/LoginForm"));
const RegistrationForm = React.lazy(() => import("./libertas/Registration"));
const DashboardPage = React.lazy(() => import("./pages/Ventures"));
const ProjectFormOrig = React.lazy(
  () => import("./pages/Ventures/venture_form/ProjectFormOrig")
);
const SignalValidationPage = React.lazy(
  () => import("./libertas/signal_page/page")
);
const Dashboard = React.lazy(() => import("./libertas/user/Dashboard"));
const TradingViewData = React.lazy(() => import("./TradingViewData"));
const CreateSignal = React.lazy(() => import("./libertas/CreateSignal"));
const AdminLayout = React.lazy(() => import("./libertas/admin/AdminLayout"));
const AdminSignals = React.lazy(() => import("./libertas/admin/AdminSignals"));
const AdminAnalyst = React.lazy(() => import("./libertas/admin/AdminAnalyst"));
const SignalList = React.lazy(() => import("./libertas/admin/SignalList"));
const TradingHistory = React.lazy(
  () => import("./libertas/admin/TradingHistory")
);
import LoadingSpinner from "./components/LoadingSpinner";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />
          </React.Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AboutLibetras />
          </React.Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <LoginForm />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <RegistrationForm />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/ventures/:id",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <DashboardPage />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/createventure/:id",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <ProjectFormOrig />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signal/:id",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <SignalValidationPage />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/trading",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/viewTrade",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <TradingViewData />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <CreateSignal />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <AdminLayout />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AdminSignals />
          </React.Suspense>
        ),
      },
      {
        path: "analyst",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AdminAnalyst />
          </React.Suspense>
        ),
      },
      {
        path: "listsignal",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <SignalList />
          </React.Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <TradingHistory />
          </React.Suspense>
        ),
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
