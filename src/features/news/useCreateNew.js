import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNew as createNewApi } from "@/services/apiNews";

export function useCreateNew() {
  const queryClient = useQueryClient();

  const { mutate: createNew, isLoading: isCreating } = useMutation({
    mutationFn: createNewApi,
    onSuccess: () => {
      console.log("Nueva noticia creada correctamente");
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { isCreating, createNew };
}
