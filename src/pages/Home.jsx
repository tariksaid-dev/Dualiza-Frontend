import React from "react";

import HomeLayout from "@/components/layouts/HomeLayout";
import DinamicHeader from "@/components/ui/DinamicHeader";
import Splash from "@/features/home/Splash";
import Showcase from "@/features/home/Showcase";
import LandingSection from "@/features/home/LandingSection";

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
        <Showcase />
      </LandingSection>

      <LandingSection>
        <Showcase />
      </LandingSection>
    </HomeLayout>
  );
}

export default Home;
