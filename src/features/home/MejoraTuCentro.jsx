import React, { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from '@/components/ui/button'


const MejoraTuCentro = () => {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleClickOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleConfirmDownload = async () => {
    const url = "https://ruta-archivo.pptx";

    const response = await fetch(url);
    const data = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(data);
    link.download = "archivo.pptx";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    setIsAlertOpen(false);
  };

  const handleCancelDownload = () => {
    setIsAlertOpen(false);
  };


  const handleClickVisit = () => {
    window.open("https://www.ieshlanz.es/documentos/", "_blank")
  }

  return (
    <section className="flex flex-col items-center justify-between space-y-4 h-screen relative pt-24">
      <div className="container px-4 md:px-6 p">
        <div className="space-y-8 text-center py-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mejora tu centro</h2>
            <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-pretty ">
              Accede a los recursos que te ayudarán a mejorar la calidad de tu centro educativo.
            </p>
          </div>
          <div className='px-10 pt-12 max-w-6xl mx-auto'>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">Guía de buenas prácticas para mejorar la eficiencia energética de tu centro educativo</AccordionTrigger>
                <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
                  Proyecto seleccionado en la VI edición de la Convocatoria de Ayudas Dualiza de CaixaBank Dualiza y la Asociación de Centros de Formación Profesional FPEmpresa

                  Para más información descargar el documento.
                  <AlertDialog isOpen={isAlertOpen}>
                    <AlertDialogTrigger className='p-2 bg-primary rounded-md text-foreground'>Descargar</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleCancelDownload}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirmDownload}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-foreground">Guía de buenas prácticas para mejorar la eficiencia energética de tu centro educativo</AccordionTrigger>
                <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
                  Proyecto seleccionado en la VI edición de la Convocatoria de Ayudas Dualiza de CaixaBank Dualiza y la Asociación de Centros de Formación Profesional FPEmpresa

                  Para más información descargar el documento.
                  <Button variant="default" size="sm" onClick={handleClickVisit} className="w-26"> Descargar</Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-foreground">Guía de buenas prácticas para mejorar la eficiencia energética de tu centro educativo</AccordionTrigger>
                <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
                  Proyecto seleccionado en la VI edición de la Convocatoria de Ayudas Dualiza de CaixaBank Dualiza y la Asociación de Centros de Formación Profesional FPEmpresa

                  Para más información descargar el documento.
                  <Button variant="default" size="sm" onClick={handleClickVisit} className="w-26"> Descargar</Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MejoraTuCentro