import React, { useContext } from 'react'

import { ThemeProviderContext } from '@/context/DarkModeContext';
const widths = [450, 800];
const sizes = "(min-width: 640px) 42vw, 67vw";
function Splash() {
  const { theme } = useContext(ThemeProviderContext);


  const logoImagePath = theme === 'dark'
    ? "images/LOGOS_PROYECTO/Logo-negativo-(3).webp"
    : "images/LOGOS_PROYECTO/Logo-positivo-(1).webp";
  return (
    <section className="relative h-screen  max-w-7xl mx-auto ">
      <div id="splash-bg-fallback" className="absolute inset-0 hidden opacity-40">
      </div>
      <div className="relative grid h-full place-items-center sm:grid-cols-2">
        <h2 className="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end">
          <img className='md:size-64 text-white size-56' src={logoImagePath} alt="logo" />
          <div className="gradient-text text-center font-extrabold tracking-tighter text-8xl">
            <p className='gradient-text text-7xl md:text-8xl'> Dualiza
              <br /> proyecto
              <br /> Eco-Friendly!</p>
          </div>
        </h2>

        <div
          id="astronaut"
          className="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start"
        >

          <img src="images/reunion-hlanz.webp" alt="" />
        </div>
      </div>

    </section>
  )
}

export default Splash