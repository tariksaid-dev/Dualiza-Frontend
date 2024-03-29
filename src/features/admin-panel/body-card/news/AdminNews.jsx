import React, { useEffect, useMemo, useState } from "react";
import { useNews } from "../../../news/useNews";
import Spinner from "@/components/ui/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "@fontsource/inter/700.css";
import { ArrowRight, Rss } from "lucide-react";
import AdminPanelCardHeader from "../AdminPanelCardHeader";
import AdminPanelCardPagination from "../AdminPanelCardPagination";
import AdminPanelCardBody from "../AdminPanelCardBody";
import SingleNewCard from "./SingleNewCard";
import { useDeleteNew } from "../../useDeleteNew";
import AlertTriggerButton from "@/components/ui/AlertTriggerButton";
import NewsEditMode from "./NewsEditMode";
import AdminPanelCardEditModeFooter from "./AdminPanelCardEditModeFooter";

const AdminNews = () => {
  const { news, isLoading } = useNews();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  const { deleteNew, isDeleting } = useDeleteNew();

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

  const onAddNew = () => {
    navigate("/admin/createNew");
  };

  function onEdit(id) {
    searchParams.set("edit", id);
    setSearchParams(searchParams);
  }

  function onDelete(id) {
    deleteNew(id);
  }

  function findNewById() {
    return displayedNews.find((el) => el.id === +searchParams.get("edit"));
  }

  useEffect(() => {
    if (searchParams.has("edit")) {
      setIsEditMode(true);
      console.log();
    } else {
      setIsEditMode(false);
    }
  }, [searchParams, news]);

  if (isLoading || isDeleting) return <Spinner />;

  return (
    <>
      <AdminPanelCardHeader
        leftComponent={
          <div className="flex-1 flex items-end">
            <div className="mb-4 ml-12">
              <Button size="lg" onClick={onAddNew}>
                Añadir noticia
              </Button>
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

      {!isEditMode ? (
        <>
          <AdminPanelCardBody variant="news">
            {displayedNews.map((noticia) => (
              <div
                className="flex flex-col space-y-4 h-full max-h-full"
                key={noticia.id}
              >
                <SingleNewCard {...noticia} />
                <div className="flex justify-end items-center space-x-4 pr-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onEdit(noticia.id)}
                  >
                    Editar
                  </Button>
                  <AlertTriggerButton
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(noticia.id)}
                    buttonText="Borrar"
                    alertDialogTitle="¿Seguro que desea eliminar esta noticia?"
                    alertDialogDescription="Esta acción no se puede deshacer. El borrado será permanente y se eliminará la noticia de nuestros servidores."
                  />
                </div>
              </div>
            ))}
          </AdminPanelCardBody>
          <AdminPanelCardPagination
            items={sortedNews}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <>
          <AdminPanelCardBody variant="newsEdit">
            <NewsEditMode
              originalValue={displayedNews?.find(
                (el) => el.id === +searchParams.get("edit")
              )}
            />
          </AdminPanelCardBody>
        </>
      )}
    </>
  );
};

export default AdminNews;
