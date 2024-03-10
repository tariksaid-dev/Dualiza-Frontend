function FooterCollaboratorsContainer({ children, title, type = "default" }) {
  return (
    <div className="col-span-1 flex flex-col gap-4">
      <h2 className="text-center text-3xl text-primary">{title}</h2>
      <div
        className={`col-span-1 flex justify-center items-center pb-6 h-4/5 ${type === "column" ? "flex-col gap-2" : "flex-row gap-8"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default FooterCollaboratorsContainer;
