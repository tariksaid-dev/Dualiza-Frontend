function HomeLayout({ children }) {
  return (
    <div className="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white">
      {children}
    </div>
  );
}

export default HomeLayout;
