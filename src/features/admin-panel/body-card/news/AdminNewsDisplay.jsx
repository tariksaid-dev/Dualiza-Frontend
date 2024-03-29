import { Button } from "@/components/ui/button";
import AdminPanelCardBody from "../AdminPanelCardBody";
import SingleNewCard from "./SingleNewCard";
import AlertTriggerButton from "@/components/ui/AlertTriggerButton";
import AdminPanelCardPagination from "../AdminPanelCardPagination";

function AdminNewsDisplay({
  displayedNews,
  onEdit,
  onDelete,
  sortedNews,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  return (
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
  );
}

export default AdminNewsDisplay;
