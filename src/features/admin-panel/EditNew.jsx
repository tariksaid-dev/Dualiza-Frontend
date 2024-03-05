import StaticHeader from "@/components/ui/StaticHeader";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useEditNew } from "./useEditNew";
import { useNavigate, useParams } from "react-router-dom";
import { useNews } from "../news/useNews";
import Spinner from "@/components/ui/Spinner";

const EditNew = () => {
  const { news, loading } = useNews();
  const { NewId } = useParams();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
    category: "",
  });

  const navigate = useNavigate();

  const { editNew } = useEditNew();

  useEffect(() => {
    if (!loading && news) {
      const noticiaConcreta = news.find((noticia) => noticia.id + "" === NewId);
      if (noticiaConcreta) {
        setFormData({
          image: noticiaConcreta.image,
          title: noticiaConcreta.title,
          content: noticiaConcreta.content,
          category: noticiaConcreta.category || "",
        });
      }
    }
  }, [loading, news, NewId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { ...formData };
    editNew({ id: +NewId, noticia: obj });
    console.log("Noticia Editada correctamente");
    navigate("/admin");
  };

  if (loading || !formData.image) {
    return <Spinner />;
  }

  return (
    <>
      <StaticHeader></StaticHeader>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-md mx-auto mt-20 text-card-foreground bg-card border  p-10 rounded-lg"
      >
        <h1 className="text-2xl text-card-foreground text-center">
          Editar noticia
        </h1>

        <img src={formData.image} alt="imagen de la noticia" className="w-32" />

        <div className="mb-4">
          <label htmlFor="titulo" className="block">
            Título:
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            id="message"
            placeholder="Escribe un titulo..."
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contenido" className="block ">
            Contenido:
          </label>
          <textarea
            className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Escribe el contenido de la noticia..."
            name="bio"
            id=":r3j:-form-item"
            aria-describedby=":r3j:-form-item-description"
            aria-invalid="false"
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            value={formData.content}
          ></textarea>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="categoria" className="block ">
            Categoría:
          </label>
          <select
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none font-normal"
            name="font"
            id=":r6j:-form-item"
            aria-describedby=":r6j:-form-item-description"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            aria-invalid="false"
            value={formData.category}
          >
            <option value={null}>Sin categoria</option>
            <option value="hlanz">Hermenegildo Lanz</option>
            <option value="virgen">Virgen De Gracia</option>
            <option value="albaytar">Albaytar</option>
          </select>
        </div> */}
        <div className="mb-4">
          <label htmlFor="imagen" className="block ">
            Imagen:
          </label>
          <input
            type="file"
            id="imagen"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <Button type="submit">Editar noticia</Button>
      </form>
    </>
  );
};

export default EditNew;
