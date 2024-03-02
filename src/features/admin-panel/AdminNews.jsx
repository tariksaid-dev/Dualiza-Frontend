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

const noticias = [
  {
    id: "1",
    titulo: "Nueva actualización del sistema operativo1",
    descripcion:
      "Se ha lanzado una nueva actualización del sistema operativo que incluye mejoras de rendimiento y correcciones de errores.",
    imagen: "https://example.com/imagen1.jpg",
  },
  {
    id: "2",
    titulo: "Lanzamiento de un nuevo producto2",
    descripcion:
      "La empresa X ha anunciado el lanzamiento de un nuevo producto revolucionario que promete cambiar la forma en que hacemos las cosas.",
    imagen: "https://example.com/imagen2.jpg",
  },
  {
    id: "3",
    titulo: "Resultados de la investigación científica3",
    descripcion:
      "Un equipo de científicos ha publicado los resultados de su investigación sobre el cambio climático, destacando la necesidad de tomar medidas urgentes.",
    imagen: "https://example.com/imagen3.jpg",
  },
  {
    id: "4",
    titulo: "Evento cultural en la ciudad4",
    descripcion:
      "Se llevará a cabo un evento cultural en la ciudad este fin de semana, con música en vivo, arte callejero y actividades para toda la familia.",
    imagen: "https://example.com/imagen4.jpg",
  },
  {
    id: "5",
    titulo: "Nuevas medidas de seguridad en aeropuertos5",
    descripcion:
      "Los aeropuertos han implementado nuevas medidas de seguridad en respuesta a las recientes amenazas de seguridad.",
    imagen: "https://example.com/imagen5.jpg",
  },
  {
    id: "6",
    titulo: "Descubrimiento arqueológico",
    descripcion:
      "Un equipo de arqueólogos ha hecho un importante descubrimiento en un sitio arqueológico antiguo, revelando secretos del pasado.",
    imagen: "https://example.com/imagen6.jpg",
  },
  {
    id: "7",
    titulo: "Lanzamiento de una nueva película",
    descripcion:
      "La esperada película dirigida por el famoso director ha sido lanzada, atrayendo la atención de críticos y fanáticos por igual.",
    imagen: "https://example.com/imagen7.jpg",
  },
  {
    id: "8",
    titulo: "Campaña de concientización sobre el reciclaje",
    descripcion:
      "Se ha lanzado una campaña de concientización sobre la importancia del reciclaje para proteger el medio ambiente y reducir la contaminación.",
    imagen: "https://example.com/imagen8.jpg",
  },
  {
    id: "9",
    titulo: "Entrevista exclusiva con el autor",
    descripcion:
      "Una entrevista exclusiva con el autor del libro más vendido revela detalles fascinantes sobre su proceso de escritura y sus inspiraciones.",
    imagen: "https://example.com/imagen9.jpg",
  },
  {
    id: "10",
    titulo: "Apertura de un nuevo centro de investigación",
    descripcion:
      "Se ha inaugurado un nuevo centro de investigación que se centrará en el desarrollo de tecnologías innovadoras para abordar los desafíos globales.",
    imagen: "https://example.com/imagen10.jpg",
  },
];
const noticiasPorPagina = 4;

const AdminNews = () => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);

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
  const noticiasPaginadas = noticias.slice(startIndex, endIndex);

  const handleDelete = () => {
    console.log("Eliminar noticia");
  };

  const handleEditar = () => {
    console.log("Editar noticia");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Noticias</h1>
      <div className="grid grid-cols-4 p-16 gap-4 ">
        {noticiasPaginadas.map((noticia) => (
          <div key={noticia.id} className="border p-4 flex flex-col">
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
                className="p-2 bg-blue-600 rounded-md"
              >
                Editar
              </button>
              <button
                onClick={handleDelete}
                className="p-2 bg-red-600 rounded-md"
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
