import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Feed } from "./pages/Feed";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { Welcome } from "./pages/Welcome";
import { MyPets } from "./pages/MyPets";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/my-pets",
        element: <MyPets />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
