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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeProviderContext);

  const developers = [
    {
      name: "Tarik Said",
      url: "https://github.com/tariksaid-dev",
    },
    {
      name: "Pepe Rivera",
      url: "https://github.com/PepeRivera04",
    },
    {
      name: "Pedro Vílchez",
      url: "https://github.com/NuMeRo-999",
    },
    {
      name: "Rogelio Sánchez",
      url: "https://github.com/RogerCiv",
    },
  ];

  // TEST // Usar esto en vez del contexto
  // const isDark = window.document.documentElement.classList.contains("dark")
  // console.log(isDark)

  // TODO
  // Componetizar logos para que cambien auto con el tema
  // Alt de svg? mejorar accesibilidad en svgs components

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
      <div className="flex items-center border-t justify-center border-border/60 pt-4 relative">
        <div className="flex items-center space-x-2 absolute right-0 bottom-0 pb-[0.2rem]">
          <p className="text-primary font-bold text-sm px-2">by...</p>
          {developers.map((developer) => (
            <Link key={developer.url} to={developer.url}>
              <Avatar>
                <AvatarImage
                  src={developer.url + ".png"}
                  alt={developer.name}
                />
              </Avatar>
            </Link>
          ))}
        </div>
        <p className="text-sm mb-4 text-primary font-bold">2024 DUALIZA</p>
      </div>
    </footer>
  );
}

export default Footer;
