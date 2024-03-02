import AdminNews from "@/features/admin-panel/AdminNews";
import AdminPanelLayout from "@/features/admin-panel/AdminPanelLayout";
import { DataTableDemo } from "@/features/admin-panel/AdminUsers";
import React from "react";

const Admin = () => {
  return (
    <AdminPanelLayout>
      <DataTableDemo />
      <AdminNews></AdminNews>
    </AdminPanelLayout>
  );
};

export default Admin;
