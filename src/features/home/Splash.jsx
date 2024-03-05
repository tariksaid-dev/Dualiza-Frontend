import React from "react";
import Bombilla from "@/components/ui/3d/bombilla/Bombilla";

function Splash() {
  return (
    <section className="relative h-screen w-full mx-auto pb-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen gradient-bg"></div>
      <div className="relative grid h-full place-items-center sm:grid-cols-2">
        <h2 className="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end pb-48">
          <div className="gradient-text text-center font-extrabold tracking-tighter text-8xl">
            <p className="gradient-text text-7xl md:text-8xl">
              Dualiza
              <br /> proyecto
              <br /> Eco-Friendly!
            </p>
          </div>
        </h2>
        <div className="w-2/3 max-w-3xl ml-[-120px] self-start pb-16 sm:w-10/12 sm:self-auto sm:justify-self-start">
          <Bombilla />
        </div>
      </div>
    </section>
  );
}

export default Splash;
