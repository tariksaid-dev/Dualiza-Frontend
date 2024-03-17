import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Spinner from "@/components/ui/Spinner";
import AdminPanelCardEditModeFooter from "./AdminPanelCardEditModeFooter";
import { useEditNew } from "../../useEditNew";

function EditNewForm({ originalValue }) {
  const { editNew, isEditing } = useEditNew();

  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);

  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "El título debe tener al menos 5 carácteres" }),
    content: z.string().min(20, {
      message: "La noticia debe tener al menos 20 carácteres",
    }),
    image: z.custom().refine((files) => {
      console.log(files);
      return Array.from(files ?? []).length !== 0;
    }, "Se necesita una imagen"),
    // .refine((files) => {
    //   return Array.from(files ?? []).every(
    //     (file) => file.size / (1024 * 1024) <= 10
    //   );
    // }, "El tamaño máximo para los archivos es de 10MB")
    // .refine((files) => {
    //   return Array.from(files ?? []).every((file) =>
    //     ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
    //   );
    // }, "La extensión del archivo no está soportada"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: originalValue?.title,
      content: originalValue?.content,
    },
  });

  function onSubmit(data) {
    editNew({ id: originalValue.id, noticia: data });
  }

  if (isEditing) return <Spinner />;

  return (
    <div className="flex flex-col space-y-6 h-full max-h-full">
      <header className="h-[8%] flex justify-between items-center border-b">
        <span className="px-4 font-bold text-xl inline-flex items-center text-primary">
          Editar noticia
          <Pencil className="ml-3" />
        </span>
      </header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center flex-1 w-full h-full space-y-6"
        >
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
                    <Input {...field} type="file"></Input>
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
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <AdminPanelCardEditModeFooter
            onModalConfirmation={form.handleSubmit(onSubmit)}
          />
        </form>
      </Form>
    </div>
  );
}

export default EditNewForm;
