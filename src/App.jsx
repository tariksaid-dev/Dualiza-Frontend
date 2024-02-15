import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <h1 className="flex flex-1 items-center justify-center text-white bg-skin-dark-blue">
        Hola mundo
      </h1>
      <div className="bg-slate-700 text-white">Hola footer</div>
    </MainLayout>
  );
}

export default App;
