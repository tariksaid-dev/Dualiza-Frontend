import MainLayout from "@/components/layouts/MainLayout";
import DinamicHeader from "@/components/ui/Footer";
import { ThemeProvider } from "@/context/DarkModeContext";
import Contacto2 from "@/features/home/Contacto2";
import FooterEmpresas from "@/features/home/FooterEmpresas";
import MejoraTuCentro from "@/features/home/MejoraTuCentro";
import Proyecto from "@/features/home/Proyecto";
import ResultadoConsumosElectricos from "@/features/home/ResultadoConsumosElectricos";
import ResultadoInstalacionClimatizacion from "@/features/home/ResultadoInstalacionClimatizacion";
import ResultadoInstalacionFotovoltaica from "@/features/home/ResultadoInstalacionFotovoltaica";
import Showcase from "@/features/home/Showcase";
import Splash from "@/features/home/Splash";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet></Outlet>
        <DinamicHeader />
        <Splash />
        <Proyecto />
        <ResultadoInstalacionFotovoltaica />
        <ResultadoConsumosElectricos />
        <ResultadoInstalacionClimatizacion />
        <MejoraTuCentro />
        <Showcase />
        <Contacto2 />
        <FooterEmpresas />
      </ThemeProvider>
    </>
  );
};

export default Home;
