import { useMutation } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "@/services/apiAuth";

export function useDeleteUser() {
  const { mutate: deleteUser, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      console.log("User successfully deleted");
    },
    onError: (err) => console.error(err.message),
  });

  return { deleteUser, isDeleteing };
}
