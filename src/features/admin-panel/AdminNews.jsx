import React, {  useState } from "react";
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
import { AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      {/* HEADER */}
      <div className="flex border-b-border border-b-[1px]">
        <div className="flex-1 flex items-end">
          <div className="mb-4 ml-12">
            <Button size="lg" onClick={onAddNew}>
              Añadir noticia
            </Button>
          </div>
        </div>

        <div className="flex-[2] flex flex-col space-y-2 items-center justify-center">
          <h1 className="text-5xl font-bold gradient-text">Noticias</h1>
          <p className="text-muted-foreground text-2xl">
            Aquí podrás crear, modificar, y eliminar las noticias de la web
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Avatar>
            <AvatarImage
              className="size-16"
              src={"/icon.svg"}
              alt="Generic logo"
            />
          </Avatar>
        </div>
      </div>

      {/* BODY */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-1 max-h-full h-full space-x-4 p-6">
        {noticiasPaginadas.map((noticia) => (
          <div
            key={noticia.id}
            className="flex flex-col space-y-4 h-full max-h-full"
          >
            <Card className="flex-1 flex flex-col h-3/4">
              <CardHeader>
                <div className="pb-2">
                  <AspectRatio ratio={16 / 9}>
                    <img src={noticia.image} alt={noticia.title} />
                  </AspectRatio>
                </div>
                <CardTitle>{noticia.title}</CardTitle>
              </CardHeader>
              <CardDescription className="overflow-auto px-5 mb-3">
                {noticia.content}
              </CardDescription>
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

      {/* FOOTER */}
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
