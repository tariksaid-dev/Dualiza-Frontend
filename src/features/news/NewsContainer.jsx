import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import SideNews from "./SideNews";
import NewsSection from "./NewsSection";
import { useNews } from "./useNews";
import Spinner from "@/components/ui/Spinner";

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
  
  if(isLoading) return <Spinner></Spinner>
  

  const sortedNews = [...newsData2].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const mainNews = sortedNews[0] ? [sortedNews[0]] : [];
  const sideNews = sortedNews.slice(1, 3);
  const otherNews = sortedNews.slice(3);

  return (
    
    <section className=" m-auto w-5/6 py-6 md:py-12 xl:py-16">
      <h1 className="text-center text-5xl font-bold p-4 mb-10">NOTICIAS DUALIZA</h1>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">

          <div className="grid sm:row-span-2 md:col-span-2 gap-4">
            {mainNews.map((item, index) => (
              <MainNews key={index} created_at={item.created_at.split("T")[0]} title={item.title} imageUrl={item.image} />
            ))}
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-2">
            {sideNews.map((item, index) => (
              <SideNews key={index} created_at={item.created_at.split("T")[0]} title={item.title} imageUrl={item.image} />
            ))}
          </div>
        </div>
        <NewsSection news={otherNews} />
      </div>
    </section>
  );
};

export default NewsContainer;
