import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/Login";
import IdentityLayout from "./layout/IdentityLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Courses, { coursesLoader } from "./pages/Courses";
import Admins from "./pages/Admins";
import CourseDetails, { courseDetailsLoader } from "./features/course/CourseDetails";

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
        path: 'course/:id',
        element: <CourseDetails />,
        loader: courseDetailsLoader
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