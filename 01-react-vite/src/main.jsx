import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import User from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import Target from "./pages/target.jsx";
import Plan from "./pages/plan.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/target",
    element: <Target />,
  },
  {
    path: "/plan",
    element: <Plan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
