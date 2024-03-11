import React, { useEffect, useState } from "react";
import { supabaseUrl } from "@/services/supabase";
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
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@radix-ui/react-avatar";
import BombillaLibro from "@/components/icons/BombillaLibro";
import { AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

  if (isLoading) return <Spinner></Spinner>;

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
      <div className="grid grid-rows-[140px_1fr_80px] h-full space-y-8">
        <div
          className="flex flex-col space-y-6 relative w-full h-full max-h-full row-[1/2]"
          style={{ fontFamily: "Inter" }}
        >
          <div className="flex justify-center items-center h-full">

            <div className="flex flex-col justify-end items-center h-full">
              <Button size="lg" onClick={onAddNew}>
                Añadir noticia
              </Button>
            </div>

            <div className="flex flex-col space-y-2 text-center flex-[0_0_70%] w-full relative">
              <h1 className="text-5xl font-bold gradient-text pt-8">
                Noticias
              </h1>
              <p className="text-muted-foreground text-2xl">
                Aquí podrás crear, modificar, y eliminar las noticias de la web.
              </p>
            </div>

            <div className="flex flex-col justify-end  items-center h-full">
              <Avatar>
                <AvatarImage
                  className="size-16"
                  src={"/icon.svg"}
                  alt="Generic logo"
                />
              </Avatar>
            </div>

          </div>
          <Separator/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 px-6 space-x-8 row-[2/3] h-full">
          {noticiasPaginadas.map((noticia) => (
            <div
              key={noticia.id}
              // max-h-fit
              className="flex flex-col space-y-4"
            >
              <Card className="p-6 max-h-[500px] h-full">
                <CardContent
                  className="h-full max-h-full overflow-y-auto scrollbar-thumb-foreground scrollbar-track-border hover:scrollbar-thumb-background/50 active:scrollbar-thumb-background scrollbar-thin
                "
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      // className="object-cover"
                    />
                  </AspectRatio>
                  <CardHeader className="font-bold text-xl">
                    {noticia.title}
                  </CardHeader>
                  <CardDescription>{noticia.content}</CardDescription>
                </CardContent>
              </Card>
              <div className="row-[3/4] flex justify-end items-center space-x-6">
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
      </div>
      <div className="flex">
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
