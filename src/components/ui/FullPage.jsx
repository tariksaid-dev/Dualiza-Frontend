function FullPage({ children }) {
  return (
    <div className="h-[100vh] bg-background flex items-center justify-center">
      {children}
    </div>
  );
}

export default FullPage;
