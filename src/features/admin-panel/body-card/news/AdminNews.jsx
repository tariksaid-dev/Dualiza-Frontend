import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useNews } from "@/features/news/useNews";
import { useDeleteNew } from "@/features/admin-panel/useDeleteNew";

import AdminPanelCardHeader from "@/features/admin-panel/body-card/AdminPanelCardHeader";
import AdminNewsDisplay from "@/features/admin-panel/body-card/news/AdminNewsDisplay";
import AdminNewsEdit from "@/features/admin-panel/body-card/news/AdminNewsEdit";
import AdminNewsCreate from "@/features/admin-panel/body-card/news/AdminNewsCreate";
import { Button } from "@/components/ui/button";

import { Rss } from "lucide-react";
import Spinner from "@/components/ui/Spinner";
import "@fontsource/inter/700.css";

const AdminNews = () => {
  const { news, isLoading } = useNews();
  const { deleteNew, isDeleting } = useDeleteNew();
  const [mode, setMode] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const sortedNews = useMemo(() => {
    if (!news) return [];

    return [...news].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }, [news]);

  const displayedNews = sortedNews.slice(startIndex, endIndex);

  function onCreate() {
    searchParams.set("create", true);
    setSearchParams(searchParams);
  }

  function onEdit(id) {
    searchParams.set("edit", id);
    setSearchParams(searchParams);
  }

  function onDelete(id) {
    deleteNew(id);
  }

  useEffect(() => {
    if (searchParams.has("edit")) {
      setMode("edit");
    } else if (searchParams.has("create")) {
      setMode("create");
    } else {
      setMode(null);
    }
  }, [searchParams, news]);

  if (isLoading || isDeleting) return <Spinner />;

  return (
    <>
      <AdminPanelCardHeader
        leftComponent={
          <div className="flex-1 flex items-end">
            <div className="mb-4 ml-12">
              {mode === null && (
                <Button size="lg" onClick={onCreate}>
                  Añadir noticia
                </Button>
              )}
            </div>
          </div>
        }
        rightComponent={
          <div className="flex-1 flex justify-center items-center">
            <Rss size={42} />
          </div>
        }
        title={"Noticias"}
        description={
          "Aquí podrás crear, modificar, y eliminar las noticias de la web"
        }
      />

      {mode === null && (
        <AdminNewsDisplay
          displayedNews={displayedNews}
          onEdit={onEdit}
          onDelete={onDelete}
          sortedNews={sortedNews}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {mode === "edit" && (
        <AdminNewsEdit
          displayedNews={displayedNews}
          searchParams={searchParams}
        />
      )}

      {mode === "create" && <AdminNewsCreate />}
    </>
  );
};

export default AdminNews;
