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
            },
            {
              path: "admin/users",
              element: <AdminUsers></AdminUsers>,
            },
            {
              path: "admin/users/:id",
              element: <AdminSingleUser></AdminSingleUser>,
            },
            {
              path: "admin/users/new",
              element: <AdminNewUser></AdminNewUser>,
            },
            {
              path: "admin/news",
              element: <AdminNews></AdminNews>,
            },
            {
              path: "admin/news/:id",
              element: <AdminSingleNew></AdminSingleNew>,
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
        {
          path: "news/:id",
          element: <SingleNew></SingleNew>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
