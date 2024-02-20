function MainLayout({ children }) {
  return (
    // <div className="h-full bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
        <div className="h-full text-white text-base selection:bg-skin-orange-lanze selection:text-white bg-background orange-theme">
      {children}
    </div>
  );
}

export default MainLayout;
