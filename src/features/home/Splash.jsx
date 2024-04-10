import React from "react";

import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import { useNavigate } from "react-router-dom";
import Bombilla from "@/components/ui/3d/bombilla/Bombilla";
import { Button } from "@/components/ui/button";

function Splash() {
  const navigate = useNavigate();


  return (
    <section className="relative h-screen w-full mx-auto gradient-bg grid grid-cols-[60%,40%] grid-rows-1">
      <aside className="flex flex-col justify-center pl-52">
        <p
          className="text-center gradient-text text-7xl md:text-9xl font-bold tracking-[-0.3rem] pb-8"
          style={{ fontFamily: "Inter" }}
        >
          Dualiza
          <br /> proyecto
          <br /> eco friendly!
        </p>
        <p
          className="text-center text-2xl font-medium pb-4 "
          style={{ fontFamily: "Inter" }}
        >
          ¿Quieres saber más?
        </p>

        <div className="flex justify-center gap-8">
          <Button variant="default" onClick={() => navigate("/login")}>Login</Button>
          <Button variant="outline">Noticias</Button>
        </div>
      </aside>
      <aside className="h-full w-full flex justify-start relative">
        <Bombilla />
      </aside>
    </section>
  );
}

export default Splash;
