import React, { useEffect, useState } from "react";
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
import Spinner from "@/components/ui/Spinner";
import { useDeleteUser } from "./useDeleteUser";
import { useGetAllUsers } from "./useGetAllUsers";
import { useUpdateUserRol } from "./useUpdateUserRol";

export function DataTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [users, setUsers] = useState([]);

  const filterUser = (email) => {
    const filtered = users.filter((user) => user.email === email);
    return filtered[0].id;
  };

  const columns = [
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
        <div className="capitalize">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "role",
      header: () => <div className="text-right">Rol</div>,
      cell: ({ row }) => (
        <div className="text-right font-medium">{row.getValue("role")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const email = row.getValue("email");
        const id = filterUser(email);

        const { deleteUser } = useDeleteUser(); 
        const { updateUserRol } = useUpdateUserRol();

        let rol = row.getValue("role");

        const onSave = async () => {
          updateUserRol({ rol });
          console.log("Rol actualizado");
        }; 

        const onDelete = () => {
          deleteUser({ id });
          console.log("Usuario eliminado");
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
                <DropdownMenuItem onClick={onDelete}>Eliminar Usuario</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar Usuario</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="rol" className="text-right">
                    Rol
                  </Label>
                  <Select onValueChange={(e) => (rol = e)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={rol} />
                    </SelectTrigger>
                    <SelectContent defaultValue={rol}>
                      <SelectGroup>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="poster">Poster</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={() => onSave()}>
                  Guardar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      },
    },
  ];

  const table = useReactTable({
    data:users,
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

  const { getAllUsers } = useGetAllUsers();
  useEffect(() => {
    const fetchData = () => {
      const usersFetch = getAllUsers();
      setUsers(usersFetch);
    };
    fetchData();
  }, []); 
  
  return (
    users ? (<div className="w-full ">
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
          {users?.length ? (
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
  </div>) : <Spinner />, 
  );
}
