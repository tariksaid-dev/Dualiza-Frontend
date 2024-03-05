import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "sonner";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Usuario creado correctamente");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { signup, isLoading };
}
