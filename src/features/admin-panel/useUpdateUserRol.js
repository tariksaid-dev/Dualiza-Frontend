import { updateUserRol } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserRol() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({id, rol}) => updateUserRol(id, rol),
    onSuccess: () => {
      console.log("User role successfully pudated");
      // check cache
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
