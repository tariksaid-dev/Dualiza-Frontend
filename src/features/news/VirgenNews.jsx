import { Separator } from "@radix-ui/react-dropdown-menu";
import NewsSection from "./NewsSection";

const VirgenNews = ({ news }) => {
  return (
    <div>
      <h2 className="text-4xl mb-4">IES Virgen de Gracia</h2>
      <Separator className=" rounded bg-primary h-[2px] mb-4" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item, index) => (
          <NewsSection
            key={index}
            content={item.content}
            created_at={item.created_at.split("T")[0]}
            title={item.title}
            imageUrl={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VirgenNews;
