function MainLayout({ children }) {
  return (
    <div className="h-full bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
      {children}
    </div>
  );
}

export default MainLayout;
