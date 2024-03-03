import { updateUserRol } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserRol() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newRole }) => updateUserRol({ id, newRole }),
    onSuccess: () => {
      console.log("User role successfully pudated");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
