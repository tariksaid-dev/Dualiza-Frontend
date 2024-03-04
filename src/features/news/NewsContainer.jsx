import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import SideNews from "./SideNews";
import NewsSection from "./NewsSection";
import { useNews } from "./useNews";
import Spinner from "@/components/ui/Spinner";
import CenterNews from "./CenterNews";
import StaticHeader from "@/components/ui/StaticHeader";
import BombillaLibro from "@/components/icons/BombillaLibro";
import LetrasBombilla from "@/components/icons/LetrasBombilla";


const NewsContainer = () => {

  const { isLoading, error, news } = useNews();
  
  if(isLoading) return <Spinner></Spinner>


  const sortedNews = [...news].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const mainNew = sortedNews[0] ? [sortedNews[0]] : [];
  const sideNews = sortedNews.slice(1, 3);
  const otherNews = sortedNews.slice(3, 6);

  const hlanzNews = sortedNews.filter(item => item.category === "hlanz");
  const virgenNews = sortedNews.filter(item => item.category === "virgen");
  const albaytarNews = sortedNews.filter(item => item.category === "albaytar");

  return (
    <>
    <StaticHeader/>
    <section className="m-auto h-full w-5/6 py-6 md:py-12 xl:py-16">
      <div className="flex justify-center">
        <BombillaLibro height={80} width={80} />
        <h1 className="text-center text-5xl font-bold p-4 mb-10">NOTICIAS DUALIZA</h1>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 justify-center">
          <div className="grid sm:row-span-2 md:col-span-2 gap-4">
            {mainNew.map((item) => (
              <MainNews
                key={item.id}
                id={item.id}
                created_at={item.created_at.split("T")[0]}
                title={item.title}
                imageUrl={item.image}
              />
            ))}
          </div>

          <div className="lg:col-span-1 flex md:col-span-2 lg:flex-col gap-2">
            {sideNews.map((item) => (
              <SideNews
                key={item.id}
                id={item.id}
                created_at={item.created_at.split("T")[0]}
                title={item.title}
                imageUrl={item.image}
              />
            ))}
          </div>
        </div>
        <div className="gap-[1.2rem] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mb-10">
          {otherNews.map((item) => (
            <NewsSection
              key={item.id}
              id={item.id}
              content={item.content}
              created_at={item.created_at.split("T")[0]}
              title={item.title}
              imageUrl={item.image}
            />
          ))}
        </div>
        
        <div className="flex flex-col gap-12">

          <CenterNews centro={'IES Hermenegildo Lanz'} news={hlanzNews}/>

          <CenterNews centro={'IES Virgen de Gracia'} news={virgenNews}/>

          <CenterNews centro={'IES Albaytar'} news={albaytarNews}/>

        </div>
      </div>
    </section>
    </>

  );
};

export default NewsContainer;
