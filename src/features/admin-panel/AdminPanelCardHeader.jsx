function AdminPanelCardHeader({
  leftComponent,
  rightComponent,
  title,
  description,
}) {
  return (
    <header className="flex border-b-border border-b">
      {leftComponent}
      <div className="flex-[2] flex flex-col space-y-2 items-center justify-center">
        <h1 className="text-5xl font-bold gradient-text">{title}</h1>
        <p className="text-muted-foreground text-2xl">{description}</p>
      </div>
      {rightComponent}
    </header>
  );
}

export default AdminPanelCardHeader;
