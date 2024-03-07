import LetrasBombilla from '@/components/icons/LetrasBombilla'
import VirgenGracia from '@/components/icons/VirgenGracia'
import { ThemeProviderContext } from '@/context/DarkModeContext'
import { getFooterColor, getLogoCaixaBank, getLogoHlanz } from '@/utils/themeHelpers'
import React, { useContext } from 'react'

const FooterEmpresas = () => {

  const { theme } = useContext(ThemeProviderContext)

  return (
    <footer
      className={`border-t border-border ${getFooterColor(theme)} text-white p-10 h-full py-10 w-full`}
    >
      <div className=" mx-auto">
        <div className="flex flex-col lg:grid md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h2 className="text-center text-3xl text-foreground">
              Institutos Participantes
            </h2>
            <div className=" flex flex-col gap-8 md:flex-row  justify-center items-center py-8">
              <a
                href="https://www.ieshlanz.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="size-32" src={getLogoHlanz(theme)} alt="" />
              </a>
              <a
                href="https://albaytar.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-48"
                  src="images/IES_ALBAYTAR/logo-albaytar.svg"
                  alt=""
                />
              </a>
              <a
                href="https://cifpvirgendegracia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <VirgenGracia width="150" height="150" fill={theme === "light" ? "black" : "white"} />
              </a>
            </div>
          </div>
          <div className="col-span-1 ">
            <h2 className="text-center text-3xl text-foreground">
              Empresas Participantes
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center py-10 md:py-20 ">
              <a
                href="https://www.caixabankdualiza.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-64" src={getLogoCaixaBank(theme)} alt="" />
              </a>
              <a
                href="https://fpempresa.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/FPEmpresa/fpempresa-logo.webp"
                  width={200}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 border-t border-foreground pt-6">
          <p className="text-sm mb-4 text-skin-orange-lanze font-bold">
            © 2024 DUALIZA
          </p>
          <div className="flex space-x-4">
            <p className="text-sm text-foreground">
              <span className="font-bold ">Creators:</span>{" "}
              <a
                className="hover:underline underline-offset-4 decoration-primary "
                href="https://github.com/PepeRivera04"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pepe Rivera
              </a>
              ,{" "}
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterEmpresas