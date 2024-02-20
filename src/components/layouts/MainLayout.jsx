function MainLayout({ children }) {
  return (
    // <div className="h-full bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
        <div className="min-h-screen bg-background font-sans antialiased theme-orange dark">
      {children}
    </div>
  );
}

export default MainLayout;
