import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/Login";
import IdentityLayout from "./layout/IdentityLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses, { coursesLoader } from "./pages/Courses";
import Admins from "./pages/Admins";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader
      },
      {
        path: 'admins',
        element: <Admins />
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