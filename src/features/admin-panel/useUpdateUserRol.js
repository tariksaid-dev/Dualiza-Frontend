import { updateUserRol } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserRol() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newRole }) => updateUser({ id, newRole }),
    onSuccess: () => {
      console.log("User role successfully updated");
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
