import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminSingleUser from "./pages/AdminSingleUser";
import AdminNewUser from "./pages/AdminNewUser";
import AdminNews from "./pages/AdminNews";
import AdminSingleNew from "./pages/AdminSingleNew";
import Login from "./pages/Login";
import News from "./pages/News";
import SingleNew from "./pages/SingleNew";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
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
              children: [
                {
                  index: true,
                  element: <Admin></Admin>,
                },
                {
                  path: "users",
                  element: <AdminUsers></AdminUsers>,
                  children: [
                    {
                      path: ":id",
                      element: <AdminSingleUser></AdminSingleUser>,
                    },
                    {
                      path: "new",
                      element: <AdminNewUser></AdminNewUser>,
                    },
                  ],
                },
                {
                  path: "news",
                  element: <AdminNews></AdminNews>,
                  children: [
                    {
                      path: ":id",
                      element: <AdminSingleNew></AdminSingleNew>,
                    },
                  ],
                },
              ],
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
          children: [
            {
              path: ":id",
              element: <SingleNew></SingleNew>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
