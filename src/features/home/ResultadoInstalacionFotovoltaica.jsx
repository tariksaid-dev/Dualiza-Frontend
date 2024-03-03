import React from 'react'

const ResultadoInstalacionFotovoltaica = () => {
  return (
    <div className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 h-screen  ">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3 flex flex-col justify-center items-center gap-2 py-4">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-balance text-skin-orange-lanze">
            Planta fotovoltaica educativa "Albaytar" 1.380Wp.
          </h3>
          <p className="md:text-xl/relaxed dark:text-gray-200 text-sm ">
            3 ud panales solares JA Solar 460W JAM72S20 460/MR modulo monocristalino de 460W y 156 celulas(2x78),
            montada sobre estructura metalica con inclinacion de 15 grados y orientacion SUR , anclaje en peanas de
            hormigo. 1 Ud inversor riello Solartech RS 3.0 de 3kW. Protecciones electricas y cableado DC-AC.
            Monitorizacion remota: Enerclic Datalogger CC Master Combo PRO, Celulca Calibrada Atersa DATASOL MET para
            conocer la radiacion solar que incide y sonda de tempratura de las celulas de los paneles. Empresa
            instaladora Cabersaz S.L. 635629772 Puesta en marcha el 13 de septiembre de 2023
          </p>
          <div className="w-full overflow-hidden rounded-lg flex flex-col items-center py-10">
            <img
              alt="Solar Installation"
              className="object-cover"
              height={400}
              src="images/climatizacion.webp"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultadoInstalacionFotovoltaica