import Consumo from '@/components/ui/graphs/Consumo'
import Facturacion from '@/components/ui/graphs/Facturacion'
import React from 'react'

const ResultadoConsumosElectricos = () => {
  return (
    <div className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 h-screen">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Consumos eléctricos</h3>
          <p className="text-gray-500 text-pretty md:text-xl/relaxed dark:text-gray-400">
            Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente.
          </p>
          <div className="aspect-auto w-full overflow-hidden rounded-lg flex justify-center items-center">
            <Consumo/>
          </div>

        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-gray-500 text-pretty md:text-xl/relaxed dark:text-gray-400 ">
            El consumo medio mensual se estima en  <span className='font-semibold text-orange-500'>11.123,75 kWh</span>, el coste medio mensual en <span className='font-semibold text-orange-500'>1.728,369 €</span>  y la ratio económica del precio de la energía, teniendo en cuenta los datos anteriores, sería de  <span className='font-semibold text-orange-500'>0,1553 €/kWh.</span>
          </p>

          <div className="aspect-auto w-1/2 overflow-hidden rounded-lg flex justify-center items-center m-2 md:mb-20">
            <Facturacion/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResultadoConsumosElectricos