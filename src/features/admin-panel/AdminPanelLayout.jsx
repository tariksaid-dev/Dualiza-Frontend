import React from "react";
import { Toaster } from "sonner";

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="mx-4 md:mx-48 lg:mx-56 xl:mx-80 2xl:mx-96">
      <h1 className="text-2xl text-center m-20 font-bold">
        ADMINSITRACIÓN DUALIZA
      </h1>
      {children}
      <Toaster toastOptions={"toast"} />
    </div>
  );
};

export default AdminPanelLayout;
