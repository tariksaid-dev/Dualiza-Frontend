import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import AdminPanelHeader from "@/features/admin-panel/header/AdminPanelHeader";
import AdminPanelCard from "@/features/admin-panel/body-card/AdminPanelCard";
import AdminNews from "@/features/admin-panel/body-card/news/AdminNews";
import AdminEmails from "@/features/admin-panel/body-card/emails/AdminEmails";
import AdminUsers from "@/features/admin-panel/body-card/users/AdminUsers";

function Admin() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: "news" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <AdminPanelLayout>
      <AdminPanelHeader setSearchParams={setSearchParams}/>
      <AdminPanelCard>
        {searchParams.get("page") === "news" && <AdminNews />}
        {searchParams.get("page") === "users" && <AdminUsers />}
        {searchParams.get("page") === "emails" && <AdminEmails />}
      </AdminPanelCard>
    </AdminPanelLayout>
  );
}

export default Admin;
