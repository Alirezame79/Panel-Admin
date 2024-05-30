import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/Login";
import IdentityLayout from "./layout/IdentityLayout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

export default router;