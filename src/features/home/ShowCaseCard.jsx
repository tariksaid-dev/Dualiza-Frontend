import React from "react";
import { Link } from "react-router-dom";

const ShowCaseCard = ({ site }) => {
  const category = site.category ? site.category : "No category";
  return (
    <div className="rounded-lg  max-w-xs bg-card border p-2 flex flex-col justify-center items-center hover:border-primary/30">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg w-52 md:w-full" src={site.image} alt="" />
        <Link to={`news/${site.id}`}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </Link>
      </div>
      <div className="p-6 flex-grow">
        <h5 className="mb-2 text-base md:text-lg font-medium leading-tight text-foreground text-balance">{site.title}</h5>
      </div>
      <div className="flex justify-center items-center">
        <small className="text-sm text-muted-foreground">{category}</small>
      </div>
    </div>
  );
};

export default ShowCaseCard;
