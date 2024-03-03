import { getAllUsers as getAllUsersApi } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
  });

  return { isLoading, users, error };
}
