import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import ContentSection from "./ContentSection";

const MejoraTuCentro = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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
    window.open("https://www.ieshlanz.es/documentos/", "_blank");
  };

  return (
    <ContentSection
      title="Mejora tu centro"
      id="mejoratucentro"
      subtitle={
        <p className="md:text-2xl lg:text-3xl" style={{ fontFamily: "Inter" }}>
          Accede a los recursos que te ayudarán a mejorar la calidad de tu
          centro educativo.
        </p>
      }
    >
      <div className="h-2/5 w-3/5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-foreground">
              Guía de buenas prácticas para mejorar la eficiencia energética de
              tu centro educativo
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
              Proyecto seleccionado en la VI edición de la Convocatoria de
              Ayudas Dualiza de CaixaBank Dualiza y la Asociación de Centros de
              Formación Profesional FPEmpresa Para más información descargar el
              documento.
              <AlertDialog isOpen={isAlertOpen}>
                <AlertDialogTrigger className="p-2 bg-primary rounded-md text-foreground">
                  Descargar
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      ¿Deseas descargar las guías de buenas prácticas?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Si pulsas en continuar, se descargará el archivo
                      powerpoint con la guía de buenas prácticas. Pulsa en
                      cancelar si no estás seguro.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancelDownload}>
                      Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirmDownload}>
                      Descargar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-foreground">
              Quiero obtener más documentos de interés sobre el proyecto Dualiza
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
              Para obtener más documentos de interés sobre el proyecto Dualiza,
              puedes acceder a la sección de documentos de la web del IES
              Hermenegildo Lanz.
              <Button
                variant="default"
                size="sm"
                onClick={handleClickVisit}
                className="w-26"
              >
                Visitar
              </Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-foreground">
              ¿Dónde puedo ver más información sobre los proyectos del centro?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground flex flex-col items-center gap-4">
              Para obtener más información sobre los proyectos del centro,
              puedes acceder a la sección de documentos de la web del IES
              Hermenegildo Lanz.
              <Button
                variant="default"
                size="sm"
                onClick={handleClickVisit}
                className="w-26"
              >
                Visitar
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ContentSection>
  );
};

export default MejoraTuCentro;
