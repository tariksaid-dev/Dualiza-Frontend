import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import NewsDetails from "./pages/NewsDetails";

import { ThemeProvider } from "@/context/DarkModeContext";
import CreateNew from "./features/admin-panel/CreateNew";
import EditNew from "./features/admin-panel/EditNew";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            {/* <Route
              path="admin"
              element={
                <ProtectedRoute redirectPath="login">
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="admin/createNew" element={<CreateNew />} />
            </Route> */}
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/createNew" element={<CreateNew />} />
            <Route path="admin/edit/:NewId" element={<EditNew />} />
            <Route path="news" element={<News />} />
            <Route path="news/:NewId" element={<NewsDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
