import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          element: (
            <ProtectedRoute
              isActive={true}
              redirectPath="/login"
            ></ProtectedRoute>
          ),
          children: [
            {
              path: "admin",
              element: <Admin></Admin>,
            },
          ],
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "news",
          element: <News></News>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
