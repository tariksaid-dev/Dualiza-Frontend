import VirgenGracia from "@/components/icons/VirgenGracia";
import { ThemeProviderContext } from "@/context/DarkModeContext";
import {
  getFooterColor,
  getLogoCaixaBank,
  getLogoHlanz,
} from "@/utils/themeHelpers";
import React, { useContext } from "react";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import FooterCollaboratorsContainer from "./FooterCollaboratorsContainer";

function Footer() {
  const { theme } = useContext(ThemeProviderContext);

  // TEST // Usar esto en vez del contexto
  // const isDark = window.document.documentElement.classList.contains("dark")
  // console.log(isDark)

  // TODO
  // Componetizar logos para que cambien auto con el tema
  // Alt de svg? mejorar accesibilidad en svgs components
  // Añadir componente Avatar con .png de github abajo izquierda


  return (
    <footer
      className="bg-background border-t border-border w-full pt-6"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex flex-col lg:grid md:grid-cols-2 gap-10">
        <FooterCollaboratorsContainer title="Institutos participantes">
          <a
            href="https://www.ieshlanz.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="100"
              height="100"
              src={getLogoHlanz(theme)}
              alt="Logo IES Hermenegildo Lanz"
            />
          </a>
          <a
            href="https://albaytar.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-72"
              src="images/IES_ALBAYTAR/logo-albaytar.svg"
              alt="Logo IES Albaytar"
            />
          </a>
          <a
            href="https://cifpvirgendegracia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VirgenGracia
              width="165"
              height="120"
              fill={theme === "light" ? "black" : "white"}
            />
          </a>
        </FooterCollaboratorsContainer>
        <FooterCollaboratorsContainer
          title="Empresas participantes"
          type="column"
        >
          <a
            href="https://www.caixabankdualiza.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-80"
              src={getLogoCaixaBank(theme)}
              alt="Logo CaixaBank y Dualiza"
            />
          </a>
          <a
            href="https://fpempresa.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/FPEmpresa/fpempresa-logo.webp"
              width="240px"
              alt="Logo de la asociación de centros de formación profesional"
            />
          </a>
        </FooterCollaboratorsContainer>
      </div>
      <div className="flex items-center justify-center border-t border-border pt-4">
        <p className="text-sm mb-4 text-primary font-bold">2024 DUALIZA</p>
        {/* <div className="flex space-x-4">
          <p className="text-sm text-foreground">
            <span className="font-bold text-primary">Creators: </span>
            <a
              className="hover:underline underline-offset-4 decoration-primary "
              href="https://github.com/PepeRivera04"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pepe Rivera
            </a>
            ,
            <a
              className="hover:underline underline-offset-4 decoration-primary"
              href="https://github.com/NuMeRo-999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedro Vilchez
            </a>
            ,{" "}
            <a
              className="hover:underline underline-offset-4 decoration-primary"
              href="https://github.com/tariksaid-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarik Said
            </a>
            ,{" "}
            <a
              className="hover:underline underline-offset-4 decoration-primary"
              href="https://github.com/RogerCiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Roger Civantos
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
