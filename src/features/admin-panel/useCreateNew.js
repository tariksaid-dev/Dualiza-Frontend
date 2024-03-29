import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNew as createNewApi } from "@/services/apiNews";
import { toast } from "sonner";

export function useCreateNew() {
  const queryClient = useQueryClient();

  const { mutate: createNew, isLoading: isCreating } = useMutation({
    mutationFn: createNewApi,
    onSuccess: () => {
      toast.success("Noticia correcta");
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { isCreating, createNew };
}
