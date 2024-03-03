import { useMutation } from "@tanstack/react-query";
import { getAllUsers as getAllUsersApi } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

// export function useGetAllUsers() {
//   const { mutate: getAllUsers, isLoading } = useMutation({
//     mutationFn: getAllUsersApi,
//     onSuccess: () =>
//       console.log("Todos los usuarios se muestran correctamente"),
//     onError: (err) => console.error(err.message),
//   });

//   return { getAllUsers, isLoading };
// }

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
