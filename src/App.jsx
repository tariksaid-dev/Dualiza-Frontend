import MainLayout from "./components/layouts/MainLayout";
import Contacto2 from "./components/ui/Contacto2";
import DinamicHeader from "./components/ui/Footer";
import FooterEmpresas from "./components/ui/FooterEmpresas";
import MejoraTuCentro from "./components/ui/MejoraTuCentro";
import Proyecto from "./components/ui/Proyecto";
import ResultadoConsumosElectricos from "./components/ui/ResultadoConsumosElectricos";
import ResultadoInstalacionClimatizacion from "./components/ui/ResultadoInstalacionClimatizacion";
import ResultadoInstalacionFotovoltaica from "./components/ui/ResultadoInstalacionFotovoltaica";
import Showcase from "./components/ui/Showcase";
import Splash from "./components/ui/Splash";
import { ThemeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <DinamicHeader></DinamicHeader>
        <Splash></Splash>
        <Proyecto></Proyecto>
        <section className="">
        <ResultadoInstalacionFotovoltaica></ResultadoInstalacionFotovoltaica>
          <ResultadoConsumosElectricos></ResultadoConsumosElectricos>
          <ResultadoInstalacionClimatizacion></ResultadoInstalacionClimatizacion>
        </section>
        <MejoraTuCentro></MejoraTuCentro>
        <Showcase></Showcase>
        <Contacto2></Contacto2>
        <FooterEmpresas></FooterEmpresas>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
