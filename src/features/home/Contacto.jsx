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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ContactCheckBoxes from "./ContactCheckboxes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

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
    <div className="space-y-6 border-border border rounded-lg p-8">
      <h3 className="text-2xl font-medium text-primary text-center">
        Contacto
      </h3>
      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-7">
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Asunto
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Escribe el asunto de tu consulta"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex space-x-2">
                      <span>Email</span>
                      <TooltipProvider delayDuration={400}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                              <Info className="size-[14px] hover:cursor-pointer"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            Deja tu email para que podamos responderte
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ejemplo@email.com"
                        {...field}
                        autoComplete="off"
                      />
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
                    <FormLabel className="mb-2">
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
