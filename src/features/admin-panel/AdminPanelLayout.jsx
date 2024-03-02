import React from "react";
import { Toaster } from "sonner";

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="mx-10">
      <h1 className="text-2xl text-center m-10 font-bold">
        ADMINSITRACIÓN DUALIZA
      </h1>
      {children}
      <Toaster toastOptions={"toast"} />
    </div>
  );
};

export default AdminPanelLayout;
