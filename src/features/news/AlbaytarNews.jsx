import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NewsSection from "./NewsSection";

const HlanzNews = ({ news }) => {
  return (
    <Carousel className="w-full max-w-screen-md mx-auto">
      <CarouselContent>
        {news.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center">
            <div className="p-1 max-w-xl">
              <NewsSection
                created_at={item.created_at}
                title={item.title}
                imageUrl={item.image}
                content={item.content}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HlanzNews;
