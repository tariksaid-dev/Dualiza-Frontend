import StaticHeader from "@/components/ui/StaticHeader";
import { ThemeProvider } from "@/context/DarkModeContext";
import AdminNews from "@/features/admin-panel/AdminNews";
import AdminPanelLayout from "@/features/admin-panel/AdminPanelLayout";
import { DataTableDemo } from "@/features/admin-panel/AdminUsers";
import React from "react";

const Admin = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <StaticHeader></StaticHeader>
      <AdminPanelLayout>
        <DataTableDemo />
        <AdminNews></AdminNews>
      </AdminPanelLayout>
    </ThemeProvider>
  );
};

export default Admin;
