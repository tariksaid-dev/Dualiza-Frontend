// NewsContainer.js
import React, { useEffect, useState } from "react";
import MainNews from "./MainNews";
import SideNews from "./SideNews";
import NewsSection from "./NewsSection";
import { getNews } from "@/services/apiNews";





const NewsContainer = () => {

  const newsData2 = [
    // Datos para MainNews y SideNews
    {
      category: "Breaking News",
      title: "Alumnos del IES ALbaytar colaboran para evaluar la eficiencias energética en centros",
      imageUrl: "/images/reunion-hlanz.webp",
    },
    {
      category: "Technology",
      title: "Exploring the Impact of Quantum Computing on Modern Technology",
      imageUrl: "/images/reunion-hlanz.webp",
    },
    // Más datos para NewsSection
    {
      category: "Health",
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      imageUrl: "/images/reunion-hlanz.webp",
    },
    {
      category: "Health",
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      imageUrl: "/images/reunion-hlanz.webp",
    },
    {
      category: "Health",
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      imageUrl: "/images/reunion-hlanz.webp",
    },
    {
      category: "Health",
      title: "The Role of AI in Personalized Medicine: Revolutionizing Healthcare",
      imageUrl: "/images/reunion-hlanz.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Agrega más datos de noticias aquí según sea necesarioºº
  ];

  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    }
    
    fetchNews();
    
  }, [])
  
  
  const mainNews = news.filter((item, index) => index === 0);
  const sideNews = news.filter((item, index) => index > 0 && index < 3);
  const otherNews = news.filter((item, index) => index >= 3);

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
              <SideNews key={index} title={item.title} imageUrl={item.image} />
            ))}
          </div>
        </div>
        <NewsSection news={otherNews} />
      </div>
    </section>
  );
};

export default NewsContainer;
