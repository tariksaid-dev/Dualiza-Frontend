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

const noticiasPorPagina = 4;

const AdminNews = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const { news, isLoading } = useNews();
  const { deleteNew } = useDeleteNew();

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
    console.log("Editar noticia : " + id);
  };

  return (
    <div className="">
      <hr />
      <h1 className="text-3xl font-bold text-center m-8">Noticias</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ">
        {noticiasPaginadas.map((noticia) => (
          <div key={noticia.id} className="border p-4 flex flex-col rounded-md">
            <img
              src={`${supabaseUrl}/storage/v1/object/public/news/${noticia.image}`}
              alt={noticia.titulo}
              className="w-full h-40 object-cover"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-bold mt-4">{noticia.titulo}</h2>
              <p className="mt-2">{noticia.content.substring(0, 50) + "..."}</p>
            </div>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleEditar(noticia.id)}
                className="bg-primary p-2 rounded-md"
              >
                Editar
              </button>
              <button
                onClick={() => deleteNew(noticia.id)}
                className="bg-destructive p-2 rounded-md"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
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
  );
};

export default AdminNews;
