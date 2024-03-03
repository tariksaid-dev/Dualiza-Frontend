import React from 'react'

const ResultadoInstalacionClimatizacion = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-skin-dark-blue">
    <div className="container grid gap-6 px-4 md:px-6 items-center space-y-0.5">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl text-balance text-center font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50 md:text-start">
            Instalaciones de
            <br />
            climatización{"\n"}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed dark:text-gray-200 text-pretty">
            Garantizamos el confort en los centros educativos con sistemas de climatización eficientes que crean
            entornos de aprendizaje óptimos. Nuestros sistemas están diseñados para mantener una temperatura ideal en
            todas las estaciones, asegurando un ambiente propicio para el estudio y la concentración de los
            estudiantes.
          </p>
        </div>
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img
            alt="Image"
            className="object-cover w-full h-72 md:h-auto  hover:transform hover:scale-110 transition-transform duration-1000 ease-in-out group-hover:filter group-hover:brightness-125"
            height="400"
            src="images/climatizacion.webp"
            style={{
              aspectRatio: "1000/600",
              objectFit: "cover",
            }}
            width="1000"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ResultadoInstalacionClimatizacion