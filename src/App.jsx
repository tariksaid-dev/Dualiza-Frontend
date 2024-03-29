import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import ErrorPage from "./pages/ErrorPage";

import { ThemeProvider } from "@/context/DarkModeContext";
import { Toaster } from "./components/ui/sonner";

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
            <Route
              path="admin"
              element={
                <ProtectedRoute redirectPath="login">
                  <Admin />
                </ProtectedRoute>
              }
            ></Route>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="news/:NewId" element={<NewsDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster closeButton={true} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
