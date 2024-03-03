import { Separator } from "@radix-ui/react-dropdown-menu";
import NewsSection from "./NewsSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CenterNews = ({ news, centro }) => {
  return (
    <>
      <h2 className="text-4xl mb-4">{centro}</h2>
      <Separator className=" rounded bg-primary h-[2px] mb-4" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //   }),
        // ]}
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <div className="p-1 max-w-xl">
                <NewsSection
                  id={item.id}
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
    </>
  );
};

export default CenterNews;
