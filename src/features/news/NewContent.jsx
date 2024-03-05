import { useNews } from "./useNews";
import { supabaseUrl } from "@/services/supabase";
import UniqueSideNews from "./UniqueSideNews";
import Spinner from "@/components/ui/Spinner";

const NewContent = ({ NewId }) => {
  const { isLoading, error, news } = useNews();

  if (isLoading) return <Spinner></Spinner>;

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const sideNews = sortedNews.filter((item) => item.id !== parseInt(NewId)).slice(0, 3);
  
  const filteredNews = sortedNews.find((item) => item.id === parseInt(NewId))

  const { id, created_at, title, content, image } = filteredNews;

  const contentParagraphs = content.split("\n").map((line, index) => (
    <p
      className="leading-7 text-xl font-semibold text-gray-700 dark:text-gray-300"
      key={index}
    >
      {line}
    </p>
  ));

  return (
    <div className="p-20 px-4 lg:px-24">
      <div className="grid gap-6 xl:grid-cols-[900px_1fr] xl:gap-8">
        <div className="grid gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
              {title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Creado el {created_at.split("T")[0]}
            </p>
          </div>
          <img
            alt="Image"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height={375}
            src={image}
            width={900}
          />
          {contentParagraphs}
        </div>

        <div className="lg:space-y-6 lg:my-28">
          {sideNews.map((item) => (
            <UniqueSideNews key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent;
