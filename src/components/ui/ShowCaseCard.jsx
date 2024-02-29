import React from 'react'

const ShowCaseCard = ({site}) => {
    console.log(site.image);
    return (
        <a className="group aspect-video hover:!text-default" href={site.url}>
          <figure className="relative h-full w-full overflow-hidden">
            <img
              className="h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 group-focus:scale-110 group-focus:opacity-20"
              src={site.image}
              widths={100}
              alt={`A screenshot of ${site.url}`}
            />
            <figcaption className="absolute inset-0">
              <div className="flex h-full flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
                <h3 className="text-center font-extrabold uppercase text-xl">
                  {site.title}
                </h3>
                <p className="border border-current px-4 py-2">{site.title}</p>
              </div>
            </figcaption>
          </figure>
        </a>
      );
}

export default ShowCaseCard