import React from 'react'
import Consumo from '@/components/ui/graphs/Consumo'
import Facturacion from '@/components/ui/graphs/Facturacion'

const ResultadoConsumosElectricos = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center h-full   mb-20 md:mb-0">
      <div className="container grid items-center justify-center gap2 px-4 text-center md:px-6 lg:gap-10">
        <div className="flex flex-col gap-10 items-center justify-center py-8 md:py-0">
          <h2 className="gradient-text text-center font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-primary">Consumos eléctricos</h2>
          <p className=" text-pretty text-2xl text-foreground">
            Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente.
          </p>
          <p className="text-pretty text-2xl text-foreground px-4">
            El consumo medio mensual se estima en  <span className="font-semibold text-primary">11.123,75 kWh</span>, el coste medio mensual en <span className="font-semibold text-primary">1.728,369 €</span>  y la ratio económica del precio de la energía, teniendo en cuenta los datos anteriores, sería de  <span className="font-semibold text-primary">0,1553 €/kWh.</span>
          </p>
          <div className="aspect-auto w-5/6 overflow-hidden rounded-lg flex justify-center items-center lg:flex-row">
            <Consumo />
            <Facturacion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultadoConsumosElectricos