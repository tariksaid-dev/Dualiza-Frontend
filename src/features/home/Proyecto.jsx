import React from 'react'

const Proyecto = () => {
  return (
    <section id='proyecto' className='h-screen relative flex flex-col items-center pt-16 justify-center max-w-7xl mx-auto'>
      <div className="flex flex-col items-center space-y-2 p-12 m-10 ">
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-skin-orange-lanze'>Proyecto</h1>
        <p className='text-pretty text-xs sm:text-base'>Espacio para la descripción del proyecto y sus objetivos.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-7xl py-10">
        <div className="flex flex-col justify-center items-center gap-4 px-6">
          <p className='text-pretty text-sm  md:text-xl/relaxed'>
            El proyecto <span className='text-destructive font-bold'>DUALIZA</span> tiene como objetivo exponer las buenas prácticas para mejorar la eficiencia energética
            en los centros educativos.
          </p>
          <p className='text-pretty text-sm md:text-base'>
            Los objetivos del proyecto son sensibilizar a la comunidad educativa sobre el uso eficiente de la energía,
            fomentar la implementación de medidas de ahorro energético en los centros escolares y proporcionar recursos
            y herramientas para la integración de la educación energética en el currículo escolar.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 py-10">
          <div className="flex flex-col items-center gap-4">
            <h4 className='text-xl font-bold text-balance text-center text-skin-orange-lanze'>Institutos Participantes</h4>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">

              <img className='size-24 md:size-32 lg:size-48' src="images/IES_H_LANZ/hlanz-logo.svg" alt="" />

            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">

              <img className='size-24 md:size-32 lg:size-48' src="images/IES_ALBAYTAR/albaytar-logo.svg" alt="" />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
 
              <img className='size-24 md:size-32 lg:size-48' src="images/CIFP_VIRGEN_DE_GRACIA/virgen-gracia-logo.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className='text-xl font-bold text-center text-skin-orange-lanze'>Empresas colaboradoras</h4>
   

            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img className='w-36 md:w-40 lg:w-52' src="images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp" alt="" />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img className='w-36 md:w-40 lg:w-52' src="images/FPEmpresa/fpempresa-logo.webp" alt="" />
            </div>
       
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyecto