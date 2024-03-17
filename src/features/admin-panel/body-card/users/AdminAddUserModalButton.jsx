import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useSignup } from "../../useSignup";

export function AdminAddUserModalButton() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false);

  const { signup, isLoading } = useSignup();

  const handleGuardar = () => {
    signup({ nombre, role, email, password });
    try {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Añadir usuario</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir Usuario</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Rol
            </Label>
            <Select onValueChange={(e) => setRole(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Elige un rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="poster">Poster</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button size="lg" onClick={handleGuardar}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
