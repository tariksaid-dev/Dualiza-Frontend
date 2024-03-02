import React, { useState } from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogDemo } from "./AdminAddUserModal";

const data = [
  {
    id: "1",
    nombre: "Juan",
    email: "juan@example.com",
    rol: "admin",
  },
  {
    id: "2",
    nombre: "María",
    email: "maria@example.com",
    rol: "usuario",
  },
  {
    id: "3",
    nombre: "Pedro",
    email: "pedro@example.com",
    rol: "usuario",
  },
];

export const columns = [
  {
    accessorKey: "nombre",
    // Aqui en header es donde cambia el nombre de la columna
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("nombre")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "rol",
    header: () => <div className="text-right">Rol</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("rol")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const obj = {
        nombre: row.getValue("nombre"),
        email: row.getValue("email"),
        rol: row.getValue("rol"),
      };

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DialogTrigger asChild>
                <DropdownMenuItem>Editar Usuario</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem>Eliminar Usuario</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar Usuario</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  value={obj.nombre}
                  onChange={(e) => (obj.nombre = e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Email
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  value={obj.email}
                  onChange={(e) => (obj.email = e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rol" className="text-right">
                  Rol
                </Label>
                <Select>
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
              <Button type="button" onClick={() => console.log(obj)}>
                Guardar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center">Usuarios</h1>
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Buscar por nombre..."
          value={table.getColumn("nombre")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("nombre")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DialogDemo></DialogDemo>
      </div>
      <div className="rounded-md border mb-10">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
