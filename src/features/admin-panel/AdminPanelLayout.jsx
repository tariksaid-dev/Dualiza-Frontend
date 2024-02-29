import React from "react";
import { Toaster } from "sonner";

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="w-2/4 m-auto">
      <h1 className="text-2xl text-center m-10 font-bold">
        Administración de Usuarios
      </h1>
      {children}
      <Toaster toastOptions={"toast"} />
    </div>
  );
};

export default AdminPanelLayout;
