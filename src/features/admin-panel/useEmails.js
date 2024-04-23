import { useQuery } from "@tanstack/react-query";
import { getEmails } from "@/services/apiEmail";

export function useEmails() {
  const {
    isLoading,
    data: emails,
    error,
  } = useQuery({
    queryKey: ["emails"],
    queryFn: getEmails,
  });

  return { isLoading, error, emails };
}
