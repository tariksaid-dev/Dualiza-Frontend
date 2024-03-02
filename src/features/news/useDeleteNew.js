import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNew as deleteNewApi } from "@/services/apiNews";

export function useDeleteNew() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNew } = useMutation({
    mutationFn: deleteNewApi,
    onSuccess: () => {
      console.log("Noticia eliminada correctamente");
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
    onError: (err) => console.error(err.message),
  });

  return { isDeleting, deleteNew };
}
