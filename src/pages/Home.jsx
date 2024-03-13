import React from "react";

import HomeLayout from "@/components/layouts/HomeLayout";
import DinamicHeader from "@/components/ui/DinamicHeader";
import Splash from "@/features/home/Splash";
import Showcase from "@/features/home/Showcase";
import LandingSection from "@/features/home/LandingSection";
import FooterEmpresas from "@/features/home/Footer";
import Contacto from "@/features/home/Contacto";
import FooterSection from "@/features/home/FooterSection";
import ResultadoConsumosElectricos from "@/features/home/ResultadoConsumosElectricos";

function Home() {
  return (
    <HomeLayout>
      <DinamicHeader />
      <LandingSection>
        <Splash />
      </LandingSection>

      <LandingSection>
        <Showcase />
      </LandingSection>

      <LandingSection>
        <ResultadoConsumosElectricos />
      </LandingSection>

      <LandingSection>
        <FooterSection />
      </LandingSection>
    </HomeLayout>
  );
}

export default Home;
