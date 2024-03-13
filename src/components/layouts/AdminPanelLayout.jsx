import React from "react";

function AdminPanelLayout({ children }) {
  return (
    <main className="bg-default text-default text-base selection:text-foreground w-full h-screen max-h-screen grid grid-rows-[56px_1fr] place-items-center">
      {children}
    </main>
  );
}

export default AdminPanelLayout;
