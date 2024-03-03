import React, { useEffect, useState } from "react";
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
  const [noticias, setNoticias] = useState([]);
  const { news } = useNews();

  const totalPaginas = Math.ceil(news?.length / noticiasPorPagina);

  const { deleteNew } = useDeleteNew();

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

  const startIndex = (paginaActual - 1) * noticiasPorPagina;
  const endIndex = startIndex + noticiasPorPagina;
  const noticiasPaginadas = news.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    deleteNew(id);
    console.log("Noticia eliminada correctamente");
  };

  const handleEditar = () => {
    console.log("Editar noticia");
  };

  useEffect(() => {
    setNoticias(news);
  }, [news]);

  return (
    <div className="">
      <hr />
      <h1 className="text-3xl font-bold text-center m-8">Noticias</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ">
        {noticiasPaginadas.map((noticia) => (
          <div key={noticia.id} className="border p-4 flex flex-col rounded-md">
            <img
              src="https://marketplace.canva.com/EAFrDm3ydqw/1/0/1600w/canva-presentaci%C3%B3n-noticias-telediario-corporativo-azul-rojo-Vh4S5Wt7FD4.jpg"
              alt={noticia.titulo}
              className="w-full h-40 object-cover"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-bold mt-4">{noticia.titulo}</h2>
              <p className="mt-2">
                {noticia.descripcion.substring(0, 50) + "..."}
              </p>
            </div>
            <div className="flex justify-around mt-4">
              <button
                onClick={handleEditar}
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
