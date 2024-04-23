import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmail as createEmailApi } from "@/services/apiEmail";
import { toast } from "sonner";

export function useCreateEmail() {
  const queryClient = useQueryClient();

  const { mutate: createEmail, isLoading: isCreating } = useMutation({
    mutationFn: createEmailApi,
    onSuccess: () => {
      toast.success("Mensaje enviado");
      queryClient.invalidateQueries({ queryKey: ["emails"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { isCreating, createEmail };
}
