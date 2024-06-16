import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/Login";
import IdentityLayout from "./layout/IdentityLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses from "./pages/Courses";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true
      }
    ]
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      }
    ]
  }
])

export default router;