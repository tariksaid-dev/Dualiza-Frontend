import MainLayout from "./components/layouts/MainLayout";
import DinamicHeader from "./components/ui/Footer";

function App() {
  return (
    <MainLayout>
      <h1 className="h-[240vh] bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
        Hola mundo
      </h1>
      <DinamicHeader></DinamicHeader>
    </MainLayout>
  );
}

export default App;
