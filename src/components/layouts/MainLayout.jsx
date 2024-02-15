function MainLayout({ children }) {
  return (
    <div className="min-w-[100vw] min-h-[100vh] grid grid-rows-[1fr,40px]">
      {children}
    </div>
  );
}

export default MainLayout;
