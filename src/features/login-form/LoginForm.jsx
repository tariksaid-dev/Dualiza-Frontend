import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

import StaticHeader from "@/components/ui/StaticHeader";
import LogoCompleto from "@/components/icons/LogoCompleto";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const sections = [
    { title: "Home", url: "/" },
    { title: "Noticias", url: "/news" },
  ];

  const errors = {
    required: "Este campo no puede estar vacío",
    minPasswordLength: "La contraseña es muy corta",
  };

  const formSchema = z.object({
    email: z
      .string()
      .email("Introduce un email válido")
      .min(1, { message: errors.required }),
    password: z.string().min(4, { message: errors.minPasswordLength }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  return (
    <>
      <StaticHeader sections={sections} />
      <section className="my-auto">
        <div className="h-[80vh] rounded-[0.5rem] border border-border bg-background shadow-md md:shadow-xl w-full grid grid-cols-2 lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="hidden sm:p-10 lg:flex justify-center items-center dark:border-r bg-zinc-900 inset-0">
            <LogoCompleto width="400" height="400" />
          </div>

          <div className="relative flex flex-col h-full justify-center max-w-[70%] mx-auto space-y-6 sm:w-[350px] items-center">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Introduce tu email y contraseña para acceder a tu cuenta
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel>Email</FormLabel>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full relative">
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Introduzca su contraseña"
                            {...field}
                            autoComplete="off"
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 h-full top-2 px-3 hover:bg-transparent m-0"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            <>
                              {showPassword ? (
                                <EyeIcon className="size-4" />
                              ) : (
                                <EyeOffIcon className="size-4" />
                              )}
                            </>
                          </Button>
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="max-w-[50%] w-full"
                  disabled={isLoading}
                >
                  Login
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
