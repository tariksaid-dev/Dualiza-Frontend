import React from 'react'

const Proyecto = () => {
  return (
    <section id='proyecto' className='h-screen relative flex flex-col items-center justify-center max-w-7xl mx-auto'>
      <div className="flex flex-col items-center space-y-2 p-10 m-10 ">
        <h1 className='text-3xl font-bold'>Proyecto</h1>
        <p className='text-pretty'>Espacio para la descripción del proyecto y sus objetivos.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-7xl py-10">
        <div className="flex flex-col justify-center items-center gap-4 px-6">
          <p className='text-pretty'>
            El proyecto DUALIZA tiene como objetivo exponer las buenas prácticas para mejorar la eficiencia energética
            en los centros educativos.
          </p>
          <p className='text-pretty'>
            Los objetivos del proyecto son sensibilizar a la comunidad educativa sobre el uso eficiente de la energía,
            fomentar la implementación de medidas de ahorro energético en los centros escolares y proporcionar recursos
            y herramientas para la integración de la educación energética en el currículo escolar.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 py-10">
          <div className="flex flex-col items-center gap-4">
            <h4 className='text-xl font-bold text-balance text-center'>Institutos Participantes</h4>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="text-center text-xs">Juan Pérez</div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="text-center text-xs">María López</div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="text-center text-xs">Carlos García</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className='text-xl font-bold text-center'>Empresas colaboradoras</h4>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="text-center text-xs">Empresa A</div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="text-center text-xs">Empresa B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyecto