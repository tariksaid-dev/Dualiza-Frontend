import AdminPanelLayout from "@/features/admin-panel/AdminPanelLayout";
import { DataTableDemo } from "@/features/admin-panel/AdminUsers";
import React from "react";

const Admin = () => {
  return (
    <AdminPanelLayout>
      <DataTableDemo />
    </AdminPanelLayout>
  );
};

export default Admin;
