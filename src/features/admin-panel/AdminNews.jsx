import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDeleteNew } from "./useDeleteNew";
import { useNews } from "../news/useNews";
import Spinner from "@/components/ui/Spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "@fontsource/inter/700.css";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import AdminPanelCardHeader from "./AdminPanelCardHeader";

const noticiasPorPagina = 4;

const AdminNews = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const { news, isLoading } = useNews();
  const { deleteNew } = useDeleteNew();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const totalPaginas = Math.ceil(sortedNews.length / noticiasPorPagina);

  const startIndex = (paginaActual - 1) * noticiasPorPagina;
  const endIndex = startIndex + noticiasPorPagina;
  const noticiasPaginadas = sortedNews.slice(startIndex, endIndex);

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const handleDelete = (id) => {
    deleteNew(id);
    console.log("Noticia eliminada correctamente");
  };

  const handleEditar = (id) => {
    navigate(`/admin/edit/${id}`);
    console.log("Editar noticia : " + id);
  };

  const onAddNew = () => {
    navigate("/admin/createNew");
  };

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
            <Button variant="outlinePrimary" size="buttonSpace">
              <ArrowRight size={42} />
            </Button>
          </div>
        }
        title={"Noticias"}
        description={
          "Aquí podrás crear, modificar, y eliminar las noticias de la web"
        }
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-1 max-h-full h-full space-x-4 p-6">
        {noticiasPaginadas.map((noticia) => (
          <div
            key={noticia.id}
            className="flex flex-col space-y-4 h-full max-h-full"
          >
            <Card className="flex-1 flex flex-col h-3/4 pr-2">
              <ScrollArea type="always" className="mt-6">
                <CardHeader className="pt-0 pb-4 space-y-3">
                  <AspectRatio ratio={16 / 9}>
                    <img src={noticia.image} alt={noticia.title} />
                  </AspectRatio>
                  <CardTitle>{noticia.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-5">
                  {noticia.content}
                </CardDescription>
              </ScrollArea>
            </Card>

            <div className="flex justify-end items-center space-x-4 mr-3">
              <Button variant="default" size="sm">
                Editar
              </Button>
              <Button variant="destructive" size="sm">
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex border-t-border border-t-[1px]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePaginaAnterior} />
            </PaginationItem>
            {Array.from({ length: totalPaginas }, (_, index) => index + 1).map(
              (numeroPagina) => (
                <PaginationItem key={numeroPagina}>
                  <PaginationLink
                    isActive={numeroPagina === paginaActual}
                    onClick={() => setPaginaActual(numeroPagina)}
                  >
                    {numeroPagina}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                className={paginaActual === totalPaginas ? "btn-hidden" : ""}
                onClick={handlePaginaSiguiente}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default AdminNews;
