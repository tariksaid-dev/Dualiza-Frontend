import React, { useState, useEffect } from "react";

import { useNews } from "../news/useNews";

import ContentSection from "./ContentSection";
import ShowCaseCard from "./ShowCaseCard";
import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import "@fontsource/inter";

const Showcase = () => {
  const { isLoading, news } = useNews();
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
    <ContentSection
      title="Noticias"
      id="showcase"
      subtitle={
        <p className="md:text-2xl lg:text-3xl" style={{ fontFamily: "Inter" }}>
          ¡No te pierdas lo último de la actualidad{" "}
          <span className="text-primary">ecológica</span> y{" "}
          <span className="text-primary">medioambiental</span>!
        </p>
      }
    >
      <div className="max-w-6xl flex flex-col gap-2 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4">
          {isLoading && <Spinner />}
          {news &&
            news
              .filter((_, index) => (isMobile ? index < 2 : index < 3))
              .map((n) => <ShowCaseCard key={n.id} site={n} />)}
        </div>
        <div className="flex flex-1 justify-end">
          <Button  variant="default" size="sm">
            Ver más noticias
          </Button>
        </div>
      </div>
    </ContentSection>
  );
};

export default Showcase;
