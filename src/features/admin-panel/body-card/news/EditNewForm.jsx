import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import React from "react";
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
import AdminPanelCardEditCreateFooter from "./AdminPanelCardEditCreateFooter";
import { useEditNew } from "../../useEditNew";

function EditNewForm({ originalValue }) {
  const { editNew, isEditing } = useEditNew();

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
      title: originalValue?.title,
      content: originalValue?.content,
      image: undefined,
    },
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(data) {
    editNew({
      id: originalValue.id,
      noticia: {...data, image: data.image[0]},
    });
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
                    <Input
                      type="file"
                      {...form.register("image")}
                    />
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
          <AdminPanelCardEditCreateFooter
            onModalConfirmation={form.handleSubmit(onSubmit)}
          />
        </form>
      </Form>
    </div>
  );
}

export default EditNewForm;
