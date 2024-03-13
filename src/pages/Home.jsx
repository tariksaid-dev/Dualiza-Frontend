import React from "react";

import HomeLayout from "@/components/layouts/HomeLayout";
import DinamicHeader from "@/components/ui/DinamicHeader";
import Splash from "@/features/home/Splash";
import Showcase from "@/features/home/Showcase";
import LandingSection from "@/features/home/LandingSection";
import FooterSection from "@/features/home/FooterSection";
import ResultadoConsumosElectricos from "@/features/home/ResultadoConsumosElectricos";
import MejoraTuCentro from "@/features/home/MejoraTuCentro";

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
        <MejoraTuCentro />
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
