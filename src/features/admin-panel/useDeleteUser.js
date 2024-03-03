import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "@/services/apiAuth";

export function useDeleteUser() {
  // const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      console.log("User role updated");
    },
    onError: (err) => console.error(err.message),
  });

  return { deleteUser, isDeleteing };
}
