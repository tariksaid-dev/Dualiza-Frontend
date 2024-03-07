import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ContentSection from "./ContentSection";
import ShowCaseCard from "./ShowCaseCard";
import Spinner from "@/components/ui/Spinner";

import { useNews } from "../news/useNews";

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
    <ContentSection title="Noticias" id="showcase">
      <div className="max-w-6xl space-y-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && <Spinner />}
          {news &&
            news
              .filter((_, index) => (isMobile ? index < 3 : index < 9))
              .map((n) => <ShowCaseCard key={n.id} site={n} />)}
        </div>
        <p className="text-right text-sm">
          <Link
            to={"/news"}
            className="text-foreground"
            href="/news"
            target="_blank"
            rel="noreferer"
          >
            ...and more &rarr;
          </Link>
        </p>
      </div>
    </ContentSection>
  );
};

export default Showcase;
