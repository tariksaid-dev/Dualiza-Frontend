import MainLayout from "./components/layouts/MainLayout";
import DinamicHeader from "./components/ui/Footer";
import { ThemeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <DinamicHeader></DinamicHeader>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
