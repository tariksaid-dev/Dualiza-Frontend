import { ThemeProviderContext } from '@/context/DarkModeContext'
import { getTextColorSpan, getTextColorTitle } from '@/utils/themeHelpers'
import React, { useContext } from 'react'
import Consumo from '@/components/ui/graphs/Consumo'
import Facturacion from '@/components/ui/graphs/Facturacion'

const ResultadoConsumosElectricos = () => {
  const { theme } = useContext(ThemeProviderContext)
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen   mb-20 md:mb-0">
      <div className="container grid items-center justify-center gap2 px-4 text-center md:px-6 lg:gap-10">
        <div className="flex flex-col gap-10 items-center justify-center py-8 md:py-0">
          <h3 className={`text-2xl font-bold tracking-tighter sm:text-3xl ${getTextColorTitle(theme)}`}>Consumos eléctricos</h3>
          <p className=" text-pretty md:text-xl/relaxed dark:text-gray-200">
            Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente.
          </p>
          <div className="aspect-auto w-full overflow-hidden rounded-lg flex justify-center items-center">
            <Consumo/>
          </div>

        </div>
        <div className="flex flex-col gap-8 items-center justify-center py-8 md:py-12">
          <p className="text-gray-500 text-pretty md:text-xl/relaxed dark:text-gray-200 ">
            El consumo medio mensual se estima en  <span className={`font-semibold ${getTextColorSpan(theme)}`}>11.123,75 kWh</span>, el coste medio mensual en <span className={`font-semibold ${getTextColorSpan(theme)}`}>1.728,369 €</span>  y la ratio económica del precio de la energía, teniendo en cuenta los datos anteriores, sería de  <span className={`font-semibold ${getTextColorSpan(theme)}`}>0,1553 €/kWh.</span>
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