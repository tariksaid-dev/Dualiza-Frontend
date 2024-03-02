// Showcase.jsx
import React from "react";
import ContentSection from "./ContentSection";
import ShowCaseCard from "./ShowCaseCard";
import { useState } from "react";
import { useEffect } from "react";
import { getNews } from "@/services/apiNews";

const Showcase = () => {
  const [news, setNews] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  // console.log(noticia1.map((site) => site));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };

    fetchNews();
  }, []);


  return (
    <ContentSection title="Noticias" id="showcase">
      <div className="max-w-6xl space-y-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, isMobile ? 3 : 9).map((site) => (
            <ShowCaseCard key={site.title} site={site} />
          ))}
        </div>
        <p className="text-right text-sm">
          <a className="text-primary" href="/news" target="_blank" rel="noreferer">
            ...and more &rarr;
          </a>
        </p>
      </div>
    </ContentSection>
  );
};

export default Showcase;
