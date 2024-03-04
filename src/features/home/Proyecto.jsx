import { ThemeProviderContext } from '@/context/DarkModeContext'
import { getLogoCaixaBank, getLogoFpEmpresa, getLogoHlanz, getLogoVirgenGracia } from '@/utils/themeHelpers'
import React, { useContext } from 'react'

const Proyecto = () => {
  const { theme } = useContext(ThemeProviderContext)

  return (
    <section id='proyecto' className='h-full relative flex flex-col items-center pt-16justify-center max-w-7xl mx-auto'>
      <div className="flex flex-col items-center space-y-2 p-12 m-10 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Proyecto</h1>
        <p className="text-pretty text-xs sm:text-base">Espacio para la descripción del proyecto y sus objetivos.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-7xl py-10">
        <div className="flex flex-col justify-center items-center gap-4 px-6">
          <p className='text-pretty text-sm  md:text-xl/relaxed text-foreground '>
            El proyecto <span className="text-destructive font-bold">DUALIZA</span> tiene como objetivo exponer las buenas prácticas para mejorar la eficiencia energética
            en los centros educativos.
          </p>
          <p className='text-pretty text-sm md:text-base text-foreground'>
            Los objetivos del proyecto son sensibilizar a la comunidad educativa sobre el uso eficiente de la energía,
            fomentar la implementación de medidas de ahorro energético en los centros escolares y proporcionar recursos
            y herramientas para la integración de la educación energética en el currículo escolar.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 py-10">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-xl font-bold text-balance text-center text-destructive">Institutos Participantes</h4>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">

              <a href="https://www.ieshlanz.es/" target='_blank' rel='noopener noreferrer'><img className='size-24 md:size-32 lg:size-48' src={getLogoHlanz(theme)} alt="" /></a>

            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">

              <a href="https://albaytar.es/" target='_blank' rel='noopener noreferrer'><img className='size-24 md:size-32 lg:size-48' src="images/IES_ALBAYTAR/albaytar-logo.svg" alt="" /></a>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">

              <a href="https://cifpvirgendegracia.com/" target='_blank' rel='noopener noreferrer'> <img className='size-24 md:size-32 lg:size-48' src={getLogoVirgenGracia(theme)} alt="" /></a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <h4 className="text-xl font-bold text-balance text-center text-destructive">Empresas colaboradoras</h4>
            <div className="mx-auto flex w-full items-center justify-center  sm:p-8">
              <a href="https://www.caixabankdualiza.es/" target='_blank' rel='noopener noreferrer'><img className='w-36 md:w-40 lg:w-52' src={getLogoCaixaBank(theme)} alt="" /></a>
            </div>
            <div className="mx-auto flex w-full items-center justify-center sm:p-8">
              <a href="https://fpempresa.net/" target='_blank' rel='noopener noreferrer'><img className='w-36 md:w-40 lg:w-52' src={getLogoFpEmpresa(theme)} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyecto