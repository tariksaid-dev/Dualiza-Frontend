import React from 'react'
import CustomButton from './CustomButton'

const MejoraTuCentro = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
            <div className="container px-4 md:px-6">
                <div className="space-y-8 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mejora tu centro</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-pretty ">
                            Accede a los recursos que te ayudarán a mejorar la calidad de tu centro educativo.
                        </p>
                    </div>
                    <div className="grid max-w-sm gap-4 mx-auto lg:max-w-none lg:grid-cols-3">
                        <div className="border p-4 rounded-lg border-[#1d1b33] transition-colors hover:bg-[#1d1b33] hover:bg-opacity-10">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Guía de buenas prácticas</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
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
                        <div className="border p-4 rounded-lg border-[#1d1b33] transition-colors hover:bg-[#1d1b33] hover:bg-opacity-10">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Documentos de interés</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
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
                                <CustomButton text="Descargar" />
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg border-[#1d1b33] transition-colors hover:bg-[#1d1b33] hover:bg-opacity-10">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Enlaces</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Accede a recursos educativos en línea.</p>
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
                                <CustomButton text="Descargar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MejoraTuCentro