import React from 'react'
import { Link } from 'react-router-dom';


const ShowCaseCard = ({ site }) => {
  // console.log(site);
  const shortContent = site.content.substring(0, 200) + "...";
  const category = site.category === null || ' ' ? "Sin categoría" : site.category;
  return (
    <>
      <article className="flex flex-col justify-between items-center gap-4 w-96 p-4 h-full border bg-card hover:bg-input">
        <div className="">
          <figure className="">
            <img loading="lazy" src={site.image} className="max-h-[188px]" width="268" height="188" alt={`Imagen de la notica ${site.title}`} />
          </figure>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground text-balance">
            <Link to={`/news/${site.id}`}>
              {site.title}
            </Link>
          </h2>
          <div className="">
            <span className="text-muted-foreground">{category}
            </span>
          </div>
        </div>
      </article>


    </>
  );
}

export default ShowCaseCard