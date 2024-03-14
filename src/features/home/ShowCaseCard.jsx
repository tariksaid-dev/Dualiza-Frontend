import React from "react";
import { Link } from "react-router-dom";

const ShowCaseCard = ({ site }) => {
  const category = site.category ? site.category : "General";
  return (
    <div className="rounded-lg  max-w-xs md:min-w-96 bg-card border p-2 flex flex-col justify-center items-center hover:border-primary/30">
      <div className="space-y-3 w-[250px] h-96 md:h-full">
        <span data-state="closed">
          <Link to={`news/${site.id}`}>
            <div className="overflow-hidden rounded-md">
              <img alt="React Rendezvous" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" src={site.image} />
            </div>
          </Link>
        </span>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none text-foreground">{site.title}</h3>
          <p className="text-xs text-muted-foreground pt-2"><span className="text-primary/80">Tag: </span>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
