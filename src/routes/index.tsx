import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Details from "../components/details/Details";
import Dashboard from "./dashboard/Dashboard";
import Create from "./dashboard/create/Create";
import Auth from "./auth/Auth";
import Login from "./auth/sign-in/SignIn";
import Register from "./auth/sign-up/SignUp";
import OtpVerified from "./auth/otp/Otp"

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/cars/:id",
      element: <Details />,
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "sign-up",
          element: <Register />,
        },
        {
          path: "sign-in",
          element: <Login />,
        },
        {
          path: "verify-otp",
          element: <OtpVerified email={""} />
        }
      ]
    },


  ]);
};

export default RouteController;
