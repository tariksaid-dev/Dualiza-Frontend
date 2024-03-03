import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      console.log("Usuario creado correctametne");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { signup, isLoading };
}
