import StaticHeader from "@/components/ui/StaticHeader";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useEditNew } from "./useEditNew";
import { useParams } from "react-router-dom";

const EditNew = () => {
  const news = [
    {
      id: 4,
      created_at: "2024-03-03T18:34:08.347995+00:00",
      title: "Titulo test 3",
      content: "Contenido test 3",
      image: "milei.jpg",
      category: "virgen",
    },
    {
      id: 5,
      created_at: "2024-03-03T18:34:30.769989+00:00",
      title: "Titulo test 4",
      content: "Contenido test 4",
      image: "milei.jpg",
      category: "hlanz",
    },
    {
      id: 18,
      created_at: "2024-03-04T21:00:14.979142+00:00",
      title: "asdf",
      content: "asdf",
      image:
        "https://yfaqdnylyulilftfycrf.supabase.co/storage/v1/object/public/news/0.19511579584583494-20212251522_1.jpg",
      category: null,
    },
    {
      id: 19,
      created_at: "2024-03-04T21:00:41.051573+00:00",
      title: "qqqqqqqqqq",
      content: "qqqqqqqqqqq",
      image:
        "https://yfaqdnylyulilftfycrf.supabase.co/storage/v1/object/public/news/0.03148123246255663-20212251522_1.jpg",
      category: null,
    },
    {
      id: 20,
      created_at: "2024-03-04T21:26:51.906078+00:00",
      title: "test",
      content: "test",
      image:
        "https://yfaqdnylyulilftfycrf.supabase.co/storage/v1/object/public/news/0.019048630215854123-hJGNHPXo_400x400.jpg",
      category: null,
    },
  ];
  const { NewId } = useParams();
  const noticiaConcreta = news.find((noticia) => {
    return noticia.id + "" === NewId;
  });

  const [image, setImage] = useState(noticiaConcreta.image);
  const [title, setTitle] = useState(noticiaConcreta.title);
  const [content, setContent] = useState(noticiaConcreta.content);
  const [category, setCategory] = useState(noticiaConcreta.category);

  const { editNew } = useEditNew();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ image, title, content, category });
    const obj = { image, title, content, category };
    editNew({ id: +NewId, noticia: obj });
    console.log("Noticia Editada correctamente");
    // console.log({ image, title, content, category });
    setImage("");
    setTitle("");
    setContent("");
    setCategory("");
  };

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

        <img
          src={noticiaConcreta.image}
          alt="imagen de la noticia"
          className="w-32"
        />

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
            className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
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
        <Button type="submit">Editar noticia</Button>
      </form>
    </>
  );
};

export default EditNew;
