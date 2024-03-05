import HomeLayout from "@/components/layouts/HomeLayout";
import DinamicHeader from "@/components/ui/DinamicHeader";
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

function Home() {
  return (
    <HomeLayout>
      <DinamicHeader />
      <Splash />
      <div className="space-y-24 px-8 py-32">
        <Showcase />
        <ResultadoConsumosElectricos />
        <ResultadoInstalacionClimatizacion />
        <Contacto2 />
      </div>
    </HomeLayout>
  );
}

export default Home;
