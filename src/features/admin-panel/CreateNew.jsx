import StaticHeader from "@/components/ui/StaticHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useCreateNew } from "../news/useCreateNew";
import { useNavigate } from "react-router-dom";

const CreateNew = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(null);

  const { createNew } = useCreateNew();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imagen = image.name;

    createNew({ image, title, content, category });
    console.log("Noticia Añadida correctamente");

    setImage("");
    setTitle("");
    setContent("");
    setCategory("");

    navigate("/admin");
  };

  return (
    <>
      <StaticHeader></StaticHeader>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-20 text-card-foreground font-bold bg-card border p-10 rounded-lg shadow-2xl shadow-primary "
      >
        <h1 className="text-2xl text-card-foreground text-center font-bold mb-8">
          Crear una nueva noticia
        </h1>
        <div className="mb-4">
          <label htmlFor="titulo" className="block">
            Título:
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            id="message"
            placeholder="Escribe un titulo..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contenido" className="block ">
            Contenido:
          </label>
          <textarea
            className="flex min-h-[240px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Escribe el contenido de la noticia..."
            name="bio"
            id=":r3j:-form-item"
            aria-describedby=":r3j:-form-item-description"
            aria-invalid="false"
            onChange={(e) => setContent(e.target.value)}
            value={content}
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
            onChange={(e) => setCategory(e.target.value)}
            aria-invalid="false"
            value={category}
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
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <Button type="submit">Crear noticia</Button>
      </form>
    </>
  );
};

export default CreateNew;
