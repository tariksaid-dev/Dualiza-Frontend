import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import SideNews from "./SideNews";
import NewsSection from "./NewsSection";
import { useNews } from "./useNews";
import Spinner from "@/components/ui/Spinner";
import CenterNews from "./CenterNews";


const NewsContainer = () => {

  const newsData2 = [
    {
      id: 1,
      title: "Alumnos del IES ALbaytar colaboran para evaluar la eficiencias energética en centros",
      created_at: "2022-10-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 2,
      title: "Exploring the Impact of Quantum Computing on Modern Technology",
      created_at: "2022-10-02",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 3,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-03",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 4,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-04",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 5,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-05",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 6,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 7,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 8,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 9,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 10,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 11,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
    {
      id: 12,
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      created_at: "2022-10-06",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "milei.jpg",
    },
  ];

  
  const { isLoading, error, news } = useNews();
  console.log(news);
  
  if(isLoading) return <Spinner></Spinner>
  

  const sortedNews = [...newsData2].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const mainNew = sortedNews[0] ? [sortedNews[0]] : [];
  const sideNews = sortedNews.slice(1, 3);
  const otherNews = sortedNews.slice(3, 6);

  const hlanzNews = sortedNews.filter(item => item.categoria === "HLANZ");
  const virgenNews = sortedNews.filter(item => item.categoria === "VIRGENG");
  const albaytarNews = sortedNews.filter(item => item.categoria === "ALBAYTAR");

  return (
    
    <section className="m-auto h-full w-5/6 py-6 md:py-12 xl:py-16">
      <h1 className="text-center text-5xl font-bold p-4 mb-10">NOTICIAS DUALIZA</h1>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 justify-center">

          <div className="grid sm:row-span-2 md:col-span-2 gap-4">
            {mainNew.map((item, index) => (
              <MainNews key={index} created_at={item.created_at.split("T")[0]} title={item.title} imageUrl={item.image} />
            ))}
          </div>
          
          <div className="lg:col-span-1 flex md:col-span-2 lg:flex-col gap-2">
            {sideNews.map((item, index) => (
              <SideNews key={index} created_at={item.created_at.split("T")[0]} title={item.title} imageUrl={item.image} />
            ))}
          </div>
        </div>
        <div className="gap-[1.2rem] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mb-10">
          {otherNews.map((item, index) => (
            <NewsSection key={index} content={item.content} created_at={item.created_at.split("T")[0]} title={item.title} imageUrl={item.image} />
          ))}
        </div>
        
        <div className="flex flex-col gap-10">

          <CenterNews centro={'IES Hermenegildo Lanz'} news={sortedNews}/>

          <CenterNews centro={'IES Virgen de Gracia'} news={sortedNews}/>

          <CenterNews centro={'IES Albaytar'} news={sortedNews}/>

        </div>
      </div>
    </section>
  );
};

export default NewsContainer;
