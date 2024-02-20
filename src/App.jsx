import MainLayout from "./components/layouts/MainLayout";
import DinamicHeader from "./components/ui/Footer";
import { ThemeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        {/* <h1 className="h-[240vh] bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
        Hola mundo
      </h1> */}
        <DinamicHeader></DinamicHeader>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
