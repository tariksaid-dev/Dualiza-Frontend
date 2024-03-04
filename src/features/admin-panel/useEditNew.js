import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editNew as editNewApi } from "@/services/apiNews";
import { Toaster } from "@/components/ui/sonner";

export function useEditNew() {
  const queryClient = useQueryClient();

  const { mutate: editNew, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, noticia }) => editNewApi(id, noticia),
    onSuccess: () => {
      <Toaster>Success</Toaster>;
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err) => {
      console.error(err.message);
      <Toaster>Invalid</Toaster>;
    },
  });

  return { editNew, isEditing };
}
