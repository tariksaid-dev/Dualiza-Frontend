import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { useCreateNew } from "../../useCreateNew";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/components/ui/Spinner";

import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import AdminPanelCardEditCreateFooter from "./AdminPanelCardEditCreateFooter";

function CreateNewForm() {
  const { createNew, isCreating } = useCreateNew();

  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "El título debe tener al menos 5 carácteres" }),
    content: z.string().min(2, {
      message: "La noticia debe tener al menos 20 carácteres",
    }),
    image: z
      .any()
      .refine((file) => file[0]?.size <= 5000000, `Max file size is 5MB.`),
  });

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      image: undefined,
    },
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(data) {
    createNew({ ...data, image: data.image[0] });
  }

  if (isCreating) return <Spinner />;

  return (
    <div className="flex flex-col space-y-6 h-full max-h-full w-full">
      <header className="h-[8%] flex justify-between items-center border-b">
        <span className="px-4 font-bold text-xl inline-flex items-center text-primary">
          Crear noticia
          <Pencil className="ml-3" />
        </span>
      </header>

      <Form {...form}>
        <form className="flex flex-col items-center flex-1 w-full h-full space-y-6">
          <div className="flex justify-center items-center w-full space-x-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-4 w-4/5">
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="off"
                      className="selection:bg-primary/20"
                      placeholder="Cabecera de tu artículo"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen</FormLabel>
                  <FormControl>
                    <Input type="file" {...form.register("image")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-4 w-full h-full">
                <FormLabel>Contenido</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="h-full min-w-full resize-none selection:bg-primary/20 scrollbar-thin scrollbar-track-bg scrollbar-thumb-muted scrollbar-thumb-rounded-md"
                    placeholder="Escribe/pega aquí el contenido de tu nueva noticia"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <AdminPanelCardEditCreateFooter
            onModalConfirmation={form.handleSubmit(onSubmit)}
            mode="create"
          />
        </form>
      </Form>
    </div>
  );
}

export default CreateNewForm;
