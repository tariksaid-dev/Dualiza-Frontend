import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactCheckBoxes from "./ContactCheckboxes";

const options = [
  {
    id: "1",
    name: "IES HLANZ",
    person: "María Dolores Sáenz Pajares",
    email: "msaepaj412@g.educaand.es",
  },
  {
    id: "2",
    name: "IES AL-BAYTAR",
    person: "David Racero",
    email: "dracpat976@g.educaand.es",
  },
  {
    id: "3",
    name: "CIFP VIRGEN DE GRACIA",
    person: "Raúl Morales Ocaña",
    email: "rmo14@educastillalamancha.es",
  },
];

const Contacto = () => {
  function onSubmit(data) {
    console.log(data);
  }

  const formSchema = z.object({
    asunto: z.string().min(2, { message: "Al menos 2 carácteres de asunto" }),
    email: z.string().optional(),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Necesitas elegir al menos uno",
    }),
    content: z
      .string()
      .min(1, {
        message: "Debes escribir algo antes de enviar",
      })
      .max(200, {
        message: "El mensaje no puede ser más largo de 200 carácteres",
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      asunto: "",
      email: "",
      items: [],
      content: "",
    },
  });

  return (
    <div className="space-y-6 border-border border rounded-lg py-4 px-8">
      <h3 className="text-lg font-medium text-primary">Contacto</h3>
      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col items-center"
        >
          <div className="flex space-x-6">
            <div className="flex flex-col space-y-6">
              <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Asunto
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Escribe el asunto de tu consulta" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="ejemplo@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem className="flex flex-col space-y-3">
                    <FormLabel className="mb-1">
                      Selecciona destinatario:
                    </FormLabel>
                    <ContactCheckBoxes options={options} form={form} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col space-y-4 justify-between items-end">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2 h-full">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Mensaje
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe cualquier duda o comentario que tengas"
                        className="resize-none h-full min-w-[400px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Enviar</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contacto;
