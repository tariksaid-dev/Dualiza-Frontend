import { useQuery } from "@tanstack/react-query";
import { getNews } from "@/services/apiNews";

export function useNews() {
  const {
    isLoading,
    data: news,
    error,
  } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return { isLoading, error, news };
}
