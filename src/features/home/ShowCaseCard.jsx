import React from 'react'
import { Link } from 'react-router-dom';


const ShowCaseCard = ({ site }) => {
  console.log(site);
  const shortContent = site.content.substring(0, 200) + "...";
  const category = site.category === null || ' ' ? "Sin categoría" : site.category;
  return (
    <article className=" flex flex-col justify-center items-center gap-4 border-r max-w-sm w-full ">
      <div className="">
        <figure className="">
          <img loading="lazy" src={site.image} className="d" width="268" height="188" alt={`Imagen de la notica ${site.title}`} />
        </figure>
      </div>
      <div className=" p-4 flex flex-col justify-center items-center ">
        <h2 className="text-foreground">
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
  );
}

export default ShowCaseCard