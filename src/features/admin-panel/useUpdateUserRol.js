import { updateUserRol } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserRol() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserRol,
    onSuccess: ({ user }) => {
      console.log("User role successfully pudated");
      // check cache
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
