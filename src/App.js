import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Orders from "./Component/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/orders",
          element: (
            <ProtectedRoutes>
              <Orders></Orders>
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
