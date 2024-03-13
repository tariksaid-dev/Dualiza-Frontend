import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import AdminPanelHeader from "@/features/admin-panel/AdminPanelHeader";
import AdminPanelCard from "@/features/admin-panel/AdminPanelCard";
import AdminNews from "@/features/admin-panel/AdminNews";
import AdminEmails from "@/features/admin-panel/AdminEmails";
import { AdminUsers } from "@/features/admin-panel/AdminUsers";

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
        {searchParams.get("page") === "emails" && <AdminEmails />}
      </AdminPanelCard>
    </AdminPanelLayout>
  );
}

export default Admin;
