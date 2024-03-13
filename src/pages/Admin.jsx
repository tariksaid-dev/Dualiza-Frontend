import AdminNews from "@/features/admin-panel/AdminNews";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import { AdminUsers } from "@/features/admin-panel/AdminUsers";
import React, { useEffect } from "react";
import AdminPanelHeader from "@/features/admin-panel/AdminPanelHeader";
import AdminPanelCard from "@/features/admin-panel/AdminPanelCard";
import { useSearchParams } from "react-router-dom";

function Admin() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: "news" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <AdminPanelLayout>
      <AdminPanelHeader />
      <AdminPanelCard>
        {searchParams.get("page") === "news" && <AdminNews />}
        {searchParams.get("page") === "users" && <AdminUsers />}
        {/* {searchParams ==="emails" && <AdminEmails />} */}
      </AdminPanelCard>
      {/* <AdminTabsContainer /> */}
      {/* <DataTableDemo />
        <AdminNews /> */}
    </AdminPanelLayout>
  );
}

export default Admin;
