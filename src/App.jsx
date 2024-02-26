import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import DinamicHeader from "./components/ui/Footer";
import { ThemeProvider } from "./context/DarkModeContext";
import RoutePage from "./pages/RoutePage";
import ProtectedRoute from "./utils/ProtectedRoute";

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

  return (
    <RouterProvider router={router}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayout>
          <DinamicHeader></DinamicHeader>
        </MainLayout>
      </ThemeProvider>
    </RouterProvider>
  );
}

export default App;
