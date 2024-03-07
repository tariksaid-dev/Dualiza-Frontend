// Showcase.jsx
import React from "react";
import ContentSection from "./ContentSection";
import ShowCaseCard from "./ShowCaseCard";
import { useState } from "react";
import { useEffect } from "react";
import { useNews } from "../news/useNews";
import Spinner from "@/components/ui/Spinner";
import { Link } from "react-router-dom";

const Showcase = () => {

  const { isLoading, error, news } = useNews();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <ContentSection title="Noticias" id="showcase">
      <div className="max-w-6xl space-y-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {
            isLoading && <Spinner />
          }
          {
            news && news.filter((n, index) => isMobile ? index < 3 : index < 9).map((n) => (
              <div className="flex justify-center items-center">
              <ShowCaseCard key={n.id} site={n} />
            </div>
          ))
          }
          
        </div>
        <p className="text-right text-sm">
          <Link to={'/news'} className="text-foreground" href="/news" target="_blank" rel="noreferer">
            ...and more &rarr;
          </Link>
        </p>
      </div>
    </ContentSection>
  );
};

export default Showcase;
