import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editNew as editNewApi } from "@/services/apiNews";
import { toast } from "sonner";

export function useEditNew() {
  const queryClient = useQueryClient();

  const { mutate: editNew, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, noticia }) => editNewApi(id, noticia),
    onSuccess: () => {
      toast.success("Noticia editada correctamente");
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { editNew, isEditing };
}
