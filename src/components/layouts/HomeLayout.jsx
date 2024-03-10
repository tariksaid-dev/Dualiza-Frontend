function HomeLayout({ children }) {
  return (
    <main
      className="bg-default text-default text-base selection:bg-secondary selection:text-white snap-y snap-mandatory relative w-full h-screen overflow-hidden"
      id="main"
    >
      {children}
    </main>
  );
}

export default HomeLayout;
