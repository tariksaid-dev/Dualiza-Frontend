function FooterCollaboratorsContainer({ children, title, type = "default" }) {
  return (
    <div className="col-span-1 flex flex-col gap-4 space-y-8 pb-12">
      <h2 className="text-center text-3xl text-primary">{title}</h2>
      <div
        className={`flex justify-center items-center h-4/5 ${type === "column" ? "flex-col gap-8" : "flex-row gap-12"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default FooterCollaboratorsContainer;
