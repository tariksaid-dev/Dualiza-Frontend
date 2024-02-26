import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import DinamicHeader from "./components/ui/Footer";
import { ThemeProvider } from "./context/DarkModeContext";
import RoutePage from "./pages/RoutePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutePage></RoutePage>,
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
              path: "/admin",
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <DinamicHeader></DinamicHeader>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
