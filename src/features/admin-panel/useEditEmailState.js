import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editEmailState as editEmailStateApi } from "@/services/apiEmail";
import { toast } from "sonner";

export function useEditEmailState() {
  const queryClient = useQueryClient();

  const { mutate: editEmailState, isLoading: isEditingEmailState } =
    useMutation({
      mutationFn: ({ id, state }) => editEmailStateApi(id, state),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["emails"] });
      },
      onError: (err) => {
        toast.error("Error al cambiar el estado del mensaje");
        console.error(err.message);
      },
    });

  return { editEmailState, isEditingEmailState };
}
