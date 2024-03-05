import React, { useContext } from 'react'
import Bombilla from '@/components/ui/3d/bombilla/Bombilla';

function Splash() {

  return (
    <section className="relative h-screen  mx-auto pb-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen gradient-bg"></div>
      <div id="splash-bg-fallback" className="absolute inset-0 hidden opacity-40">
      </div>
      <div className="relative grid h-full place-items-center sm:grid-cols-2">
        <h2 className="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end">
          <div className="gradient-text text-center font-extrabold tracking-tighter text-8xl">
            <p className='gradient-text text-7xl md:text-8xl'> Dualiza
              <br /> proyecto
              <br /> Eco-Friendly!</p>
          </div>
        </h2>

          <div id='bombilla' className='hidden sm:flex'>
          <Bombilla />
          </div>

      </div>

    </section>
  )
}

export default Splash