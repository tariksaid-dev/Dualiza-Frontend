function LandingSection({ children, type }) {
  return (
    <div className={`snap-center ${!type ? "pt-24" : ""}`}>{children}</div>
  );
}

export default LandingSection;
