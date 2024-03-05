import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "@/services/apiAuth";
import { toast } from "sonner";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("Usuario borrado correctamente");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => console.error(err.message),
  });

  return { deleteUser, isDeleteing };
}
