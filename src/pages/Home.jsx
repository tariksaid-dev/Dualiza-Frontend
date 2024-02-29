import MainLayout from "@/components/layouts/MainLayout";
import DinamicHeader from "@/components/ui/Footer";
import { ThemeProvider } from "@/context/DarkModeContext";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayout>
          <DinamicHeader></DinamicHeader>
        </MainLayout>
        <Outlet></Outlet>
      </ThemeProvider>
    </>
  );
};

export default Home;
