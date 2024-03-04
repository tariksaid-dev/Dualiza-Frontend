import { updateUserRol } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateUserRol() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, rol }) => updateUserRol(id, rol),
    onSuccess: () => {
      toast.success("Rol actualizado correctamente");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
