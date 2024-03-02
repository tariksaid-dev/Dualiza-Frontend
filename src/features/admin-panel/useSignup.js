import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => console.log("Usuario creado correctametne"),
    onError: (err) => console.error(err.message),
  });

  return { signup, isLoading };
}
