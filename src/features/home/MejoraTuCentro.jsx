import React from 'react'
import CustomButton from './CustomButton'


const MejoraTuCentro = () => {

  const handleClickVisit = () => {
    window.open("https://www.ieshlanz.es/documentos/", "_blank")
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto h-full">
      <div className="container px-4 md:px-6">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mejora tu centro</h2>
            <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-pretty ">
              Accede a los recursos que te ayudarán a mejorar la calidad de tu centro educativo.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 mx-auto lg:max-w-none lg:grid-cols-3">
            <div className="border border-border  p-4 rounded-lg transition-colors hover:bg-skin-dark-blue hover:bg-opacity-10 text-destructive">
              <div className={"space-y-2"}>
                <h3 className="text-xl font-bold text-destructive ">Guía de buenas prácticas</h3>
                <p className="text-sm text-foreground">
                  Descarga la guía para implementar buenas prácticas en tu centro.
                </p>
                <img
                  alt="Guía de buenas prácticas"
                  className="mx-auto my-4"
                  height={250}
                  src="images/BuenasPracticas.webp"
                  style={{
                    aspectRatio: "200/150",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CustomButton text="Descargar" />
              </div>
            </div>
            <div className="border border-border p-4 rounded-lg  transition-colors hover:bg-skin-dark-blue hover:bg-opacity-10">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-destructive">Documentos de interés</h3>
                <p className="text-sm text-foreground">
                  Encuentra documentos útiles para la gestión escolar.
                </p>
                <img
                  alt="Documentos de interés"
                  className="mx-auto my-4"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/150",
                    objectFit: "cover",
                  }}
                  width={200}
                />
                <CustomButton className={'w-20'} onClick={handleClickVisit} text="Visitar" />
              </div>
            </div>
            <div className="border border-border p-4 rounded-lg  transition-colors hover:bg-skin-dark-blue hover:bg-opacity-10">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-destructive">Enlaces</h3>
                <p className="text-sm text-foreground">Accede a recursos educativos en línea.</p>
                <img
                  alt="Enlaces"
                  className="mx-auto my-4"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/150",
                    objectFit: "cover",
                  }}
                  width={200}
                />
                <CustomButton className={'w-20'} onClick={handleClickVisit} text="Visitar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MejoraTuCentro